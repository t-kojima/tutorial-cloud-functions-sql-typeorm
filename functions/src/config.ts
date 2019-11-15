import {
  ConnectionOptions,
  Connection,
  createConnection,
  getConnection
} from 'typeorm'
import 'reflect-metadata'

// Will be true on deployed functions
export const prod = process.env.NODE_ENV === 'production'

export const config: ConnectionOptions = {
  name: 'fun',
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root', // review
  password: 'mysql', // review
  database: 'development',
  synchronize: true,
  logging: false,
  entities: ['lib/entity/**/*.js'],

  // Production Mode
  ...(prod && {
    database: 'production',
    logging: false,
    // synchronize: false,
    extra: {
      socketPath: '/cloudsql/cloud-functions-sql-typeorm:us-central1:cloud-functions-sql-typeorm' // change
    }
  })
}

export const connect = async () => {

    let connection: Connection;

    try {
        connection = getConnection(config.name)
        console.log(connection)
    } catch(err) {
        connection = await createConnection(config);
    }

    return connection;
}

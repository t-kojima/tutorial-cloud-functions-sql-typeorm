# tutorial-cloud-functions-sql-typeorm

https://fireship.io/lessons/sql-firebase-typeorm/

```sh
firebase init function
# typescriptを選択
```


firebase project をコンソールから作成
```sh
firebase use --add cloud-functions-sql-typeorm
```

```
curl -o cloud_sql_proxy https://dl.google.com/cloudsql/cloud_sql_proxy.darwin.amd64
chmod +x cloud_sql_proxy
```

```
./cloud_sql_proxy -instances=cloud-functions-sql-typeorm:us-central1:cloud-functions-sql-typeorm=tcp:3306
2019/11/15 08:57:34 current FDs rlimit set to 12800, wanted limit is 8500. Nothing to do here.
2019/11/15 08:57:39 errors parsing config:
        googleapi: Error 403: The client is not authorized to make this request., notAuthorized
```

`gcloud auth login`が必要だった

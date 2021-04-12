#!/bin/bash
docker stop albacross
docker rm albacross

docker run --name albacross \
-p 3306:3306  \
-e MYSQL_PASSWORD=albacross \
-e MYSQL_ROOT_PASSWORD=root \
-e MYSQL_DATABASE=albacross \
-e MYSQL_USER=albacross \
-v /home/greg/Downloads/microservice-typescript-task-master/mysql/setup.sql:/docker-entrypoint-initdb.d/setup.sql \
-d mysql:8.0.15

 sleep 11
# gunzip < dump_pgdb.gz | docker exec -i postgres-healthcheck psql -U user -d database

DATABASE_URI=mysql://albacross:albacross@localhost:3306/albacross yarn sequelize db:migrate
DATABASE_URI=mysql://albacross:albacross@localhost:3306/albacross yarn sequelize db:seed:all
# cd $OLDPWD
sleep 1
DATABASE_URI=mysql://albacross:albacross@localhost:3306/albacross yarn dev 
# clear


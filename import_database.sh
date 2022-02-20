#!/bin/bash

dbname=$1

if [[ -z "$1" ]]; then
    echo -n "Enter database name (./dump/somename.sql): "  
    read dbname 
fi

# load .env
set -o allexport; . ./.env; set +o allexport

docker exec -i $MYSQL_HOST mysql -u $MYSQL_USER --password=$MYSQL_ROOT_PASSWORD -h127.0.0.1 $MYSQL_DB_NAME< $dbname

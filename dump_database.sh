#!/bin/bash

# load .env
set -o allexport; . ./.env; set +o allexport

# setup
TIMESTAMP=$(date +%Y-%m-%d__%H.%M)
BACKUP_DIR="./dumps"

docker exec $MYSQL_HOST /usr/bin/mysqldump -u $MYSQL_USER --password=$MYSQL_ROOT_PASSWORD --host=$MYSQL_HOST $MYSQL_DB_NAME> $BACKUP_DIR/dump_$TIMESTAMP.sql
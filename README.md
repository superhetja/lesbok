## About The Project

Eitthvað um lesbókina!
<!-- GETTING STARTED -->
## Getting Started

You can setup this project locally

### Prerequisites

* You will need to have Docker Desktop installed and running on your computer


### Installation

1. Make sure you have docker up and running.
2. Set up .env file and app.env file in the root of the project
3. Inside this repository root run
   ```sh
   docker-compose up -d
   ```

### Teardown

   ```sh
   docker-compose down
   ```

### Developement

You can access the backend, frontend and database manager through these addresses

#### Database Manager
- <localhost:8080>
- Host: $MYSQL_HOST
- Username: $MYSQL_USER
- Database: $MYSQL_DB_NAME
- Password: $MYSQL_ROOT_PASSWORD

#### Backend
- <localhost:3000>

#### Frontend
Dev tools are at
- <\<HOST LOCAL IP\>>:19002

Metro is at:
- exp://<\<HOST LOCAL IP\>>:19000

#### Extra tools

dump_database.sh
- Dumps the database to ./dumps folder with default name and timestamp
   ```sh
   ./dump_database.sh
   ```

import_database.sh
- Imports sql file to the database. Takes 1 argument $database_path
   ```sh
   ./import_database.sh ./dumps/dump_2022-02-20__14.03.sql
   ```


## Notes

### Initilizing with default database

<https://stackoverflow.com/questions/65585749/how-to-import-a-mysql-dump-file-into-a-docker-mysql-container>
# Lesbók

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

You should have following VScode extension
- eslint 
- Prettier - Code formatter
- EditorConfig for VS Code
- JavaScript and TypeScript Nightly

Good to have
- Paul's TypeScript Toolkit


#### Eslint
First we need to run npm install inside all directories 
``` sh
npm install 
cd api 
npm install
cd ../app
npm install
```

if you have installed all the vscode extensions then all should be well!

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
---

## Notes

### Initilizing with default database

<https://stackoverflow.com/questions/65585749/how-to-import-a-mysql-dump-file-into-a-docker-mysql-container>

### React Typescript Cheatsheet

https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

## Tests
- We test with Jest
- Each component should have a test file inside same folder as index.tsx. 
- Tests are named index.test.tsx
- To run tests we write in terminal "npm test"
- We can see a simple text example in ./app/src/modules/TestModule/index.test.tsx
- For more information read up on 
  - https://www.pluralsight.com/guides/how-to-test-react-components-in-typescript
  - https://jestjs.io/docs/tutorial-react-native
---

## Project Structure

Inside this project we have 2 main folders, api and app, inside api we have the backend of the program, it is written in Nest JS and all its assetes lie in that folder. Then we have app and that is the React-Native program for the mobile app, it also has all its assets inside that folder. 


### app

The program architecture is setup like this

```
src
	- assets (static files, images & fonts)
		- fonts
		- images
	- components 
		- component1 (1 component per sub folder)
			- index.tsx
			- styles.ts
			- types.ts
		- component2
	- containers (screen-based components in here)
	- screens (for multiple screens)
	- i18n (translation files if any)
	- navigation (stack navigator)
	- store 
		- services
		- actions
		- reducers
		- services
	- utils (for global)
		- hooks
		- styles
		- theme 
```

### api

```
- src
  - core
  - common
    - middleware
    - interceptors
    - guards
  - user
    - interceptors (scoped interceptors)
    - user.controller.ts
    - user.model.ts
  - store
    - store.controller.ts
    - store.model.ts
```

# The Ultimate Tile Destroyer

This game is built using JavaScript and React/Redux framework. You can create users, keep track of highest scores, and view your game history data stored in the backend database.

First, create your username before playing the game; the game begins when you click START GAME.



![Create user name](https://github.com/jbenjaminy/fullstack-game/blob/master/img/tiles1.png?raw=true "Start page")

 This is a timed-game where you can break tiles and compete for the highest score. The object of the game is to click the red tiles to earn points; click as many red tiles as you can in 20 seconds.

![Click the red tiles](https://github.com/jbenjaminy/fullstack-game/blob/master/img/tiles2.png?raw=true "Click red tiles")

 You earn a point for every direct hit, but lose two points if you miss and hit the white tiles.

When the round is over, you can view your final score, score history, highest score, and choose to play again.

![Game over](https://github.com/jbenjaminy/fullstack-game/blob/master/img/tiles3.png?raw=true "Game over")

## Setting up the database and backend server.

	1. Install postgreSQL using homebrew:
			$ brew install postgresql

	2. Install postgreSQL node-module using NPM:
			$ npm install --save pg

	3. Launch postgreSQL using homebrew:
			$ brew services start postgresql

	4. In project directory, create new db:
			$ createdb *INSERT_DB_NAME*

	5. Connect model tables (schema.sql) db:
			$ psql -d *INSERT_DB_NAME* < *INSERT_SCHEMA.SQL_PATH*

	6. Access database:
			$ psql -d *INSERT_DB_NAME*


## Queries for accessing the SQL database directly.

	Query examples:
		-CREATE:
			$ insert into *INSERT_TABLE* (*INSERT_COLUMN_1*, *INSERT_COLUMN_2*) values ('*INSERT_VALUE_1*', '*INSERT_VALUE_2*');
		-READ:
			$ select * from *INSERT_TABLE*;
			$ select *INSERT_VALUE from *INSERT_TABLE*;
			$ select *INSERT_COLUMN_1*, *INSERT_COLUMN_2* from *INSERT_TABLE* where *INSERT_COLUMN_1*='*INSERT_VALUE_1*';
		-UPDATE:
			$ update *INSERT_TABLE* set *INSERT_COLUMN_1*='*INSERT_VALUE_1*' where *INSERT_VALUE_2*='*INSERT_COLUMN_2*';
		-DELETE:
			$ delete from *INSERT_TABLE* where *INSERT_COLUMN_1*='*INSERT_VALUE_1*';

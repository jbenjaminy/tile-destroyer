create table if not exists users (
	id serial primary key,
	username text not null unique
);

create table if not exists games (
	id serial primary key,
	user_id integer not null references users,
	score integer not null
);

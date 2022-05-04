-- CREATE TABLE
    -- ACCOUNT TABLE
CREATE TABLE accounts (
	"account_id" serial NOT NULL,
	"username" varchar(50) NOT NULL UNIQUE,
	"password" varchar(100) NOT NULL,
	CONSTRAINT "account_pk" PRIMARY KEY ("accountID")
); 
    -- COURSE TABLE
CREATE TABLE courses (
	"course_id" serial NOT NULL,
	"title" varchar(50) NOT NULL,
	"info" varchar(250),
    "username" varchar(50) NOT NULL
); 

-- INSERT INTO courses ( title, info, username ) VALUES ('Stud Hub', 'Hubs for Studs', 'test');

    -- SLIDE TABLE
CREATE TABLE slides (
	"slide_id" serial NOT NULL,
	"video" varchar(1000),
	"text" varchar(1000),
    "index" serial NOT NULL,
    "course_id" integer NOT NULL
); 

-- GET TABLE
SELECT * FROM accounts;
SELECT * FROM courses;
SELECT * FROM slides;

-- GET SPECFIC ACCOUNT
SELECT * FROM accounts WHERE username = $1;

-- GET ACCOUNT COURSES
SELECT courses FROM accounts WHERE username = $1;

-- CREATE ACCOUNT 
INSERT INTO accounts ( username, password ) VALUES ($1, $2) RETURNING *;

-- CREATE COURSE
INSERT INTO courses ( title, info, username ) VALUES ($1, $2, $3) RETURNING *;
INSERT INTO courses ( title, info, slides, username ) VALUES ( $1, $2, $3, $4);

-- ADD COURSE TO ACCOUNT
UPDATE accounts SET courses = (select courses from accounts where username = $1) || ARRAY[1] WHERE username = $1;

-- UPDATE ACCOUNT 
    -- password
    UPDATE accounts
    SET password = $1
    WHERE username = $2;

    -- courses
    UPDATE accounts
    SET courses = $1
    WHERE username = $2;
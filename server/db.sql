-- CREATE TABLE
    -- ACCOUNT TABLE
CREATE TABLE accounts (
	"accountID" serial NOT NULL,
	"username" varchar(50) NOT NULL UNIQUE,
	"password" varchar(100) NOT NULL,
    "courses" integer ARRAY,
	CONSTRAINT "account_pk" PRIMARY KEY ("accountID")
); 
    -- COURSE TABLE
CREATE TABLE courses (
	"courseID" serial NOT NULL,
	"title" varchar(50) NOT NULL,
	"info" varchar(250),
    "slides" integer ARRAY,
    "username" varchar(50) NOT NULL,
	CONSTRAINT "course_pk" PRIMARY KEY ("courseID")
); 

-- INSERT INTO courses ( title, info, username ) VALUES ('Stud Hub', 'Hubs for Studs', 'test');

    -- SLIDE TABLE
CREATE TABLE slides (
	"slideID" serial NOT NULL,
	"video" varchar(255),
	"text" varchar(1000),
    "index" integer NOT NULL,
    "courseID" integer NOT NULL,
	CONSTRAINT "slide_pk" PRIMARY KEY ("slideID")
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
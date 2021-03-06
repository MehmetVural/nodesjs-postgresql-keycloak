-- Create Database
CREATE DATABASE workbc
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE USER youruser WITH ENCRYPTED PASSWORD 'yourpass';
GRANT ALL PRIVILEGES ON DATABASE yourdbname TO youruser;

-- Crete Table
DROP TABLE workbc.pages;
CREATE TABLE workbc.pages (
	page_id serial PRIMARY KEY,
	page_title VARCHAR ( 50 ) NOT NULL,
	page_desc VARCHAR ( 255 ) NOT NULL,
    created_by INT
);
	--created_on TIMESTAMP NOT NULL,
    --updated_on TIMESTAMP NOT NULL,
-- insert some values
--INSERT INTO pages(page_title, page_desc) VALUES ('Title1', 'Desc') RETURNING *; INSERT INTO pages(page_title, page_desc) VALUES ('Title2', 'Desc') RETURNING *; INSERT INTO pages(page_title, page_desc) VALUES ('Title3', 'Desc') RETURNING *;
INSERT INTO pages(page_title, page_desc) VALUES ('Title4', 'Desc'), ('Title5', 'Desc'), ('Title6', 'Desc');

SELECT * FROm pages

-- psql -f database.sql targetdatabase

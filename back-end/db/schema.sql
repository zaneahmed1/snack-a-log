DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 

\c snack_a_log; 

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT,
    fiber INTEGER,
    protein INTEGER,
    added_sugar INTEGER,
    is_healthy BOOLEAN,
    image VARCHAR(2083)
)

BEGIN;

CREATE TABLE IF NOT EXISTS orders(
    id bigserial not null primary key,
    username text not null,
    phone text not null
);

CREATE TABLE IF NOT EXISTS materials(
    id bigserial not null primary key,
    title text not null,
    source_path text not null
);

COMMIT;
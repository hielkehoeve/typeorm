DROP TABLE IF EXISTS "github-issue-new".entitya;
DROP TABLE IF EXISTS "github-issue-new".entityb;
DROP TABLE IF EXISTS "github-issue-new".entityc;
DROP TABLE IF EXISTS "github-issue-new".entityd;

CREATE TABLE "github-issue-new".entitya
(
    id integer NOT NULL,
    createdat timestamp NOT NULL,
    updatedat timestamp NOT NULL,
    entityb integer NOT NULL,
    entityc integer NOT NULL,
    column_b integer NOT NULL,
    column_c character varying(60) COLLATE pg_catalog."default" NOT NULL,
    column_d integer NOT NULL,
    entityd integer NOT NULL,
    column_e character varying(60) COLLATE pg_catalog."default",
    column_f integer,
    column_g integer NOT NULL,
    column_h integer NOT NULL,
    CONSTRAINT pkey_entitya PRIMARY KEY (id),
    CONSTRAINT uq_entitya UNIQUE (column_b, column_c)
);
CREATE INDEX idx_entitya_entityb ON "github-issue-new".entitya USING btree (entityb ASC NULLS LAST);
CREATE INDEX idx_entita_multi ON "github-issue-new".entitya USING btree (column_b ASC NULLS LAST, column_c ASC NULLS LAST);

CREATE TABLE "github-issue-new".entityb
(
    id integer NOT NULL,
    createdat timestamp NOT NULL,
    updatedat timestamp NOT NULL,
    column_b integer NOT NULL,
    column_c character varying(60) COLLATE pg_catalog."default" NOT NULL,
    column_d integer NOT NULL,
    column_e character varying(60) COLLATE pg_catalog."default",
    column_f integer,
    column_g integer NOT NULL,
    column_h integer NOT NULL,
    CONSTRAINT pkey_entityb PRIMARY KEY (id),
    CONSTRAINT uq_entityb UNIQUE (column_b, column_c)
);
CREATE INDEX idx_entitb_multi ON "github-issue-new".entityb USING btree (column_b ASC NULLS LAST, column_c ASC NULLS LAST);

CREATE TABLE "github-issue-new".entityc
(
    id integer NOT NULL,
    createdat timestamp NOT NULL,
    updatedat timestamp NOT NULL,
    entityd bigint not null,
    column_b integer NOT NULL,
    column_c character varying(60) COLLATE pg_catalog."default" NOT NULL,
    column_d integer NOT NULL,
    column_e character varying(60) COLLATE pg_catalog."default",
    column_f integer,
    column_g integer NOT NULL,
    column_h integer NOT NULL,
    CONSTRAINT pkey_entityc PRIMARY KEY (id),
    CONSTRAINT uq_entityc UNIQUE (column_b, column_c)
);
CREATE INDEX idx_entitc_multi ON "github-issue-new".entityc USING btree (column_b ASC NULLS LAST, column_c ASC NULLS LAST);

CREATE TABLE "github-issue-new".entityd
(
    id integer NOT NULL,
    createdat timestamp NOT NULL,
    updatedat timestamp NOT NULL,
    column_b integer NOT NULL,
    column_c character varying(60) COLLATE pg_catalog."default" NOT NULL,
    column_d integer NOT NULL,
    column_e character varying(60) COLLATE pg_catalog."default",
    column_f integer,
    column_g integer NOT NULL,
    column_h integer NOT NULL,
    CONSTRAINT pkey_entityd PRIMARY KEY (id),
    CONSTRAINT uq_entityd UNIQUE (column_b, column_c)
);
CREATE INDEX idx_entitd_multi ON "github-issue-new".entityd USING btree (column_b ASC NULLS LAST, column_c ASC NULLS LAST);

ALTER TABLE "github-issue-new".entitya
    ADD CONSTRAINT fk_entitya_entityb FOREIGN KEY (entityb)
    REFERENCES "github-issue-new".entityb (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE "github-issue-new".entitya
    ADD CONSTRAINT fk_entitya_entityc FOREIGN KEY (entityc)
    REFERENCES "github-issue-new".entityc (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE "github-issue-new".entitya
    ADD CONSTRAINT fk_entitya_entityd FOREIGN KEY (entityd)
    REFERENCES "github-issue-new".entityd (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE "github-issue-new".entityc
    ADD CONSTRAINT fk_entityc_entityd FOREIGN KEY (entityd)
    REFERENCES "github-issue-new".entityd (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

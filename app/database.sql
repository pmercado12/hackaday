--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.0

-- Started on 2018-03-03 16:09:33

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2187 (class 1262 OID 41054)
-- Name: hackaton; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE hackaton WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';


ALTER DATABASE hackaton OWNER TO postgres;

\connect hackaton

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12387)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2189 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 190 (class 1259 OID 41081)
-- Name: Aula; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Aula" (
    "idAula" bigint NOT NULL,
    aula character varying(200),
    "usuCre" character varying(30),
    "fecCre" date,
    "usuMod" character varying(30),
    "fecMod" date
);


ALTER TABLE "Aula" OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 41079)
-- Name: Aula_idAula_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Aula_idAula_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Aula_idAula_seq" OWNER TO postgres;

--
-- TOC entry 2190 (class 0 OID 0)
-- Dependencies: 189
-- Name: Aula_idAula_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Aula_idAula_seq" OWNED BY "Aula"."idAula";


--
-- TOC entry 192 (class 1259 OID 41103)
-- Name: Dia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Dia" (
    "idDia" bigint NOT NULL,
    dia character varying(200),
    "usuCre" character varying(30),
    "fecCre" date,
    "usuMod" character varying(30),
    "fecMod" date
);


ALTER TABLE "Dia" OWNER TO postgres;

--
-- TOC entry 191 (class 1259 OID 41101)
-- Name: Dia_idDia_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Dia_idDia_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Dia_idDia_seq" OWNER TO postgres;

--
-- TOC entry 2191 (class 0 OID 0)
-- Dependencies: 191
-- Name: Dia_idDia_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Dia_idDia_seq" OWNED BY "Dia"."idDia";


--
-- TOC entry 186 (class 1259 OID 41057)
-- Name: Docente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Docente" (
    "idDocente" bigint NOT NULL,
    paterno character varying(200),
    materno character varying(200),
    nombres character varying(200),
    ci character varying(20) NOT NULL,
    "usuCre" character varying(30),
    "fecCre" date,
    "usuMod" character varying(30),
    "fecMod" date
);


ALTER TABLE "Docente" OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 41055)
-- Name: Docente_idDocente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Docente_idDocente_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Docente_idDocente_seq" OWNER TO postgres;

--
-- TOC entry 2192 (class 0 OID 0)
-- Dependencies: 185
-- Name: Docente_idDocente_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Docente_idDocente_seq" OWNED BY "Docente"."idDocente";


--
-- TOC entry 194 (class 1259 OID 41119)
-- Name: Horario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Horario" (
    "idHorario" bigint NOT NULL,
    "idDia" integer,
    "horaInicio" character varying(10),
    "horaFin" character varying(10),
    "idMateria" integer,
    "idAula" integer,
    "usuCre" character varying(30),
    "fecCre" date,
    "usuMod" character varying(30),
    "fecMod" date
);


ALTER TABLE "Horario" OWNER TO postgres;

--
-- TOC entry 193 (class 1259 OID 41117)
-- Name: Horario_idHorario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Horario_idHorario_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Horario_idHorario_seq" OWNER TO postgres;

--
-- TOC entry 2193 (class 0 OID 0)
-- Dependencies: 193
-- Name: Horario_idHorario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Horario_idHorario_seq" OWNED BY "Horario"."idHorario";


--
-- TOC entry 188 (class 1259 OID 41068)
-- Name: Materia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Materia" (
    "idMateria" bigint NOT NULL,
    sigla character varying(200),
    titulo character varying(200),
    "idDocente" integer NOT NULL,
    "usuCre" character varying(30),
    "fecCre" date,
    "usuMod" character varying(30),
    "fecMod" date
);


ALTER TABLE "Materia" OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 41066)
-- Name: Materia_idMateria_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Materia_idMateria_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Materia_idMateria_seq" OWNER TO postgres;

--
-- TOC entry 2194 (class 0 OID 0)
-- Dependencies: 187
-- Name: Materia_idMateria_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Materia_idMateria_seq" OWNED BY "Materia"."idMateria";


--
-- TOC entry 196 (class 1259 OID 41143)
-- Name: items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE items (
    id integer NOT NULL,
    text character varying(40) NOT NULL,
    complete boolean
);


ALTER TABLE items OWNER TO postgres;

--
-- TOC entry 195 (class 1259 OID 41141)
-- Name: items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE items_id_seq OWNER TO postgres;

--
-- TOC entry 2195 (class 0 OID 0)
-- Dependencies: 195
-- Name: items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE items_id_seq OWNED BY items.id;


--
-- TOC entry 2034 (class 2604 OID 41084)
-- Name: Aula idAula; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Aula" ALTER COLUMN "idAula" SET DEFAULT nextval('"Aula_idAula_seq"'::regclass);


--
-- TOC entry 2035 (class 2604 OID 41106)
-- Name: Dia idDia; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Dia" ALTER COLUMN "idDia" SET DEFAULT nextval('"Dia_idDia_seq"'::regclass);


--
-- TOC entry 2032 (class 2604 OID 41060)
-- Name: Docente idDocente; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Docente" ALTER COLUMN "idDocente" SET DEFAULT nextval('"Docente_idDocente_seq"'::regclass);


--
-- TOC entry 2036 (class 2604 OID 41122)
-- Name: Horario idHorario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Horario" ALTER COLUMN "idHorario" SET DEFAULT nextval('"Horario_idHorario_seq"'::regclass);


--
-- TOC entry 2033 (class 2604 OID 41071)
-- Name: Materia idMateria; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Materia" ALTER COLUMN "idMateria" SET DEFAULT nextval('"Materia_idMateria_seq"'::regclass);


--
-- TOC entry 2037 (class 2604 OID 41146)
-- Name: items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY items ALTER COLUMN id SET DEFAULT nextval('items_id_seq'::regclass);


--
-- TOC entry 2176 (class 0 OID 41081)
-- Dependencies: 190
-- Data for Name: Aula; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2196 (class 0 OID 0)
-- Dependencies: 189
-- Name: Aula_idAula_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Aula_idAula_seq"', 1, false);


--
-- TOC entry 2178 (class 0 OID 41103)
-- Dependencies: 192
-- Data for Name: Dia; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "Dia" VALUES (1, 'Lunes', 'pmercado', NULL, NULL, NULL);
INSERT INTO "Dia" VALUES (2, 'Martes', 'pmercado', NULL, NULL, NULL);
INSERT INTO "Dia" VALUES (3, 'Miercoles', 'pmercado', NULL, NULL, NULL);
INSERT INTO "Dia" VALUES (4, 'Jueves', 'pmercado', NULL, NULL, NULL);
INSERT INTO "Dia" VALUES (5, 'Viernes', 'pmercado', NULL, NULL, NULL);


--
-- TOC entry 2197 (class 0 OID 0)
-- Dependencies: 191
-- Name: Dia_idDia_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Dia_idDia_seq"', 5, true);


--
-- TOC entry 2172 (class 0 OID 41057)
-- Dependencies: 186
-- Data for Name: Docente; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "Docente" VALUES (5, 'Vargas', 'Calle', 'Romina', '5786123', NULL, NULL, NULL, NULL);


--
-- TOC entry 2198 (class 0 OID 0)
-- Dependencies: 185
-- Name: Docente_idDocente_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Docente_idDocente_seq"', 5, true);


--
-- TOC entry 2180 (class 0 OID 41119)
-- Dependencies: 194
-- Data for Name: Horario; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2199 (class 0 OID 0)
-- Dependencies: 193
-- Name: Horario_idHorario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Horario_idHorario_seq"', 1, false);


--
-- TOC entry 2174 (class 0 OID 41068)
-- Dependencies: 188
-- Data for Name: Materia; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2200 (class 0 OID 0)
-- Dependencies: 187
-- Name: Materia_idMateria_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Materia_idMateria_seq"', 1, false);


--
-- TOC entry 2182 (class 0 OID 41143)
-- Dependencies: 196
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2201 (class 0 OID 0)
-- Dependencies: 195
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('items_id_seq', 1, false);


--
-- TOC entry 2039 (class 2606 OID 41065)
-- Name: Docente Docente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Docente"
    ADD CONSTRAINT "Docente_pkey" PRIMARY KEY ("idDocente");


--
-- TOC entry 2041 (class 2606 OID 41073)
-- Name: Materia Materia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Materia"
    ADD CONSTRAINT "Materia_pkey" PRIMARY KEY ("idMateria");


--
-- TOC entry 2043 (class 2606 OID 41086)
-- Name: Aula PK_Aula; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Aula"
    ADD CONSTRAINT "PK_Aula" PRIMARY KEY ("idAula");


--
-- TOC entry 2045 (class 2606 OID 41108)
-- Name: Dia PK_Dia; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Dia"
    ADD CONSTRAINT "PK_Dia" PRIMARY KEY ("idDia");


--
-- TOC entry 2047 (class 2606 OID 41124)
-- Name: Horario PK_Horario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Horario"
    ADD CONSTRAINT "PK_Horario" PRIMARY KEY ("idHorario");


--
-- TOC entry 2049 (class 2606 OID 41148)
-- Name: items items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);


--
-- TOC entry 2053 (class 2606 OID 41136)
-- Name: Horario FK_Horario_Aula; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Horario"
    ADD CONSTRAINT "FK_Horario_Aula" FOREIGN KEY ("idAula") REFERENCES "Aula"("idAula");


--
-- TOC entry 2051 (class 2606 OID 41125)
-- Name: Horario FK_Horario_Dia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Horario"
    ADD CONSTRAINT "FK_Horario_Dia" FOREIGN KEY ("idDia") REFERENCES "Dia"("idDia");


--
-- TOC entry 2052 (class 2606 OID 41131)
-- Name: Horario FK_Horario_Materia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Horario"
    ADD CONSTRAINT "FK_Horario_Materia" FOREIGN KEY ("idMateria") REFERENCES "Materia"("idMateria");


--
-- TOC entry 2050 (class 2606 OID 41074)
-- Name: Materia fk_Materia_Docente; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Materia"
    ADD CONSTRAINT "fk_Materia_Docente" FOREIGN KEY ("idDocente") REFERENCES "Docente"("idDocente");


-- Completed on 2018-03-03 16:09:34

--
-- PostgreSQL database dump complete
--


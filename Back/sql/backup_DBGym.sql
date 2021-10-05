--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

-- Started on 2021-10-05 11:26:02

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 16644)
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    id_persona integer NOT NULL,
    nombre character varying(50) NOT NULL,
    apellido character varying(50) NOT NULL,
    dni integer NOT NULL,
    email character varying(100) NOT NULL,
    telefono integer
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16642)
-- Name: cliente_id_persona_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cliente_id_persona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cliente_id_persona_seq OWNER TO postgres;

--
-- TOC entry 3020 (class 0 OID 0)
-- Dependencies: 200
-- Name: cliente_id_persona_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cliente_id_persona_seq OWNED BY public.cliente.id_persona;


--
-- TOC entry 206 (class 1259 OID 16679)
-- Name: comprobante; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comprobante (
    id integer NOT NULL,
    fecha date NOT NULL,
    monto double precision NOT NULL,
    nombre character varying(50) NOT NULL,
    apellido character varying(50) NOT NULL,
    dni integer NOT NULL
);


ALTER TABLE public.comprobante OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16677)
-- Name: comprobante_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comprobante_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comprobante_id_seq OWNER TO postgres;

--
-- TOC entry 3021 (class 0 OID 0)
-- Dependencies: 205
-- Name: comprobante_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comprobante_id_seq OWNED BY public.comprobante.id;


--
-- TOC entry 204 (class 1259 OID 16672)
-- Name: cuota; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cuota (
    id_mes integer NOT NULL,
    dias_disponibles integer,
    dias_restantes integer,
    monto double precision NOT NULL,
    fecha_vencimiento date
);


ALTER TABLE public.cuota OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16652)
-- Name: turno; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.turno (
    id_turno integer NOT NULL,
    horario character varying NOT NULL,
    descripcion character varying
);


ALTER TABLE public.turno OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16650)
-- Name: turno_id_turno_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.turno_id_turno_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.turno_id_turno_seq OWNER TO postgres;

--
-- TOC entry 3022 (class 0 OID 0)
-- Dependencies: 202
-- Name: turno_id_turno_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.turno_id_turno_seq OWNED BY public.turno.id_turno;


--
-- TOC entry 2867 (class 2604 OID 16647)
-- Name: cliente id_persona; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente ALTER COLUMN id_persona SET DEFAULT nextval('public.cliente_id_persona_seq'::regclass);


--
-- TOC entry 2869 (class 2604 OID 16682)
-- Name: comprobante id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comprobante ALTER COLUMN id SET DEFAULT nextval('public.comprobante_id_seq'::regclass);


--
-- TOC entry 2868 (class 2604 OID 16655)
-- Name: turno id_turno; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turno ALTER COLUMN id_turno SET DEFAULT nextval('public.turno_id_turno_seq'::regclass);


--
-- TOC entry 3009 (class 0 OID 16644)
-- Dependencies: 201
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cliente (id_persona, nombre, apellido, dni, email, telefono) FROM stdin;
\.


--
-- TOC entry 3014 (class 0 OID 16679)
-- Dependencies: 206
-- Data for Name: comprobante; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comprobante (id, fecha, monto, nombre, apellido, dni) FROM stdin;
\.


--
-- TOC entry 3012 (class 0 OID 16672)
-- Dependencies: 204
-- Data for Name: cuota; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cuota (id_mes, dias_disponibles, dias_restantes, monto, fecha_vencimiento) FROM stdin;
\.


--
-- TOC entry 3011 (class 0 OID 16652)
-- Dependencies: 203
-- Data for Name: turno; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.turno (id_turno, horario, descripcion) FROM stdin;
\.


--
-- TOC entry 3023 (class 0 OID 0)
-- Dependencies: 200
-- Name: cliente_id_persona_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cliente_id_persona_seq', 1, false);


--
-- TOC entry 3024 (class 0 OID 0)
-- Dependencies: 205
-- Name: comprobante_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comprobante_id_seq', 1, false);


--
-- TOC entry 3025 (class 0 OID 0)
-- Dependencies: 202
-- Name: turno_id_turno_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.turno_id_turno_seq', 1, false);


--
-- TOC entry 2871 (class 2606 OID 16649)
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_persona, dni);


--
-- TOC entry 2877 (class 2606 OID 16684)
-- Name: comprobante comprobante_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comprobante
    ADD CONSTRAINT comprobante_pkey PRIMARY KEY (id);


--
-- TOC entry 2875 (class 2606 OID 16676)
-- Name: cuota cuota_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuota
    ADD CONSTRAINT cuota_pkey PRIMARY KEY (id_mes);


--
-- TOC entry 2873 (class 2606 OID 16660)
-- Name: turno turno_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turno
    ADD CONSTRAINT turno_pkey PRIMARY KEY (id_turno);


-- Completed on 2021-10-05 11:26:02

--
-- PostgreSQL database dump complete
--


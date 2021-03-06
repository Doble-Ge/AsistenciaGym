PGDMP     	                	    y         
   dbGimnasio    13.1    13.1     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16489 
   dbGimnasio    DATABASE     l   CREATE DATABASE "dbGimnasio" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Argentina.1252';
    DROP DATABASE "dbGimnasio";
                postgres    false            ?            1259    16644    cliente    TABLE     ?   CREATE TABLE public.cliente (
    id_persona integer NOT NULL,
    nombre character varying(50) NOT NULL,
    apellido character varying(50) NOT NULL,
    dni integer NOT NULL,
    email character varying(100) NOT NULL,
    telefono integer
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            ?            1259    16642    cliente_id_persona_seq    SEQUENCE     ?   CREATE SEQUENCE public.cliente_id_persona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.cliente_id_persona_seq;
       public          postgres    false    201            ?           0    0    cliente_id_persona_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.cliente_id_persona_seq OWNED BY public.cliente.id_persona;
          public          postgres    false    200            ?            1259    16679    comprobante    TABLE     ?   CREATE TABLE public.comprobante (
    id integer NOT NULL,
    fecha date NOT NULL,
    monto double precision NOT NULL,
    nombre character varying(50) NOT NULL,
    apellido character varying(50) NOT NULL,
    dni integer NOT NULL
);
    DROP TABLE public.comprobante;
       public         heap    postgres    false            ?            1259    16677    comprobante_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.comprobante_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.comprobante_id_seq;
       public          postgres    false    206            ?           0    0    comprobante_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.comprobante_id_seq OWNED BY public.comprobante.id;
          public          postgres    false    205            ?            1259    16672    cuota    TABLE     ?   CREATE TABLE public.cuota (
    id_mes integer NOT NULL,
    dias_disponibles integer,
    dias_restantes integer,
    monto double precision NOT NULL,
    fecha_vencimiento date
);
    DROP TABLE public.cuota;
       public         heap    postgres    false            ?            1259    16652    turno    TABLE     ?   CREATE TABLE public.turno (
    id_turno integer NOT NULL,
    horario character varying NOT NULL,
    descripcion character varying
);
    DROP TABLE public.turno;
       public         heap    postgres    false            ?            1259    16650    turno_id_turno_seq    SEQUENCE     ?   CREATE SEQUENCE public.turno_id_turno_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.turno_id_turno_seq;
       public          postgres    false    203            ?           0    0    turno_id_turno_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.turno_id_turno_seq OWNED BY public.turno.id_turno;
          public          postgres    false    202            3           2604    16647    cliente id_persona    DEFAULT     x   ALTER TABLE ONLY public.cliente ALTER COLUMN id_persona SET DEFAULT nextval('public.cliente_id_persona_seq'::regclass);
 A   ALTER TABLE public.cliente ALTER COLUMN id_persona DROP DEFAULT;
       public          postgres    false    201    200    201            5           2604    16682    comprobante id    DEFAULT     p   ALTER TABLE ONLY public.comprobante ALTER COLUMN id SET DEFAULT nextval('public.comprobante_id_seq'::regclass);
 =   ALTER TABLE public.comprobante ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    205    206            4           2604    16655    turno id_turno    DEFAULT     p   ALTER TABLE ONLY public.turno ALTER COLUMN id_turno SET DEFAULT nextval('public.turno_id_turno_seq'::regclass);
 =   ALTER TABLE public.turno ALTER COLUMN id_turno DROP DEFAULT;
       public          postgres    false    203    202    203            ?          0    16644    cliente 
   TABLE DATA           U   COPY public.cliente (id_persona, nombre, apellido, dni, email, telefono) FROM stdin;
    public          postgres    false    201   3       ?          0    16679    comprobante 
   TABLE DATA           N   COPY public.comprobante (id, fecha, monto, nombre, apellido, dni) FROM stdin;
    public          postgres    false    206   P       ?          0    16672    cuota 
   TABLE DATA           c   COPY public.cuota (id_mes, dias_disponibles, dias_restantes, monto, fecha_vencimiento) FROM stdin;
    public          postgres    false    204   m       ?          0    16652    turno 
   TABLE DATA           ?   COPY public.turno (id_turno, horario, descripcion) FROM stdin;
    public          postgres    false    203   ?       ?           0    0    cliente_id_persona_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.cliente_id_persona_seq', 1, false);
          public          postgres    false    200            ?           0    0    comprobante_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.comprobante_id_seq', 1, false);
          public          postgres    false    205            ?           0    0    turno_id_turno_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.turno_id_turno_seq', 1, false);
          public          postgres    false    202            7           2606    16649    cliente cliente_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_persona, dni);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public            postgres    false    201    201            =           2606    16684    comprobante comprobante_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.comprobante
    ADD CONSTRAINT comprobante_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.comprobante DROP CONSTRAINT comprobante_pkey;
       public            postgres    false    206            ;           2606    16676    cuota cuota_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.cuota
    ADD CONSTRAINT cuota_pkey PRIMARY KEY (id_mes);
 :   ALTER TABLE ONLY public.cuota DROP CONSTRAINT cuota_pkey;
       public            postgres    false    204            9           2606    16660    turno turno_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.turno
    ADD CONSTRAINT turno_pkey PRIMARY KEY (id_turno);
 :   ALTER TABLE ONLY public.turno DROP CONSTRAINT turno_pkey;
       public            postgres    false    203            ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?     
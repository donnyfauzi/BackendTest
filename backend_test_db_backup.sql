--
-- PostgreSQL database dump
--

-- Dumped from database version 17.0
-- Dumped by pg_dump version 17.0

-- Started on 2025-03-20 21:52:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4789 (class 0 OID 25021)
-- Dependencies: 218
-- Data for Name: meeting; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meeting (id, unit, ruang_meeting, tanggal_rapat, waktu_mulai, waktu_selesai, jumlah_peserta, jenis_konsumsi) FROM stdin;
1	IT Support	Ruang Rapat 1	2024-03-21	09:00:00	11:00:00	10	Snack & Coffee
2	Marketing	Ruang Rapat 2	2025-03-20	20:00:00	22:00:00	20	Snack Cofee
3	Finance	Ruang Rapat 3	2025-03-20	19:00:00	21:00:00	10	Cofee
4	IT	Ruang Rapat 1	2025-03-20	13:00:00	15:00:00	10	Snack
\.


--
-- TOC entry 4795 (class 0 OID 0)
-- Dependencies: 217
-- Name: meeting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meeting_id_seq', 4, true);


-- Completed on 2025-03-20 21:52:52

--
-- PostgreSQL database dump complete
--


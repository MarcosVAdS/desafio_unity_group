-- substituir o banco caso ele já exista
DROP DATABASE IF EXISTS`unity`;
CREATE DATABASE  `unity`;
USE `unity`;

CREATE TABLE `candidato`(
  `cand_id` varchar(10) NOT NULL,
  `cand_nome` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `cand_email` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cand_idade` varchar(11) COLLATE utf8mb4_general_ci NOT NULL,
  `cand_login` varchar(100) COLLATE utf8mb4_general_ci,
  `cand_senha` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cand_status` char(1) COLLATE utf8mb4_general_ci DEFAULT 'N',
  PRIMARY KEY (`cand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

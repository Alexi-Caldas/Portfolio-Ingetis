-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Jeu 19 Décembre 2024 à 13:59
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `GestionCommandes`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE IF NOT EXISTS `clients` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `date_inscription` date NOT NULL,
  PRIMARY KEY (`id_client`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `clients`
--

INSERT INTO `clients` (`id_client`, `nom`, `prenom`, `email`, `date_inscription`) VALUES
(1, 'Dupont', 'Marie', 'marie.dupont@example.com', '2023-01-10'),
(2, 'Durand', 'Paul', 'paul.durand@example.com', '2023-02-20'),
(3, 'Martin', 'Alice', 'alice.martin@example.com', '2023-03-15');

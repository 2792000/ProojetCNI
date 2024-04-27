-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 27 avr. 2024 à 20:50
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestioncontrat`
--

-- --------------------------------------------------------

--
-- Structure de la table `abonnement`
--

DROP TABLE IF EXISTS `abonnement`;
CREATE TABLE IF NOT EXISTS `abonnement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref` text NOT NULL,
  `prix` float NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `duree` varchar(11) NOT NULL,
  `sujet` varchar(11) NOT NULL,
  `piece_jointe` varchar(11) NOT NULL,
  `supprimer` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `abonnement`
--

INSERT INTO `abonnement` (`id`, `ref`, `prix`, `date_debut`, `date_fin`, `duree`, `sujet`, `piece_jointe`, `supprimer`) VALUES
(1, '78/78', 123.32, '2000-09-27', '2000-09-27', '3mois', 'Python', 'amine', 1);

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `fax` int(8) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `num_tel` int(16) NOT NULL,
  `type` varchar(20) NOT NULL,
  `supprimer` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `nom`, `adresse`, `fax`, `email`, `num_tel`, `type`, `supprimer`) VALUES
(66, 'Amine', 'Bizerte', 72118172, '57amine6@gmail.com', 99270700, 'Ministe', 0),
(70, 'mohamed', 'tunis', 72118172, 'mhelell@yahoo.fr', 99274700, 'Ministe', 0),
(74, 'wajdi', 'tunis', 72118172, 'exemple@gamil.com', 96238365, 'Organisme', 1),
(75, 'chadia', 'tunis', 72118172, 'exemple10@gmail.com', 96238365, 'Ministe', 0),
(84, 'amine', 'Bizerte', 72118172, '10amine@gmail.com', 96238365, 'Ministe', 1),
(85, 'hlel', 'tunis', 72118172, 'amine12@gmail.com', 96238365, 'Ministe', 0);

-- --------------------------------------------------------

--
-- Structure de la table `contrat_client`
--

DROP TABLE IF EXISTS `contrat_client`;
CREATE TABLE IF NOT EXISTS `contrat_client` (
  `id_contratClient` int(11) NOT NULL AUTO_INCREMENT,
  `ref_contrat` varchar(20) NOT NULL,
  `id_client` int(12) NOT NULL,
  `objet` text NOT NULL,
  `montant` float NOT NULL,
  `duree` varchar(50) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `structure_technique` text NOT NULL,
  `piece_jointe` text NOT NULL,
  `renouvele` int(1) NOT NULL,
  `date_de_facturation` date NOT NULL,
  `supprimer` int(11) NOT NULL DEFAULT '0',
  `archive` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_contratClient`),
  KEY `id_client` (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `contrat_client`
--

INSERT INTO `contrat_client` (`id_contratClient`, `ref_contrat`, `id_client`, `objet`, `montant`, `duree`, `date_debut`, `date_fin`, `structure_technique`, `piece_jointe`, `renouvele`, `date_de_facturation`, `supprimer`, `archive`) VALUES
(14, 'DG/956', 66, 'Stage', 200000, '5mois', '2022-05-13', '2020-05-20', 'non', 'UML class - UML Class (1).pdf', 0, '2022-04-28', 0, 0),
(21, 'DG/2466', 70, 'stage', 660001, '7 ans', '2022-05-22', '2022-05-14', 'non', '122.pdf', 0, '2022-05-21', 1, 0),
(22, 'DG/24600', 70, 'stage', 67777, '5mois', '2022-05-20', '2022-05-12', 'CNI', '122.pdf', 0, '2022-05-13', 0, 0),
(23, 'DG/2410', 70, 'stage', 660000, '7 ans', '2022-05-22', '2022-05-28', 'nom', '122.pdf', 1, '2022-05-28', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `contrat_fournisseur`
--

DROP TABLE IF EXISTS `contrat_fournisseur`;
CREATE TABLE IF NOT EXISTS `contrat_fournisseur` (
  `id_contratFrn` int(11) NOT NULL AUTO_INCREMENT,
  `ref_contrat` varchar(20) NOT NULL,
  `id_fournisseur` int(12) NOT NULL,
  `ref_marche` varchar(20) NOT NULL,
  `objet` text NOT NULL,
  `montant` float NOT NULL,
  `duree` varchar(50) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `mise_en_demeure` text NOT NULL,
  `structure_technique` text NOT NULL,
  `piece_joite` text NOT NULL,
  `date_de_preavis` date NOT NULL,
  `date_de_facturation` date NOT NULL,
  `supprimer` int(11) NOT NULL DEFAULT '0',
  `archive` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_contratFrn`),
  KEY `id_fournisseur` (`id_fournisseur`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `contrat_fournisseur`
--

INSERT INTO `contrat_fournisseur` (`id_contratFrn`, `ref_contrat`, `id_fournisseur`, `ref_marche`, `objet`, `montant`, `duree`, `date_debut`, `date_fin`, `mise_en_demeure`, `structure_technique`, `piece_joite`, `date_de_preavis`, `date_de_facturation`, `supprimer`, `archive`) VALUES
(64, 'DG/2464', 19, 'AO04/2010', 'non', 12045, '1 ans', '2022-05-15', '2027-05-05', 'non', 'non', 'contrat_maintenance (1).xlsx', '2022-05-20', '2022-06-04', 0, 0),
(83, 'DG/2465', 22, 'AO04/2010', 'gtgf', 17700, '410ans', '2022-05-12', '2022-05-21', 'amine', 'non', 'UML class - UML Class (1).pdf', '2022-05-19', '2022-05-27', 0, 1),
(84, 'DG/2468', 19, '852/855', 'stage', 6600, '5mois', '2022-05-14', '2022-05-10', 'amine', 'non', 'UML class - UML Class (1).pdf', '2022-05-18', '2022-05-21', 1, 0),
(85, 'DG/2469', 22, 'AO09/2014', 'stage', 6600, '7 ans', '2022-05-19', '2022-05-26', 'non', 'non', 'UML class - UML Class (1).txt', '2022-05-20', '2022-05-29', 0, 0),
(87, 'DG/2466', 19, 'AO10/2013', 'hhhh', 12045, '5mois', '2022-05-14', '2022-05-31', 'amine', 'non', 'UML class - UML Class (1).txt', '2022-05-28', '2022-05-28', 0, 0),
(88, 'DG/2467', 31, 'AO09/2014', 'stage', 120457, '5mois', '2022-05-28', '2025-06-27', 'amine', 'CNI', '122.pdf', '2022-05-29', '2022-05-21', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `fournisseur`
--

DROP TABLE IF EXISTS `fournisseur`;
CREATE TABLE IF NOT EXISTS `fournisseur` (
  `id_fournisseur` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `fax` int(12) NOT NULL,
  `email` varchar(50) NOT NULL,
  `num_tel` varchar(16) NOT NULL,
  `supprimer` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_fournisseur`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `fournisseur`
--

INSERT INTO `fournisseur` (`id_fournisseur`, `nom`, `adresse`, `fax`, `email`, `num_tel`, `supprimer`) VALUES
(19, 'Amine', 'tunis', 72118172, 'exemple1@gmail.com', '99274700', 1),
(22, 'wajdi', 'tunis', 72118172, 'exemple2@gmail.com', '96238365', 0),
(31, 'chedia', 'tunis', 72118172, 'exemple3@gmail.com', '96238365', 0),
(32, 'Amine', 'Ras Jbal, Hay Semaa, Benzart', 0, 'amine6@gmail.com', '000000', 0);

-- --------------------------------------------------------

--
-- Structure de la table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `id_payment` int(11) NOT NULL AUTO_INCREMENT,
  `id_contratClient` int(11) NOT NULL,
  `mant_paym` float NOT NULL,
  `type_paym` varchar(50) NOT NULL,
  `date_paym` date NOT NULL,
  PRIMARY KEY (`id_payment`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `payment`
--

INSERT INTO `payment` (`id_payment`, `id_contratClient`, `mant_paym`, `type_paym`, `date_paym`) VALUES
(14, 14, 1000, 'carte', '2022-04-04'),
(24, 23, 100000, 'Carte visa', '2022-08-24'),
(10, 11, 1000, 'Chéque', '2022-05-29'),
(15, 14, 1000, 'carte', '2022-06-04'),
(16, 14, 1000, 'carte', '2022-05-04'),
(18, 20, 1000, 'Carte visa', '2022-05-13'),
(19, 17, 1000, 'Chéque', '2022-05-21');

-- --------------------------------------------------------

--
-- Structure de la table `payment_cf`
--

DROP TABLE IF EXISTS `payment_cf`;
CREATE TABLE IF NOT EXISTS `payment_cf` (
  `id_payment` int(11) NOT NULL AUTO_INCREMENT,
  `id_contratFrn` int(11) NOT NULL,
  `mant_paym` int(11) NOT NULL,
  `type_paym` varchar(50) NOT NULL,
  `date_paym` date NOT NULL,
  PRIMARY KEY (`id_payment`),
  KEY `id_contratFrn` (`id_contratFrn`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `payment_cf`
--

INSERT INTO `payment_cf` (`id_payment`, `id_contratFrn`, `mant_paym`, `type_paym`, `date_paym`) VALUES
(1, 83, 30000, 'carte', '2022-05-12'),
(2, 83, 30000, 'carte', '2022-05-12'),
(3, 83, 30000, 'carte', '2022-05-12'),
(4, 83, 30000, 'carte', '2022-05-12');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id_utilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `pass_word` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `num_tel` int(10) NOT NULL,
  `role` varchar(25) NOT NULL,
  `date_ouverture` date NOT NULL,
  `bloc` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_utilisateur`)
) ENGINE=MyISAM AUTO_INCREMENT=163 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_utilisateur`, `nom`, `prenom`, `login`, `pass_word`, `email`, `num_tel`, `role`, `date_ouverture`, `bloc`) VALUES
(160, 'amine', 'hlel', 'admin', '123456', 'azeer', 1, 'admin', '2023-12-04', 0),
(161, 'mohamed', 'hlel', 'medmed', '123456', 'aaaa@gmail.com', 96, 'responsable CF', '2023-12-14', 0),
(162, 'Amine', 'Mohamed Amine', 'amine', 'UtrbdRVPId', '57amine6@gmail.com', 96238865, 'responsable CF', '2024-04-27', 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `contrat_client`
--
ALTER TABLE `contrat_client`
  ADD CONSTRAINT `contrat_client_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `contrat_fournisseur`
--
ALTER TABLE `contrat_fournisseur`
  ADD CONSTRAINT `contrat_fournisseur_ibfk_1` FOREIGN KEY (`id_fournisseur`) REFERENCES `fournisseur` (`id_fournisseur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `payment_cf`
--
ALTER TABLE `payment_cf`
  ADD CONSTRAINT `payment_cf_ibfk_1` FOREIGN KEY (`id_contratFrn`) REFERENCES `contrat_fournisseur` (`id_contratFrn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

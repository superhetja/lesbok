-- MariaDB dump 10.19  Distrib 10.7.3-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: db    Database: example
-- ------------------------------------------------------
-- Server version	10.7.3-MariaDB-1:10.7.3+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AccessTable`
--

DROP TABLE IF EXISTS `AccessTable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AccessTable` (
  `person_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  KEY `person_id` (`person_id`),
  KEY `group_id` (`group_id`),
  KEY `role_id` (`role_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `AccessTable_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`),
  CONSTRAINT `AccessTable_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `Group` (`group_id`),
  CONSTRAINT `AccessTable_ibfk_3` FOREIGN KEY (`role_id`) REFERENCES `Role` (`role_id`),
  CONSTRAINT `AccessTable_ibfk_4` FOREIGN KEY (`person_id`) REFERENCES `Person` (`person_id`),
  CONSTRAINT `AccessTable_ibfk_5` FOREIGN KEY (`group_id`) REFERENCES `Group` (`group_id`),
  CONSTRAINT `AccessTable_ibfk_6` FOREIGN KEY (`role_id`) REFERENCES `Role` (`role_id`),
  CONSTRAINT `AccessTable_ibfk_7` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AccessTable`
--

LOCK TABLES `AccessTable` WRITE;
/*!40000 ALTER TABLE `AccessTable` DISABLE KEYS */;
INSERT INTO `AccessTable` VALUES
(3,4,1,NULL),
(4,3,1,NULL),
(5,1,2,1);
/*!40000 ALTER TABLE `AccessTable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Book`
--

DROP TABLE IF EXISTS `Book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Book` (
  `book_id` int(11) NOT NULL,
  `name` text NOT NULL,
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book`
--

LOCK TABLES `Book` WRITE;
/*!40000 ALTER TABLE `Book` DISABLE KEYS */;
INSERT INTO `Book` VALUES
(1,'Stjáni Blái');
/*!40000 ALTER TABLE `Book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Entry`
--

DROP TABLE IF EXISTS `Entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Entry` (
  `entry_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `pageFrom` int(11) NOT NULL,
  `pageTo` int(11) NOT NULL,
  `comment` text CHARACTER SET utf8mb3 NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `timeSpent` time NOT NULL,
  `registeredBy` int(11) NOT NULL,
  PRIMARY KEY (`entry_id`),
  KEY `student_id` (`student_id`),
  KEY `book_id` (`book_id`),
  KEY `registeredBy` (`registeredBy`),
  CONSTRAINT `Entry_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`),
  CONSTRAINT `Entry_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `Book` (`book_id`),
  CONSTRAINT `Entry_ibfk_3` FOREIGN KEY (`registeredBy`) REFERENCES `Person` (`person_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Entry`
--

LOCK TABLES `Entry` WRITE;
/*!40000 ALTER TABLE `Entry` DISABLE KEYS */;
INSERT INTO `Entry` VALUES
(1,1,1,1,5,'Athugasemd við skráningu lesturs','2022-03-15 12:41:59','00:15:00',5);
/*!40000 ALTER TABLE `Entry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Group`
--

DROP TABLE IF EXISTS `Group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Group` (
  `group_id` int(11) NOT NULL,
  `name` varchar(9) CHARACTER SET utf8mb3 NOT NULL,
  `description` text CHARACTER SET utf8mb3 NOT NULL,
  `school_id` int(11) NOT NULL,
  PRIMARY KEY (`group_id`),
  KEY `school_id` (`school_id`),
  CONSTRAINT `Group_ibfk_1` FOREIGN KEY (`school_id`) REFERENCES `School` (`school_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Group`
--

LOCK TABLES `Group` WRITE;
/*!40000 ALTER TABLE `Group` DISABLE KEYS */;
INSERT INTO `Group` VALUES
(1,'LES1','Lestrarhópur 1',1),
(2,'LES2','Lestrarhópur 2',1),
(3,'1HH','Lestrarhópur 1.HH',2),
(4,'3GH','Lestrarhópur 3.GH',2);
/*!40000 ALTER TABLE `Group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Person`
--

DROP TABLE IF EXISTS `Person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Person` (
  `firstName` varchar(250) NOT NULL,
  `lastName` varchar(250) NOT NULL,
  `isActive` smallint(1) NOT NULL DEFAULT 1,
  `person_id` int(11) NOT NULL,
  `email` text CHARACTER SET utf8mb3 NOT NULL,
  `SSID` int(11) NOT NULL,
  `hvadSemTharfFyrirIslykil` int(11) DEFAULT NULL,
  PRIMARY KEY (`person_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Person`
--

LOCK TABLES `Person` WRITE;
/*!40000 ALTER TABLE `Person` DISABLE KEYS */;
INSERT INTO `Person` VALUES
('Abraham','Lincoln',1,1,'Abrah@gmail.com',0,NULL),
('John','Boothe',1,2,'john2@gmail.com',0,NULL),
('Guðrún','Hjaltadóttir',1,3,'gurdrunh@brhskoli.is',3,NULL),
('Hallur','Halls',1,4,'hallurh@brhskoli.is',0,NULL),
('Jón','Jónsson',1,5,'jonjons@gmail.com',0,NULL);
/*!40000 ALTER TABLE `Person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Role` (
  `role_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Role`
--

LOCK TABLES `Role` WRITE;
/*!40000 ALTER TABLE `Role` DISABLE KEYS */;
INSERT INTO `Role` VALUES
(1,'kennari','Kennari / umsjónarmaður hóps'),
(2,'forráðarmaður','Foreldri / forráðamaður nemanda');
/*!40000 ALTER TABLE `Role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `School`
--

DROP TABLE IF EXISTS `School`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `School` (
  `school_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `location` text NOT NULL,
  PRIMARY KEY (`school_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `School`
--

LOCK TABLES `School` WRITE;
/*!40000 ALTER TABLE `School` DISABLE KEYS */;
INSERT INTO `School` VALUES
(1,'Hólabrekkuskóli','https://holabrekkuskoli.is. Uppeldi til ábyrgðar.','Suðurhólar 10, 111 Reykjavík'),
(2,'Breiðholtsskóli','https://breidholtsskoli.is. Ábyrgð, traust og tillitssemi.','Arnarbakki 1-3 109 Reykjavík');
/*!40000 ALTER TABLE `School` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student` (
  `student_id` int(11) NOT NULL,
  `firstName` text CHARACTER SET utf8mb3 NOT NULL,
  `lastName` text CHARACTER SET utf8mb3 NOT NULL,
  `birthDate` date NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`student_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `Student_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `Group` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
INSERT INTO `Student` VALUES
(1,'Jón','Jónsson','2015-05-05',1),
(2,'Nína','Björnsdóttir','2015-08-15',1),
(3,'Sugurður','Jakobsson','2015-02-15',2),
(4,'Sigrún','Valdimarsdóttir','2015-06-22',2),
(5,'Margrét','Magnúsdóttir','2015-11-21',3),
(6,'Jónatan','Stefánsson','2015-02-19',3),
(7,'Bergur','Ævarsson','2013-04-12',4),
(8,'Samúel','Símonarson','2013-11-01',4);
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-15 12:51:24

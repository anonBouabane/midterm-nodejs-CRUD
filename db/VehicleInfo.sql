-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 20, 2025 at 05:39 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `midtermIt-2`
--

-- --------------------------------------------------------

--
-- Table structure for table `VehicleInfo`
--

CREATE TABLE `VehicleInfo` (
  `id` int(11) NOT NULL,
  `plate_number` varchar(20) NOT NULL,
  `model` varchar(50) NOT NULL,
  `owner_name` varchar(50) NOT NULL,
  `color` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `VehicleInfo`
--

INSERT INTO `VehicleInfo` (`id`, `plate_number`, `model`, `owner_name`, `color`) VALUES
(3, 'ກລ7811', 'Toyota Corolla', 'Anon', 'back'),
(4, 'ກລ1111', 'Toyota Corolla', 'Nonny', 'back');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `VehicleInfo`
--
ALTER TABLE `VehicleInfo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `plate_number` (`plate_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `VehicleInfo`
--
ALTER TABLE `VehicleInfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

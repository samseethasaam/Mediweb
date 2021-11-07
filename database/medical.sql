-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 23, 2021 at 11:22 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medical`
--

-- --------------------------------------------------------

--
-- Table structure for table `ancient_inventions_and_discoveries`
--

CREATE TABLE `ancient_inventions_and_discoveries` (
  `id` int(11) NOT NULL,
  `instrument_name` text NOT NULL,
  `description` text NOT NULL,
  `image` blob NOT NULL,
  `modern_usage` text NOT NULL,
  `modern_image` blob NOT NULL,
  `reference` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ancient_islamic_practitioners`
--

CREATE TABLE `ancient_islamic_practitioners` (
  `id` int(11) NOT NULL,
  `common_name` text NOT NULL,
  `full_name` text NOT NULL,
  `image` blob DEFAULT NULL,
  `biodata` text NOT NULL,
  `contributions` text NOT NULL,
  `inventions` text NOT NULL,
  `reference` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `diseases_and_treatment`
--

CREATE TABLE `diseases_and_treatment` (
  `id` int(11) NOT NULL,
  `disease_name` text NOT NULL,
  `ancient_treatment` text NOT NULL,
  `modern_treatment` text NOT NULL,
  `reference` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ancient_inventions_and_discoveries`
--
ALTER TABLE `ancient_inventions_and_discoveries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ancient_islamic_practitioners`
--
ALTER TABLE `ancient_islamic_practitioners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `diseases_and_treatment`
--
ALTER TABLE `diseases_and_treatment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ancient_inventions_and_discoveries`
--
ALTER TABLE `ancient_inventions_and_discoveries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ancient_islamic_practitioners`
--
ALTER TABLE `ancient_islamic_practitioners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `diseases_and_treatment`
--
ALTER TABLE `diseases_and_treatment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

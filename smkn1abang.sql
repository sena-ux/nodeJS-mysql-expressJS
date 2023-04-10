-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Apr 2023 pada 12.40
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smkn1abang`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_siswa`
--

CREATE TABLE `data_siswa` (
  `NAMA` text NOT NULL,
  `NIS` int(255) NOT NULL,
  `KELAS` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_siswa`
--

INSERT INTO `data_siswa` (`NAMA`, `NIS`, `KELAS`) VALUES
('DEVIANI', 2345, 'X TKJ'),
('Ni LUH', 3456, 'X'),
('I Made Sena Pernata', 5643, 'XII TKJ 2'),
('I Wayan Suparwata', 24563, 'XII TKJ 2');

-- --------------------------------------------------------

--
-- Struktur dari tabel `konsultasi`
--

CREATE TABLE `konsultasi` (
  `nama` varchar(255) NOT NULL,
  `masalah` text NOT NULL,
  `tanggal` date NOT NULL,
  `kelas` varchar(255) NOT NULL,
  `noHP` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `login_siswa`
--

CREATE TABLE `login_siswa` (
  `user_id` int(100) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `kataSandi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `login_siswa`
--

INSERT INTO `login_siswa` (`user_id`, `email`, `username`, `kataSandi`) VALUES
(24, 'ani@gmail.com', 'ani', 'ani'),
(13, 'asdfas@gmail.com', 'sena', '1234');

-- --------------------------------------------------------

--
-- Struktur dari tabel `permision`
--

CREATE TABLE `permision` (
  `nama` varchar(500) NOT NULL,
  `alasan` text NOT NULL,
  `tanggal` date NOT NULL,
  `kelas` varchar(255) NOT NULL,
  `waktu` time NOT NULL,
  `alamat` text NOT NULL,
  `noHP` int(255) NOT NULL,
  `guruPiket` text NOT NULL,
  `guruWali` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `permision`
--

INSERT INTO `permision` (`nama`, `alasan`, `tanggal`, `kelas`, `waktu`, `alamat`, `noHP`, `guruPiket`, `guruWali`) VALUES
('edun', 'sembahyang', '2023-04-10', 'XII TKJ 2', '00:00:15', 'TISTA DAUH JALAN', 986478, 'PAK ANU', 'PAK SIRE');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sharing`
--

CREATE TABLE `sharing` (
  `nama` varchar(255) NOT NULL,
  `masalah` text NOT NULL,
  `tanggal` date NOT NULL,
  `kelas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sharing`
--

INSERT INTO `sharing` (`nama`, `masalah`, `tanggal`, `kelas`) VALUES
('seba', 'dendam sama dina', '2023-04-10', 'x tkj'),
('WQRFQW', 'QWRWQR', '2023-04-10', 'RQWQW');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `data_siswa`
--
ALTER TABLE `data_siswa`
  ADD PRIMARY KEY (`NIS`);

--
-- Indeks untuk tabel `konsultasi`
--
ALTER TABLE `konsultasi`
  ADD PRIMARY KEY (`nama`);

--
-- Indeks untuk tabel `login_siswa`
--
ALTER TABLE `login_siswa`
  ADD PRIMARY KEY (`username`);

--
-- Indeks untuk tabel `permision`
--
ALTER TABLE `permision`
  ADD PRIMARY KEY (`kelas`);

--
-- Indeks untuk tabel `sharing`
--
ALTER TABLE `sharing`
  ADD PRIMARY KEY (`nama`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_siswa`
--
ALTER TABLE `data_siswa`
  MODIFY `NIS` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24564;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

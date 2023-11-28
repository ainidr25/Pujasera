-- Create database

CREATE DATABASE postgres;

-- Create tables
CREATE TABLE Barang (
  KodeBarang SERIAL PRIMARY KEY,
  NamaBarang VARCHAR(255) NOT NULL,
  Satuan VARCHAR(50),
  HargaSatuan NUMERIC(10, 2) NOT NULL,
  Stok INT NOT NULL
);

CREATE TABLE Kasir (
  KodeKasir SERIAL PRIMARY KEY,
  Nama VARCHAR(255) NOT NULL,
  HP VARCHAR(15) NOT NULL
);

CREATE TABLE Tenan (
  KodeTenan SERIAL PRIMARY KEY,
  NamaTenan VARCHAR(255) NOT NULL,
  HP VARCHAR(15) NOT NULL
);

CREATE TABLE Nota (
  KodeNota SERIAL PRIMARY KEY,
  KodeTenan INT REFERENCES Tenan(KodeTenan),
  KodeKasir INT REFERENCES Kasir(KodeKasir),
  TglNota DATE NOT NULL,
  JamNota TIME NOT NULL,
  JumlahBelanja NUMERIC(10, 2) NOT NULL,
  Diskon NUMERIC(5, 2),
  Total NUMERIC(10, 2) NOT NULL
);

CREATE TABLE BarangNota (
  KodeNota INT REFERENCES Nota(KodeNota),
  KodeBarang INT REFERENCES Barang(KodeBarang),
  JumlahBarang INT NOT NULL,
  HargaSatuan NUMERIC(10, 2) NOT NULL,
  Jumlah NUMERIC(10, 2) NOT NULL,
  PRIMARY KEY (KodeNota, KodeBarang)
);

DROP TABLE IF EXISTS Barangs;
DROP TABLE IF EXISTS Kasir;
DROP TABLE IF EXISTS Tenan;
DROP TABLE IF EXISTS Nota;
DROP TABLE IF EXISTS BarangNota;

-- Drop foreign key constraint in BarangNota table
ALTER TABLE BarangNota DROP CONSTRAINT fk_barang;
-- Drop the "barang" table and all dependent objects
DROP TABLE Barangs CASCADE;

-- Drop database

DROP DATABASE IF EXISTS postgres;

DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

// BarangController.js
import Barang from '../models/BarangModels.js';

export const createBarang = async (req, res) => {
    try {
        const barang = await Barang.create(req.body);
        res.status(201).json({ msg: "Barang Created", data: barang });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data Barang.' });
    }
}

export const showAllBarang = async (req, res) => {
    try {
      const allBarang = await Barang.findAll();
      res.status(200).json(allBarang);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Barang.' });
    }
  };

export const getBarangById = async (req, res) => {
    const { kodeBarang } = req.params;
    try {
        const barang = await Barang.findOne({ where: { KodeBarang: kodeBarang } });
        if (barang) {
            res.status(200).json(barang);
        } else {
            res.status(404).json({ msg: "Barang not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Barang.' });
    }
}

export const updateBarang = async (req, res) => {
    try {
        const { kodeBarang } = req.params;
        const [updatedRows] = await Barang.update(req.body, { where: { KodeBarang: kodeBarang } });
        if (updatedRows === 1) {
            res.status(200).json({ msg: "Barang updated successfully" });
        } else {
            res.status(404).json({ msg: "Barang not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate Barang" });
    }
}

export const deleteBarang = async (req, res) => {
    try {
        const { kodeBarang } = req.params;
        const deletedRowCount = await Barang.destroy({ where: { KodeBarang: kodeBarang } });
        if (deletedRowCount === 1) {
            res.status(200).json({ msg: "Barang deleted successfully" });
        } else {
            res.status(404).json({ msg: "Barang not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus Barang" });
    }
}

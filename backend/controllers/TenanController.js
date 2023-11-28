import Tenan from '../models/TenanModels.js';

export const createTenan = async (req, res) => {
    try {
        const tenan = await Tenan.create(req.body);
        res.status(201).json({ msg: "Tenan Created", data: tenan });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data Tenan.' });
    }
}
export const showAllTenan= async (req, res) => {
    try {
      const allTenan = await Tenan.findAll();
      res.status(200).json(allTenan);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Barang.' });
    }
  };

export const getTenanById = async (req, res) => {
    const { kodeTenan } = req.params;
    try {
        const tenan = await Tenan.findOne({ where: { KodeTenan: kodeTenan } });
        if (tenan) {
            res.status(200).json(tenan);
        } else {
            res.status(404).json({ msg: "Tenan not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Tenan.' });
    }
}

export const updateTenan = async (req, res) => {
    try {
        const { kodeTenan } = req.params;
        const [updatedRows] = await Tenan.update(req.body, { where: { KodeTenan: kodeTenan } });
        if (updatedRows === 1) {
            res.status(200).json({ msg: "Tenan updated successfully" });
        } else {
            res.status(404).json({ msg: "Tenan not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate Tenan" });
    }
}

export const deleteTenan = async (req, res) => {
    try {
        const { kodeTenan } = req.params;
        const deletedRowCount = await Tenan.destroy({ where: { KodeTenan: kodeTenan } });
        if (deletedRowCount === 1) {
            res.status(200).json({ msg: "Tenan deleted successfully" });
        } else {
            res.status(404).json({ msg: "Tenan not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus Tenan" });
    }
}

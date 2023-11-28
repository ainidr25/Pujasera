import Kasir from '../models/KasirModels.js';

export const createKasir = async (req, res) => {
    try {
        const kasir = await Kasir.create(req.body);
        res.status(201).json({ msg: "Kasir Created", data: kasir });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data Kasir.' });
    }
}

export const showAllKasir = async (req, res) => {
    try {
      const allKasir = await Kasir.findAll();
      res.status(200).json(allKasir);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Barang.' });
    }
  };

export const getKasirById = async (req, res) => {
    const { kodeKasir } = req.params;
    try {
        const kasir = await Kasir.findOne({ where: { KodeKasir: kodeKasir } });
        if (kasir) {
            res.status(200).json(kasir);
        } else {
            res.status  (404).json({ msg: "Kasir not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Kasir.' });
    }
}

export const updateKasir = async (req, res) => {
    try {
        const { kodeKasir } = req.params;
        const [updatedRows] = await Kasir.update(req.body, { where: { KodeKasir: kodeKasir } });
        if (updatedRows === 1) {
            res.status(200).json({ msg: "Kasir updated successfully" });
        } else {
            res.status(404).json({ msg: "Kasir not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate Kasir" });
    }
}

export const deleteKasir = async (req, res) => {
    try {
        const { kodeKasir } = req.params;
        const deletedRowCount = await Kasir.destroy({ where: { KodeKasir: kodeKasir } });
        if (deletedRowCount === 1) {
            res.status(200).json({ msg: "Kasir deleted successfully" });
        } else {
            res.status(404).json({ msg: "Kasir not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus Kasir" });
    }
}

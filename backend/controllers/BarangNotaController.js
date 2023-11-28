import BarangNota from '../models/BarangNotaModels.js';

export const createBarangNota = async (req, res) => {
    try {
        const barangNota = await BarangNota.create(req.body);
        res.status(201).json({ msg: "BarangNota Created", data: barangNota });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data BarangNota.' });
    }
}

export const showAllBarangNota = async (req, res) => {
    try {
      const AllBarangNota = await BarangNota.findAll();
      res.status(200).json(AllBarangNota);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Barang.' });
    }
  };

export const getBarangNotaById = async (req, res) => {
    const { kodeNota, kodeBarang } = req.params;
    try {
        const barangNota = await BarangNota.findOne({
            where: { KodeNota: kodeNota, KodeBarang: kodeBarang }
        });
        if (barangNota) {
            res.status(200).json(barangNota);
        } else {
            res.status(404).json({ msg: "BarangNota not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data BarangNota.' });
    }
}

export const updateBarangNota = async (req, res) => {
    try {
        const { kodeNota, kodeBarang } = req.params;
        const [updatedRows] = await BarangNota.update(req.body, {
            where: { KodeNota: kodeNota, KodeBarang: kodeBarang }
        });
        if (updatedRows === 1) {
            res.status(200).json({ msg: "BarangNota updated successfully" });
        } else {
            res.status(404).json({ msg: "BarangNota not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate BarangNota" });
    }
}

export const deleteBarangNota = async (req, res) => {
    const { kodeNota, kodeBarang } = req.params;
    try {
        const deletedRowCount = await BarangNota.destroy({
            where: { KodeNota: kodeNota, KodeBarang: kodeBarang }
        });
        if (deletedRowCount === 1) {
            res.status(200).json({ msg: "BarangNota deleted successfully" });
        } else {
            res.status(404).json({ msg: "BarangNota not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus BarangNota" });
    }
}

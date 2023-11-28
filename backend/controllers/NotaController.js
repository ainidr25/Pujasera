import Nota from '../models/NotaModels.js';

export const createNota = async (req, res) => {
    try {
        const nota = await Nota.create(req.body);
        res.status(201).json({ msg: "Nota Created", data: nota });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data Nota.' });
    }
}

export const showAllNota= async (req, res) => {
    try {
      const allNota = await Nota.findAll();
      res.status(200).json(allNota);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Barang.' });
    }
  };

export const getNotaById = async (req, res) => {
    const { kodeNota } = req.params;
    try {
        const nota = await Nota.findOne({ where: { KodeNota: kodeNota } });
        if (nota) {
            res.status(200).json(nota);
        } else {
            res.status(404).json({ msg: "Nota not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Nota.' });
    }
}

export const updateNota = async (req, res) => {
    try {
        const { kodeNota } = req.params;
        const [updatedRows] = await Nota.update(req.body, { where: { KodeNota: kodeNota } });
        if (updatedRows === 1) {
            res.status(200).json({ msg: "Nota updated successfully" });
        } else {
            res.status(404).json({ msg: "Nota not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate Nota" });
    }
}

export const deleteNota = async (req, res) => {
    try {
        const { kodeNota } = req.params;
        const deletedRowCount = await Nota.destroy({ where: { KodeNota: kodeNota } });
        if (deletedRowCount === 1) {
            res.status(200).json({ msg: "Nota deleted successfully" });
        } else {
            res.status(404).json({ msg: "Nota not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus Nota" });
    }
}

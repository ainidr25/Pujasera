import express from 'express';
import { createBarang, showAllBarang, getBarangById, updateBarang, deleteBarang,} from '../controllers/BarangController.js';
import { createKasir, showAllKasir, getKasirById, updateKasir, deleteKasir,} from '../controllers/KasirController.js';
import { createTenan, showAllTenan, getTenanById, updateTenan, deleteTenan,} from '../controllers/TenanController.js';
import { createNota, showAllNota, getNotaById, updateNota, deleteNota,} from '../controllers/NotaController.js';
import { createBarangNota, showAllBarangNota, getBarangNotaById, updateBarangNota, deleteBarangNota,} from '../controllers/BarangNotaController.js';

const router = express.Router();
// Barang
router.post('/barang', createBarang);
router.get('/barang', showAllBarang);
router.get('/barang/:kodeBarang', getBarangById);
router.patch('/barang/:kodeBarang', updateBarang);
router.delete('/barang/:kodeBarang', deleteBarang);

// Kasir
router.post('/kasir', createKasir);
router.get('/kasir', showAllKasir);
router.get('/kasir/:kodeKasir', getKasirById);
router.patch('/kasir/:kodeKasir', updateKasir);
router.delete('/kasir/:kodeKasir', deleteKasir);

// Tenan
router.post('/tenan', createTenan);
router.get('/tenan', showAllTenan);
router.get('/tenan/:kodeTenan', getTenanById);
router.patch('/tenan/:kodeTenan', updateTenan);
router.delete('/tenan/:kodeTenan', deleteTenan);

// Nota
router.post('/nota', createNota);
router.get('/nota', showAllNota);
router.get('/nota/:kodeNota', getNotaById);
router.patch('/nota/:kodeNota', updateNota);
router.delete('/nota/:kodeNota', deleteNota);

// BarangNota
router.post('/barangNota', createBarangNota);
router.get('/barangNota', showAllBarangNota);
router.get('/barangNota/:kodeBarangNota', getBarangNotaById);
router.patch('/barangNota/:kodeBarangNota/:kodeBarang', updateBarangNota);
router.delete('/barangNota/:kodeBarangNota/:kodeBarang', deleteBarangNota);

export default router;

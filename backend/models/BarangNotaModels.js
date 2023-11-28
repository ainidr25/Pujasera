// BarangNotaModels.js
import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const BarangNota = db.define('BarangNota', {
  JumlahBarang: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  HargaSatuan: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Jumlah: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

export default BarangNota;

(async () => {
    await db.sync();
})();
import db from "../config/database.js";
import { DataTypes } from 'sequelize';

// Define BarangNota model
const BarangNota = db.define('BarangNota', {
  KodeNota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Nota',
      key: 'KodeNota'
    }
  },
  KodeBarang: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Barang',
      key: 'KodeBarang'
    }
  },
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
}, {
});

export default BarangNota;

(async () => {
  await db.sync();
})();

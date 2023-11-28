import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Barang = db.define('Barang', {
    KodeBarang: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    NamaBarang: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Satuan: {
        type: DataTypes.STRING
    },
    HargaSatuan: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    Stok: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Barang',
    timestamps: true
});

export default Barang;

(async () => {
  await db.sync();
})();

// NotaModels.js
import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Nota = db.define('Nota', {
  KodeNota: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  KodeTenan: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Tenans',
      key: 'KodeTenan',
    },
  },
  KodeKasir: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Kasirs',
      key: 'KodeKasir',
    },
  },
  TglNota: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  JamNota: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  JumlahBelanja: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Diskon: {
    type: DataTypes.DECIMAL(5, 2),
  },
  Total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

export default Nota;
(async () => {
    await db.sync();
})();
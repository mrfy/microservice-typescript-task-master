import { DataTypes, Model } from "sequelize";

import sequelize from "../../clients/sequelize";

interface LeadAttrs {
  id: number;
  name: string | null;
  domain: string | null;
  lastVisit: Date | null;
}

class Lead extends Model<LeadAttrs, Partial<LeadAttrs>> implements LeadAttrs {
  public id!: number;
  public name!: string | null;
  public domain!: string | null;
  public lastVisit!: Date | null;
}

Lead.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    domain: DataTypes.STRING,
    lastVisit: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "Lead",
    tableName: "leads",
    timestamps: true,
  }
);

export default Lead;

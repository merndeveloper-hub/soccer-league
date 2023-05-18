const mongoose = require("mongoose");
const schemaType = require("../../types");

const matchSchema = new mongoose.Schema(
  {
    team_Name: {
      type: schemaType.TypeString,
    },
    opposite_team: {
      type: schemaType.TypeString,
    },
    date: {
      type: schemaType.TypeDate,
    },
    venu: {
      type: schemaType.TypeString,
    },
  },
  { timestamps: true }
);

module.exports = matchSchema;

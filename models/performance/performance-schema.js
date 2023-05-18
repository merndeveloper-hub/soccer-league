const mongoose = require("mongoose");
const schemaType = require("../../types");

const performanceSchema = new mongoose.Schema(
  {
    team_Name: {
      type: schemaType.TypeString,
    },
    total_goals: {
      type: schemaType.TypeNumber,
    },
    shots_pg: {
      type: schemaType.TypeNumber,
    },
    discipline: {
      type: schemaType.TypeNumber,
    },
    possession: {
      type: schemaType.TypeNumber,
    },
    pass: {
      type: schemaType.TypeNumber,
    },
    aerial_won: {
      type: schemaType.TypeNumber,
    },
    rating: {
      type: schemaType.TypeNumber,
    },
  },
  { timestamps: true }
);

module.exports = performanceSchema;

const mongoose = require("mongoose");
const schemaType = require("../../types");

const playerSetupSchema = new mongoose.Schema(
  {
    team_Name: {
      type: schemaType.TypeString,
    },
    player_1: {
      type: schemaType.TypeString,
    },
    player_2: {
      type: schemaType.TypeString,
    },
    player_3: {
      type: schemaType.TypeString,
    },
    player_4: {
      type: schemaType.TypeString,
    },
    player_5: {
      type: schemaType.TypeString,
    },
    player_6: {
      type: schemaType.TypeString,
    },
    player_7: {
      type: schemaType.TypeString,
    },
    player_8: {
      type: schemaType.TypeString,
    },
    player_9: {
      type: schemaType.TypeString,
    },
    player_10: {
      type: schemaType.TypeString,
    },
    player_11: {
      type: schemaType.TypeString,
    },
  },
  { timestamps: true }
);

module.exports = playerSetupSchema;

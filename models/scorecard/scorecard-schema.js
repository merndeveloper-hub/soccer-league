const mongoose = require("mongoose");
const schemaType = require("../../types");

const teamScorecard = new mongoose.Schema(
  {
    team_Name: {
      type: schemaType.TypeString,
    },
    opposite_team: {
        type: schemaType.TypeString,
      },
    goal_keeper_save: {
      type: schemaType.TypeNumber,
    },
    highest_scorer: {
      type: schemaType.TypeString,
    },
    most_assists: {
      type: schemaType.TypeString,
    },
    best_defence: {
      type: schemaType.TypeString,
    },
  },
  { timestamps: true }
);

module.exports = teamScorecard;

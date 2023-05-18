const mongoose = require("mongoose");
const schemaType = require("../../types");

const playerSchema = new mongoose.Schema(
  {
    team_Name:{
        type:schemaType.TypeString
    },
    name:{
        type:schemaType.TypeString
    },
    appearances:{
        type:schemaType.TypeNumber
    },
    goals:{
        type:schemaType.TypeNumber
    },
    assists:{
        type:schemaType.TypeNumber
    },
    cross_Accuracy:{
        type:schemaType.TypeNumber
    },
    key_passes:{
        type:schemaType.TypeNumber
    },
    tackles:{
        type:schemaType.TypeNumber
    },
    profile_img:{
        type:schemaType.TypeString
    }

    },
          { timestamps: true }
);

module.exports = playerSchema;



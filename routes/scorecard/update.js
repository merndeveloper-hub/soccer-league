const Joi = require("joi");
const { findOne, updateDocument } = require("../../helpers");
const cloudinary = require("cloudinary").v2;

const schema = Joi.object({
    team_Name: Joi.string(),
    goal_keeper_save: Joi.number(),
    highest_scorer: Joi.string(),
    most_assists: Joi.string(),
    best_defence: Joi.string(),
    opposite_team: Joi.string(),
});

const updateScoreCard = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    console.log(req.body);
    console.log(req.files);
    const _id = req.params.id;

    let scoreCard = await findOne("scorecard", { _id });
    if (!scoreCard) {
      return res.status(400).send({ status: 400, message: "No scoreCard Found" });
    }

  
    scoreCard = await updateDocument("scorecard", { _id }, req.body);

    return res
      .status(200)
      .send({ status: 200, message: "scoreCard Updated Successfully", scoreCard });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = updateScoreCard;

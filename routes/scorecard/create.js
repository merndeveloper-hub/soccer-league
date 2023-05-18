const Joi = require("joi");
const { insertNewDocument } = require("../../helpers");

const schema = Joi.object({
  team_Name: Joi.string().required(),
  goal_keeper_save: Joi.number().required(),
  highest_scorer: Joi.string().required(),
  opposite_team: Joi.string().required(),
  most_assists: Joi.string().required(),
  best_defence: Joi.string().required(),
});

const createScoreCard = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    console.log(req.body, "req....");

    const scoreCard = await insertNewDocument("scorecard", {
      team_Name: req?.body?.team_Name,
      goal_keeper_save: req?.body?.goal_keeper_save,
      highest_scorer: req?.body?.highest_scorer,
      most_assists: req?.body?.most_assists,
      best_defence: req?.body?.best_defence,
      opposite_team: req?.body?.opposite_team,
    });

    console.log(scoreCard, "scoreCard...");

    return res.status(200).send({ status: 200, scoreCard });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = createScoreCard;

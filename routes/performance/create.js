const Joi = require("joi");
const { insertNewDocument } = require("../../helpers");
const cloudinary = require("cloudinary").v2;

const schema = Joi.object({
  team_Name: Joi.string().required(),
  total_goals: Joi.number().required(),
  shots_pg: Joi.number().required(),
  discipline: Joi.number().required(),
  possession: Joi.number().required(),
  pass: Joi.number().required(),
  aerial_won: Joi.number().required(),
  rating: Joi.number().required(),
});


const createPerformance = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    console.log(req.body, "req....");


    const performances = await insertNewDocument("performance", {
      team_Name: req?.body?.team_Name,
      total_goals: req?.body?.total_goals,
      shots_pg: req?.body?.shots_pg,
      discipline: req?.body?.discipline,
      possession: req?.body?.possession,
      pass: req?.body?.pass,
      aerial_won: req?.body?.aerial_won,
      rating: req?.body?.rating,
    });

    console.log(performances, "performances...");

    return res.status(200).send({ status: 200, performances });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = createPerformance;

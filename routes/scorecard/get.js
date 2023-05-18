const { find } = require("../../helpers");
const Joi = require("joi");

const schema = Joi.object({
  team_Name: Joi.string().required(),
});


const getScores = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    const { team_Name } = req.query;

    const getScoreCard = await find("scorecard", {
      team_Name,
    });
    if (!getScoreCard) {
      return res.status(200).json({ status: 500, msg: "Oops no data found" });
    }
console.log(getScoreCard,"getScoreCard");
    return res.status(200).json({
      status: 200,
      msg: getScoreCard,
      nbhit: getScoreCard.length,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = getScores;

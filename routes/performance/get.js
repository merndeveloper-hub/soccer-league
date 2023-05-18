const { find } = require("../../helpers");
const Joi = require("joi");

const schema = Joi.object({
  team_Name: Joi.string().required(),
});


const getPerformance = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    const { team_Name } = req.query;

    const getTeamPerformance = await find("performance", {
      team_Name,
    });
    if (!getTeamPerformance) {
      return res.status(200).json({ status: 500, msg: "Oops no data found" });
    }
console.log(getTeamPerformance,"getTeamPerformance");
    return res.status(200).json({
      status: 200,
      msg: getTeamPerformance,
      nbhit: getTeamPerformance.length,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = getPerformance;

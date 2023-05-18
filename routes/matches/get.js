const { find } = require("../../helpers");
const Joi = require("joi");

const schema = Joi.object({
  team_Name: Joi.string().required(),
});

const getTeam = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    const { team_Name } = req.query;

    const getTeamMatch = await find("matche", {
      team_Name,
    });

    if (!getTeamMatch) {
      return res.status(200).json({ status: 500, msg: "Oops no data found" });
    }

    return res.status(200).json({
      status: 200,
      msg: getTeamMatch,
      nbhit: getTeamMatch.length,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = getTeam;

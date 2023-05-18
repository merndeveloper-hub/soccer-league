const { find } = require("../../helpers");
const Joi = require("joi");

const schema = Joi.object({
  team_Name: Joi.string().required(),
});


const getPlayers = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    const { team_Name } = req.query;

    const getTeamPlayer = await find("playersetup", {
      team_Name,
    });
    if (!getTeamPlayer) {
      return res.status(200).json({ status: 500, msg: "Oops no data found" });
    }
console.log(getTeamPlayer,"getTeamPlayer");
    return res.status(200).json({
      status: 200,
      msg: getTeamPlayer,
      nbhit: getTeamPlayer.length,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = getPlayers;

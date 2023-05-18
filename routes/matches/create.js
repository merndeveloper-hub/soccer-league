const Joi = require("joi");
const { insertNewDocument } = require("../../helpers");
const cloudinary = require("cloudinary").v2;

const schema = Joi.object({
  team_Name: Joi.string().required(),
  opposite_team: Joi.string().required(),
  venu: Joi.string().required(),
  date: Joi.string().required(),
});

const createMatch = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    console.log(req.body, "req....");

    const matches = await insertNewDocument("matche", {
      team_Name: req?.body?.team_Name,
      opposite_team: req?.body?.opposite_team,
      venu: req?.body?.venu,
      date: req?.body?.date,
    });

    return res.status(200).send({ status: 200, matches });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = createMatch;

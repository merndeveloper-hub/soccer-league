const Joi = require("joi");
const { findOne, updateDocument } = require("../../helpers");
const cloudinary = require("cloudinary").v2;

const schema = Joi.object({
    team_Name: Joi.string(),
    opposite_team: Joi.string(),
    venu: Joi.string(),
    date: Joi.string(),
});

const updateMatch = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    
    const _id = req.params.id;

    let match = await findOne("matche", { _id });
    if (!match) {
      return res.status(400).send({ status: 400, message: "No match Found" });
    }

    match = await updateDocument("matche", { _id }, req.body);

    return res
      .status(200)
      .send({ status: 200, message: "match Updated Successfully", match });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = updateMatch;

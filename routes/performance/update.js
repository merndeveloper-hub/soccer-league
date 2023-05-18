const Joi = require("joi");
const { findOne, updateDocument } = require("../../helpers");
const cloudinary = require("cloudinary").v2;

const schema = Joi.object({
  team_Name: Joi.string(),
  name: Joi.string(),
  profile_img: Joi.string(),
  appearances: Joi.number(),
  goals: Joi.number(),
  assists: Joi.number(),
  cross_Accuracy: Joi.number(),
  key_passes: Joi.number(),
  tackles: Joi.number(),
});

const updatePerformance = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    console.log(req.body);
    console.log(req.files);
    const _id = req.params.id;

    let data = await findOne("performance", { _id });
    if (!data) {
      return res.status(400).send({ status: 400, message: "No team performance Found" });
    }

    

    data = await updateDocument("performance", { _id }, req.body);

    return res
      .status(200)
      .send({ status: 200, message: "Performance Updated Successfully", data });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = updatePerformance;

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

const updatePlayer = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    console.log(req.body);
    console.log(req.files);
    const _id = req.params.id;

    let player = await findOne("player", { _id });
    if (!player) {
      return res.status(400).send({ status: 400, message: "No player Found" });
    }

    if (req?.files?.profile_img?.path) {
      const profileImage = await cloudinary.uploader.upload(
        req?.files?.profile_img?.path
      );
      req.body.profile_img = profileImage.url;
    }

    player = await updateDocument("player", { _id }, req.body);

    return res
      .status(200)
      .send({ status: 200, message: "Player Updated Successfully", player });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = updatePlayer;

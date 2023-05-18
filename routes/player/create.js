const Joi = require("joi");
const { insertNewDocument } = require("../../helpers");
const cloudinary = require("cloudinary").v2;

const schema = Joi.object({
  team_Name: Joi.string().required(),
  name: Joi.string().required(),
  profile_img: Joi.string(),
  appearances: Joi.number().required(),
  goals: Joi.number().required(),
  assists: Joi.number().required(),
  cross_Accuracy: Joi.number().required(),
  key_passes: Joi.number().required(),
  tackles: Joi.number().required(),
});

const createPlayer = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    console.log(req.body, "req....");

    if (req?.files?.profile_img?.path) {
      const profileImage = await cloudinary.uploader.upload(
        req?.files?.profile_img?.path
      );
      req.body.profile_img = profileImage.url;
    }

    const playerCreate = await insertNewDocument("player", {
      team_Name: req?.body?.team_Name,
      name: req?.body?.name,
      profile_img: req?.body?.profile_img,
      appearances: req?.body?.appearances,
      goals: req?.body?.goals,
      assists: req?.body?.assists,
      cross_Accuracy: req?.body?.cross_Accuracy,
      key_passes: req?.body?.key_passes,
      tackles: req?.body?.tackles,
    });

    console.log(playerCreate, "playerCreate...");

    return res.status(200).send({ status: 200, playerCreate });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = createPlayer;

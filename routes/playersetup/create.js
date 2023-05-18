const Joi = require("joi");
const { insertNewDocument } = require("../../helpers");
const cloudinary = require("cloudinary").v2;

const schema = Joi.object({
 team_Name: Joi.string().required(),
 player_1:Joi.string(),
 player_2:Joi.string(),
 player_3:Joi.string(),
 player_4:Joi.string(),
 player_5:Joi.string(),
 player_6:Joi.string(),
 player_7:Joi.string(),
 player_8:Joi.string(),
 player_9:Joi.string(),
 player_10:Joi.string(),
 player_11:Joi.string(),
});

const createPlayerSetup = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    console.log(req.body, "req....");

    if (req?.files?.player_1?.path) {
      const profileImage1 = await cloudinary.uploader.upload(
        req?.files?.player_1?.path
      );
      req.body.player_1 = profileImage1.url;
    }
    if (req?.files?.player_2?.path) {
        const profileImage2 = await cloudinary.uploader.upload(
          req?.files?.player_2?.path
        );
        req.body.player_2 = profileImage2.url;
      }
      if (req?.files?.player_3?.path) {
        const profileImage3 = await cloudinary.uploader.upload(
          req?.files?.player_3?.path
        );
        req.body.player_3 = profileImage3.url;
      }
      if (req?.files?.player_4?.path) {
        const profileImage4 = await cloudinary.uploader.upload(
          req?.files?.player_4?.path
        );
        req.body.player_4 = profileImage4.url;
      }
      if (req?.files?.player_5?.path) {
        const profileImage5 = await cloudinary.uploader.upload(
          req?.files?.player_5?.path
        );
        req.body.player_5 = profileImage5.url;
      }
      if (req?.files?.player_6?.path) {
        const profileImage6 = await cloudinary.uploader.upload(
          req?.files?.player_6?.path
        );
        req.body.player_6 = profileImage6.url;
      }
      if (req?.files?.player_7?.path) {
        const profileImage7 = await cloudinary.uploader.upload(
          req?.files?.player_7?.path
        );
        req.body.player_7 = profileImage7.url;
      }
      if (req?.files?.player_8?.path) {
        const profileImage8 = await cloudinary.uploader.upload(
          req?.files?.player_8?.path
        );
        req.body.player_8 = profileImage8.url;
      }
      if (req?.files?.player_9?.path) {
        const profileImage9 = await cloudinary.uploader.upload(
          req?.files?.player_9?.path
        );
        req.body.player_9 = profileImage9.url;
      }
      if (req?.files?.player_10?.path) {
        const profileImage10 = await cloudinary.uploader.upload(
          req?.files?.player_10?.path
        );
        req.body.player_10 = profileImage10.url;
      }
      if (req?.files?.player_11?.path) {
        const profileImage11 = await cloudinary.uploader.upload(
          req?.files?.player_11?.path
        );
        req.body.player_11 = profileImage11.url;
      }

    const playerCreate = await insertNewDocument("playersetup", {
      team_Name: req?.body?.team_Name,
      player_1: req?.body?.player_1,
      player_2: req?.body?.player_2,
      player_3: req?.body?.player_3,
      player_4: req?.body?.player_4,
      player_5: req?.body?.player_5,
      player_6: req?.body?.player_6,
      player_7: req?.body?.player_7,
      player_8: req?.body?.player_8,
      player_9: req?.body?.player_9,
      player_10: req?.body?.player_10,
      player_11: req?.body?.player_11,
     
    });

    console.log(playerCreate, "playerCreate...");

    return res.status(200).send({ status: 200, playerCreate });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = createPlayerSetup;

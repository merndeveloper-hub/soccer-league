const Joi = require("joi");
const { findOne, deleteDocument } = require("../../helpers");


const deleted = async (req, res) => {
  try {

    const { id } = req.body;
    const player = await findOne("player", {
      _id: id,
      
    });
    if (!player) {
      return res.status(404).send({ status: 404, message: "No Player Found" });
    }
    const deletePlayer = await deleteDocument("player", { _id: id  });
    req.io.emit(player?._id.valueOf() + "deletePlayer", {
      id: player._id,
    });
    
    return res
      .status(200)
      .send({ status: 200, deletePlayer, message: "Player deleted successfully" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ status: 500, message: e.message });
  }
};

module.exports = deleted;




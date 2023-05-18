const Joi = require("joi");
const { findOne, deleteDocument } = require("../../helpers");


const deleted = async (req, res) => {
  try {

    const { id } = req.body;
    const scoreCard = await findOne("scorecard", {
      _id: id,
      
    });
    if (!scoreCard) {
      return res.status(404).send({ status: 404, message: "No Scorecard Found" });
    }
    const deletescoreCard = await deleteDocument("scorecard", { _id: id  });
    req.io.emit(scoreCard?._id.valueOf() + "deletescoreCard", {
      id: scoreCard._id,
    });
    
    return res
      .status(200)
      .send({ status: 200, deletescoreCard, message: "Scorecard deleted successfully" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ status: 500, message: e.message });
  }
};

module.exports = deleted;




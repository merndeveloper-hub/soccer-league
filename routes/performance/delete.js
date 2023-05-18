const Joi = require("joi");
const { findOne, deleteDocument } = require("../../helpers");


const deleted = async (req, res) => {
  try {

    const { id } = req.body;
    const performance = await findOne("performance", {
      _id: id,
      
    });
    if (!performance) {
      return res.status(404).send({ status: 404, message: "No Player Found" });
    }
    const deletePerformance = await deleteDocument("performance", { _id: id  });
    req.io.emit(performance?._id.valueOf() + "deletePerformance", {
      id: performance._id,
    });
    
    return res
      .status(200)
      .send({ status: 200, deletePerformance, message: "Performance deleted successfully" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ status: 500, message: e.message });
  }
};

module.exports = deleted;




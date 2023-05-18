const Joi = require("joi");
const { findOne, deleteDocument } = require("../../helpers");

const cancelMatch = async (req, res) => {
  try {
    const { id } = req.body;
    const match = await findOne("matche", {
      _id: id,
    });
    if (!match) {
      return res.status(404).send({ status: 404, message: "No match Found" });
    }
    const deletematch = await deleteDocument("matche", { _id: id });
    req.io.emit(match?._id.valueOf() + "deletematch", {
      id: match._id,
    });

    return res
      .status(200)
      .send({
        status: 200,
        deletematch,
        message: "match deleted successfully",
      });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ status: 500, message: e.message });
  }
};

module.exports = cancelMatch;

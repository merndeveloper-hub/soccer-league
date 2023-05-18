const Models = require("../models");
const fs = require("fs");
const { storage } = require("../lib");
const { default: axios } = require("axios");

const find = async (modelDb, queryObj) =>
  await Models[modelDb].find(queryObj).exec();

const findOne = async (modelDb, queryObj) =>
  await Models[modelDb].findOne(queryObj).exec();
const findOneAndSelect = async (modelDb, queryObj, selectQuery) =>
  await Models[modelDb].findOne(queryObj).select(selectQuery).exec();

const insertNewDocument = async (modelDb, storeObj) => {
  let data = new Models[modelDb](storeObj);
  return await data.save();
};

const updateDocument = async (modelDb, updateQuery, setQuery) =>
  await Models[modelDb]
    .findOneAndUpdate(updateQuery, { $set: setQuery }, { new: true })
    .lean();

    const updateDocuments = async (modelDb, updateQuery, setQuery) =>
  await Models[modelDb]
    .updateMany(updateQuery, { $set: setQuery }, { multi:true})
    .lean();

const customUpdate = async (modelDb, updateQuery, setQuery) =>
  await Models[modelDb].updateOne(updateQuery, setQuery);

const findAndSort = async (modelDb, queryObj, querytime) =>
  await Models[modelDb].find(queryObj).sort(querytime).exec();

const pushIntoArray = async (modelDb, updateQuery, setQuery) =>
  await Models[modelDb].findOneAndUpdate(
    updateQuery,
    { $addToSet: setQuery },
    { new: true }
  );

const deleteDocument = async (modelDb, deleteQuery) =>
  await Models[modelDb].deleteOne(deleteQuery);

const deleteManyDocument = async (modelDb, deleteQuery) =>
  await Models[modelDb].deleteMany(deleteQuery);

const findOneAndPopulate = async (
  modelDb,
  searchQuery,
  populateQuery,
  selectQuery
) =>
  await Models[modelDb]
    .findOne(searchQuery)
    .populate({ path: populateQuery, select: selectQuery })
    .lean();

const findAndPopulate = async (
  modelDb,
  searchQuery,
  populateQuery,
  selectQuery
) =>
  await Models[modelDb]
    .find(searchQuery)
    .populate({ path: populateQuery, select: selectQuery })
    .lean();

const findPopulateSortAndLimit = async (
  modelDb,
  searchQuery,
  populateQuery,
  selectQuery,
  sortedBy,
  skip,
  limit
) =>
  await Models[modelDb]
    .find(searchQuery)
    .populate({ path: populateQuery, select: selectQuery })
    .sort(sortedBy)
    .skip(skip)
    .limit(limit)
    .lean();

const findSliceAndPopulate = async (
  modelDb,
  searchQuery,
  sliceQuery,
  populateQuery,
  selectQuery
) =>
  await Models[modelDb]
    .find(searchQuery, sliceQuery)
    .populate({ path: populateQuery, select: selectQuery })
    .lean();

const findAndPopulateNested = async (modelDb, searchQuery, populate) =>
  await Models[modelDb].find(searchQuery).populate(populate).lean();

const findSliceAndPopulateNested = async (
  modelDb,
  searchQuery,
  sliceQuery,
  populate
) =>
  await Models[modelDb].find(searchQuery, sliceQuery).populate(populate).lean();


const getAggregate = async (modelDb, aggregateQuery) =>
  await Models[modelDb].aggregate(aggregateQuery);

const findOneSliceAndPopulate = async (
  modelDb,
  searchQuery,
  sliceQuery,
  populateQuery,
  selectQuery
) =>
  await Models[modelDb]
    .findOne(searchQuery, sliceQuery)
    .populate({ path: populateQuery, select: selectQuery })
    .lean();

const findOneSliceAndCustomPopulate = async (
  modelDb,
  searchQuery,
  sliceQuery,
  customQuery
) =>
  await Models[modelDb]
    .findOne(searchQuery, sliceQuery)
    .populate(customQuery)
    .lean();

const getDataWithLimit = async (modelDb, searchQuery, skip, limit) =>
  await Models[modelDb]
    .find(searchQuery)
    .skip(skip)
    .limit(limit)
    .exec();

    // Sort data with limit--------------------------------------------
    const getDataWithSort = async (modelDb, searchQuery, sortedBy, skip, limit) =>
    await Models[modelDb]
      .find(searchQuery)
      .sort(sortedBy)
      .skip(skip)
      .limit(limit)
      .exec();
  



const getDataSelectWithLimit = async (
  modelDb,
  searchQuery,
  selectQuery,
  sortedBy,
  skip,
  limit
) =>
  await Models[modelDb]
    .find(searchQuery)
    .select(selectQuery)
    .sort(sortedBy)
    .skip(skip)
    .limit(limit)
    .exec();

const isValidURL = (string) => {
  var res = string?.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  // console.log(res);
  return res !== null;
};

const axiosGetCall = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("sawq", error);
  }
};
module.exports = {
  find,
  findOne,
  insertNewDocument,
  updateDocument,
  deleteDocument,
  findOneAndPopulate,
  findAndPopulate,
  pushIntoArray,
  findAndPopulateNested,
  customUpdate,
  getAggregate,
  findOneSliceAndPopulate,
  findOneSliceAndCustomPopulate,
  getDataWithLimit,
  getDataSelectWithLimit,
  findSliceAndPopulateNested,
  findSliceAndPopulate,
  findOneAndSelect,
  findPopulateSortAndLimit,
  deleteManyDocument,
  isValidURL,
  axiosGetCall,
  findAndSort,
 updateDocuments,
 getDataWithSort
};

const { ContentCreater } = require("../models");

/**create ContentCreater */
const createContentCreater = async (reqBody) => {
    return ContentCreater.create(reqBody);
}

/**get ContentCreater list */
const getContentCreaterList = async (req, res) => {
    return ContentCreater.find()
        .populate({
            path: "user_id",
            select: "user_name, profile_info"
        });
}

/**get ContentCreater details by id */
const getContentCreaterById = async (contentCreaterId) => {
    return ContentCreater.findById(contentCreaterId);
}

/**update ContentCreater */
const updateContentCreater = async (contentCreaterId, updateBody) => {
    return ContentCreater.findByIdAndUpdate(contentCreaterId, { $set: updateBody });
}

/**delete ContentCreater */
const deleteContentCreater = async (contentCreaterId) => {
    return ContentCreater.findByIdAndDelete(contentCreaterId);
}

module.exports = {
    createContentCreater,
    getContentCreaterList,
    getContentCreaterById,
    updateContentCreater,
    deleteContentCreater
}
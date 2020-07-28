//the name refer to the type Query in the schema
module.exports = async(_,{}, {models}) => {
    return await models.Podcast.find();
}
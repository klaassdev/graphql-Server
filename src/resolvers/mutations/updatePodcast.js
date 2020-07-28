module.exports = async(_,{id,input}, {models}) => {
    const podcastToUpdate = await models.Podcast.findOne({_id: id});
    
    Object.keys(input).forEach(values => {
        podcastToUpdate[value] = input[value];
    });

    const updatedPodcast = await podcastToUpdate.save();
    return updatedPodcast;
}
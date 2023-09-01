const feed = require('../model/feedModel')

const getFeed = (req, res) =>{
    feed.find().sort({ createdAt: -1})
    .then(result => {res.render('index', {feeds : result})})
    .catch(err => console.log(err))
}

const createNewFeed = (req, res) => {
    let newFeed = new feed(req.body)
    newFeed.save()
     .then(() => {res.redirect('/feed')})
     .catch(err => console.log(err));
};

const getFullMessage = (req, res) => {
    feed.findById(req.params.id)
    .then(result => res.render('message', {feed: result}))
    .catch(err => console.log(err))
}

const deleteMessage = (req, res) => {
    feed.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/feed'))
    .catch(err => console.log(err))
}

const getEditPage = (req, res) => {
    feed.findById(req.params.id)
    .then((result) => res.render('edit', {feed : result}))
    .catch(err => console.log(err))
}

const updateFeed = (req, res) => {
    feed.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.redirect(`/feed/${result._id}`))
    .catch(err => console.log(err))
}

module.exports = {
    getFeed,
    createNewFeed,
    getFullMessage,
    deleteMessage,
    getEditPage,
    updateFeed
}
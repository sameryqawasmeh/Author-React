const {Author} = require("../models/author.model");

module.exports.findAllAuthors = (request, response) => {
    Author.find()
        .then(allAuthors => response.json(allAuthors))
        .catch(err => response.json({ message: "Something went wrong", error: err}))
};

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
};
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
};
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(Author => response.json(Author))
        .catch(err => response.json(err))
};
module.exports.deleteAutor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
};

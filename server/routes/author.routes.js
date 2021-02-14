const AuthorController = require("../controllers/author.controller");

module.exports = (app) =>{
    app.get("/api/getAllAutshor", AuthorController.findAllAuthors);
    app.post("/api/creatNewAuthor", AuthorController.createAuthor);
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.delete('/api/deleteAutor/:id', AuthorController.deleteAutor);




}
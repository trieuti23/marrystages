const res = require("express/lib/response");

class NewsController {
    // [Get => news]
    index(req, res) {        
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('News detail!!!!')
    }
}
module.exports = new NewsController;
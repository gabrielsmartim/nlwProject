//server
const express = require('express')
const server = express()
const {pageLanding, pageStudy ,pageGiveClasses, saveClasses} = require('./pages')
//config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//initial server config
server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("save-class", saveClasses)
// start server
.listen(5500)

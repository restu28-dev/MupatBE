module.exports = (app) => {

    const kategori = require("../controllers/kategori.controller")

    let router = require("express").Router()

    

    router.post("/", kategori.create)

    router.get("/", kategori.readAll)

    router.get("/:id", kategori.readById)

    router.put("/:id", kategori.update)

    router.delete("/:id", kategori.delete)

  

    app.use("/api/kategori" , router)
}

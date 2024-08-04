module.exports = (app) => {

    const halaman_masuk = require("../controllers/halaman_masuk.controller")

    let router = require("express").Router()

    

    router.post("/", halaman_masuk.create)

    router.get("/", halaman_masuk.readAll)

    router.get("/:id", halaman_masuk.readById)

    router.put("/:id", halaman_masuk.update)

    router.delete("/:id", halaman_masuk.delete)

  

    app.use("/api/halaman_masuk" , router)
}

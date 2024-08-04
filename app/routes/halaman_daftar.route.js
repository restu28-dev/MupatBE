module.exports = (app) => {

    const halaman_daftar = require("../controllers/halaman_daftar.controller")

    let router = require("express").Router()

    

    router.post("/", halaman_daftar.create)

    router.get("/", halaman_daftar.readAll)

    router.get("/:id", halaman_daftar.readById)

    router.put("/:id", halaman_daftar.update)

    router.delete("/:id", halaman_daftar.delete)

  

    app.use("/api/halaman_daftar" , router)
}

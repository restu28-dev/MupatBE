module.exports = (app) => {

    const halaman_admin = require("../controllers/halaman_admin.controller")

    let router = require("express").Router()

    

    router.post("/", halaman_admin.create)

    router.get("/", halaman_admin.readAll)

    router.get("/:id", halaman_admin.readById)

    router.put("/:id", halaman_admin.update)

    router.delete("/:id", halaman_admin.delete)

  

    app.use("/api/halaman_admin" , router)
}

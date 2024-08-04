module.exports = (app) => {

    const produk = require("../controllers/produk.controller")

    let router = require("express").Router()

    

    router.post("/", produk.create)

    router.get("/", produk.readAll)

    router.get("/:id", produk.readById)

    router.put("/:id", produk.update)

    router.delete("/:id", produk.delete)

  

    app.use("/api/produk" , router)
}

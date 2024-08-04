module.exports = (app) => {

    const transaksi = require("../controllers/transaksi.controller")

    let router = require("express").Router()

    

    router.post("/", transaksi.create)

    router.get("/", transaksi.readAll)

    router.get("/:id", transaksi.readById)

    router.put("/:id", transaksi.update)

    router.delete("/:id", transaksi.delete)

  

    app.use("/api/transaksi" , router)
}

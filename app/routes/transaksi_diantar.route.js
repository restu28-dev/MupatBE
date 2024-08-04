module.exports = (app) => {

    const transaksi_diantar = require("../controllers/transaksi_diantar.controller")

    let router = require("express").Router()

    

    router.post("/", transaksi_diantar.create)

    router.get("/", transaksi_diantar.readAll)

    router.get("/:id", transaksi_diantar.readById)

    router.put("/:id", transaksi_diantar.update)

    router.delete("/:id", transaksi_diantar.delete)

  

    app.use("/api/transaksi_diantar" , router)
}

module.exports = (app) => {

    const transaksi_dijemput = require("../controllers/transaksi_dijemput.controller")

    let router = require("express").Router()

    

    router.post("/", transaksi_dijemput.create)

    router.get("/", transaksi_dijemput.readAll)

    router.get("/:id", transaksi_dijemput.readById)

    router.put("/:id", transaksi_dijemput.update)

    router.delete("/:id", transaksi_dijemput.delete)

  

    app.use("/api/transaksi_dijemput" , router)
}

const db = require('../models');
const transaksi_diantar = db.transaksi_diantar
exports.create = async (req, res) => { 
    console.log(req.body)
     const data_transaksi = {
        id: req.body.id,
        jam_pengantaran: req.body.jam_pengantaran,
        durasi: req.body.durasi,
        tanggal_sewa: req.body.tanggal_sewa,
        tanggal_pengembalian: req.body.status_transaksi,
        total_pembayaran: req.body.total_pembayaran,
    } 
    console.log("data_transaksi",data_transaksi)  
      await transaksi.create(data_transaksi) //menyimpan data_transaksi ke table transaksi
      .then(data => {
        res.send({
          message: "Data was insert successfully."
        })
        })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating data."
        });
      })
    }

    exports.readAll = async (req, res) => {
        await transaksi.findAll()
        .then(data => {
          res.send(data);
        })
      
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving data."
          });
        });
      }
    
      exports.readById = async (req, res) =>{
        const id = req.params.id
        await transaksi.findOne({where: { id: id}})
        .then(data => {
          res.send(data);
        })
    
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving data."
          });
        });
    }

    exports.update = async (req, res) => {
        const id = req.params.id
        await transaksi.update(req.body, { where: { id: id}})
        .then(num => {
            num == 1 ? res.send({
              message: "Data was updated successfully."
            }) : res.send({
              message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`
            });
        })
      
        .catch(err => {
          res.status(500).send({
            message: `Error updating Data with id=${id}`,
            error: err
          })
        })
      }

      exports.delete = async (req, res) => {
        const id = req.params.id
        await transaksi.destroy({ where: { 
          id: id
      }})
      
      .then(num => {
        num == 1 ? res.send({
          message: "Data was deleted successfully."
        }) : res.send({
          message: `Cannot delete Data with id=${id}. Maybe Data was not found or req.body is empty!`
        });
      })
      
        .catch(err => {
          res.status(500).send({
            message: `Error deleting Data with id=${id}`,
            error: err
          })
        })
      }

     
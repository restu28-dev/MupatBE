const db = require('../models');
const produk = db.produk
exports.create = async (req, res) => { 
    console.log(req.body)
     const data_produk = {
        id: req.body.id,
        merk: req.body.merk,
        gambar: req.body.gambar,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga,

        
    } 
    console.log("data_produk",data_produk)  
      await produk.create(data_produk) //menyimpan data_produk ke table produk
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
        await produk.findAll()
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
        await produk.findOne({where: { id: id}})
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
        await produk.update(req.body, { where: { id: id}})
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
        await produk.destroy({ where: { 
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

     
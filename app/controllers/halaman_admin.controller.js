const db = require('../models');
const halaman_admin= db.halaman_admin
exports.create = async (req, res) => { 
    console.log(req.body)
     const halaman_admin = {
        id: req.body.id,
        password: req.body.password,
        email: req.body.email,
    } 
    console.log("halaman_admin",halaman_admin)  
      await halaman_admin(halaman_admin) //menyimpan data_halaman_admin ke table halaman_admin
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
        await halaman_admin.findAll()
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
        await halaman_admin.findOne({where: { id: id}})
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
        await halaman_admin.update(req.body, { where: { id: id}})
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
        await halaman_admin.destroy({ where: { 
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

     
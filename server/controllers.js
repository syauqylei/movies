const Movies = require('./models')

class MoviesControllers {
  static findAll(req,res) {
    res.status(200).json( Movies.getAll())
  }
  
  static findById(req,res) {
    const id = +req.params.id
    res.status(200).json(Movies.getById(id))
  }

}

module.exports = MoviesControllers
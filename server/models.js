const fs = require('fs')

class Movies {
  constructor() {
    this.dataImport = fs.readFileSync('movies_metadata.json','utf8')
    this.movies = JSON.parse(this.dataImport)
  }
  
  getAll(){
    return this.movies
  }
  
  getById(id){
    const item = this.movies.filter( item => item.id === id)
    return item
  }
}

module.exports = Movies
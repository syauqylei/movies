const fs = require("fs");
const dataImport = fs.readFileSync("./server/movies_metadata.json", "utf8");
const movies = JSON.parse(dataImport);

module.exports = {
  getAll() {
    return movies;
  },
  getById(id) {
    const item = movies.filter((item) => item.id === id);
    return item;
  },
};


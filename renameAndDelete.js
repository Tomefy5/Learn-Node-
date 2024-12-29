var fs = require("fs");

// fs.renameSync('test.txt', 'change.txt')
// console.log('Renamed')

try {
  fs.unlinkSync("change.txt");
  console.log("Deleted");
} catch (error) {
    console.log("error")
}

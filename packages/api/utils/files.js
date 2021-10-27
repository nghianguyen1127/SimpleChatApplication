const fs = require("fs");

const readFile = (filePath, fileName, callback = (result) => result) => {
  try {
    const path = `${filePath}/${fileName}`;
    if (fs.existsSync(path)) {
      fs.readFile(path, "utf8", (err, content) => {
        if (err) throw err;
        return callback(JSON.parse(content));
      });
    } else {
      return callback(false);
    }
  } catch (err) {
    console.log("[READ FILE] error: " + err);
  }
};

const writeToFile = (
  filePath,
  fileName,
  data,
  callback = (result) => result
) => {
  try {
    const path = `${filePath}/${fileName}`;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    if (fileName.includes("detail")) {
      data += "\r\n";
      fs.appendFile(path, data, (err) => {
        if (err) throw err;
        return callback(true);
      });
    } else {
      fs.writeFile(path, data, (err) => {
        if (err) throw err;
        return callback(true);
      });
    }
  } catch (err) {
    console.log("[WRITE FILE] error: " + err);
  }
};

module.exports = {
  readFile,
  writeToFile,
};

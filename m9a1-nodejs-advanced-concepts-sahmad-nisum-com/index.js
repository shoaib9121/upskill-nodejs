const { Buffer } = require("buffer");
const fs = require("fs");
const { exec } = require("child_process");
const { stdin, stdout } = require("process");

const ROOT_DIR =
  "/Users/shoaibahmad/dev/upskill-nodejs/m9a1-nodejs-advanced-concepts-sahmad-nisum-com";
const DIRECTORY = ROOT_DIR + "/testDirectory";

if (!fs.existsSync(DIRECTORY)) {
  fs.mkdir(DIRECTORY, (err) => {
    if (err) {
      console.log("err", err);
    }
  });
  fs.mkdirSync(DIRECTORY, {
    recursive: true,
  });
}

const readline = require("readline").createInterface({
  input: stdin,
  output: stdout,
});

let dirs = null;

const makeDir = (path, depth) => {
  if (depth === dirs) return;
  const nPath = `${path}/nested-${depth}`;
  fs.mkdirSync(nPath, {
    recursive: true,
  });

  makeDir(nPath, depth + 1);
};

readline.question(`Name of directory? `, (rootDir) => {
  if (!fs.existsSync(`./${rootDir}`)) {
    fs.mkdirSync(rootDir, {
      recursive: true,
    });
    readline.question(`No. of directories? `, (numOfDirs) => {
      dirs = +numOfDirs;
      makeDir(`./${rootDir}`, 0);
      readline.close();
      process.exit();
    });
  } else {
    console.log("directory already exists");
    readline.close();
    // process.exit();
  }
});

/**
 *
 * **************************************************
 * DIRECTORY STATS
 * **************************************************
 */
console.log(
  fs.stat(DIRECTORY, (err, stats) => {
    if (err) {
      console.log("err", err);
    } else {
      console.log("stats", stats);
    }
  })
);

/**
 *
 * **************************************************
 * READ DIRECTORY
 * **************************************************
 */
fs.readdirSync(DIRECTORY, (err, files) => {
  if (err) {
    console.log("err", err);
  } else {
    console.log("files", files);
  }
});

/**
 *
 * **************************************************
 * ACCESS DIRECTORY
 * **************************************************
 */
fs.access(DIRECTORY, (error) => {
  if (error) {
    console.log("Directory does not exist.");
  } else {
    console.log("Directory exists.");
  }
});

/**
 *
 * **************************************************
 * READ FILE CONTENT
 * **************************************************
 */
let fileContent = "";
const readFileContent = () => {
  try {
    const data = fs.readFileSync("./file.txt", "utf-8");
    return data;
  } catch (error) {
    console.log(error);
  }
};
fileContent = readFileContent();
console.log("Existing file content", fileContent);

/**
 *
 * **************************************************
 * WRITE FILE CONTENT
 * **************************************************
 */
const writeFileContent = () => {
  try {
    fs.writeFileSync("./newFile.txt", fileContent);
  } catch (error) {
    console.log(error);
  }
};
// writeFileContent();

/**
 *
 * **************************************************
 * BUFFER
 * **************************************************
 */
const buff = Buffer.alloc(8);
buff.write("shoaib", "utf-8"); // hex, "utf16le", base64
console.log(buff);
const buff2 = Buffer.from([115, 104, 111, 97, 105, 98]);
console.log(buff2.toString("utf-8"));

/**
 *
 * **************************************************
 * IMAGE TO BASE64
 * **************************************************
 */
const imagePath = "/Users/shoaibahmad/Downloads/placeholder.jpeg";
fs.readFile(imagePath, (err, data) => {
  if (err) {
    console.log("err reading the file", err);
  } else {
    const base64 = Buffer.from(data).toString("base64");
    console.log("base64 => ", base64);
  }
});

/**
 *
 * **************************************************
 * FILE STREAMING
 * **************************************************
 */
const filePath = ROOT_DIR + "/largeFile.txt";

const fileStream = fs.createReadStream(filePath);

const rl = require("readline").createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let lineCount = 0;
const progressInterval = 5; // Display progress every 5 lines

rl.on("line", (line) => {
  lineCount++;

  if (lineCount % progressInterval === 0) {
    console.log(`Processed ${lineCount} lines...`);
  }
});

rl.on("close", () => {
  console.log(`Finished processing. Total lines: ${lineCount}`);
});


/**
 *
 * **************************************************
 * CHILD PROCESSES
 * **************************************************
 */
 readline.question(`Enter the command... `, (command) => {
  exec(command, (err, stdout, stderr) => {
    if(err){
      console.log('err', err);
      readline.close();
      return;
    }

    if(stdout){
      console.log('Command executed', stdout);
    }

    if(stderr){
      console.log('Command has error', stderr);
    }
    readline.close();
  })
});

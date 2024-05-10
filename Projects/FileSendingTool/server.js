const express = require("express");
const multer = require("multer");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const File = require("./FileModel/file.model");
require("dotenv").config();
const app = express();
app.set("view engine", "ejs");
const upload = multer({ dest: "uploads" });
const MONGO_URL='mongodb+srv://kun:lawm2471@cluster1234.o8my3f5.mongodb.net/FileSHaring_Tool';
const PORT=3000
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false, // Disable Mongoose buffering
    bufferMaxEntries: 0 // Disable Mongoose buffering
});

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/upload", upload.single("file"), async (req, res) => {
    res.send("File uploaded successfully");

    const fileData = {
        path: req.file.path,
        originalname: req.file.originalname,
        downloadCount: 0,
    };

    if (req.body.password != null && req.body.password != "") {
        fileData.password = await bcrypt.hash(req.body.password, 10);
    }

    const file = await File.create(fileData);
    console.log(file);
    res.send(file.originalname + " uploaded successfully");
});

app.listen(PORT, '0.0.0.0' ,() => {
    console.log("Server is running on port 3000");
});

const express = require("express");
const cors = require("cors");
const csv = require("csvtojson");

const app = express();

app.use(cors());

app.get("/blogs", async (req, res) => {
    try {
        const csvFile = "./src/blogs.csv";
        const json = await csv().fromFile(csvFile);

        res.json(json);
    } catch (error) {
        console.log("Error on sending blog response: ", error);
    }
});

const port = 3001;
app.listen(port, () => console.log("server started at port ", port));

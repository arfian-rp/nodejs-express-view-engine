const express = require("express");
const app = express();
const port = 3000;

//menggunakan view engine ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.sendFile("./index.html", { root: __dirname });
  const data = [
    {
      nama: "arfian",
      id: 01,
    },
    {
      nama: "rafi",
      id: 02,
    },
    {
      nama: "pradana",
      id: 03,
    },
  ];
  res.render("index", { data }); //secara otomatis ke folder views
  //   namafile, data yg dikirim dalam bengtuk obj
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/", (req, res) => {
  res.status(404);
  res.render("error");
});
app.listen(port, () => {
  console.log(`server start in http://localhost:${port}`);
});

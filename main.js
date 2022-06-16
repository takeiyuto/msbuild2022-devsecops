const app = require("express")();
const sql = require("mssql");

const config = {
    user: "dbuser",
};

app.get("/", async (req, res) => {
    await sql.connect(config);
    await sql.query("select * from users where id = " + req.params.id);
});

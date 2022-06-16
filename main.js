const app = require("express")();
const sql = require("mssql");

const config = {
    user: "dbuser",
};

const key = "DefaultEndpointsProtocol=https;AccountName=demo20220616;AccountKey=om0sy22Aq6PppgyfYhOBkefTbQ69vkzd5PJBZVPQRcjT6Hq1VWFpA3rTArcRvPRupqcSJfDsawcP+ASt82On5Q==;EndpointSuffix=core.windows.net";

app.get("/", async (req, res) => {
    await sql.connect(config);
    await sql.query("select * from users where id = " + req.params.id);
});

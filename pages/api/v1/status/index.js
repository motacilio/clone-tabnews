import database from "infra/database.js";

async function status(response, request) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  request.status(200).json({ Chave: "Sexo bom é no guanabará" });
}

export default status;

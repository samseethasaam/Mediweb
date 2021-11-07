const connection = require("../data/getConnection");
const chalk = require("chalk");

const limit = 5;

async function processSQl(sql) {
  let rows, error = false;
  try {
    [rows] = await connection.promise().query(sql);
  } catch (e) {
    error = true;
    console.log(chalk.red(e.message));
  }
  return error ? { success: false } : { success: true, data: rows };
}

async function getInventions(search_key) {
  const sql = `SELECT * FROM \`ancient_inventions_and_discoveries\` where instrument_name like '%${search_key}%';`;
  return await processSQl(sql);
}

async function getPractitioners(search_key) {
  const sql = `SELECT * FROM \`ancient_islamic_practitioners\` where common_name like '%${search_key}%' or full_name like '%${search_key}%';`;
  return await processSQl(sql);
}

async function getTreatments(search_key) {
  const sql = `SELECT * FROM \`diseases_and_treatment\` where disease_name like '%${search_key}%';`;
  return await processSQl(sql);
}

async function getInventionSuggestion(search_key) {
  const sql = `SELECT instrument_name FROM \`ancient_inventions_and_discoveries\` where instrument_name like '${search_key}%' union SELECT instrument_name FROM \`ancient_inventions_and_discoveries\` where instrument_name like '${search_key}%' limit ${limit};`;
  return await processSQl(sql);
}

async function getPractitionerSuggestion(search_key) {
  const sql = `SELECT full_name FROM \`ancient_islamic_practitioners\` where full_name like '${search_key}%' union SELECT full_name FROM \`ancient_islamic_practitioners\` where full_name like '%${search_key}%' limit ${limit};`;
  return await processSQl(sql);
}

async function getTreatmentSuggestion(search_key) {
  const sql = `SELECT disease_name FROM \`diseases_and_treatment\` where disease_name like '${search_key}%' union SELECT disease_name FROM \`diseases_and_treatment\` where disease_name like '%${search_key}%' limit ${limit};`;
  return await processSQl(sql);
}


module.exports = {
  getInventions,
  getInventionSuggestion,
  getPractitioners,
  getPractitionerSuggestion,
  getTreatments,
  getTreatmentSuggestion
};

const fs = require("fs");
const path = require("path");
const d3 = require("d3");
const ndjson = require("./ndjson");

async function main() {
  const args = process.argv;
  if (args.length < 3) {
    console.log("Pass an inputFile and an outputFile. See README.md");
    return;
  }
  let text;

  inputFile = args[2];
  outputFile = args[3];

  text = fs.readFileSync(inputFile, "utf8");

  const rawSpoon = ndjson.toJson(text);

  const byCountry = d3
    .groups(rawSpoon, (d) => d.countrycode)
    .sort((a, b) => b[1].length - a[1].length);

  const countryList = [
    "JP",
    "EG",
    "US",
    "RU",
    "FR",
    "DE",
    "BR",
    "MX",
    "VN",
    "HK",
  ];

  const filteredByCountry = byCountry.filter((d) => countryList.includes(d[0]));

  const n = 100;
  const f = filteredByCountry.map(([c, rows]) => {
    // TODO: add seed
    return [c, d3.shuffle(rows).slice(0, n)];
  });

  const ndjson100 = ndjson.fromJson(f.map((d) => d[1]).flat());

  fs.writeFileSync(outputFile, ndjson100, "utf8");
}

main();

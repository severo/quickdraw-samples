function fromJson(json) {
  if (!Array.isArray(json)) {
    throw new Error("ndjson only represents arrays");
  }
  return json.map(JSON.stringify).join("\n");
}
function toJson(ndjson) {
  return ndjson.split("\n").reduce((a, c) => {
    try {
      a.push(JSON.parse(c));
    } catch (e) {}
    return a;
  }, []);
}

module.exports = { fromJson, toJson };

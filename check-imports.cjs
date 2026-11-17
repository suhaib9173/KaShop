const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const files = execFileSync("git", ["ls-files", "-z"])
  .toString()
  .split("\0")
  .filter(Boolean)
  .map(f => f.replace(/\\/g, "/"));

const extensions = [
  ".js", ".jsx", ".ts", ".tsx", ".json",
  ".css", ".scss", ".svg", ".png", ".jpg", ".jpeg", ".webp"
];

let errors = 0;

for (const file of files) {
  if (!/\.(js|jsx|ts|tsx)$/.test(file)) continue;

  const content = fs.readFileSync(file, "utf8");
  const regex = /(?:from\s*|import\s*\(\s*|import\s*)["'](\.{1,2}\/[^"']+)["']/g;

  for (const match of content.matchAll(regex)) {
    const importPath = match[1];

    const resolved = path.posix.normalize(
      path.posix.join(path.posix.dirname(file), importPath)
    );

    const candidates = [
      resolved,
      ...extensions.map(ext => resolved + ext),
      ...extensions.map(ext => resolved + "/index" + ext)
    ];

    if (candidates.some(c => files.includes(c))) continue;

    const similar = files.filter(f =>
      candidates.some(c => c.toLowerCase() === f.toLowerCase())
    );

    if (similar.length) {
      console.log("\nCASE ERROR:", file);
      console.log(" Import:", importPath);
      console.log(" Git file:", similar.join(", "));
    } else {
      console.log("\nMISSING:", file);
      console.log(" Import:", importPath);
    }

    errors++;
  }
}

console.log("\nTotal problems:", errors);

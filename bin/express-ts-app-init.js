#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const repoUrl = "https://github.com/mohakchakraborty2004/express-ts-app-init.git";

// Get the project name from the user's input
const projectName = process.argv[2] || "my-express-app";
const targetPath = path.join(process.cwd(), projectName);

console.log(`📦 Cloning template into ${targetPath}...`);

// Fix: Wrap paths in quotes to handle spaces
execSync(`git clone --depth 1 "${repoUrl}" "${targetPath}"`, { stdio: "inherit" });

// Remove .git to detach from the template repo
fs.rmSync(path.join(targetPath, ".git"), { recursive: true, force: true });

console.log(`📦 Installing dependencies...`);

// Fix: Use `cwd` to run `npm install` inside the project directory
execSync(`npm install`, { cwd: targetPath, stdio: "inherit" });

console.log(`🚀 Express app ready!`);
console.log(`\n👉 Next steps:\n`);
console.log(`   cd ${projectName}`);
console.log(`   npm run dev`);

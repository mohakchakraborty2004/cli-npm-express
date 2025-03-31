#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const repoUrl = "https://github.com/mohakchakraborty2004/create-express-app.git";

// Get the project name from the user's input
const projectName = process.argv[2] || "my-express-app";
const targetPath = path.join(process.cwd(), projectName);

console.log(`📦 Cloning template into ${targetPath}...`);
execSync(`git clone --depth 1 ${repoUrl} ${targetPath}`, { stdio: "inherit" });

// Remove .git to detach from the template repo
fs.rmSync(path.join(targetPath, ".git"), { recursive: true, force: true });

// Install dependencies
console.log(`📦 Installing dependencies...`);
execSync(`cd ${projectName} && npm install`, { stdio: "inherit" });

console.log(`🚀 Express app ready!`);
console.log(`\n👉 Next steps:\n`);
console.log(`   cd ${projectName}`);
console.log(`   npm run dev`);

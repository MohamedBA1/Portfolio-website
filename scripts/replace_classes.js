const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /(?<!dark:)bg-zinc-950/g, replacement: 'bg-zinc-50 dark:bg-zinc-950' },
  { regex: /(?<!dark:)bg-zinc-900/g, replacement: 'bg-white dark:bg-zinc-900' },
  { regex: /(?<!dark:)text-zinc-100/g, replacement: 'text-zinc-900 dark:text-zinc-100' },
  { regex: /(?<!dark:)text-zinc-400/g, replacement: 'text-zinc-600 dark:text-zinc-400' },
  { regex: /(?<!dark:)text-zinc-300/g, replacement: 'text-zinc-700 dark:text-zinc-300' },
  { regex: /(?<!dark:)text-zinc-50/g, replacement: 'text-zinc-950 dark:text-zinc-50' },
  { regex: /(?<!dark:)border-zinc-800/g, replacement: 'border-zinc-200 dark:border-zinc-800' },
  { regex: /(?<!dark:)border-zinc-900\/50/g, replacement: 'border-zinc-200 dark:border-zinc-900/50' }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

processDirectory(path.join(__dirname, '../src'));

import fs from 'fs';

const files = ['src/App.tsx', 'index_vanilla.html', 'index.html'];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\/images\//g, '/src/assets/images/');
    fs.writeFileSync(file, content);
    console.log(`Replaced image paths in ${file}`);
  }
}

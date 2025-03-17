import fs from 'fs';

fs.mkdirSync('React-App');
fs.mkdirSync('React-App/Public');
fs.mkdirSync('React-App/src');
fs.mkdirSync('React-App/src/components');
fs.writeFileSync('./React-App/src/index.html', '');
fs.writeFileSync('./React-App/src/main.jsx', '');
fs.writeFileSync('./React-App/src/components/home.jsx', '');
fs.writeFileSync('./React-App/package,json', '');




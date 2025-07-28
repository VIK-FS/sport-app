const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../next.config.ts');
const domain = process.argv[2];

if (!domain) {
  console.log('Укажите домен: node scripts/auto-add-image-domain.js <domain>');
  process.exit(1);
}

let config = fs.readFileSync(configPath, 'utf-8');
if (config.includes(`hostname: "${domain}"`)) {
  console.log(`Домен ${domain} уже есть в конфиге.`);
  process.exit(0);
}

// Найти массив remotePatterns и добавить объект аккуратно
const pattern = /(remotePatterns:\s*\[)([\s\S]*?)(\])/m;
const match = config.match(pattern);
if (match) {
  let before = match[1];
  let content = match[2].trim();
  let after = match[3];
  // Удалить лишние запятые в конце
  content = content.replace(/,\s*$/, "");
  // Если массив не пустой, добавить запятую
  if (content.length > 0) {
    content += ",\n      {\n        protocol: \"https\",\n        hostname: \"" + domain + "\",\n      }";
  } else {
    content = "      {\n        protocol: \"https\",\n        hostname: \"" + domain + "\",\n      }";
  }
  const newRemotePatterns = before + content + after;
  config = config.replace(pattern, newRemotePatterns);
  fs.writeFileSync(configPath, config, 'utf-8');
  console.log(`Домен ${domain} добавлен в next.config.ts!`);
} else {
  console.log('remotePatterns не найден в next.config.ts');
} 
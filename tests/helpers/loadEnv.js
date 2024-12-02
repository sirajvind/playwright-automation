const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

function loadEnv() {
  const envPath = path.resolve(__dirname, '../../.env');
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
  } else {
    const secretsPath = path.resolve(__dirname, '../../secrets.json');
    if (fs.existsSync(secretsPath)) {
      const secrets = JSON.parse(fs.readFileSync(secretsPath, 'utf8'));
      for (const [key, value] of Object.entries(secrets)) {
        process.env[key] = value;
      }
    } else {
      const secretsJson = process.env.SECRETS_JSON;
      if (secretsJson) {
        const envConfig = JSON.parse(secretsJson);
        for (const [key, value] of Object.entries(envConfig)) {
          process.env[key] = value;
        }
      }
    }
  }
}

module.exports = loadEnv;
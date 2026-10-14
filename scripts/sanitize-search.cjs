const fs = require('node:fs');
const file = 'docs/search.json';
if (fs.existsSync(file)) {
  const entries = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const entry of entries) {
    if (/\/Users\/|\/home\/|file:\/\/|Code\s+library\(/.test(entry.text || '')) {
      entry.text = entry.href?.startsWith('TRI-adgrants_dashboard.html')
        ? 'TRI Google Ad Grants campaign dashboard: search volume, match types, and search-term analysis for campaign optimization.'
        : [entry.title, entry.section].filter(Boolean).join(' — ');
    }
  }
  fs.writeFileSync(file, JSON.stringify(entries, null, 2) + '\n');
}

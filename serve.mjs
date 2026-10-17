// Local preview with Vercel-style clean URLs:  node serve.mjs   then open http://localhost:4173
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = path.join(path.dirname(new URL(import.meta.url).pathname), 'site');
const types = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain'};
http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname); if (p.endsWith('/')) p += 'index.html';
  let f = path.join(root, p); if (!path.extname(f) && fs.existsSync(f + '.html')) f += '.html';
  if (!fs.existsSync(f)) { f = path.join(root, '404.html'); res.statusCode = 404; }
  res.setHeader('content-type', types[path.extname(f)] || 'application/octet-stream'); fs.createReadStream(f).pipe(res);
}).listen(4173, () => console.log('http://localhost:4173'));

const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

function handler(req, res) {
  try {
    let reqPath = decodeURI((req.url || '/').split('?')[0]);
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

    // Dedicated SEO Crawler Endpoints
    if (reqPath === '/robots.txt') {
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*'
      });
      res.end("User-agent: *\nAllow: /\n\nSitemap: https://grace-life-community.vercel.app/sitemap.xml\n");
      return;
    }

    if (reqPath === '/sitemap.xml') {
      const sitemapPath = path.join(__dirname, 'sitemap.xml');
      const sitemapContent = fs.existsSync(sitemapPath) 
        ? fs.readFileSync(sitemapPath, 'utf8')
        : `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://grace-life-community.vercel.app/</loc><lastmod>2026-10-17</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url></urlset>`;
      res.writeHead(200, {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(sitemapContent);
      return;
    }

    const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(__dirname, safePath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': '*'
      });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // Default fallback to index.html
    const indexPath = path.join(__dirname, 'index.html');
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(indexPath).pipe(res);
  } catch (err) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    const fallbackPath = path.join(__dirname, 'index.html');
    fs.createReadStream(fallbackPath).pipe(res);
  }
}

// Export for Vercel Serverless Function deployment
module.exports = handler;

// Run directly if invoked via node index.js
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const server = http.createServer(handler);
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Grace Life Community Church Server running on http://localhost:${PORT}`);
  });
}

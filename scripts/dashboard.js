import http from 'http';
import fs from 'fs';
import path from 'path';
import os from 'os';

const port = 3456;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Claude Credit Dashboard</h1><p>Reading JSONL sessions from ~/.claude/projects...</p>');
});
server.listen(port, () => console.log('Dashboard running on port ' + port));

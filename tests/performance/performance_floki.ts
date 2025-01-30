import http from 'k6/http';
import { check, sleep } from 'k6';
import { readFileSync } from 'fs';

// Load Game ID from file
const gameId = readFileSync('gameId.txt', 'utf-8').trim();
const BASE_URL = `http://localhost:5173/games/${gameId}`;

export let options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '30s', target: 5 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  let res = http.get(BASE_URL);

  check(res, {
    'Status is 200': (r) => r.status === 200,
    'Response time is < 200ms': (r) => r.timings.duration < 200,
  });

  sleep(1);
}

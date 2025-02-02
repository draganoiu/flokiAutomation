import http from 'k6/http';
import { check, sleep } from 'k6';

// Citește ID-ul jocului din fișierul JSON
const gameId = JSON.parse(open('./gameId.json')).gameId;

// URL-ul de testat
const url = `http://localhost:5173/games/${gameId}`;

export const options = {
    stages: [
        { duration: '30s', target: 10 }, // Simulează 10 utilizatori timp de 30 de secunde
        { duration: '1m', target: 50 },  // Crește la 50 de utilizatori timp de 1 minut
        { duration: '30s', target: 0 },  // Scade la 0 utilizatori timp de 30 de secunde
    ],
};

export default function () {
    // Efectuează o cerere GET către URL
    const res = http.get(url);

    // Verifică dacă cererea a avut succes
    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    // Așteaptă 1 secundă între cereri
    sleep(1);
}
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage'
import fs from 'fs';

test('Get game ID and save it for performance test', async ({ page }) => {
    const homePage = new HomePage(page);
    const gameId = await homePage.getGameId();

    
    fs.writeFileSync('./k6/gameId.json', JSON.stringify({ gameId }));

    console.log('Game ID saved:', gameId);
});
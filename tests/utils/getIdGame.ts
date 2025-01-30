import { chromium } from 'playwright';
import * as fs from 'fs';

export async function getGameId(): Promise<string | null> {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Navigate to the game page
    await page.goto('http://localhost:5173');
    
    // Click the 'Start Game' button
    await page.click('.text-2xl.font-semibold:has-text("Start Game")');

    // Wait for the URL to change
    await page.waitForURL('http://localhost:5173/games/*');

    // Extract the game ID from the URL
    const gameUrl = page.url();
    const gameId = gameUrl.split('/').pop() || null;

    console.log(`Extracted Game ID: ${gameId}`);

    // Save Game ID to a file for K6
    if (gameId) {
        fs.writeFileSync('gameId.txt', gameId);
    }

    await browser.close();
    return gameId;
}

// Run script if executed directly
if (require.main === module) {
    getGameId();
}

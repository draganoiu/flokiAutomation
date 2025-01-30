import { Page } from 'playwright';

export class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Method to start a new game
    async startNewGame() {
        // Assuming a button with ID 'start-game' to start a new game

        await this.page.goto('http://localhost:5173/')
        await this.page.click('.text-2xl.font-semibold:has-text("Start Game")');

        // Wait for the URL to change to the new game's page
        await this.page.waitForURL('http://localhost:5173/games/*'); 
        await this.page.waitForTimeout(2000)
        
       
        
    }
}

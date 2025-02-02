import { Locator, Page,Response  } from 'playwright';

export class HomePage {
    readonly page: Page;
    readonly newGame: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newGame = page.locator('.text-2xl.font-semibold:has-text("Start Game")')
    }

    // Method to start a new game
    async startNewGame() {
        await this.page.goto('/'); 
        await this.newGame.click();

        // Wait for the URL to change to the new game's page
       // await this.page.waitForURL('/*'); 
        
   
    }


    async getGameId(): Promise<string> {
        // Apelăm startNewGame pentru a apăsa pe buton și a obține ID-ul
        await this.startNewGame();

        // Așteptăm răspunsul de la API
        const apiResponse = await this.page.waitForResponse('http://localhost:3000/games');
        
        // Extragem și returnăm ID-ul din răspunsul JSON
        const responseBody = await apiResponse.json();
        return responseBody.id;
    }
}

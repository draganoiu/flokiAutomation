import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';


test.skip('Simulate a full game of Connect Four', async ({page}) =>{
    const homePage = new HomePage(page)
    const gamePage = new GamePage(page)

    await homePage.startNewGame();
    await gamePage.firstPlayerWon();
   
    console.log(await gamePage.checkTheSuccess())
    expect(await gamePage.checkTheSuccess()).toBe(true);

   
    

})
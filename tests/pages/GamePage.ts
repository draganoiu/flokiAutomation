import { Page } from 'playwright';

export class GamePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

   
    
    async firstPlayerWon():Promise<void> {
        const selector = '.flex.cursor-pointer.flex-col.justify-center.space-y-2.rounded.border-b.border-t.border-transparent.px-1.py-2.transition-colors.duration-300.hover\\:border-white';
    //I selected the first column until the forth and I double clicked on each column 
        for (let i = 0; i <= 3; i++) {
            const element = this.page.locator(`${selector}:nth-of-type(${i + 1})`);
             await element.click()
             await this.page.waitForTimeout(2000)
             if(i<3){
             await element.click()

             }
             else console.log("the First user WON")
             
        }
    }

   
    async checkTheSuccess(): Promise<string | null> {
        //I verified the atribute aria-disabled to be true 
        const selector = '.flex.flex-col.justify-center.space-y-2.rounded.border-b.border-t.border-transparent.px-1.py-2.transition-colors.duration-300.cursor-not-allowed.hover\\:border-transparent:nth-of-type(1)';

        
        const element = this.page.locator(selector);
        
        const ariaDisabledValue = await element.getAttribute('aria-disabled');
        
        return  ariaDisabledValue;
    }
    
    
    
    
    
    

    
}

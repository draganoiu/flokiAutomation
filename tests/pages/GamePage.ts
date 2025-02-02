import { Locator, Page } from 'playwright';

export class GamePage {
    readonly page: Page;
    readonly column: Locator;
    readonly success: Locator;
    readonly winningElement: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.column = page.locator('.flex.cursor-pointer.flex-col.justify-center.space-y-2.rounded.border-b.border-t.border-transparent.px-1.py-2.transition-colors.duration-300.hover\\:border-white');
        this.success = page.locator(".flex.flex-col.justify-center.space-y-2.rounded.border-b.border-t.border-transparent.px-1.py-2.transition-colors.duration-300.cursor-not-allowed.hover\\:border-transparent:nth-of-type(1)");
        this.winningElement = page.locator('.grid.aspect-square.w-\\[50vw\\].max-w-\\[180px\\].place-items-center.rounded-full.transition-colors.duration-500.bg-white');
    }

    async firstPlayerWon(): Promise<void> {
        for (let i = 0; i < 4; i++) {
            const element = this.column.nth(i);
            await element.click();

            if (i < 3) {
                await element.click();
            } else {
                console.log("The first user WON");
            }
        }
    }

    async checkTheSuccess(): Promise<boolean> {
        // Check if the success element has aria-disabled="true"
        const ariaDisabledValue = await this.success.getAttribute('aria-disabled');
        const isDisabled = ariaDisabledValue === 'true';

        // Check if the winning class is present
        const hasWinningClass = await this.winningElement.count() > 0;

        //console.log(hasWinningClass)
        // Return true if both conditions are met
        return isDisabled && hasWinningClass;
    }
}

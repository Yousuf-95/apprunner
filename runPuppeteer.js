const puppeteer = require('puppeteer');

const runPuppeteer = async () => {
    try{
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: {
                width: 1920,
                height: 1080
            },
            args: ["--start-maximized"]
        });
        
        const page = await browser.newPage();
        await page.waitForTimeout(2000);
        await page.goto('https://google.com');
        let title = await page.title();
        console.log(title);
        
        await browser.close();

        return {status: 200, message: 'Puppeteer executed successfully'};
    }
    catch(error){
        console.log(error);
    }
}

module.exports = runPuppeteer;

// main();
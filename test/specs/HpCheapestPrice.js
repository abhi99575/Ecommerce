describe("Dell Cheapest Price in Flipkart", async()=>{

    it("Fetching price", async()=>{
    await browser.url("https://www.flipkart.com/")
    await $(".Pke_EE").setValue("Dell Laptop")
    await $("svg[width='24']").click()
    //await $("//div[@class='suthUA']//select[@class='Gn+jFg']").click()
    //const elem = await $("div[class='suthUA'] option[value='20000']")
    //await browser.waitUntil(async()=>expect($("div[class='suthUA'] option[value='20000']")).toBeDisplayed())
    //await $("div[class='suthUA'] option[value='20000']").click();
    await $("//div[normalize-space()='Price -- Low to High']").waitForDisplayed({ timeout: 3000 });
    
    await $("//div[normalize-space()='Price -- Low to High']").click()
    await browser.waitUntil(
        async () => (await $(".zg-M3Z._0H7xSG").isDisplayed()) === true,
        {
          timeout: 3000,
          timeoutMsg: "Element was not displayed within 3 seconds",
        }
      );
      const price =await $("//div[contains(text(),'₹29,990')]").getText()
      console.log(price)
    })
    
    
    
    
    
    
    
    })
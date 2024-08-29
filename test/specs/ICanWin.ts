describe ("I Can Win", () => {

    it("I Can Win", async () => {
        await browser.url("https://pastebin.com");
        const codeField = await $('#postform-text');
        const expiration = await $('#select2-postform-expiration-container');
        const title = await $('//*[@id="postform-name"]');
        const createButton= await $('//*[@id="w0"]/div[5]/div[1]/div[10]/button');
        codeField.setValue('Hello from WebDriver');
        expiration.click();
        await $('//li[contains(text(),"10 Minutes")]').click();
        title.setValue("helloweb");
       createButton.click();
    })

   it("Bring It On", async() => {
    await browser.url("https://pastebin.com");
    const codeField = await $('#postform-text');
    const expiration = await $('#select2-postform-expiration-container');
    const title = await $('//*[@id="postform-name"]');
    const createButton= await $('#w0 > div.post-form__bottom > div.post-form__left > div.form-group.form-btn-container > button');
    const highliting = await $('//*[@id="select2-postform-format-container"]');
    codeField.setValue(`git config --global user.name "New Sheriff in Town"
        git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
        git push origin master --force
        `);
    highliting.click();
    await $('//li[contains(text(),"Bash")]').click();
    expiration.click();
        await $('//li[contains(text(),"10 Minutes")]').click();
        title.setValue("how to gain dominance among developers");
      await createButton.click();
       const pageTitle = await browser.getTitle();
       expect(pageTitle).toEqual("how to gain dominance among developers");
       const syntaxHighlightingElement = await $('//a[text()="Bash"]');
    await expect(syntaxHighlightingElement).toBeExisting();
    const pastedCodeElement = await $('div.de1 > ol');
    await expect(pastedCodeElement).toContainEqual(`git config --global user.name "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`);
    })


})
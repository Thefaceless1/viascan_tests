import {CategoryPage} from "../../page.object/pages/more.menu/category.page.js";

describe("More menu",() => {
    it.only("Categories scenario",async () => {
        const category = new CategoryPage();
        await category.createCategory();
        await expect(category.createdCategory).toBeExisting();
    })
})
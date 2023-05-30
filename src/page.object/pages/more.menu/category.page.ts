import {MainPage} from "../main.page.js";
import {LowerMenu} from "../../enums/lower-menu.js";
import {MoreMenu} from "../../enums/more-menu.js";
import {driver} from "@wdio/globals";
import {InputData} from "../../helpers/inputdata.js";

export class CategoryPage extends MainPage {
    private categoryAccessId : string = ''
    constructor() {
        super();
    }
    /**
     * Field "Category name"
     */
    private get categoryName() {return driver.$("//android.widget.EditText[@text='Наименование категории']")};
    /**
     * Field "Short description of a category"
     */
    private get categoryDescription() {return driver.$("//android.widget.EditText[@text='Краткое описание категории']")};
    /**
     * Field with created category icon
     */
    public get createdCategory() {return driver.$(`~${this.categoryAccessId}`)};
    /**
     * Create a category
     */
    public async createCategory() : Promise<void> {
        const categoryName : string = InputData.randomWord;
        const categoryDesc : string = InputData.randomWord;
        await this.authorize();
        await this.getLowerMenuByName(LowerMenu.more).waitForDisplayed();
        await this.getLowerMenuByName(LowerMenu.more).click();
        await this.getMoreMenuByName(MoreMenu.category).click();
        await this.addButton.click();
        await this.categoryName.click();
        await this.categoryName.setValue(categoryName);
        await this.categoryDescription.click();
        await this.categoryDescription.setValue(categoryDesc);
        await this.saveButton.click();
        this.categoryAccessId = categoryName + "\n" + categoryDesc;
    }
}
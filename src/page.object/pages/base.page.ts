import {driver} from "@wdio/globals";

export class BasePage {
    constructor() {
    }
    /**
     * Field "Search by accounting objects"
     */
    protected get searchField() {return driver.$("//android.widget.EditText[@text='Поиск по объектам учёта']")};
    /**
     * Button "Add(+)"
     */
    protected get addButton() {return driver.$("//android.widget.Button[@index='2']")};
    /**
     * Button "Save"
     */
    protected get saveButton() {return driver.$("~Сохранить")};
}
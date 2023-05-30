import {Element} from 'webdriverio'
import {driver} from '@wdio/globals'
import {BasePage} from "./base.page.js";

export class AuthorizationPage extends BasePage {
    private userName : string = "admin5"
    private userPassword : string = "admin5"
    constructor() {
        super();
    }
    /**
     * Button "Enter"
     */
    private get loginButton() {return driver.$('~Войти')};
    /**
     * Field "Login"
     */
    private get login() {return driver.$("//android.widget.EditText[@text='Логин']")};
    /**
     * Field "Password"
     */
    private get password() {return driver.$("//android.widget.EditText[@text='Пароль']")};
    /**
     * Text "Wait. Synchronization in progress"
     */
    public get waitSynchronizationMessage() {return driver.$("~Подождите.\n" + "Идёт синхронизация данных...")};
    /**
     * Authorize in the system
     */
    public async authorize(): Promise<void> {
        await this.login.click();
        await this.login.setValue(this.userName);
        await this.password.click()
        await this.password.setValue(this.userPassword);
        await this.loginButton.click();
    }
}
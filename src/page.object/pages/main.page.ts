import {AuthorizationPage} from "./authorization.page.js";
import {driver} from "@wdio/globals";

export class MainPage extends AuthorizationPage {
    constructor() {
        super();
    }
    /**
     * Get lower menu buttons by their names
     */
    protected getLowerMenuByName(name : string) {return driver.$(`~${name}`)};
    /**
     * Get more menu buttons by their names
     */
    protected getMoreMenuByName(name : string) {return driver.$(`~${name}`)};
}
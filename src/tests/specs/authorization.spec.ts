import {AuthorizationPage} from "../../page.object/pages/authorization.page.js";
import {expect} from "@wdio/globals";

describe.skip("Authorization",() => {
    it.skip("Login in the system",async () => {
        const authorization = new AuthorizationPage();
        await authorization.authorize();
        await expect(authorization.waitSynchronizationMessage).toBeExisting();
    })
})

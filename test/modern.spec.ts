import {expect, it} from "vitest";
import * as allure from "allure-js-commons";

it("sample test", async () => {
    await allure.owner("John Doe x");
    await allure.issue("https://example.org", "JIRA-2");
    await allure.step("step 1", async () => {
        await allure.step("step 1.2", async () => {
            await allure.attachment("text attachment", "some data", "text/plain");
        });
    });
    await allure.step("step 2", async () => {
    });
});

it("flaky test", async () => {
    await allure.owner("Andrei P");
    await allure.step("should be greater than 0.5", async () => {
        expect(Math.random()).toBeGreaterThan(0.5)
    });
});

it("test with metadata", async () => {
    await allure.owner("Andrei P");
    await allure.issue("#123");
    await allure.severity(allure.Severity.CRITICAL);
    await allure.epic("Onboarding");
    await allure.feature("Auth");
    await allure.story("As user I can auth");
    await allure.tag("auth");
});

it("test with runtime error", async () => {
    await allure.owner("Andrei P");
    // @ts-ignore
    expect(a).toBe("a")
});
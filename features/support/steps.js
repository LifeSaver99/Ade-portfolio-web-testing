/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/
const assert = require('assert');
const driver = require('./../../driver');
const uri = 'file://C:/Users/Adedapo.Adeseye/OneDrive - ROQ IT/Desktop/Dom practice/index.html';

const {
    After,
    Before,
    Given,
    Then,
    When
} = require('@cucumber/cucumber');
const { getSystemErrorMap } = require('util');

Before({ timeout: 8000 }, async function () {
    this.headless = await driver.headless(uri);
});

After({ timeout: 8000 }, async function () {
    await this.headless.quit();
});

Given('the loaded web-site', async function () {
    // Nothing to do, as set-up loads the site
});

When('toggled using the button', async function () {
    await driver.button(this.headless);
})

When('toggled using the formButton', async function () {
    await driver.button2(this.headless);
})


Then('the browser title should be {string}', async function (title) {
    assert(title == await this.headless.getTitle());
});

Then('the background should be {word}', async function (color) {
    const colours = {
        'red': 'rgba(255, 0, 0, 1)'
    };

    const actual = await driver.body(this.headless);
    const expected = colours[color];
    // console.log(`expected value is  ${expected}`);
    // console.log(`actual value is  ${await driver.body(this.headless)}`);
    assert(expected != null);
    assert(actual == expected);
});

Then('the form should be removed', async function () {
    const actual = await driver.form(this.headless)
    assert(actual == null);
}); 

    // const actual = await driver.form(this.headless);
    // const expected = text(text);
    // console.log(`expected value is  ${expected}`);
    // console.log(`actual value is  ${actual}`);
    // assert(expected != null);
    // assert(actual == expected);



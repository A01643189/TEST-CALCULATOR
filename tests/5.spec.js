// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('10 + -5 = 5', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('10 + -5 = 5', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect({ width: 945, height: 1012 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("10")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("-5")
    await driver.findElement(By.css("button:nth-child(1)")).click()
  })
})

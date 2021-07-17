import os
import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())

myEmail = os.environ.get('Email')
myPassword = os.environ.get('Password')

driver.get("https://www.linkedin.com/login")
driver.find_element_by_id("username").send_keys(myEmail)
driver.find_element_by_id("password").send_keys(myPassword)
driver.find_element_by_css_selector(".btn__primary--large").click()
driver.get("https://www.linkedin.com/mynetwork/invitation-manager/")

acceptButton = []
while len(acceptButton) == 0:
    acceptButton = driver.find_elements_by_xpath("//button[@class='invitation-card__action-btn artdeco-button artdeco-button--2 artdeco-button--secondary ember-view']")

for button in acceptButton:
    button.click()
    time.sleep(5)





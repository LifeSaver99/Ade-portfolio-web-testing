Feature: Toggle Button
    
    Scenario: Clicking the colour change button
        Given the loaded web-site
        When toggled using the button
        Then the background should be red

    Scenario: Clicking the form button
        Given the loaded web-site
        When toggled using the formButton
        Then the form should be removed
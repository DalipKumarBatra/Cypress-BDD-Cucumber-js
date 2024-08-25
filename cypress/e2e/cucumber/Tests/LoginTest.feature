Feature: Verify User Login functionality

    Background: Navigate to website
        Given I navigate to Login page

    Scenario: Login as new sign up user with valid data
        When I entered valid credentials
            |email          | Password|
            |test@test.com  | testing |
        And Click the signin button
        Then User logged in successfully
        And Validate the title after login
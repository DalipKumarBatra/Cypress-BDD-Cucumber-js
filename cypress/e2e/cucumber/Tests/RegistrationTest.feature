Feature: Registrater new user

    Background: Navigate to user registration page
        Given Navigate to User registration page

    Scenario: Fill new user sign up form
        When Enter Valid Registrateion form
        And Click Continue Registration button
        Then New user registred successfully
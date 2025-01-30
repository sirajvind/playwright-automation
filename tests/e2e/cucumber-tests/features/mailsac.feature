Feature: Mailsac UI Testing

  Scenario: Verify mailbox address
    Given User navigate to the Mailsac Homepage 
    When User enter the Formatted String into the Mailbox Textbox
    Then User click the "Check the mail!" Button
    Then It should Display the correct Mailbox Address

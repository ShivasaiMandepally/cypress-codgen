# codegen
Codegen is a tool that converts Swagger files adhering to OpenAPI 3.X standards into Cypress tests.
It offers integration with project management tools such as Jira and source code repository platforms like GitHub.
The process to integrate with jira is:

**1. Create an Automation Rule for jira**
- Navigate to settings then click on the system option in the settings.
![jira system setting](jiraSystemSettings.png)


- Click on the "Global Automation".
![Global Automation](GlobalAutomation.png)


- Click on the create rule button.
![createRule](createRule.png)


- Add a trigger for issue transitioned.
![issue Transitioned](issue Transitioned.png)


- Choose transition process from the 'TODO' status to 'IN PROGRESS'.
![workFlow](workFlow.png)


- Please choose the 'JQL condition' component within the 'add a condition' section.
![jqlCondition](jqlCondition.png)


- Include the JQL query similar to the example below, replacing 'YourProjectName' with the actual project name. Additionally, set a label for the test cases involved in the conversion of Swagger to Cypress tests.
![jqlQuery](jqlQuery.png)


- Please choose an action to send the web request.
![sendWebRequest](sendWebRequest.png)


- Provide the web request URL, method, custom data, and specify the header containing the 'x-api-key' key with its corresponding actual API key, as illustrated in the accompanying image
![sendWebRequest-1](sendWebRequest-1.png)


```json
{
  "id": "{{issue.id}}"
}
```

- Afterwards, proceed by clicking the 'Next' button, then activate the rule by providing the Rule name and edit access for the rule.
![turnRuleOn](turnRuleOn.png)

**2. Integrate Jira with the GitHub repository.**


- Navigate to the code option in the development group and choose 'Connect to other Providers'
- If you are not facing any issue after clicking on this you will directly navigate to the Marketplace or else click on the Marketplace link in the bottom.
![connect to other Providers](connectOtherProviders.png)


[//]: # (- Click on the browse the atlassian Marketplace.)

[//]: # (![marketPlace]&#40;marketPlace.png&#41;)


- Click on the GitHub for jira
![githubForJira](githubForJira.png)


- Click on the 'Get it now' button after the app in installed click on the get started button.
- Then connect your GitHub with the jira by clicking on the continue.
![connect GithubToJira](connectGithubToJira.png)


- Select your GitHub product then click on the next button.
![next](next.png)


- Connect to the GitHub Organization of your repository.
![connectToGithub](connectToGithub.png)


- After the connection of your GitHub to jira, click on the edit option in the GitHub configuration.
![editRepo](editRepo.png)


- It will redirect you to the GitHub there give access to the repository which you want to connect with jira.
![access to repo](selectRepo.png)


***Your GitHub-Jira connection is now established. Any commits made in the selected repository with a JIRA story key will be reflected in JIRA***


**3. Using CODEGEN for the first time.**
\
After the creation of the rule and successful integration of GitHub with Jira

- Create a user story and apply the specified label mentioned during rule creation.
- Attach the Swagger file within the user story.
- Transition the status from TODO to IN PROGRESS.
![swagger v1](swagger-v1.png)

In a matter of seconds on GitHub, a new branch will be generated using the key name of your story, accompanied by the initiation of a pull request.
![github at v1](github-v1.png)

***After refreshing your Jira website, you'll observe a commit,branch and pull request linked to the user story.***
![jira after pr raised](jiraAfterPr.png)


After the PR is raised, the QA engineer will review the code, and provide the input values for the configuration variables in fixture files, and subsequently assign it to the QA lead/manager. Upon approval, the QA lead/manager will proceed to merge it into the main branch
\
\
**4. Using CODEGEN for the UPDATES.**

After the initial use of the codegen tool, for subsequent API updates or additions, please follow the procedure below..
- Create another story with the same label as what you have used earlier.
- Add the modified swagger file along with delta.json
![swagger v2](swagger-v2.png)
\
\
**In the delta file, document the objects that have been created, updated, or deleted.**

***Sample delta file***:
```json
{
  "serverUrl": "https://petstore.swagger.io/v2",
  "operation": "UPDATE",
  "updateInfo": [
    {
      "tags": [
        "pets"
      ],
      "methods": [
        "get"
      ],
      "apiEndpoint": "/pet/findByStatus",
      "operationId": "findPetsByStatus",
      "operation": "UPDATE"
    },
    {
      "tags": [
        "pets"
      ],
      "methods": [
        "put"
      ],
      "apiEndpoint": "/pet/{petId}",
      "operation": "CREATE"
    },
    {
      "tags": [
        "pets"
      ],
      "methods": [
        "get"
      ],
      "apiEndpoint": "/pet/findByTags",
      "operation": "DELETE"
    }
  ]
}
```

Shortly after, a new branch will be created, named after the JIRA key, and a pull request will be initiated.

This is the process to perform updates for the Cypress code within the regression process.


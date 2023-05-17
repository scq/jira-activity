# JIRA activity
This tool parses your jira activity stream and returns a list of your work items grouped by day. 
The official atlassian documentation for the jira activity stream can be found [here](https://developer.atlassian.com/server/framework/atlassian-sdk/consuming-an-activity-streams-feed).

## How to use
### Initial setup
```bash
npm i

# setup your defaults
npm run dev hostname
npm run dev username
```

### Show your activity
```bash
# if you have set your defaults
npm run dev list

# if you do not have defaults or wants to override them
npm run dev list -u your@username.com -h some.hostname

# if you only want to see your activities for the current week or month
npm run dev list -f week
npm run dev list -f month
```
![Example Image](https://raw.githubusercontent.com/ruettenm/jira-activity/master/img/example.png)

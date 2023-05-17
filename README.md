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

# export the last four financial quarters of information
npm run dev list -- --max 10000 --out fq1.txt --from "2022-04-01 00:00:00" --to "2022-06-30 23:59:59"
npm run dev list -- --max 10000 --out fq2.txt --from "2022-07-01 00:00:00" --to "2022-09-30 23:59:59"
npm run dev list -- --max 10000 --out fq3.txt --from "2022-10-01 00:00:00" --to "2022-12-31 23:59:59"
npm run dev list -- --max 10000 --out fq4.txt --from "2023-01-01 00:00:00" --to "2023-03-31 23:59:59"
```
![Example Image](https://raw.githubusercontent.com/ruettenm/jira-activity/master/img/example.png)

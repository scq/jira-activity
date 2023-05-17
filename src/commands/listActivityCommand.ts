import * as settingsStore from 'settings-store'
import * as inquirer from 'inquirer'
import * as cliSpinner from 'cli-spinner'
import * as fs from 'fs';

import { getActivities, JiraSettings } from '../jira'
import { print, printToString } from '../print'
import { showDefaultsCommand } from './showDefaultsCommand'

const spinner = new cliSpinner.Spinner('accessing jira.. %s')
spinner.setSpinnerString('|/-\\')

export const listActivityCommand = async (command: any) => {
    try {
        const hostname = command.hostname || settingsStore.value('settings.hostname')
        const username = command.username || settingsStore.value('settings.username')
        const maxResults = command.max || 500
        const verbose = command.verbose
        const from = command.from
        const to = command.to

        if (verbose) {
            console.log('Running in "verbose" mode.')
        }

        if (!hostname || !username) {
            console.info('Please specify your username and hostname either per command options or defaults.')
            console.info('jira-activity --help')

            showDefaultsCommand()
        } else {
            const { password } = await inquirer.prompt({
                type: 'password',
                message: 'Enter your password',
                mask: '*',
                name: 'password'
            }) as any

            const jiraSettings: JiraSettings = { username, password, hostname }

            if (!verbose) {
                spinner.start()
            }
            try {
                const activities = await getActivities(
                    jiraSettings,
                    maxResults,
                    verbose,
                    from,
                    to,
                )
                if (command.out) {
                    fs.writeFileSync(command.out, printToString(activities))
                } else {
                    print(activities)
                }
            } catch (error) {
                console.log(`\nOps, something went wrong: "${error.message}"`)
            }

            if (!verbose) {
                spinner.stop(true)
            }
        }

        process.exit(0)
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

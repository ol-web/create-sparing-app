import shell from 'shelljs'
import { exec, log } from '../utils'

export default function initGitRepository(projectPath: string) {
  log.info('Initializing a new git repository...')
  shell.cd(projectPath)
  exec('git init')
  exec('git add .')
  exec('git commit -m "Initial commit"')
}

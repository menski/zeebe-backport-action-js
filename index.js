const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  core.debug(`The event name: ${github.context.eventName}`)
  core.debug(`The event payload: ${payload}`);
}

run().catch(error => core.setFailed(error.message));

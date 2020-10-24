const { NPMExecutable } = require('nova-npm-executable')
const { log } = require('./helpers.js')

// TODO: Duplicate code in ./prettier.js (except onStdout handler)
// async function checkPrettierVersion() {
// 	let resolve, reject
// 	const promise = new Promise((_resolve, _reject) => {
// 		resolve = _resolve
// 		reject = _reject
// 	})
//
// 	const process = new Process('/usr/bin/env', {
// 		args: ['npm', 'll', 'prettier', '--parseable', '--depth', '0'],
// 		cwd: nova.extension.path,
// 	})
//
// 	process.onStdout((result) => {
// 		if (!result) return resolve(null)
//
// 		const [_, name, status] = result.split(':')
// 		if (!name.startsWith('prettier@')) return resolve(false)
// 		if (status === 'INVALID') return resolve(false)
// 		resolve(true)
// 	})
//
// 	const errors = []
// 	process.onStderr((err) => {
// 		errors.push(err)
// 	})
//
// 	process.onDidExit((status) => {
// 		if (status === '0') return
// 		reject(errors.join('\n'))
// 	})
//
// 	process.start()
//
// 	return promise
// }

module.exports = async () => {
    try {
        const vls = new NPMExecutable('vls')
        if (!vls.isInstalled) {
            log.info('Extension not installed, installing')
            await vls.install()
        }
        // } else if (!(await checkPrettierVersion())) {
        // 	log.info('Extension prettier out of date, updating/installing')
        // 	await vls.install()
        // }
    } catch (err) {
        console.error('Unable to find or install extension', err, err.stack)
    }
}
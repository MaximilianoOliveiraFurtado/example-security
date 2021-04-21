const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = async () => {
  const { stdout } = await exec('ls')
  console.log('stdout:', stdout)
  return
}
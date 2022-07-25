// const { exec } = require('node:child_process');
// console.log("Git Test commands")
// exec("git fetch",(error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//       }
//       console.log(`stdout: ${stdout}`);
//       console.error(`stderr: ${stderr}`);
// })

const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function lsExample() {
  const statusA = await exec('git fetch');
//   console.log('stdout:', stdout);
//   console.error('stderr:', stderr);
console.log(statusA)
}
lsExample();
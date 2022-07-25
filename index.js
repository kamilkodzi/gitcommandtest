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
    try {
        const statusA = await exec('git fetch');
        console.log(statusA)
    } catch (error) {
        console.log("Error to :" ,error,"Koniec Errora")
    }
  
//   console.log('stdout:', stdout);
//   console.error('stderr:', stderr);

}
lsExample();
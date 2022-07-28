const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

async function lsExample() {
  const regex = new RegExp("^[A-Z]");
  const { stdout, stderr } = await exec("git status");
  const splitedString = stdout.split("\n");

  const reducedArray = splitedString.reduce((result, line,index) => {
    if (line.includes("Your branch is")) return {...result,remoteDetails:line}
    if (line.includes("Changes")) return {...result,changesDetails:{...result.changesDetails,message:(result.changesDetails.message+line)}}
    if (line.includes("modified")) return  {...result,changesDetails:{...result.changesDetails,files:[...result.changesDetails.files, line]}}
    return {...result};
  },{remoteDetails:null,changesDetails:{
    message:"",
    files:[]
  }});

  const filteredArray = splitedString.filter((line) => line.match(regex));
  console.log(filteredArray);
  console.log(reducedArray)
}
lsExample();

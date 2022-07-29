const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

async function lsExample() {
  const { stdout, stderr } = await exec("git status");
  const porcelain=await exec("git status -porcelain");
  const splitedString = stdout.split("\n");

  const reducedArray = splitedString.reduce((result, line,index) => {
    if (line.includes("Your branch is")) return {...result,remoteDetails:line}
    if (line.includes("Changes")) return {...result,changesDetails:{...result.changesDetails,message:(result.changesDetails.message+line)}}
    if (line.includes("Untracked files")) return {...result,changesDetails:{...result.changesDetails,message:(result.changesDetails.message+line)}}
    if (line.includes("nothing to commit, working tree clean")) return {...result,changesDetails:{...result.changesDetails,message:(result.changesDetails.message,line)}}
    if (line.includes("modified")) return  {...result,changesDetails:{...result.changesDetails,files:[...result.changesDetails.files, line.split(" ").pop()]}}
    return {...result};
  },{remoteDetails:"",changesDetails:{
    message:"",
    files:[]
  }});
console.log(reducedArray)
}
lsExample();

const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

async function lsExample() {
  const { stdout, stderr } = await exec("git status");
  
  const superFunkcja = (message,find)=>{
    const re = new RegExp(`[^\s]+([^\n]*${find}[^\n]*)+[^\s]`)
    
    const line = message.match(re)
    if (line) return line.toString()
    return line
  }


console.log(superFunkcja(stdout,"modified"))
}
lsExample();

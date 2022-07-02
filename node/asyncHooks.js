const asyncHooks = require('async_hooks');
const fs = require('fs');
const util = require('util')

const hook = asyncHooks.createHook({init, before, after, destroy});
hook.enable()

setTimeout(()=>{
    fs.writeFileSync(1, `callback is executing\n`)
    console.log("welcome...")
}, 2000)
function init(asyncId, type, triggerId){
    fs.writeFileSync(1, `${util.format(asyncId, type, triggerId)}\n`)
}
function before(asyncId){
    fs.writeFileSync(1, `${util.format(asyncId)}\n`)
}
function after(asyncId){
    fs.writeFileSync(1, `${util.format(asyncId)}\n`)
}
function destroy(asyncId){
    fs.writeFileSync(1, `${util.format(asyncId)}\n`)
}

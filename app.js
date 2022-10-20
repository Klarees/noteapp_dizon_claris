const add = require('./add')
const read = require('./read')
const write = require('./write')
const del = require('./del')

const cmd = process.argv

var note = {}

if(cmd[2] == 'add') {
   
    note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
   
    var oldNote = read()
   
    add(note, oldNote);
}
if(cmd[2] == 'read') {
    
    const present = require('./present')

    present(read())
}
if(cmd[2] === "delete") {
    let id=cmd[3]
    let oldNote=read()
    let del=require('./del')
    del(id,oldNote);
    console.log(read);
}

const fs = require('fs')

const { findHighestItemId, saveFile } = require('./helpers')

const add = todo => {
  if (typeof todo !== 'string') throw new TypeError("add only strings")

  let taskObj = {
    task: todo,
    completed: false,
    id: 1
  }

  fs.readFile('../tasks.json', 'utf8', (err, data) => {
    if (err) {
      fs.writeFile('./tasks.json', JSON.stringify([taskObj]), 'utf8', (err, data) => {
        if (err) throw new Error('failed creating file')
        console.log('created new json file & adding first task')
      })

    } else {
      let todoList = JSON.parse(data)
      taskObj.id = findHighestItemId(todoList) + 1
      todoList.push(taskObj)
      saveList(todoList)
    }
  })
}

module.exports = add

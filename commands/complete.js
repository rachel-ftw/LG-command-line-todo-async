const fs = require('fs')
const list = require('./list')
const { saveList } = require('./helpers')

const complete = taskId => {
  taskId = parseInt(taskId)
  fs.readFile('./tasks.json', 'utf8', (err, taskList) => {
    taskList = JSON.parse(taskList)
    taskList.map(listItem => {
      if(listItem.id === taskId) {
        listItem.completed = true
      }
    })
    saveList(taskList)
  })
}

module.exports = complete

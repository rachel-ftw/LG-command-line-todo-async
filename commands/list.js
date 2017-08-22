fs = require('fs')

const list = () => {
  fs.readFile('./tasks.json', 'utf8', (err, taskList) => {
    if (err) throw new Error('failed on list items')
    console.log(`/n-----------------------------`)
    taskList = JSON.parse(taskList)
    taskList.forEach((listItem, index) => {
      console.log(`${index+1}. ${listItem.task}, ${listItem.completed ? 'Completed' : 'Not Completed'}, ID: ${listItem.id}`)
    })
  })
}

module.exports = list

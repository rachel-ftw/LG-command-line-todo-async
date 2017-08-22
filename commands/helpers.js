const fs = require('fs')
const list = require('./list')

const findHighestItemId = listItems => {
  return listItems.reduce((highestID, listItem, i, listItems) => {
    if (listItem.id > highestID) {
      highestID = listItem.id
    }
    return highestID
  }, 0)
}

const saveList = (updatedList) => {
  fs.writeFile('./tasks.json', JSON.stringify(updatedList), 'utf8', (err, data) => {
    if (err) throw new Error('failed in saving task')
    console.log('updated saved successfully')
    list()
  })
}

const getLastTask = () => {
  fs.readFile('./tasks.json', 'utf8', (err, taskList) => {
    taskList = JSON.parse(taskList)
    return taskList[taslList.length - 1]
  })
}
getLastTask()

module.exports = {
  findHighestItemId,
  saveList,
  getLastTask
}

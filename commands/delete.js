const fs = require('fs')
const { saveList } = require('./helpers')

const removeItem = itemId => {
  itemId = parseInt(itemId)
  fs.readFile('./tasks.json', 'utf8', (err, itemList) => {
    if (err) throw new Error('Error in removing item')
    itemList = JSON.parse(itemList).reduce((updatedList, item) => {
      if(item.id !== itemId) {
        updatedList.push(item)
      }
      return updatedList
    }, [])
    saveList(itemList)
  })
}

module.exports = removeItem

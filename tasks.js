#!/usr/bin/env node
const add = require('./commands/add')
const list = require('./commands/list')
const complete = require('./commands/complete')
const removeItem = require('./commands/delete')

const command = process.argv[2]
const userInput = process.argv[3]

switch(command) {
  case 'add':
    add(userInput)
    break
  case 'list':
    list()
    break
  case 'complete':
    complete(userInput)
    break
  case 'delete':
    removeItem(userInput)
    break
  default:
    console.log('please use a valid command')
}

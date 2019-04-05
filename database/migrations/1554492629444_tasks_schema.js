'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasksSchema extends Schema {
  up () {
    this.alter('tasks', table => {
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.table('tasks', table => {
      // reverse alternations
    })
  }
}

module.exports = TasksSchema

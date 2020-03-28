'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class License extends Model {
  constructor() {
    super();
    this.repository = new LicensePGRepository();
  }

  getById(id) {
    return this.repository.getById(id);
  }

  get(filter, pagination) {
    return this.repository.get(filter, pagination);
  }

  create(data) {
    return this.repository.create(data);
  }

  update(id, data) {
    return this.repository.update(id, data);
  }

  softDelete(id) {
    return this.repository.delete(id, true);
  }
}

module.exports = License

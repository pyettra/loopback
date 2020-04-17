import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Woman} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WomanRepository extends DefaultCrudRepository<
  Woman,
  typeof Woman.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: juggler.DataSource,
  ) {
    super(Woman, dataSource);
  }
}

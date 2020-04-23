import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Reflection} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReflectionRepository extends DefaultCrudRepository<
  Reflection,
  typeof Reflection.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: juggler.DataSource,
  ) {
    super(Reflection, dataSource);
  }
}

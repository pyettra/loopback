import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Woman} from '../models';
import {WomanRepository} from '../repositories';

export class WomanController {
  constructor(
    @repository(WomanRepository)
    public womanRepository : WomanRepository,
  ) {}

  @post('/women', {
    responses: {
      '200': {
        description: 'Woman model instance',
        content: {'application/json': {schema: {'x-ts-type': Woman}}},
      },
    },
  })
  async create(@requestBody() woman: Woman): Promise<Woman> {
    return await this.womanRepository.create(woman);
  }

  @get('/women/count', {
    responses: {
      '200': {
        description: 'Woman model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Woman)) where?: Where,
  ): Promise<Count> {
    return await this.womanRepository.count(where);
  }

  @get('/women', {
    responses: {
      '200': {
        description: 'Array of Woman model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Woman}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Woman)) filter?: Filter,
  ): Promise<Woman[]> {
    return await this.womanRepository.find(filter);
  }

  @patch('/women', {
    responses: {
      '200': {
        description: 'Woman PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() woman: Woman,
    @param.query.object('where', getWhereSchemaFor(Woman)) where?: Where,
  ): Promise<Count> {
    return await this.womanRepository.updateAll(woman, where);
  }

  @get('/women/{id}', {
    responses: {
      '200': {
        description: 'Woman model instance',
        content: {'application/json': {schema: {'x-ts-type': Woman}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Woman> {
    return await this.womanRepository.findById(id);
  }

  @patch('/women/{id}', {
    responses: {
      '204': {
        description: 'Woman PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() woman: Woman,
  ): Promise<void> {
    await this.womanRepository.updateById(id, woman);
  }

  @put('/women/{id}', {
    responses: {
      '204': {
        description: 'Woman PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() woman: Woman,
  ): Promise<void> {
    await this.womanRepository.replaceById(id, woman);
  }

  @del('/women/{id}', {
    responses: {
      '204': {
        description: 'Woman DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.womanRepository.deleteById(id);
  }
}

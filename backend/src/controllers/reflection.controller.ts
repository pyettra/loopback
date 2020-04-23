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
import {Reflection} from '../models';
import {ReflectionRepository} from '../repositories';

export class ReflectionController {
  constructor(
    @repository(ReflectionRepository)
    public reflectionRepository : ReflectionRepository,
  ) {}

  @post('/reflections', {
    responses: {
      '200': {
        description: 'Reflection model instance',
        content: {'application/json': {schema: {'x-ts-type': Reflection}}},
      },
    },
  })
  async create(@requestBody() reflection: Reflection): Promise<Reflection> {
    return await this.reflectionRepository.create(reflection);
  }

  @get('/reflections/count', {
    responses: {
      '200': {
        description: 'Reflection model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Reflection)) where?: Where,
  ): Promise<Count> {
    return await this.reflectionRepository.count(where);
  }

  @get('/reflections', {
    responses: {
      '200': {
        description: 'Array of Reflection model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Reflection}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Reflection)) filter?: Filter,
  ): Promise<Reflection[]> {
    return await this.reflectionRepository.find(filter);
  }

  @patch('/reflections', {
    responses: {
      '200': {
        description: 'Reflection PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() reflection: Reflection,
    @param.query.object('where', getWhereSchemaFor(Reflection)) where?: Where,
  ): Promise<Count> {
    return await this.reflectionRepository.updateAll(reflection, where);
  }

  @get('/reflections/{id}', {
    responses: {
      '200': {
        description: 'Reflection model instance',
        content: {'application/json': {schema: {'x-ts-type': Reflection}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Reflection> {
    return await this.reflectionRepository.findById(id);
  }

  @patch('/reflections/{id}', {
    responses: {
      '204': {
        description: 'Reflection PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() reflection: Reflection,
  ): Promise<void> {
    await this.reflectionRepository.updateById(id, reflection);
  }

  @put('/reflections/{id}', {
    responses: {
      '204': {
        description: 'Reflection PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() reflection: Reflection,
  ): Promise<void> {
    await this.reflectionRepository.replaceById(id, reflection);
  }

  @del('/reflections/{id}', {
    responses: {
      '204': {
        description: 'Reflection DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.reflectionRepository.deleteById(id);
  }
}

import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Woman extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;


  constructor(data?: Partial<Woman>) {
    super(data);
  }
}

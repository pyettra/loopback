import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Reflection extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'date',
    required: true,
  })
  creationTime: string;

  @property({
    type: 'string',
    required: true
  })
  link: string;


  constructor(data?: Partial<Reflection>) {
    super(data);
  }
}

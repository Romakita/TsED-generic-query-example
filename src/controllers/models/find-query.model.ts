import {Property} from '@tsed/schema';


export class FindQuery {

  // properties that I can search in my app

  @Property()
  tableColumnNameA?: number;

  @Property()
  tableColumnNameB?: number;

}

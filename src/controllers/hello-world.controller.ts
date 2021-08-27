import {Controller, Get, QueryParams} from '@tsed/common';
import {GenericOf} from '@tsed/schema';
import {PaginationQuery} from './models/pagination-query.model';
import {FindQuery} from './models/find-query.model';


@Controller('/hello')
export class HelloWorldController {

  @Get('/')
  get(
    @QueryParams() @GenericOf(FindQuery) query: PaginationQuery<FindQuery>,
  ) {
    console.log(query);
    return query;
  }

}

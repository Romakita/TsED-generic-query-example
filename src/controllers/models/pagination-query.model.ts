import {Default, Generics, Maximum, Minimum, Property} from '@tsed/schema';


@Generics('T')
export class PaginationQuery<T> {

  // things about pagination

  @Minimum(0)
  @Default(0)
  offset?: number;

  @Minimum(1)
  @Maximum(1000)
  @Default(50)
  limit?: number;

  @Property('T')
  where?: T;

}

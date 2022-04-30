import { HasuraQueryException } from './../../core/exception/http-hasura-query.exception';
import { Injectable } from '@nestjs/common';
import { appConfig } from './../../core/config/app-config';
import { GraphQLClient } from 'gql-req';
import { HasuraServerException } from './../../core/exception/http-hasura-server.exception';

@Injectable()
export class HasuraService {

  async request(query: string, variables: any | undefined): Promise<any> {
    const graphQlClient = new GraphQLClient(appConfig.HASURA_NEW_DATABASE_URL, {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': appConfig.HASURA_NEW_DATABASE_SECRET,
      },
    });
    try {
      const graphQlHasuraResponse: any = await graphQlClient.request(query, variables);
      const response = graphQlHasuraResponse.data;
      if (response.errors) {
        console.log(response.errors);
        console.log(query);
        throw new HasuraQueryException(response.errors);
      }
      return response;
    } catch (err) {
      console.log(query);
      console.log(variables);
      console.log(err);
      throw new HasuraServerException(err);
    }
  }
}

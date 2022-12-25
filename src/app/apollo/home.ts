import { Injectable } from '@angular/core'
import { Apollo, ApolloBase, gql } from 'apollo-angular'

@Injectable()
export class HomeService {
  private apollo: ApolloBase

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('newClientName')
  }

  getData() {
    return this.apollo.watchQuery({
      query: gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `
    })
  }
}

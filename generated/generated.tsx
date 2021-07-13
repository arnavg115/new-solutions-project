import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['Int'];
  name: Scalars['String'];
  desc: Scalars['String'];
  href: Scalars['String'];
  Edition: Edition;
};

export type Edition = {
  __typename?: 'Edition';
  id: Scalars['Int'];
  num: Scalars['Int'];
  name: Scalars['String'];
  articles: Array<Article>;
};

export type Email = {
  __typename?: 'Email';
  email: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  logout: Scalars['Boolean'];
  register: Scalars['Boolean'];
  addOneEdition: Scalars['Boolean'];
  addOneArticle: Scalars['Boolean'];
  addEmail: Scalars['Boolean'];
  DeleteEmail: Scalars['Boolean'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  adminPassword: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationAddOneEditionArgs = {
  num: Scalars['Int'];
  name: Scalars['String'];
};


export type MutationAddOneArticleArgs = {
  Edition_Num: Scalars['Int'];
  desc: Scalars['String'];
  name: Scalars['String'];
};


export type MutationAddEmailArgs = {
  email: Scalars['String'];
};


export type MutationDeleteEmailArgs = {
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me?: Maybe<User>;
  getAll: Array<Edition>;
  getOneEdition: Edition;
  getSearch: Array<Edition>;
  getAllEmails: Array<Email>;
};


export type QueryGetOneEditionArgs = {
  index: Scalars['Int'];
};


export type QueryGetSearchArgs = {
  query: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
};

export type GetOneQueryVariables = Exact<{
  index: Scalars['Int'];
}>;


export type GetOneQuery = (
  { __typename?: 'Query' }
  & { getOneEdition: (
    { __typename?: 'Edition' }
    & Pick<Edition, 'name' | 'num'>
    & { articles: Array<(
      { __typename?: 'Article' }
      & Pick<Article, 'name' | 'desc' | 'href'>
    )> }
  ) }
);


export const GetOneDocument = gql`
    query getOne($index: Int!) {
  getOneEdition(index: $index) {
    name
    num
    articles {
      name
      desc
      href
    }
  }
}
    `;

/**
 * __useGetOneQuery__
 *
 * To run a query within a React component, call `useGetOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneQuery({
 *   variables: {
 *      index: // value for 'index'
 *   },
 * });
 */
export function useGetOneQuery(baseOptions: Apollo.QueryHookOptions<GetOneQuery, GetOneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneQuery, GetOneQueryVariables>(GetOneDocument, options);
      }
export function useGetOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneQuery, GetOneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneQuery, GetOneQueryVariables>(GetOneDocument, options);
        }
export type GetOneQueryHookResult = ReturnType<typeof useGetOneQuery>;
export type GetOneLazyQueryHookResult = ReturnType<typeof useGetOneLazyQuery>;
export type GetOneQueryResult = Apollo.QueryResult<GetOneQuery, GetOneQueryVariables>;
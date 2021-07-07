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
  name: Scalars['String'];
  desc: Scalars['String'];
  href: Scalars['String'];
};

export type Editions = {
  __typename?: 'Editions';
  num: Scalars['Int'];
  name: Scalars['String'];
  articles: Array<Article>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  getOne: Editions;
  getMany: Array<Editions>;
};


export type QueryHelloArgs = {
  text: Scalars['String'];
};


export type QueryGetOneArgs = {
  index: Scalars['Int'];
};

export type GetOneQueryVariables = Exact<{
  index: Scalars['Int'];
}>;


export type GetOneQuery = (
  { __typename?: 'Query' }
  & { getOne: (
    { __typename?: 'Editions' }
    & Pick<Editions, 'name' | 'num'>
    & { articles: Array<(
      { __typename?: 'Article' }
      & Pick<Article, 'name' | 'desc' | 'href'>
    )> }
  ) }
);

export type HelloQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const GetOneDocument = gql`
    query getOne($index: Int!) {
  getOne(index: $index) {
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
export const HelloDocument = gql`
    query Hello($name: String!) {
  hello(text: $name)
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useHelloQuery(baseOptions: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
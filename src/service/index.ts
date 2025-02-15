import 'server-only'

import { unstable_cache as cache } from 'next/cache'

import { Client } from '@discublog/api/client'
import { Octokit } from '@octokit/core'

import { repoName, repoOwner } from '~/blog-config'

import type { RepositoryFile, PinnedItems } from './interface'

const { graphql } = new Octokit({ auth: process.env.GITHUB_TOKEN })

const client = new Client({
  token: process.env.GITHUB_TOKEN!,
  name: repoName,
  owner: repoOwner,
})

export const queryProfileREADME = cache((lang?: string) => {
  return graphql<RepositoryFile>(
    `
      query queryProfileREADME($owner: String!, $file: String!) {
        repository(owner: $owner, name: $owner) {
          object(expression: $file) {
            ... on Blob {
              text
            }
          }
        }
      }
    `,
    {
      owner: repoOwner,
      file: 'master:' + (lang ? `README.${lang}.md` : 'README.md'),
    },
  )
})

export const queryPinnedItems = cache(() =>
  graphql<PinnedItems>(
    `
      query queryPinnedItems($owner: String!) {
        user(login: $owner) {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                url
                description
                homepageUrl
                visibility
                stargazerCount
                forkCount
                languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
                  nodes {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      owner: repoOwner,
    },
  ),
)

export const queryAllLabels = cache(() => client.queryLabels())

export const queryAllPosts = cache(() => client.search({ bodyText: true }))

export const queryByLabel = cache((label: string) => client.search({ label }))

export const queryByNumber = cache((number: number) =>
  client.queryByNumber({ number, body: true, bodyText: true }),
)

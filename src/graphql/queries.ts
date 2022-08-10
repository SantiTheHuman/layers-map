/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLayer = /* GraphQL */ `
  query GetLayer($id: ID!) {
    getLayer(id: $id) {
      id
      name
      team {
        items {
          id
          name
          description
          createdAt
          updatedAt
          layerTeamId
          spotLayerId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLayers = /* GraphQL */ `
  query ListLayers(
    $filter: ModelLayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        team {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSpot = /* GraphQL */ `
  query GetSpot($id: ID!) {
    getSpot(id: $id) {
      id
      name
      description
      layer {
        id
        name
        team {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      layerTeamId
      spotLayerId
    }
  }
`;
export const listSpots = /* GraphQL */ `
  query ListSpots(
    $filter: ModelSpotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        layer {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        layerTeamId
        spotLayerId
      }
      nextToken
    }
  }
`;

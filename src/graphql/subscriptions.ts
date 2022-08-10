/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLayer = /* GraphQL */ `
  subscription OnCreateLayer($filter: ModelSubscriptionLayerFilterInput) {
    onCreateLayer(filter: $filter) {
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
export const onUpdateLayer = /* GraphQL */ `
  subscription OnUpdateLayer($filter: ModelSubscriptionLayerFilterInput) {
    onUpdateLayer(filter: $filter) {
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
export const onDeleteLayer = /* GraphQL */ `
  subscription OnDeleteLayer($filter: ModelSubscriptionLayerFilterInput) {
    onDeleteLayer(filter: $filter) {
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
export const onCreateSpot = /* GraphQL */ `
  subscription OnCreateSpot($filter: ModelSubscriptionSpotFilterInput) {
    onCreateSpot(filter: $filter) {
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
export const onUpdateSpot = /* GraphQL */ `
  subscription OnUpdateSpot($filter: ModelSubscriptionSpotFilterInput) {
    onUpdateSpot(filter: $filter) {
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
export const onDeleteSpot = /* GraphQL */ `
  subscription OnDeleteSpot($filter: ModelSubscriptionSpotFilterInput) {
    onDeleteSpot(filter: $filter) {
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

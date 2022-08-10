/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLayer = /* GraphQL */ `
  mutation CreateLayer(
    $input: CreateLayerInput!
    $condition: ModelLayerConditionInput
  ) {
    createLayer(input: $input, condition: $condition) {
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
export const updateLayer = /* GraphQL */ `
  mutation UpdateLayer(
    $input: UpdateLayerInput!
    $condition: ModelLayerConditionInput
  ) {
    updateLayer(input: $input, condition: $condition) {
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
export const deleteLayer = /* GraphQL */ `
  mutation DeleteLayer(
    $input: DeleteLayerInput!
    $condition: ModelLayerConditionInput
  ) {
    deleteLayer(input: $input, condition: $condition) {
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
export const createSpot = /* GraphQL */ `
  mutation CreateSpot(
    $input: CreateSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    createSpot(input: $input, condition: $condition) {
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
export const updateSpot = /* GraphQL */ `
  mutation UpdateSpot(
    $input: UpdateSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    updateSpot(input: $input, condition: $condition) {
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
export const deleteSpot = /* GraphQL */ `
  mutation DeleteSpot(
    $input: DeleteSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    deleteSpot(input: $input, condition: $condition) {
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

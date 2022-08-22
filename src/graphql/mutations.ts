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
      url
      description
      icon
      spots {
        items {
          id
          layerID
          name
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      url
      description
      icon
      spots {
        items {
          id
          layerID
          name
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      url
      description
      icon
      spots {
        items {
          id
          layerID
          name
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      layerID
      name
      icon
      layers {
        id
        name
        url
        description
        icon
        spots {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      layerID
      name
      icon
      layers {
        id
        name
        url
        description
        icon
        spots {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      layerID
      name
      icon
      layers {
        id
        name
        url
        description
        icon
        spots {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

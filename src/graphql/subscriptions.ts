/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLayer = /* GraphQL */ `
  subscription OnCreateLayer {
    onCreateLayer {
      id
      name
      spots {
        items {
          id
          layerID
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          layerSpotsId
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
export const onUpdateLayer = /* GraphQL */ `
  subscription OnUpdateLayer {
    onUpdateLayer {
      id
      name
      spots {
        items {
          id
          layerID
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          layerSpotsId
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
export const onDeleteLayer = /* GraphQL */ `
  subscription OnDeleteLayer {
    onDeleteLayer {
      id
      name
      spots {
        items {
          id
          layerID
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          layerSpotsId
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
export const onCreateSpot = /* GraphQL */ `
  subscription OnCreateSpot {
    onCreateSpot {
      id
      layerID
      name
      description
      layers {
        id
        name
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
      layerSpotsId
    }
  }
`;
export const onUpdateSpot = /* GraphQL */ `
  subscription OnUpdateSpot {
    onUpdateSpot {
      id
      layerID
      name
      description
      layers {
        id
        name
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
      layerSpotsId
    }
  }
`;
export const onDeleteSpot = /* GraphQL */ `
  subscription OnDeleteSpot {
    onDeleteSpot {
      id
      layerID
      name
      description
      layers {
        id
        name
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
      layerSpotsId
    }
  }
`;

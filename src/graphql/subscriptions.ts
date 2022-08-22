/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLayer = /* GraphQL */ `
  subscription OnCreateLayer {
    onCreateLayer {
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
export const onUpdateLayer = /* GraphQL */ `
  subscription OnUpdateLayer {
    onUpdateLayer {
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
export const onDeleteLayer = /* GraphQL */ `
  subscription OnDeleteLayer {
    onDeleteLayer {
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
export const onCreateSpot = /* GraphQL */ `
  subscription OnCreateSpot {
    onCreateSpot {
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
export const onUpdateSpot = /* GraphQL */ `
  subscription OnUpdateSpot {
    onUpdateSpot {
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
export const onDeleteSpot = /* GraphQL */ `
  subscription OnDeleteSpot {
    onDeleteSpot {
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

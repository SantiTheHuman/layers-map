/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLayerInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelLayerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelLayerConditionInput | null > | null,
  or?: Array< ModelLayerConditionInput | null > | null,
  not?: ModelLayerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Layer = {
  __typename: "Layer",
  id: string,
  name?: string | null,
  spots?: ModelSpotConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelSpotConnection = {
  __typename: "ModelSpotConnection",
  items:  Array<Spot | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Spot = {
  __typename: "Spot",
  id: string,
  layerID?: string | null,
  name?: string | null,
  description?: string | null,
  layers?: Layer | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  layerSpotsId?: string | null,
};

export type UpdateLayerInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteLayerInput = {
  id: string,
  _version?: number | null,
};

export type CreateSpotInput = {
  id?: string | null,
  layerID?: string | null,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
  layerSpotsId?: string | null,
};

export type ModelSpotConditionInput = {
  layerID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSpotConditionInput | null > | null,
  or?: Array< ModelSpotConditionInput | null > | null,
  not?: ModelSpotConditionInput | null,
  layerSpotsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSpotInput = {
  id: string,
  layerID?: string | null,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
  layerSpotsId?: string | null,
};

export type DeleteSpotInput = {
  id: string,
  _version?: number | null,
};

export type ModelLayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelLayerFilterInput | null > | null,
  or?: Array< ModelLayerFilterInput | null > | null,
  not?: ModelLayerFilterInput | null,
};

export type ModelLayerConnection = {
  __typename: "ModelLayerConnection",
  items:  Array<Layer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSpotFilterInput = {
  id?: ModelIDInput | null,
  layerID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSpotFilterInput | null > | null,
  or?: Array< ModelSpotFilterInput | null > | null,
  not?: ModelSpotFilterInput | null,
  layerSpotsId?: ModelIDInput | null,
};

export type CreateLayerMutationVariables = {
  input: CreateLayerInput,
  condition?: ModelLayerConditionInput | null,
};

export type CreateLayerMutation = {
  createLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    spots?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        layerID?: string | null,
        name?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        layerSpotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLayerMutationVariables = {
  input: UpdateLayerInput,
  condition?: ModelLayerConditionInput | null,
};

export type UpdateLayerMutation = {
  updateLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    spots?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        layerID?: string | null,
        name?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        layerSpotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLayerMutationVariables = {
  input: DeleteLayerInput,
  condition?: ModelLayerConditionInput | null,
};

export type DeleteLayerMutation = {
  deleteLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    spots?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        layerID?: string | null,
        name?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        layerSpotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSpotMutationVariables = {
  input: CreateSpotInput,
  condition?: ModelSpotConditionInput | null,
};

export type CreateSpotMutation = {
  createSpot?:  {
    __typename: "Spot",
    id: string,
    layerID?: string | null,
    name?: string | null,
    description?: string | null,
    layers?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      spots?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    layerSpotsId?: string | null,
  } | null,
};

export type UpdateSpotMutationVariables = {
  input: UpdateSpotInput,
  condition?: ModelSpotConditionInput | null,
};

export type UpdateSpotMutation = {
  updateSpot?:  {
    __typename: "Spot",
    id: string,
    layerID?: string | null,
    name?: string | null,
    description?: string | null,
    layers?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      spots?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    layerSpotsId?: string | null,
  } | null,
};

export type DeleteSpotMutationVariables = {
  input: DeleteSpotInput,
  condition?: ModelSpotConditionInput | null,
};

export type DeleteSpotMutation = {
  deleteSpot?:  {
    __typename: "Spot",
    id: string,
    layerID?: string | null,
    name?: string | null,
    description?: string | null,
    layers?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      spots?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    layerSpotsId?: string | null,
  } | null,
};

export type GetLayerQueryVariables = {
  id: string,
};

export type GetLayerQuery = {
  getLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    spots?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        layerID?: string | null,
        name?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        layerSpotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLayersQueryVariables = {
  filter?: ModelLayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLayersQuery = {
  listLayers?:  {
    __typename: "ModelLayerConnection",
    items:  Array< {
      __typename: "Layer",
      id: string,
      name?: string | null,
      spots?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLayersQueryVariables = {
  filter?: ModelLayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLayersQuery = {
  syncLayers?:  {
    __typename: "ModelLayerConnection",
    items:  Array< {
      __typename: "Layer",
      id: string,
      name?: string | null,
      spots?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSpotQueryVariables = {
  id: string,
};

export type GetSpotQuery = {
  getSpot?:  {
    __typename: "Spot",
    id: string,
    layerID?: string | null,
    name?: string | null,
    description?: string | null,
    layers?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      spots?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    layerSpotsId?: string | null,
  } | null,
};

export type ListSpotsQueryVariables = {
  filter?: ModelSpotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpotsQuery = {
  listSpots?:  {
    __typename: "ModelSpotConnection",
    items:  Array< {
      __typename: "Spot",
      id: string,
      layerID?: string | null,
      name?: string | null,
      description?: string | null,
      layers?:  {
        __typename: "Layer",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      layerSpotsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSpotsQueryVariables = {
  filter?: ModelSpotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSpotsQuery = {
  syncSpots?:  {
    __typename: "ModelSpotConnection",
    items:  Array< {
      __typename: "Spot",
      id: string,
      layerID?: string | null,
      name?: string | null,
      description?: string | null,
      layers?:  {
        __typename: "Layer",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      layerSpotsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateLayerSubscription = {
  onCreateLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    spots?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        layerID?: string | null,
        name?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        layerSpotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLayerSubscription = {
  onUpdateLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    spots?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        layerID?: string | null,
        name?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        layerSpotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLayerSubscription = {
  onDeleteLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    spots?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        layerID?: string | null,
        name?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        layerSpotsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSpotSubscription = {
  onCreateSpot?:  {
    __typename: "Spot",
    id: string,
    layerID?: string | null,
    name?: string | null,
    description?: string | null,
    layers?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      spots?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    layerSpotsId?: string | null,
  } | null,
};

export type OnUpdateSpotSubscription = {
  onUpdateSpot?:  {
    __typename: "Spot",
    id: string,
    layerID?: string | null,
    name?: string | null,
    description?: string | null,
    layers?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      spots?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    layerSpotsId?: string | null,
  } | null,
};

export type OnDeleteSpotSubscription = {
  onDeleteSpot?:  {
    __typename: "Spot",
    id: string,
    layerID?: string | null,
    name?: string | null,
    description?: string | null,
    layers?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      spots?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    layerSpotsId?: string | null,
  } | null,
};

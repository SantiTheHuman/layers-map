/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLayerInput = {
  id?: string | null,
  name?: string | null,
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
  team?: ModelSpotConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSpotConnection = {
  __typename: "ModelSpotConnection",
  items:  Array<Spot | null >,
  nextToken?: string | null,
};

export type Spot = {
  __typename: "Spot",
  id: string,
  name: string,
  description?: string | null,
  layer?: Layer | null,
  createdAt: string,
  updatedAt: string,
  layerTeamId?: string | null,
  spotLayerId?: string | null,
};

export type UpdateLayerInput = {
  id: string,
  name?: string | null,
};

export type DeleteLayerInput = {
  id: string,
};

export type CreateSpotInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  layerTeamId?: string | null,
  spotLayerId?: string | null,
};

export type ModelSpotConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSpotConditionInput | null > | null,
  or?: Array< ModelSpotConditionInput | null > | null,
  not?: ModelSpotConditionInput | null,
  layerTeamId?: ModelIDInput | null,
  spotLayerId?: ModelIDInput | null,
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
  name?: string | null,
  description?: string | null,
  layerTeamId?: string | null,
  spotLayerId?: string | null,
};

export type DeleteSpotInput = {
  id: string,
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
};

export type ModelSpotFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSpotFilterInput | null > | null,
  or?: Array< ModelSpotFilterInput | null > | null,
  not?: ModelSpotFilterInput | null,
  layerTeamId?: ModelIDInput | null,
  spotLayerId?: ModelIDInput | null,
};

export type ModelSubscriptionLayerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLayerFilterInput | null > | null,
  or?: Array< ModelSubscriptionLayerFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSpotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSpotFilterInput | null > | null,
  or?: Array< ModelSubscriptionSpotFilterInput | null > | null,
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
    team?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        layerTeamId?: string | null,
        spotLayerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    team?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        layerTeamId?: string | null,
        spotLayerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    team?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        layerTeamId?: string | null,
        spotLayerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    description?: string | null,
    layer?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      team?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    layerTeamId?: string | null,
    spotLayerId?: string | null,
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
    name: string,
    description?: string | null,
    layer?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      team?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    layerTeamId?: string | null,
    spotLayerId?: string | null,
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
    name: string,
    description?: string | null,
    layer?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      team?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    layerTeamId?: string | null,
    spotLayerId?: string | null,
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
    team?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        layerTeamId?: string | null,
        spotLayerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      team?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSpotQueryVariables = {
  id: string,
};

export type GetSpotQuery = {
  getSpot?:  {
    __typename: "Spot",
    id: string,
    name: string,
    description?: string | null,
    layer?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      team?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    layerTeamId?: string | null,
    spotLayerId?: string | null,
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
      name: string,
      description?: string | null,
      layer?:  {
        __typename: "Layer",
        id: string,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      layerTeamId?: string | null,
      spotLayerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLayerSubscriptionVariables = {
  filter?: ModelSubscriptionLayerFilterInput | null,
};

export type OnCreateLayerSubscription = {
  onCreateLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        layerTeamId?: string | null,
        spotLayerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLayerSubscriptionVariables = {
  filter?: ModelSubscriptionLayerFilterInput | null,
};

export type OnUpdateLayerSubscription = {
  onUpdateLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        layerTeamId?: string | null,
        spotLayerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLayerSubscriptionVariables = {
  filter?: ModelSubscriptionLayerFilterInput | null,
};

export type OnDeleteLayerSubscription = {
  onDeleteLayer?:  {
    __typename: "Layer",
    id: string,
    name?: string | null,
    team?:  {
      __typename: "ModelSpotConnection",
      items:  Array< {
        __typename: "Spot",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        layerTeamId?: string | null,
        spotLayerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSpotSubscriptionVariables = {
  filter?: ModelSubscriptionSpotFilterInput | null,
};

export type OnCreateSpotSubscription = {
  onCreateSpot?:  {
    __typename: "Spot",
    id: string,
    name: string,
    description?: string | null,
    layer?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      team?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    layerTeamId?: string | null,
    spotLayerId?: string | null,
  } | null,
};

export type OnUpdateSpotSubscriptionVariables = {
  filter?: ModelSubscriptionSpotFilterInput | null,
};

export type OnUpdateSpotSubscription = {
  onUpdateSpot?:  {
    __typename: "Spot",
    id: string,
    name: string,
    description?: string | null,
    layer?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      team?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    layerTeamId?: string | null,
    spotLayerId?: string | null,
  } | null,
};

export type OnDeleteSpotSubscriptionVariables = {
  filter?: ModelSubscriptionSpotFilterInput | null,
};

export type OnDeleteSpotSubscription = {
  onDeleteSpot?:  {
    __typename: "Spot",
    id: string,
    name: string,
    description?: string | null,
    layer?:  {
      __typename: "Layer",
      id: string,
      name?: string | null,
      team?:  {
        __typename: "ModelSpotConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    layerTeamId?: string | null,
    spotLayerId?: string | null,
  } | null,
};

import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SpotMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Layer {
  readonly id: string;
  readonly name?: string | null;
  readonly spots?: (Spot | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Layer, LayerMetaData>);
  static copyOf(source: Layer, mutator: (draft: MutableModel<Layer, LayerMetaData>) => MutableModel<Layer, LayerMetaData> | void): Layer;
}

export declare class Spot {
  readonly id: string;
  readonly layerID: string;
  readonly name?: string | null;
  readonly layers?: Layer | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Spot, SpotMetaData>);
  static copyOf(source: Spot, mutator: (draft: MutableModel<Spot, SpotMetaData>) => MutableModel<Spot, SpotMetaData> | void): Spot;
}
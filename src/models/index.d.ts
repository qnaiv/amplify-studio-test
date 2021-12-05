import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type GalleryItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class GalleryItem {
  readonly id: string;
  readonly title?: string;
  readonly category?: string;
  readonly date?: string;
  readonly imageUrl?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<GalleryItem, GalleryItemMetaData>);
  static copyOf(source: GalleryItem, mutator: (draft: MutableModel<GalleryItem, GalleryItemMetaData>) => MutableModel<GalleryItem, GalleryItemMetaData> | void): GalleryItem;
}
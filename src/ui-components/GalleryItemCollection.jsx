/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function GalleryItemCollection(props) {
  const {
    GalleryItem,
    items: itemsProp,
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: GalleryItem,
        }).items;
  return (
    <Collection
      templateColumns="1fr 1fr"
      type="grid"
      alignItems="stretch"
      justifyContent="stretch"
      autoFlow="row"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <GalleryItem
          GalleryItem={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.GalleryItem[0]")}
        ></GalleryItem>
      )}
    </Collection>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function GalleryItem(props) {
  const { GalleryItem, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="200px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="210px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(240.12499898672104,240.12499898672104,240.12499898672104,1)"
        top="0px"
        left="0px"
        width="200px"
        position="absolute"
        height="210px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(182.74999290704727,182.74999290704727,182.74999290704727,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        top="187px"
        left="6px"
        width="143px"
        fontSize="10px"
        lineHeight="11.71875px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="13px"
        children="2021-05-02 21:21"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(101.00000157952309,101.00000157952309,101.00000157952309,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        top="167px"
        left="6px"
        width="189px"
        fontSize="14px"
        lineHeight="16.40625px"
        position="absolute"
        fontWeight="400"
        direction="column"
        height="17px"
        children={GalleryItem?.title}
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <Image
        padding="0px 0px 0px 0px"
        top="0px"
        left="0px"
        src={GalleryItem?.imageUrl}
        width="200px"
        position="absolute"
        height="157px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <View
        width="46px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="187px"
        left="149px"
        height="13px"
        {...getOverrideProps(overrides, "View.View[1]")}
      >
        <View
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(240.12499898672104,224.11667078733444,224.11667078733444,1)"
          top="0px"
          borderRadius="5px 5px 5px 5px"
          left="0px"
          width="46px"
          position="absolute"
          height="13px"
          {...getOverrideProps(overrides, "View.View[1].View[0]")}
        ></View>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(101.00000157952309,101.00000157952309,101.00000157952309,1)"
          textAlign="center"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Roboto"
          top="1px"
          left="5px"
          width="36.465118408203125px"
          fontSize="9px"
          lineHeight="10.546875px"
          position="absolute"
          fontWeight="400"
          direction="column"
          children={GalleryItem?.category}
          {...getOverrideProps(overrides, "View.View[1].Text[0]")}
        ></Text>
      </View>
    </View>
  );
}

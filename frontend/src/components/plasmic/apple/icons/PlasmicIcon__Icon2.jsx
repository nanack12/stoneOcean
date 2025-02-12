// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        fill={"none"}
        fillRule={"evenodd"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <circle cx={"8.5"} cy={"8.5"} r={"5"}></circle>

        <path d={"M17.571 17.5L12 12"}></path>
      </g>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4SWmLChNCXaLuZnDt9Byj4
// Component: Q1Ia_vEYAZF-
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 4SWmLChNCXaLuZnDt9Byj4/projectcss
import sty from "./PlasmicNavItemDetails.module.css"; // plasmic-import: Q1Ia_vEYAZF-/css

createPlasmicElementProxy;

export const PlasmicNavItemDetails__VariantProps = new Array();

export const PlasmicNavItemDetails__ArgProps = new Array();

const $$ = {};

function PlasmicNavItemDetails__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__fxOyr
        )}
      >
        {"Enter some text"}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__l1Fkv
        )}
      >
        {"Enter some text"}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__pKJm
        )}
      >
        {"Enter some text"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavItemDetails__ArgProps,
          internalVariantPropNames: PlasmicNavItemDetails__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavItemDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavItemDetails";
  } else {
    func.displayName = `PlasmicNavItemDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicNavItemDetails = Object.assign(
  // Top-level PlasmicNavItemDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicNavItemDetails
    internalVariantProps: PlasmicNavItemDetails__VariantProps,
    internalArgProps: PlasmicNavItemDetails__ArgProps
  }
);

export default PlasmicNavItemDetails;
/* prettier-ignore-end */

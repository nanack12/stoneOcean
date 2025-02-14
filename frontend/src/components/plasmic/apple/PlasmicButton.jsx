// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4SWmLChNCXaLuZnDt9Byj4
// Component: av6JUFG62QCD
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 4SWmLChNCXaLuZnDt9Byj4/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: av6JUFG62QCD/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: gCdk4BWPebGW/icon

createPlasmicElementProxy;

export const PlasmicButton__VariantProps = new Array(
  "type",
  "withIcons",
  "size",
  "rounded",
  "bold"
);

export const PlasmicButton__ArgProps = new Array("text", "iconLeft");

const $$ = {};

function PlasmicButton__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      },
      {
        path: "withIcons",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withIcons
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "rounded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rounded
      },
      {
        path: "bold",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.bold
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
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
        sty.root,
        {
          [sty.rootrounded]: hasVariant($state, "rounded", "rounded"),
          [sty.rootsize_large]: hasVariant($state, "size", "large"),
          [sty.roottype__default]: hasVariant($state, "type", "_default"),
          [sty.roottype_link]: hasVariant($state, "type", "link"),
          [sty.roottype_link_size_large]:
            hasVariant($state, "type", "link") &&
            hasVariant($state, "size", "large")
        }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <IconIcon
          data-plasmic-name={
            "iconRightSvgXmlnsHttpWwwW3Org2000SvgWidth21Height21ViewBox002121GFillNoneFillRuleEvenoddStrokeCurrentColorStrokeLinecapRoundStrokeLinejoinRoundCircleCx85Cy85R5PathDM17571175L1212GSvg"
          }
          data-plasmic-override={
            overrides.iconRightSvgXmlnsHttpWwwW3Org2000SvgWidth21Height21ViewBox002121GFillNoneFillRuleEvenoddStrokeCurrentColorStrokeLinecapRoundStrokeLinejoinRoundCircleCx85Cy85R5PathDM17571175L1212GSvg
          }
          className={classNames(
            projectcss.all,
            sty.iconRightSvgXmlnsHttpWwwW3Org2000SvgWidth21Height21ViewBox002121GFillNoneFillRuleEvenoddStrokeCurrentColorStrokeLinecapRoundStrokeLinejoinRoundCircleCx85Cy85R5PathDm17571175L1212GSvg,
            {
              [sty.iconRightSvgXmlnsHttpWwwW3Org2000SvgWidth21Height21ViewBox002121GFillNoneFillRuleEvenoddStrokeCurrentColorStrokeLinecapRoundStrokeLinejoinRoundCircleCx85Cy85R5PathDm17571175L1212GSvgwithIcons_withPrefixIcon]:
                hasVariant($state, "withIcons", "withPrefixIcon")
            }
          )}
          role={"img"}
        />

        {renderPlasmicSlot({
          defaultContents: "Store",
          value: args.text,
          className: classNames(sty.slotTargetText, {
            [sty.slotTargetTextbold]: hasVariant($state, "bold", "bold"),
            [sty.slotTargetTextrounded]: hasVariant(
              $state,
              "rounded",
              "rounded"
            ),
            [sty.slotTargetTextsize_large]: hasVariant($state, "size", "large"),
            [sty.slotTargetTextsize_small]: hasVariant($state, "size", "small"),
            [sty.slotTargetTexttype_link_size_large]:
              hasVariant($state, "type", "link") &&
              hasVariant($state, "size", "large")
          })
        })}
        {(hasVariant($state, "withIcons", "withSuffixIcon") ? true : false)
          ? renderPlasmicSlot({
              defaultContents: (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___7AiQs)}
                  role={"img"}
                />
              ),

              value: args.iconLeft,
              className: classNames(sty.slotTargetIconLeft, {
                [sty.slotTargetIconLefttype_link_size_large]:
                  hasVariant($state, "type", "link") &&
                  hasVariant($state, "size", "large"),
                [sty.slotTargetIconLeftwithIcons_withSuffixIcon]: hasVariant(
                  $state,
                  "withIcons",
                  "withSuffixIcon"
                )
              })
            })
          : null}
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "iconRightSvgXmlnsHttpWwwW3Org2000SvgWidth21Height21ViewBox002121GFillNoneFillRuleEvenoddStrokeCurrentColorStrokeLinecapRoundStrokeLinejoinRoundCircleCx85Cy85R5PathDM17571175L1212GSvg"
  ],

  freeBox: [
    "freeBox",
    "iconRightSvgXmlnsHttpWwwW3Org2000SvgWidth21Height21ViewBox002121GFillNoneFillRuleEvenoddStrokeCurrentColorStrokeLinecapRoundStrokeLinejoinRoundCircleCx85Cy85R5PathDM17571175L1212GSvg"
  ],

  iconRightSvgXmlnsHttpWwwW3Org2000SvgWidth21Height21ViewBox002121GFillNoneFillRuleEvenoddStrokeCurrentColorStrokeLinecapRoundStrokeLinejoinRoundCircleCx85Cy85R5PathDM17571175L1212GSvg:
    [
      "iconRightSvgXmlnsHttpWwwW3Org2000SvgWidth21Height21ViewBox002121GFillNoneFillRuleEvenoddStrokeCurrentColorStrokeLinecapRoundStrokeLinejoinRoundCircleCx85Cy85R5PathDM17571175L1212GSvg"
    ]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    iconRightSvgXmlnsHttpWwwW3Org2000SvgWidth21Height21ViewBox002121GFillNoneFillRuleEvenoddStrokeCurrentColorStrokeLinecapRoundStrokeLinejoinRoundCircleCx85Cy85R5PathDM17571175L1212GSvg:
      makeNodeComponent(
        "iconRightSvgXmlnsHttpWwwW3Org2000SvgWidth21Height21ViewBox002121GFillNoneFillRuleEvenoddStrokeCurrentColorStrokeLinecapRoundStrokeLinejoinRoundCircleCx85Cy85R5PathDM17571175L1212GSvg"
      ),
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */

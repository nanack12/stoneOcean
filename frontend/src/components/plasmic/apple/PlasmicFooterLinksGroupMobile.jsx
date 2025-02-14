// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4SWmLChNCXaLuZnDt9Byj4
// Component: 8ugVIBdD-gzb
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  set as $stateSet,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import AnimatingCross from "../../AnimatingCross"; // plasmic-import: w1dbs6cMwV3C/component
import FooterLink from "../../FooterLink"; // plasmic-import: JQYhEwN0Q6yL/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 4SWmLChNCXaLuZnDt9Byj4/projectcss
import sty from "./PlasmicFooterLinksGroupMobile.module.css"; // plasmic-import: 8ugVIBdD-gzb/css

createPlasmicElementProxy;

export const PlasmicFooterLinksGroupMobile__VariantProps = new Array(
  "expanded"
);

export const PlasmicFooterLinksGroupMobile__ArgProps = new Array(
  "groupName",
  "links"
);

const $$ = {};

function PlasmicFooterLinksGroupMobile__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          links: [{ url: "#", label: "Hello" }]
        },
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
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.isOpen;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.expanded
      },
      {
        path: "isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
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
        { [sty.rootexpanded]: hasVariant($state, "expanded", "expanded") }
      )}
      onClick={async event => {
        const $steps = {};
        $steps["toggle"] = true
          ? (() => {
              const actionArgs = {
                variable: {
                  objRoot: $state,
                  variablePath: ["isOpen"]
                },
                operation: 0,
                value: !$state.isOpen
              };
              return (({ variable, value, startIndex, deleteCount }) => {
                if (!variable) {
                  return;
                }
                const { objRoot, variablePath } = variable;
                $stateSet(objRoot, variablePath, value);
                return value;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["toggle"] != null &&
          typeof $steps["toggle"] === "object" &&
          typeof $steps["toggle"].then === "function"
        ) {
          $steps["toggle"] = await $steps["toggle"];
        }
      }}
    >
      <div
        data-plasmic-name={"categoryNameContainer"}
        data-plasmic-override={overrides.categoryNameContainer}
        className={classNames(projectcss.all, sty.categoryNameContainer)}
      >
        {renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.groupName,
          className: classNames(sty.slotTargetGroupName)
        })}
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <AnimatingCross
            data-plasmic-name={"animatingCross"}
            data-plasmic-override={overrides.animatingCross}
            add={hasVariant($state, "expanded", "expanded") ? undefined : true}
            className={classNames("__wab_instance", sty.animatingCross, {
              [sty.animatingCrossexpanded]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            })}
          />
        </div>
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"linksList"}
        data-plasmic-override={overrides.linksList}
        hasGap={true}
        className={classNames(projectcss.all, sty.linksList, {
          [sty.linksListexpanded]: hasVariant($state, "expanded", "expanded")
        })}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return $props.links;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
        ).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <FooterLink
              data-plasmic-name={"footerLink"}
              data-plasmic-override={overrides.footerLink}
              className={classNames("__wab_instance", sty.footerLink)}
              key={currentIndex}
              label={(() => {
                try {
                  return currentItem.label;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
              url={(() => {
                try {
                  return currentItem.url;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            />
          );
        })}
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "categoryNameContainer",
    "freeBox",
    "animatingCross",
    "linksList",
    "footerLink"
  ],

  categoryNameContainer: ["categoryNameContainer", "freeBox", "animatingCross"],
  freeBox: ["freeBox", "animatingCross"],
  animatingCross: ["animatingCross"],
  linksList: ["linksList", "footerLink"],
  footerLink: ["footerLink"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooterLinksGroupMobile__ArgProps,
          internalVariantPropNames: PlasmicFooterLinksGroupMobile__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterLinksGroupMobile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterLinksGroupMobile";
  } else {
    func.displayName = `PlasmicFooterLinksGroupMobile.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterLinksGroupMobile = Object.assign(
  // Top-level PlasmicFooterLinksGroupMobile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    categoryNameContainer: makeNodeComponent("categoryNameContainer"),
    freeBox: makeNodeComponent("freeBox"),
    animatingCross: makeNodeComponent("animatingCross"),
    linksList: makeNodeComponent("linksList"),
    footerLink: makeNodeComponent("footerLink"),
    // Metadata about props expected for PlasmicFooterLinksGroupMobile
    internalVariantProps: PlasmicFooterLinksGroupMobile__VariantProps,
    internalArgProps: PlasmicFooterLinksGroupMobile__ArgProps
  }
);

export default PlasmicFooterLinksGroupMobile;
/* prettier-ignore-end */

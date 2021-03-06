import React from "react";

interface Props {
  property: Record<string, any>;
  type?: 'color' | 'bg'
}

export const CssFabricProperties = (props: Props) => {
  const { property } = props;
 

  return (
    <div className={"flex-h flex-wrap"}>
      {Object.keys(property).map((key: string) => {
        const font_weight = property[key];
        const cssProperty = "text-" + key;
        return (
          <div
            key={key}
            className={"flex-h flex-wrap items-center w-tiers pad-all-4"}>
            <div className={"pad-ii"}>
              <div className={"pad-ii-8 border-all"}>text-{key}</div>
            </div>
            <div className={cssProperty + " flex-main flex-h"}>
              <div className={"pad-ii-4"}>"</div>
              <div className={"flex-main"}><span className={"text-ellipsis"}>some content here {font_weight}</span></div>
			        <div className={"pad-ii-4"}>"</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CssFabricProperties;

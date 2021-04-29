import React from "react";
import { useRouter } from "next/router";
import {
  Header,
  SubHeader,
  SubSubHeader,
  SubHeaderH,
} from "src/components/Headers";

import conf_fabric from "cssfabric"; // "css-fabric/_generated/css.fabric.config.json";
import { fabricModuleProperties } from "@/utils/fabricModuleProperties";
import { CssFabricProperties } from "src/components/CssFabricProperties";

interface Props {}

const Color = (props: Props) => {

  const fabricConfig = conf_fabric.getJsonConfig("base");
  /// lib/css-fabric/_generated/css.fabric.config.json
  const base = fabricConfig._data;

  console.log(base)
 // const a = conf_fabric["css-config"].modules.base._data.grid_class_name;
const a = '';
  return (
    <div className={"grid-h"}>
      <div className={"grid-main"}>
        <SubHeader title="text colors" description="naafa">
          de red
          <p><pre>{JSON.stringify(base, null,"\t")}</pre></p>
        </SubHeader>
        <SubHeader title="background-colors" description="naafa">
          de red
          {JSON.stringify(a, null)}
        </SubHeader>
      </div>
      <div className={"w-quarter"}>
        <SubHeader title="themed colors" description="naafa">  
          {JSON.stringify(a, null)}
          {Object.keys(base.color_schemes_props).map((key,index)=>{

          })}
        </SubHeader>
      </div>
    </div>
  );
};

export default Color;

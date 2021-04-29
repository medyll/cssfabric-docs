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
  const base = fabricConfig;

  console.log(base)
 // const a = conf_fabric["css-config"].modules.base._data.grid_class_name;
const a = '';
  return (
    <div className={"grid-h"}>
      <div className={"grid-main"}>
        <SubHeader title="text colors" description="naafa">
          de red
          <p>{JSON.stringify(base, null,"\r")}</p>
        </SubHeader>
        <SubHeader title="background-colors" description="naafa">
          de red
          {JSON.stringify(a, null)}
        </SubHeader>
      </div>
      <div className={"w-quarter"}>
        <SubHeader title="themed colors" description="naafa">  
          {JSON.stringify(a, null)}
        </SubHeader>
      </div>
    </div>
  );
};

export default Color;

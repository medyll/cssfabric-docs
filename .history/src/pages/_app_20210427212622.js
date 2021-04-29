// npm link cssfabric
import 'cssfabric/lib/styles/css-fabric/core/css-fabric.css' 

import cssfabric from "cssfabric";

function MyApp({ Component, pageProps }) { 
 
  console.log('cssfabric',cssfabric.getJsonConfig())
  return <Component {...pageProps} />
}

export default MyApp
 
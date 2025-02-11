import { PLASMIC } from "./plasmic-init";
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-react";

function App() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  );
}

export default App;

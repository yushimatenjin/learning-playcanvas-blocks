import { SplatViewer } from "../src/components/splat-viewer"

const splatUrl = "./model.ply";
const posterUrl = "./poster.png";

export default () => (
  <SplatViewer splatUrl={splatUrl} posterUrl={posterUrl} />
)
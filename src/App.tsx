import { SplatViewerPly } from "./components/splat-viewer-ply";
import { SplatViewerSogs } from "./components/splat-viewer-sogs";

export default function App() {
  return (
    <div className="flex flex-row w-full h-screen bg-gray-50 dark:bg-zinc-900">
      {/* PLY Viewer */}
      <div className="flex-1 flex flex-col items-center p-4 gap-2">
        <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">PLY (46.1MB)</h2>
        <div className="flex-1 w-full flex items-stretch">
          <SplatViewerPly src={"https://yushimatenjin.github.io/playcanvas-sogs-viewer/model.ply"} />
        </div>
      </div>
      {/* Divider */}
      <div className="w-px bg-gray-300 dark:bg-zinc-700 mx-2 h-full self-stretch" />
      {/* SOGS Viewer */}
      <div className="flex-1 flex flex-col items-center p-4 gap-2">
        <h2 className="text-xl font-bold mb-2 text-green-700 dark:text-green-300">SOGS (4.2MB)</h2>
        <div className="flex-1 w-full flex items-stretch">
          <SplatViewerSogs />
        </div>
      </div>
    </div>
  );
}

import { Viewer } from "@playcanvas/blocks"

export function SplatViewer({ splatUrl, posterUrl }: { splatUrl: string, posterUrl: string }) {
  return (
    <Viewer.Splat
      src={splatUrl}
      poster={posterUrl}
      className="h-screen w-full rounded-lg shadow-xl cursor-grab active:cursor-grabbing"
    >
      <Viewer.Controls className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
        <div className="flex gap-1 pointer-events-auto flex-grow ">
          <Viewer.FullScreenButton />
          <Viewer.DownloadButton />
        </div>
        <div className="flex gap-1 pointer-events-auto">
          <Viewer.CameraModeToggle />
          <Viewer.HelpButton />
          <Viewer.MenuButton />
        </div>
      </Viewer.Controls>
    </Viewer.Splat>
  )
}
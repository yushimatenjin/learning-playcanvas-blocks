import { Viewer } from "@playcanvas/blocks"

export function SplatViewer() {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/'
  const metaUrl = new URL('meta.json', window.location.origin + baseUrl).href

  return (
    <Viewer.Splat
      src={metaUrl}
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
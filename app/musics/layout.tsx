import React, { ReactNode } from "react"

type CP = {
    children: ReactNode,
    sidebar: ReactNode,
    songs: ReactNode,
    player: ReactNode,
}

export default function MusicsLayout({children, sidebar, songs, player}: CP) {
  return (
    <div className="flex bg-black w-screen">
        {sidebar}
        <div className="w-full">
          {songs}
        {player}
        </div>
        <main>{children}</main>
    </div>
  )
}
import ReactPlayer from 'react-player'
import { LoaderIcon } from 'lucide-react'

import { useCurrentLesson, useStore } from '../store-zustand'

// import { useApDispatch, useAppSelector } from '../store'
// import { next, useCurrentLesson } from '../store/slices/player'

export function Video() {
  const { currentLesson } = useCurrentLesson()
  const { isCourseLoading, next } = useStore((store) => {
    return {
      isCourseLoading: store.isLoading,
      next: store.next,
    }
  })

  // const dispatch = useApDispatch()
  // const { currentLesson } = useCurrentLesson()
  // const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  function handlePlayNext() {
    next()
    // dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <LoaderIcon className="h-6 w-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}

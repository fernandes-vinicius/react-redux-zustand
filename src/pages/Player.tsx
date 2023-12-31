import React from 'react'
import { MessageCircleIcon } from 'lucide-react'

import { useCurrentLesson, useStore } from '../store-zustand'

// import { useApDispatch, useAppSelector } from '../store'
// import { loadCourse, useCurrentLesson } from '../store/slices/player'

import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'

export function Player() {
  const { course, load } = useStore((store) => {
    return {
      course: store.course,
      load: store.load,
    }
  })
  const { currentLesson } = useCurrentLesson()

  // const dispatch = useApDispatch()
  // const modules = useAppSelector((state) => state.player.course?.modules)

  React.useEffect(() => {
    load()
  }, [load])

  // React.useEffect(() => {
  //   dispatch(loadCourse())
  // }, [dispatch])

  React.useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo ${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1110px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircleIcon className="h-4 w-4" /> Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="absolute top-0 bottom-0 right-0 w-80 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {course?.modules?.map((module, index) => (
              <Module
                key={module.id}
                moduleIndex={index}
                title={module.title}
                amountOfLessons={module.lessons.length}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  )
}

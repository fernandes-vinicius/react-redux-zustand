import { useCurrentLesson, useStore } from '../store-zustand'

// import { useAppSelector } from '../store'
// import { useCurrentLesson } from '../store/slices/player'

export function Header() {
  const { currentLesson, currentModule } = useCurrentLesson()
  const isCourseLoading = useStore((store) => store.isLoading)

  // const { currentModule, currentLesson } = useCurrentLesson()
  // const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  // Skeleton
  if (isCourseLoading) {
    return (
      <div className="space-y-1 animate-pulse">
        <div className="h-4 w-72 rounded bg-zinc-800" />
        <div className="h-2 w-32 rounded bg-zinc-800" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo &ldquo;{currentModule?.title}&rdquo;
      </span>
    </div>
  )
}

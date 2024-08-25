import { cn } from '../modules/lib/utils.ts'

function Skeleton({ class:className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div class={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
}

export { Skeleton }

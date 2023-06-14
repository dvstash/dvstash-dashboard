import Header from '@/components/Header'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col bg-od_black">
      <Header title={'Title'} subtitle={'Sub Title'} />
    </div>
  )
}

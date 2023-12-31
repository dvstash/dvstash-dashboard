'use client'

import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="flex h-full flex-col gap-2 bg-OD_BLACK">
      <Header title={'Title'} subtitle={'Sub Title'} />
      <div className="overflow-auto"></div>
    </div>
  )
}

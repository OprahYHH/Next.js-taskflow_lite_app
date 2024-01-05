import React from "react"
import Users from '@/app/pages/Users/index'
import Navbar from "@/app/components/Navbar"

export default function Home() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <main className="container mx-auto px-4 h-screen">
        <Users />
      </main>
    </div>
  )
}

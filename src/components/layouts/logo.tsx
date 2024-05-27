"use client"

import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <div className="bg-[#ff0f0f] w-[132px] h-[40px]">
        <Image src="/mafstat-logo-white.png" alt="Mafstat" width={132} height={40} />
      </div>
    </Link>
  )
}


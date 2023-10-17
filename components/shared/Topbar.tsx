import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Topbar() {
  return (
    <nav className='topbar'>
        <Link href="/" className='flex items-center gap-4 bg-gradient-to-r from-indigo-950 via-indigo-500 to-blue-400'>
            <Image src="/assets/logo.svg"  alt='logo' width={28} height={28}/>
            <p className='text-bold text-white max-xs:hidden'>Screening Doc</p>
        </Link>
        <div className='flex items-center gap-4'>
            <div className='block md:hidden'>
                <SignedIn>
                    <SignOutButton>
                        <div className='flex cursor-pointer'>
                            <Image 
                                src="/assets/logout.svg"
                                alt='logout'
                                width={24}
                                height={24}
                                />
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>

            <OrganizationSwitcher 
                appearance={{
                    elements: {
                        organizationSwitcherTrigger: "py-2 px-4"
                    }
                }}
            />
        </div>
    </nav>
  )
}

export default Topbar
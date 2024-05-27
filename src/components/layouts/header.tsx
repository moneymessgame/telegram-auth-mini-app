import Logo from '@/components/layouts/logo'
import { MobileNav } from '@/components/layouts/mobile-nav'
import { NavMenu } from '@/components/layouts/nav-menu'
import ThemeToggle from '@/components/layouts/theme-toggle'

import { AccountButton } from './account-button'

export const Header: React.FC = () => {

  return (
    <header className="sticky top-0 z-50 bg-[#ff0f0f] border-b flex items-center w-full justify-between gap-5">
      
      <div className="flex ">
        <Logo />
        <div className="p-[2px]">
          <MobileNav />
        </div>
        <div className="px-1">
          <NavMenu />
        </div>
      </div>
      <div className="flex justify-end px-5">
        <div className="px-1">
          <ThemeToggle />
        </div>
        <AccountButton />
      </div>
    </header>
  )
}

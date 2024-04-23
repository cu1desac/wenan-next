import type React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { AcmeLogo } from '@/app/_components/acme-logo';
import RootHeaderThemeSwitch from '@/app/_components/root-header-theme-switch';

export default function RootHeader(): React.ReactNode {
  return (
    <header>
      <div className="flex flex-row gap-2">
        <Navbar shouldHideOnScroll>
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden gap-4 sm:flex" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent as="div" justify="end">
            <NavbarItem>
              <RootHeaderThemeSwitch />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </header>
  );
}

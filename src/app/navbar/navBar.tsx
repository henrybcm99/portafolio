import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";


export default function NavBar() {
  return (
    <Navbar className="pl-[5vw] pr-[5vw] shadow-md h-full">
      <NavbarBrand>
        <p className="font-bold text-xl text-inherit">Portafolio</p>
      </NavbarBrand>

      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-xl" color="foreground" href="home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-xl" href="skills" aria-current="page" color="secondary">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl" color="foreground" href="#">
            Proyects
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
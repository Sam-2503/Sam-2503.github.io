import {
  Menubar,
  MenubarMenu,
  MenubarSeparator,

} from "@/components/ui/menubar";

export function Navbar() {
  return (
    <Menubar>
      <p className="navbar-start font-bold text-white">Sam25.is-a.dev</p>
        <MenubarMenu>
          <a href="#home">About</a>
        </MenubarMenu>

        <MenubarSeparator />

        <MenubarMenu>
          <a href="#contact">Contact</a>
        </MenubarMenu>

        <MenubarSeparator />

        <MenubarMenu>
          <a href="#projects">Projects</a>
        </MenubarMenu>
      
    </Menubar>
  );
}

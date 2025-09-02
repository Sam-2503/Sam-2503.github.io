import {
  Menubar,
  MenubarMenu,
  MenubarSeparator,
} from "@/components/ui/menubar";

export function Navbar() {
  return (
    <Menubar className="px-4 font-work-sans gap-x-4 flex items-center">
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

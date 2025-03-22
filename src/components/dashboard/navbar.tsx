import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SidebarContent } from "@/components/dashboard/sidebar-content";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background border-b border-gray-300 dark:border-zinc-700 z-50 transition-all duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle>Menú de navegación</SheetTitle>
                </SheetHeader>
                <SidebarContent className="p-4" />
              </SheetContent>
            </Sheet>
            <Link href="/" className="text-xl font-bold">
              Dashboard
            </Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

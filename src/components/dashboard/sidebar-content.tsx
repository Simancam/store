import Link from "next/link";
import React, { ReactNode } from "react";
import { 
  Home, 
  SquarePlus,  
  Mail,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const sidebarItems = [
  { href: "/dashboard/home", icon: Home, label: "Home" },
  { href: "/dashboard/add-product", icon: SquarePlus, label: "Añadir Producto" },
  { href: "/dashboard/inventory", icon: Package, label: "Inventario" },
  { href: "/dashboard/orders", icon: Mail, label: "Pedidos" },
];

interface SidebarContentProps {
  className?: string;
  isCollapsed?: boolean;
  renderItem?: (icon: ReactNode, label: string) => ReactNode;
}

export function SidebarContent({ className, isCollapsed, renderItem }: SidebarContentProps) {
  return (
    <div className={cn("flex flex-col space-y-4 py-4", className)}>
      {sidebarItems.map((item) => {
        const iconElement = <item.icon className="h-5 w-5" />;
        return (
          <Link key={item.href} href={item.href} className="relative">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full flex items-center",
                isCollapsed ? "justify-center px-2" : "justify-start"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              {iconElement}
              <span
                className={cn(
                  "transition-all duration-300",
                  isCollapsed ? "opacity-0 translate-x-[-10px]" : "opacity-100 translate-x-0"
                )}
              >
                {!isCollapsed && item.label}
              </span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
}

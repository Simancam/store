import { useState, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PanelRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarContent } from "@/components/dashboard/sidebar-content";

interface SidebarProps {
  onToggle: (collapsed: boolean) => void;
}

export function Sidebar({ onToggle }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    onToggle(isCollapsed);
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [isCollapsed, onToggle]);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col lg:border-r transition-all duration-300">
      <Collapsible open={!isCollapsed} className="flex flex-col flex-grow bg-background">
        <div
          className={cn(
            "flex flex-col flex-grow pt-20 transition-all duration-300",
            isCollapsed ? "w-16" : "w-64"
          )}
        >
          <SidebarContent
            className="px-4"
            isCollapsed={isCollapsed}
            renderItem={(icon: ReactNode, label: string) => (
              <div className="flex items-center gap-2">
                {icon}
                <span
                  className={cn(
                    "transition-all duration-300",
                    isCollapsed ? "opacity-0 translate-x-[-10px]" : "opacity-100 translate-x-0"
                  )}
                  style={{ transitionDelay: isAnimating ? "100ms" : "0ms" }}
                >
                  {label}
                </span>
              </div>
            )}
          />

          <CollapsibleTrigger asChild className="mt-auto mb-4 mx-4">
            <Button
              variant="ghost"
              className={cn(
                "w-full flex items-center justify-center p-3 rounded-lg border transition-all",
                "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
              )}
              onClick={handleToggle}
              title={isCollapsed ? "Expandir menú" : "Colapsar menú"}
            >
              <PanelRight className="h-5 w-5 transition-transform duration-300" />
            </Button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Navbar } from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar";
import Footer from "@/components/store/footer";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex overflow-hidden bg-background pt-16">
        {/* Sidebar */}
        <Sidebar onToggle={setIsCollapsed} />

        {/* Contenido principal con margen dinámico */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isCollapsed ? "lg:ml-16" : "lg:ml-64"
          }`}
        >
          <main className="p-6">
            <div className="min-h-[calc(100vh-230px)]">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

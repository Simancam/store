import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About Us", href: "/about" },
    { name: "License", href: "/license" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="w-full border-t border-zinc-800 bg-black px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white tracking-tight">NEXT</span>
              <span className="text-sm text-gray-400">Building the future</span>
            </div>
          </div>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="link"
                    className="text-sm text-gray-400 hover:text-white"
                    asChild
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="my-6 border-zinc-700" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">&copy; {currentYear} Your Company. All rights reserved.</p>

          <div className="flex gap-4">
            <Button
              variant="link"
              className="text-sm text-gray-400 hover:text-white"
              asChild
            >
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            <Button
              variant="link"
              className="text-sm text-gray-400 hover:text-white"
              asChild
            >
              <Link href="/terms">Terms of Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
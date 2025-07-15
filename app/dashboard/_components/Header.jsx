"use client";
import { SignInButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bot } from "lucide-react";

const NAVBAR_HEIGHT = 72; // px

function Header() {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [controlNavbar]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/about-us", label: "About us" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm`}
        style={{ height: `${NAVBAR_HEIGHT}px` }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMobileMenu}
            aria-label="PrepifyAI Home"
          >
            <Bot className="text-indigo-600" size={28} />
            <span className="text-xl font-bold text-indigo-600">Prepify AI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                path={path}
                href={item.href}
                label={item.label}
                onClick={closeMobileMenu}
              />
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-indigo-600 transition"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 pt-[72px] bg-white md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-6 space-y-6">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                path={path}
                href={item.href}
                label={item.label}
                mobile
                onClick={closeMobileMenu}
              />
            ))}

            <div className="pt-6 border-t">
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex justify-center pt-4">
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-12 h-12",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavItem({ path, href, label, mobile, onClick }) {
  const isActive = path === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block transition px-4 py-2 rounded-lg font-medium ${
        mobile
          ? "text-lg text-center"
          : "hover:bg-indigo-100 text-sm"
      } ${isActive ? "text-indigo-600 font-bold bg-indigo-50" : "text-gray-700 hover:text-indigo-600"}`}
    >
      {label}
    </Link>
  );
}

export default Header;

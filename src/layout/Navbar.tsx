import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  // { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} transition-all duration-500`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            
            className="text-xl font-bold tracking-tight hover:text-primary"
          >
            KA<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => (window.location.href = "/#contact")}
              size="sm"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foregroun cursor-pointe z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <HugeiconsIcon icon={Cancel01Icon} size={24} />
            ) : (
              <HugeiconsIcon icon={Menu01Icon} size={24} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-1/2 w-full -translate-x-1/2 glass-strong mx-auto animate-fade-in max-w-xs rounded-lg">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </Link>
              ))}

              <Button
                onClick={() => {
                  window.location.href = "/#contact";
                  setIsMenuOpen(false);
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

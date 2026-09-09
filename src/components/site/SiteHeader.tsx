import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { cn } from "@/lib/utils";

type SubItem = {
  label: string;
  to: string;
};

type NavItem = {
  label: string;
  to?: string;
  children?: SubItem[];
};

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Sabha",
    children: [
      { label: "About Sabha", to: "/about-sabha" },
      { label: "Sabha Patrons & Trustees", to: "/sabha-patrons-trustees" },
      { label: "Veda Ashramam", to: "/veda-ashramam" },
      { label: "Activities & Events", to: "/activities" },
      { label: "Donate for Sevas/Annadanam", to: "/donate-for-sevas" },
      { label: "Panchangam", to: "/panchangam" },
      { label: "Downloads", to: "/downloads" },
    ],
  },
  {
    label: "Veda Patasala",
    children: [
      { label: "Why Veda Samrakshanam", to: "/why-veda-samrakshanam" },
      { label: "Raja Sastrigal", to: "/rajasastrigal" },
      { label: "Our Vision", to: "/our-vision" },
      { label: "Patasala Management", to: "/patasala-management" },
      { label: "Patasala Details", to: "/patasala-details" },
      { label: "Our Achievements", to: "/our-achievements" },
      { label: "Sources of Sustenance", to: "/sources-of-sustenance" },
      { label: "Ways to Support – Donate Now", to: "/ways-to-support" },
      { label: "Appeal for Building Construction", to: "/appeal-for-building-construction" },
      { label: "EPFO Form 5A Extract", to: "/epfo-form-5a" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "Donate Now", to: "/donate" },
  { label: "Contact Us", to: "/contact" },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    Sabha: true,
    "Veda Patasala": false,
  });

  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const solid = !transparent || scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <img src={logoMark} alt="Vedashramam emblem" width={44} height={44} className="h-11 w-11" />
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-xl tracking-wide",
                solid ? "text-maroon" : "text-primary-foreground",
              )}
            >
              Vedashramam
            </span>
            <span
              className={cn(
                "block text-[0.62rem] uppercase tracking-[0.22em]",
                solid ? "text-muted-foreground" : "text-primary-foreground/80",
              )}
            >
              Puducherry
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            if (item.children) {
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3.5 py-2 text-[0.82rem] font-medium uppercase tracking-[0.09em] transition-all",
                      isOpen
                        ? "bg-[#381809] text-[#f8b133] shadow-inner"
                        : solid
                          ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                          : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground",
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        isOpen && "rotate-180 text-[#f8b133]",
                      )}
                    />
                  </button>

                  {/* Dropdown Menu Container */}
                  <div
                    className={cn(
                      "absolute left-0 top-full min-w-[270px] origin-top rounded-b-md border border-[#4a220e] bg-[#341506] py-1.5 shadow-2xl transition-all duration-200",
                      isOpen
                        ? "pointer-events-auto visible opacity-100 translate-y-0"
                        : "pointer-events-none invisible opacity-0 -translate-y-1",
                    )}
                  >
                    {item.children.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 text-[0.82rem] font-medium tracking-normal text-[#f7ede2] transition-colors hover:bg-black/25 hover:text-[#f8b133]"
                        activeProps={{
                          className: "text-[#f8b133] font-semibold bg-black/20",
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.to}
                to={item.to!}
                className={cn(
                  "rounded-md px-3 py-2 text-[0.82rem] font-medium uppercase tracking-[0.09em] transition-colors",
                  solid
                    ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                    : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground",
                )}
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            to="/donate"
            className="ml-2 rounded-md bg-primary px-4 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.09em] text-primary-foreground transition-colors hover:bg-maroon"
          >
            Donate Now
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden",
            solid ? "text-foreground hover:bg-accent" : "text-primary-foreground hover:bg-primary-foreground/10",
          )}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="max-h-[85vh] overflow-y-auto border-t border-border bg-background shadow-xl lg:hidden">
          <nav className="container-page flex flex-col py-4 space-y-1">
            {NAV.map((item) => {
              if (item.children) {
                const isExpanded = !!mobileExpanded[item.label];
                return (
                  <div key={item.label} className="border-b border-border/50 pb-1">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.label)}
                      className="flex w-full items-center justify-between px-2 py-3 text-sm font-semibold uppercase tracking-[0.09em] text-foreground"
                    >
                      <span className={cn(isExpanded && "text-primary")}>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-muted-foreground transition-transform duration-200",
                          isExpanded && "rotate-180 text-primary",
                        )}
                      />
                    </button>

                    {isExpanded && (
                      <div className="ml-2 rounded-md border-l-2 border-primary/40 bg-muted/30 py-1 pl-2">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-sm px-3 py-2 text-xs font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary"
                            activeProps={{ className: "text-primary font-bold" }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to!}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-3 text-sm font-medium uppercase tracking-[0.09em] text-foreground hover:bg-accent"
                  activeProps={{ className: "text-primary font-bold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-3">
              <Link
                to="/donate"
                onClick={() => setMobileOpen(false)}
                className="block rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.09em] text-primary-foreground shadow"
              >
                Donate Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export { ChevronDown };

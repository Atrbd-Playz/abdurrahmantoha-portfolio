'use client';



import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, Code, Briefcase, Mail, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1)),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        className="fixed left-0 top-0 h-screen w-20 lg:w-24 backdrop-blur-lg border-r z-50 hidden md:flex flex-col items-center py-8"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          borderColor: 'var(--border-color)',
        }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          className="relative group mb-12 LogoFont"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center"
            
          >
            <span className="text-white text-4xl">AR</span>
          </div>
          <motion.div
            className="absolute -inset-2 blur-lg opacity-0 group-hover:opacity-50 rounded-xl transition-opacity"
            style={{
              background: `linear-gradient(to right, var(--accent-primary), var(--accent-primary-dark))`,
            }}
            whileHover={{ opacity: 0.5 }}
          />
        </motion.a>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col gap-6 items-center">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);

            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center transition-all"
                  style={
                    isActive
                      ? {
                          background: `linear-gradient(to bottom right, var(--accent-primary), var(--accent-primary-dark))`,
                          color: '#ffffff',
                        }
                      : {
                          backgroundColor: 'rgba(17, 24, 39, 0.5)',
                          color: 'rgb(156 163 175)',
                        }
                  }
                >
                  <motion.div whileHover={{color:'var(--accent-primary)'}}>
                                      <Icon size={20} className="lg:w-6 lg:h-6" />
                  </motion.div>

                </div>

                {/* Tooltip */}
                <motion.div
                  className="absolute left-full ml-4 px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
                  style={{
                    backgroundColor: 'rgba(17, 24, 39, 0.9)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'var(--accent-primary)',
                    color: 'var(--accent-primary)',
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  <span className="text-sm">{item.name}</span>
                </motion.div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                    style={{
                      background: `linear-gradient(to bottom, var(--accent-primary), var(--accent-primary-dark))`,
                    }}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Glow effect */}
                {isActive && (
                  <motion.div
                    className="absolute -inset-2 blur-lg opacity-30 rounded-xl"
                    style={{
                      background: `linear-gradient(to right, var(--accent-primary), var(--accent-primary-dark))`,
                    }}
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Scroll Progress Indicator */}
        <div 
          className="w-1 h-32 rounded-full overflow-hidden"
          style={{ backgroundColor: 'var(--border-color)' }}
        >
          <motion.div
            className="w-full origin-top"
            style={{ 
              scaleY,
              background: `linear-gradient(to bottom, var(--accent-primary), var(--accent-primary-dark))`,
            }}
          />
        </div>
      </motion.aside>

      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 md:hidden w-12 h-12 rounded-xl flex items-center justify-center"
        style={{
          background: `linear-gradient(to bottom right, var(--accent-primary), var(--accent-primary-dark))`,
        }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 backdrop-blur-lg z-40 md:hidden"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="flex items-center gap-4 text-2xl transition-colors"
                style={{ color: 'rgb(209 213 219)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgb(209 213 219)';
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 50,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon size={28} />
                {item.name}
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
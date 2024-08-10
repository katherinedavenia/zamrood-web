"use client";
import { menuItems } from "~/utils/constants";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import Link from "next/link";
import { NeedAssistanceButton } from "./NeedAssistanceButton";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navbarBackgroundColor =
    activeSection === "home" && "bg-white lg:bg-transparent";
  const navbarTextColor =
    activeSection === "home" ? "text-white" : "text-black";

  return (
    <div>
      <div
        className={`z-30 fixed top-0 py-5 w-screen ${navbarBackgroundColor}`}
      >
        <Container>
          <div
            className={`flex-row justify-between ${navbarTextColor} hidden lg:flex`}
          >
            <Link href="/">
              <img
                src={
                  activeSection === "home"
                    ? "/zamrood-logo-white.png"
                    : "/zamrood-logo-color.png"
                }
                alt="zamrood-logo"
                className="h-[40px] w-auto object-contain"
              />
            </Link>
            <div className="flex flex-row justify-center items-center">
              {menuItems.map(({ id, label, section }) => (
                <Link key={id} href={`#${section}`}>
                  <p
                    key={id}
                    className="text-base mx-3 xl:mx-6 cursor-pointer font-medium"
                  >
                    {label}
                  </p>
                </Link>
              ))}
            </div>
            <NeedAssistanceButton darkMode={activeSection === "home"} />
          </div>

          <div
            className="flex flex-row justify-between lg:hidden"
            onClick={toggleDrawer}
          >
            <img
              src="/zamrood-logo-color.png"
              alt="zamrood-logo"
              className="h-[40px] w-auto object-contain"
            />
            <img
              src="/icons/menu.svg"
              alt="menu"
              className="h-[40px] w-auto object-contain"
            />
          </div>
        </Container>
      </div>

      <div
        className={`z-40 fixed inset-0 h-screen w-screen fixed bottom-0 left-0 bg-[#F7F7F7] transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Container>
          <div className="flex flex-col items-start h-screen pt-5">
            <div className="flex flex-row justify-between w-full">
              <Link href="/">
                <img
                  src="/zamrood-logo-color.png"
                  alt="zamrood-logo"
                  className="h-[40px] w-auto object-contain"
                />
              </Link>
              <button onClick={toggleDrawer}>
                <img
                  src="/icons/menu.svg"
                  alt="close-menu"
                  className={`h-[40px] w-auto object-contain transition-transform duration-300 transform ${
                    isDrawerOpen ? "-rotate-90" : "rotate-0"
                  }`}
                />
              </button>
            </div>
            <div className="my-20 w-full">
              {menuItems.map(({ id, label, section }) => (
                <Link key={id} href={`#${section}`} onClick={toggleDrawer}>
                  <div className="cursor-pointer">
                    <p className="text-[#383535] uppercase text-[22px] font-medium">
                      {label}
                    </p>
                    <div className="w-full h-[1.5px] bg-[#D6D6D6] mb-4 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full">
              <NeedAssistanceButton />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

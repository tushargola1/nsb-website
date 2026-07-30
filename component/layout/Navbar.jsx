"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Offcanvas from "./Offcanvas";
import "./css/Navbar.css";
/* ─── Navigation Data ─────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#",
    children: [
      { label: "Director NSB", href: "/about/director-nsb" },
      { label: "Governing Board", href: "/about/governing-board" },
      { label: "About NEARS", href: "/about/about-nears" },
      {
        label: "Leader's Message",
        href: "#",
        children: [
          { label: "Message from CMD Desk", href: "/about/message-from-cmd-desk" },
          { label: "Director's Message", href: "/about/message-director" },
        ],
      },
    ],
  },
  { label: "Our Faculty", href: "/faculty" },
  {
    label: "Programmes",
    href: "#",
    children: [
      { label: "PGDM (Executive)", href: "/programmes/pgdm-executive" },
      {
        label: "PGDM (Energy Management)",
        href: "/programmes/pgdm-energy-management",
      },
      { label: "Doctoral (Ph.D.)", href: "/programmes/doctoral-phd" },
    ],
  },
  { label: "Executive Education", href: "/executive-education" },
  {
    label: "Research & Consultancy",
    href: "#",
    children: [
      {
        label: "Faculty Publications",
        href: "/research/faculty-publications",
      },
      { label: "Consultancy", href: "/research/consultancy" },
      {
        label: "Centres of Excellence",
        href: "/research/centres-of-excellence",
      },
    ],
  },
  {
    label: "Corporate Relations",
    href: "#",
    children: [
      { label: "Townhall Series", href: "/corporate/townhall-series" },
      {
        label: "Guest Lecture Series",
        href: "/corporate/guest-lecture-series",
      },
      { label: "Placements", href: "/corporate/placements" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

/* ─── Desktop Dropdown Item ───────────────────────────────── */
function DropdownItem({ item, level = 0 }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const hasChildren = item.children && item.children.length > 0;

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!hasChildren) {
    return (
      <li>
        <Link href={item.href}>{item.label}</Link>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className={`nsb-has-children${level > 0 ? " nsb-nested" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={item.href}>
        {item.label}
        <svg
          className="nsb-arrow"
          viewBox="0 0 10 6"
          width="10"
          height="6"
          aria-hidden="true"
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </Link>
      <ul
        className={`nsb-submenu nsb-level-${level}${open ? " nsb-open" : ""}`}
      >
        {item.children.map((child) => (
          <DropdownItem key={child.label} item={child} level={level + 1} />
        ))}
      </ul>
    </li>
  );
}

/* ─── Mobile Accordion Item ───────────────────────────────── */
function MobileItem({ item, depth = 0 }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className={`nsb-mob-item depth-${depth}`}>
      <div className="nsb-mob-row">
        <Link href={item.href} className="nsb-mob-link">
          {item.label}
        </Link>
        {hasChildren && (
          <button
            className={`nsb-mob-toggle${open ? " nsb-mob-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={`Toggle ${item.label}`}
          >
            <svg viewBox="0 0 10 6" width="12" height="12" aria-hidden="true">
              <path
                d="M1 1l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className="nsb-mob-sub">
          {item.children.map((child) => (
            <MobileItem key={child.label} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

/* ─── Main Navbar ─────────────────────────────────────────── */
export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  useEffect(() => {
   const onScroll = () => {
  const shouldStick = window.scrollY > 100;

  setSticky(prev => prev !== shouldStick ? shouldStick : prev);
};
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen || offcanvasOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, offcanvasOpen]);

  return (
    <>
      {/* ── Top utility bar ───────────────────────────────── */}
      <div className="nsb-topbar bg-white ">
        <div className="nsb-topbar-inner">
          <div className="top-contact-info d-flex align-items-center gap-4 flex-wrap text-dark">
            <a
              href="tel:+919958880671"
              className="contact-item fs-4 fw-semibold"
            >
              <i className="fas fa-phone-alt me-2"></i>
              +91-99588-80671
            </a>

            <a
              href="mailto:admission@nsb.ac.in"
              className="contact-item fs-4 fw-semibold"
            >
              <i className="fas fa-envelope me-2"></i>
              admission@nsb.ac.in
            </a>

            <a
              href="mailto:contact@nsb.ac.in"
              className="contact-item fs-4 fw-semibold"
            >
              <i className="fas fa-envelope me-2"></i>
              contact@nsb.ac.in
            </a>
          </div>
          <div className="nsb-topbar-links fw-semibold">
            <Link href="#">Important Links</Link>
            <Link href="#">Learning Resource Centre</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">ERP Login</Link>
          </div>
        </div>
      </div>

      {/* ── Logo band ─────────────────────────────────────── */}
      <div className="nsb-logoband ">
        <div className="nsb-logoband-inner container px-0">
          <Link href="/" className="nsb-logo-wrap">
            <Image
              src="/assets/images/logo/nsblogo.webp"
              width={200}
              height={70}
              alt="NSB Logo"
              priority
            />
          </Link>
          <Link href="/" className="nsb-logo-wrap nsb-logo-center">
            <Image
              src="/assets/images/logo/midlogo.webp"
              width={300}
              height={70}
              alt="NSB Mid Logo"
              priority
            />
          </Link>
          <Link href="/" className="nsb-logo-wrap">
            <Image
              src="/assets/images/logo/ntpclogo.webp"
              width={90}
              height={80}
              alt="NTPC Logo"
              priority
            />
          </Link>
          
        </div>
      </div>

      {/* ── Main sticky navbar ────────────────────────────── */}
      <header className={`nsb-navbar${sticky ? " nsb-navbar--sticky" : ""}`}>
        <div className="nsb-navbar-inner justify-content-between">
          {/* Sticky-only logo (hidden when not sticky) */}
          <Link
            href="/"
            className={`nsb-sticky-logo${sticky ? " nsb-sticky-logo--visible" : ""}`}
          >
            <Image
              src="/assets/images/logo/nsblogo.webp"
              width={130}
              height={45}
              alt="NSB Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nsb-desktop-nav" aria-label="Main navigation">
            <ul className="nsb-menu">
              {NAV_ITEMS.map((item) => (
                <DropdownItem key={item.label} item={item} level={0} />
              ))}
            </ul>
          </nav>

          <div className="mobile-logo-div">
            <Link href="/" className={`mobile-logo`}>
              <Image
                src="/assets/images/logo/nsblogo.webp"
                width={130}
                height={45}
                alt="NSB Logo"
              />
            </Link>
          </div>

          {/* CTA + Hamburger */}
          <div className="nsb-navbar-actions">
            {/* Mobile hamburger */}
            <button
              className={`nsb-hamburger${mobileOpen ? " nsb-hamburger--open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {/* <span />
              <span />
              <span /> */}
        <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu Drawer ──────────────────────────── */}
        <div
          className={`nsb-mobile-drawer${mobileOpen ? " nsb-mobile-drawer--open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          <div className="nsb-mobile-drawer-inner">
            <ul className="nsb-mob-menu mt-3">
              {NAV_ITEMS.map((item) => (
                <MobileItem key={item.label} item={item} depth={0} />
              ))}
            </ul>
          
          </div>
        </div>
      </header>

      {/* Overlay for mobile drawer */}
      {mobileOpen && (
        <div
          className="nsb-mobile-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <Offcanvas open={offcanvasOpen} onClose={() => setOffcanvasOpen(false)} />
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/ly-thuyet', label: 'Lý thuyết' },
  { href: '/mo-phong', label: 'Mô phỏng' },
  { href: '/sa-hinh', label: 'Sa hình' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/cong-cu', label: 'Công cụ' },
  { href: '/truong-dao-tao', label: 'Trường đào tạo' },
  { href: '/cong-dong', label: 'Cộng đồng' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 18 L14 8 L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="14" cy="18" r="2" fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Học Lái Xe</span>
            <span className={styles.logoSub}>Thông Minh</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.actions}>
          <Link href="/login" className="btn btn-cta btn-sm">
            Học ngay
          </Link>
          {/* Mobile toggle */}
          <button
            className={styles.menuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.menuLine} ${mobileOpen ? styles.open1 : ''}`} />
            <span className={`${styles.menuLine} ${mobileOpen ? styles.open2 : ''}`} />
            <span className={`${styles.menuLine} ${mobileOpen ? styles.open3 : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/login" className="btn btn-cta" style={{ marginTop: '1rem', width: '100%' }}>
          Bắt đầu học miễn phí
        </Link>
      </div>
    </header>
  );
}

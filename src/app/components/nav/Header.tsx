'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 👈 new state

return (
    <>
  {/* DESKTOP HEADER */}
  <header className={styles.header}>
        
    <h1 className="flex items-baseline justify-left py-0 px-10">
      <span className="text-[30px] font-bold text-[#e63946] font-quicksand">Sanjeed
        <span className="text-[#081b9c]">a!</span>
      </span>
    </h1>

    <nav className={styles.nav}>
                   
        {/* Home Dropdown */}    
        <Link href="/EnterNamePage" className={styles.navLink}>
        <span className={styles.khudiText}>خودی </span>
        <span className={styles.reviewText}>Personality Assessment</span>
        </Link>
    </nav>

  </header>

  {/* MOBILE HEADER */}
  <div className={styles.mobileTop}>
        
    <div className={styles.mobileActions}>
      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    </div>

    <h1 className={styles.logo}>
      <span className="text-[#e63946] font-bold text-[24px]">Sanjeed
        <span className="text-[#081b9c]">a!</span>
      </span>
    </h1>

  </div>

  {/* MOBILE NAVBAR */}
  {menuOpen && (
       
    <nav className={styles.mobileNav}>
      <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>X</button>    

     <Link href="/EnterNamePage" className={styles.navLink}>
      <span className={styles.khudiText}>خودی </span>
      <span className={styles.reviewText}>Personality Assessment</span>
    </Link>    
        
    </nav>

  )}
</>
);}
export default Header;
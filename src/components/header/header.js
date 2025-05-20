'use client';

import { useState } from "react";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import styles from "./header.module.css"

const Header = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const getIconColor = (index) => {
        return hoveredIndex === index ? '#000' : '#bbb';
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <div className={`${styles.logo} font-semibold`}>
                    <h1>404 TOWN</h1>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li><Link href='/' className={styles.gnb}>홈으로</Link></li>
                        <li><Link href='/write' className={styles.gnb}>글쓰기</Link></li>
                        <li><Link href='/portfolio' className={styles.gnb}>포트폴리오</Link></li>
                    </ul>
                </nav>
                <div className={styles.utilMenu}>
                    <ul className={styles.utilMenuInner}>
                        <li
                            onMouseOver={() => setHoveredIndex(0)}
                            onMouseOut={() => setHoveredIndex(null)}
                            style={{ color: getIconColor(0), cursor: 'pointer' }}
                        >
                            <GoSearch />
                        </li>
                        <li
                            onMouseOver={() => setHoveredIndex(1)}
                            onMouseOut={() => setHoveredIndex(null)}
                            style={{ color: getIconColor(1), cursor: 'pointer' }}
                        >
                            <FaMoon />
                        </li>
                        <li
                            onMouseOver={() => setHoveredIndex(2)}
                            onMouseOut={() => setHoveredIndex(null)}
                            style={{ color: getIconColor(2), cursor: 'pointer' }}
                        >
                            <RxHamburgerMenu />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

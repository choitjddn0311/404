'use client';

import { useState } from "react";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";

const Header = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const getIconColor = (index) => {
        return hoveredIndex === index ? '#000' : '#bbb';
    };

    return (
        <header style={styles.header}>
            <div style={styles.headerInner}>
                <div className="logo font-semibold" style={styles.logo}>
                    <h1>404 TOWN</h1>
                </div>
                <nav style={styles.nav}>
                    <ul style={styles.ul}>
                        <li><Link href='/' style={styles.gnb}>test1</Link></li>
                        <li><Link href='/test' style={styles.gnb}>test2</Link></li>
                        <li><Link href='/testest' style={styles.gnb}>test3</Link></li>
                        <li><Link href='/testestest' style={styles.gnb}>test4</Link></li>
                    </ul>
                </nav>
                <div style={styles.utilMenu}>
                    <ul style={styles.utilMenuInner}>
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

const styles = {
    header: {
        width: '100%',
        height: '100px',
        borderBottom: '1px solid #eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerInner: {
        width: '1400px',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    logo: {
        width: '10%',
        height: '100%',
        textAlign: 'start',
        alignContent: 'center',
        fontSize: '28px',
        color: '#000'
    },
    nav: {
        width: '50%',
        height: '100%'
    },
    ul: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px'
    },
    gnb: {
        fontSize: '18px',
        color: '#666'
    },
    utilMenu: {
        width: '10%',
        height: '100%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
    },
    utilMenuInner: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '25px'
    }
};

export default Header;

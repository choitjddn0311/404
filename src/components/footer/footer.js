import Link from "next/link";
import styles from './footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <h1>404 TOWN</h1>
                    <ul className={styles.ftMenu}>
                        <li><Link href='/'>홈으로</Link></li>
                        <li><Link href='/write'>글쓰기</Link></li>
                        <li><Link href='/portfolio'>포트폴리오</Link></li>
                    </ul>
                </div>
                <div>
                    <p>copyright &copy; 2025 최성우.All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer style={styles.footer}>
                <div style={styles.footerTop}>
                    <h1>404 TOWN</h1>
                    <ul style={styles.ftMenu}>
                        <li>test1</li>
                        <li>test2</li>
                        <li>test3</li>
                        <li>test4</li>
                    </ul>
                </div>
                <div>
                    <p>copyright &copy; 2025 최성우.All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

const styles = {
    footer: {
        width: '100%',
        height: '100px',
        background: '#111',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    footerTop: {
        width: '1400px',
        height: '60%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ftMenu: {
        display: 'flex',
        alignItems: 'center',
        width: '20%',
        height: '100%',
        justifyContent: 'space-between'
    },
    footerBottom: {
        width: '100%',
        height: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default Footer;
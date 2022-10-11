import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Header.module.scss';

export default function Header() {
    return (
        <header className={styles.mainHeader}>
            <Link href="/">
                <a aria-label="Home">
                    <Image width={180} height={32.031} src="/logo.png" alt="Logo" />
                </a>
            </Link>

            <ul className={styles.mainMenu}>
                <li className={styles.mainMenuItem}>
                    <Link href="/">
                        <a aria-label="Home">Home</a>
                    </Link>
                </li>
                <li className={styles.mainMenuItem}>
                    <Link href="#">
                        <a aria-label="Catálogo">Catálogo</a>
                    </Link>
                </li>
                <li className={styles.mainMenuItem}>
                    <Link href="#">
                        <a aria-label="Sobre nós">Sobre nós</a>
                    </Link>
                </li>
            </ul>
        </header>
    )
}
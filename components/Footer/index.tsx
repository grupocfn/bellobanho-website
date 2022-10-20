import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../../styles/Footer.module.scss';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.mainFooter}>
            <div className={styles.mainFooterContent}>
                <div className={styles.footerItem}>
                    <Image width={150} height={26.69} objectFit={'contain'} objectPosition={'left'} src="/logo_dark.png" alt="Logo"/>

                    <div className={styles.socialMedia}>
                        <a href="https://www.instagram.com/bellobanho/" aria-label="Instagram" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/bellobanhoniteroi" aria-label="Facebook" target="_blank" rel="noreferrer">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
                <div className={styles.footerItem}>
                    <strong>Endereço</strong>
                    <div>
                        <p>Rua Marechal Deodoro, Nº 160</p>
                        <p>Centro, Niterói</p>
                    </div>
                </div>

                <div className={styles.footerItem}>
                    <strong>Horário de Funcionamento</strong>
                    <div className={styles.columnDirDiv}>
                        <p><strong>Seg. a Sex.:</strong> 08:00 às 19:00</p>
                        <p><strong>Sábados:</strong> 08:00 às 13:00</p>
                        <p><strong>Feriados:</strong> consultar em nosso Instagram ou WhatsApp</p>
                    </div>
                </div>

                <div  className={styles.footerItem}>
                    <strong>Contato</strong>
                    <div className={styles.footerMenu}>
                        <div className={styles.contactMethod}>
                            <FiPhone /> <p>(21) 3527-3030</p>
                        </div>
                        <div className={styles.contactMethod}>
                            <FaWhatsapp /> <p>(21) 96708-3336</p>
                        </div>
                        {/* <div className={styles.contactMethod}>
                            <FiMail /> <p>atendimento@bellobanho.com.br</p>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className={styles.copyAndCredits}>
                <span>&copy; 2022 Banho Bello Distribuidora e Materiais de Construção Ltda.</span>
                <span className={styles.devInfo}>
                    Site desenvolvido por <Link href="https://github.com/leonardomeira"><a aria-label="Leonardo Meira" target='_blank' ref={`noreferrer`}><strong className={styles.devInfoLink}>Leonardo Meira <FaExternalLinkAlt /></strong></a></Link>
                </span> 
            </div>
            
        </footer>
    )
}
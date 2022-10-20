import { useEffect } from 'react';
import Head from 'next/head';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import AOS from 'aos';
import styles from '../../styles/Contact.module.scss';
import "aos/dist/aos.css"
import Link from 'next/link';
import { FaExternalLinkAlt, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineDoubleRight } from 'react-icons/ai';

export default function Contact() {

    useEffect(() => {
        AOS.init({ duration: 1000, });
    }, [])

    return (
        <>
            <Head>
                <title>Contato | BelloBanho</title>
            </Head>
            <Header />
            <div className={styles.container}>
                <div className={styles.contactTitle} data-aos="fade-up">
                    <h1>Contato</h1>
                    <span data-aos="fade-up" data-aos-delay="100"><AiOutlineDoubleRight />  Confira nossos canais de atendimento e informação</span>
                </div>
               
                <section className={styles.serviceChannels} data-aos="fade-up" data-aos-delay="500">
                    <div className={styles.serviceChannel}>
                        <div className={styles.cardTitle}>
                            <FaPhoneAlt /><h2>Telefone</h2>
                        </div>
                        <p>Fale diretamente com um de nossos vendedores</p>
                        <span>(21) 3527-3030</span>
                    </div>

                    <div className={styles.serviceChannel}>
                        <div className={styles.cardTitle}>
                            <FaWhatsapp /><h2>WhatsApp</h2>
                        </div>
                        <p>Se preferir, contate-nos via WhatsApp e responderemos com prontidão</p>
                        <span>
                            <Link href="https://wa.me/5521967083336">
                                <a target="_blank">(21) 96708-3336 <FaExternalLinkAlt /></a>
                            </Link>
                        </span>
                    </div>

                    <div className={styles.serviceChannel}>
                        <div className={styles.cardTitle}>
                            <FaInstagram /><h2>Instagram</h2>
                        </div>
                        <p>Fique informado sobre ofertas e demais atualizações</p>
                        <span>
                            <Link href="https://www.instagram.com/bellobanho">
                                <a target="_blank">@bellobanho <FaExternalLinkAlt /></a>
                            </Link>
                        </span>
                    </div>
                </section>
            </div>
            <Footer />
        </>
       
    )
}
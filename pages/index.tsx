import { useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import AOS from 'aos';
import Link from 'next/link';
import "aos/dist/aos.css"

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, });
  }, [])

  return (
    <>
      <Head>
        <title>Home | BelloBanho</title>
      </Head>

      <Header />
      <div className={styles.container}>
          <Link href="https://wa.me/5521967083336">
            <a className={styles.whatsappButton} target={'_blank'}>
                <Image src="/whatsappLogo.svg" width={40} height={40} alt="Whatsapp" />
            </a>
          </Link>
          <div className={styles.mainItemWrapper1}>
            <div className={styles.mainItem1}>
              <div data-aos="fade-up"  className={styles.mainItemTitle}>
                <h1>Bem-vindo à Bello Banho</h1>
                <p><AiOutlineDoubleRight /> Nós fornecemos as melhores soluções em revestimentos e acabamentos para o seu projeto</p>
              </div>
            </div>
          </div>
          <div className={styles.mainItemWrapper2}>
          <div className={styles.mainItem2}>
              <div data-aos="fade-up" className={styles.mainItemTitle} id="mainItem2">
                <h1>Produtos de primeira linha para o seu ambiente</h1>
                <p><AiOutlineDoubleRight /> Adicione sofisticação e modernidade ao seu ambiente doméstico e/ou profissional</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className={styles.brands} id="brands">
            <div className={styles.brandsTitleWrapper}>
              
              <h1>Trabalhamos com os principais fornecedores do mercado</h1>
              <small style={{textAlign: 'left'}}>Qualidade, elegância e robustez</small>
            </div>
            <div className={styles.row}>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/giragrill.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/portinari.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/rerthy.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/lorenzetti.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/ralolinear.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/tramontina.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/atlas.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/eliane.webp" alt="logo"/>

              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/perflex.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/biancogres.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/decortiles.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/docol.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/fabrimar.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/franke.webp" alt="logo"/>
              <Image className={styles.brandLogo} loading="eager" width={130} height={68.89} src="/brands/deca.webp" alt="logo"/>
            </div>
          </div>
      </div>
      <Footer />
    </>
    
  )
}

export default Home

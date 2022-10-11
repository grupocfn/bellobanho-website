import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import Map, { Marker } from 'react-map-gl';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | BelloBanho</title>
      </Head>

      <Header />
      <div className={styles.container}>
          <Link href="https://wa.me/5521967083336">
            <a className={styles.whatsappButton} target={'_blank'}>
                <Image src="/whatsappLogo.svg" width={60} height={60} alt="Whatsapp" />
            </a>
          </Link>
          <div className={styles.mainItemWrapper1}>
            <div className={styles.mainItem1}>
              <div className={styles.mainItemTitle}>
                <h1>Bem-vindo à BelloBanho</h1>
                <p><AiOutlineDoubleRight /> Nós fornecemos as melhores soluções em revestimentos e acabamentos para o seu projeto</p>
              </div>
            </div>
          </div>
          <div className={styles.mainItemWrapper2}>
          <div className={styles.mainItem2}>
              <div className={styles.mainItemTitle}>
                <h1>Produtos de primeira linha para o seu ambiente</h1>
                <p><AiOutlineDoubleRight /> Adicione sofisticação e modernidade ao seu ambiente doméstico e/ou profissional</p>
              </div>
            </div>
          </div>
          <div className={styles.brands}>
            <div className={styles.brandsTitleWrapper}>
              
              <h1>Trabalhamos com os principais fornecedores do mercado</h1>
              <small style={{textAlign: 'left'}}>Qualidade, elegância e robustez</small>
            </div>
            <div className="row">
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/giragrill.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/portinari.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/rerthy.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/lorenzetti.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/ralolinear.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/tramontina.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/atlas.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/eliane.webp" alt="logo"/>
            </div>

            <div className="row">
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/perflex.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/biancogres.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/decortiles.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/docol.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/fabrimar.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/franke.webp" alt="logo"/>
              <Image className={styles.brandLogo} width={130} height={68.89} src="/brands/deca.webp" alt="logo"/>
            </div>
          </div>
          
          {/* <div className={styles.mapWrapper}>
            <div>
              <div className={styles.addressWrapper}>
                <h1>Venha nos fazer uma visita!</h1>
                <p>Rua Marechal Deodoro, Nº 160</p>
                <p>Centro, Niterói - RJ</p>
                <p>24030-060</p>
              </div>
              <Map
                mapboxAccessToken="pk.eyJ1IjoiaW5mb2NmbiIsImEiOiJjbDkzNXFhb3MxcmFqM25tZmZvNGU0OGJuIn0.01tPJz-OrczjmdtDtEpjXQ"
                initialViewState={{
                  longitude: -43.12003723459498,
                  latitude: -22.889732760011388,
                  zoom: 16
                }}
                style={{width: 1200, height: 400}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              >
                <Marker longitude={-43.120046750078345} latitude={-22.889724915060864} anchor="bottom">
                  <img src="/pin.webp" />
                </Marker>
              </Map>
            </div>
         
          </div> */}
          
      </div>
      <Footer />
    </>
    
  )
}

export default Home

import {
  FooterDiv,
  ContainerFooter,
  FooterLogo,
  ImagemFooter,
  FooterP,
  RedeSocial
} from './style'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com.png'
import instagram from '../../assets/images/instagram-round-svgrepo-com.png'
const Footer = () => (
  <>
    <FooterDiv>
      <FooterLogo>
        <ImagemFooter src={logo} alt="Efood" />
      </FooterLogo>
      <ContainerFooter>
        <li>
          <RedeSocial src={instagram} alt="instagram" />
        </li>
        <li>
          <RedeSocial src={facebook} alt="facebook" />
        </li>
        <li>
          <RedeSocial src={twitter} alt="twitter" />
        </li>
      </ContainerFooter>
      <FooterP>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </FooterP>
    </FooterDiv>
  </>
)
export default Footer

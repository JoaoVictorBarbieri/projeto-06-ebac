import logo from '../../assets/images/logo.png'
import { Hero, Imagem, Title, Container } from './style'
const Header = () => (
  <Hero>
    <Imagem src={logo} alt="Efood" />
    <Container>
      <Title>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Title>
    </Container>
  </Hero>
)

export default Header

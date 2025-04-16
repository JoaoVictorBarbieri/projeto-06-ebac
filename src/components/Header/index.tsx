import logo from '../../assets/images/logo.png'
import { Cabecalho, Imagem, Title, Container } from './style'
const Header = () => (
  <Cabecalho>
    <Imagem src={logo} alt="Efood" />
    <Container>
      <Title>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Title>
    </Container>
  </Cabecalho>
)

export default Header

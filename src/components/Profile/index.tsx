import logo from '../../assets/images/logo.png'
import Footer from '../Footer'
import {
  Imagem,
  Container,
  ContainerImg,
  Titles,
  SubHeader,
  Categoria,
  NomeRestaurante,
  ContentWrapper,
  ContainerSmaller
} from './style'
const Header = () => (
  <>
    <Container>
      <ContainerSmaller>
        <div>
          <Titles>Restaurantes</Titles>
        </div>
        <ContainerImg>
          <Imagem src={logo} alt="" />
        </ContainerImg>
        <div>
          <Titles>0 produto(s) no carrinho</Titles>
        </div>
      </ContainerSmaller>
    </Container>
    <SubHeader>
      <ContentWrapper>
        <Categoria>Italiana</Categoria>
        <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
      </ContentWrapper>
    </SubHeader>
    <Footer />
  </>
)
export default Header

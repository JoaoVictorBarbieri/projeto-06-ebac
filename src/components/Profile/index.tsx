import logo from '../../assets/images/logo.png'
import imagemPerfil from '../../assets/images/pizza.png'
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
  ContainerSmaller,
  ProdutoSection,
  Produto,
  ProdutoUl,
  ImagemPefil,
  ProdutoBox
} from './style'
import { Botao } from '../List/style'
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
    <ProdutoSection>
      <ProdutoUl>
        <Produto>
          <ProdutoBox>
            <ImagemPefil src={imagemPerfil} alt="Pizza" />
            <h3>Pizza Marguerita</h3>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <Botao>Adicionar ao carrinho</Botao>
          </ProdutoBox>
        </Produto>
        <Produto>
          <ProdutoBox>
            <ImagemPefil src={imagemPerfil} alt="Pizza" />
            <h3>Pizza Marguerita</h3>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <Botao>Adicionar ao carrinho</Botao>
          </ProdutoBox>
        </Produto>
        <Produto>
          <ProdutoBox>
            <ImagemPefil src={imagemPerfil} alt="Pizza" />
            <h3>Pizza Marguerita</h3>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <Botao>Adicionar ao carrinho</Botao>
          </ProdutoBox>
        </Produto>
        <Produto>
          <ProdutoBox>
            <ImagemPefil src={imagemPerfil} alt="Pizza" />
            <h3>Pizza Marguerita</h3>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <Botao>Adicionar ao carrinho</Botao>
          </ProdutoBox>
        </Produto>
        <Produto>
          <ProdutoBox>
            <ImagemPefil src={imagemPerfil} alt="Pizza" />
            <h3>Pizza Marguerita</h3>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <Botao>Adicionar ao carrinho</Botao>
          </ProdutoBox>
        </Produto>
        <Produto>
          <ProdutoBox>
            <ImagemPefil src={imagemPerfil} alt="Pizza" />
            <h3>Pizza Marguerita</h3>
            <p>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </p>
            <Botao>Adicionar ao carrinho</Botao>
          </ProdutoBox>
        </Produto>
      </ProdutoUl>
    </ProdutoSection>
    <Footer />
  </>
)
export default Header

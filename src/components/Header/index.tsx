import logo from '../../assets/images/logo.png'
import imagem1 from '../../assets/images/hiokiSushi.png'
import imagem2 from '../../assets/images/laDolce.png'
import estrela from '../../assets/images/estrela.png'
import {
  Hero,
  Imagem,
  Title,
  Container,
  ContainerUl,
  ImagemLi,
  ContainerRestaurante,
  TitleRestaurante,
  TopoRestaurante,
  Nota,
  Descricao,
  ImagemWrapper,
  Botao,
  BotaoContainer,
  SaibaMaisContainer
} from './style'
const Header = () => (
  <>
    <Hero>
      <Imagem src={logo} alt="Efood" />
      <Container>
        <Title>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Title>
      </Container>
    </Hero>
    <section>
      <div>
        <ContainerUl>
          <ContainerRestaurante>
            <ImagemWrapper>
              <ImagemLi src={imagem1} alt="" />
              <BotaoContainer>
                <Botao size="small">Destaque da semana</Botao>
                <Botao size="small">Japonesa</Botao>
              </BotaoContainer>
            </ImagemWrapper>
            <div>
              <TopoRestaurante>
                <TitleRestaurante>Hioki Sushi</TitleRestaurante>
                <Nota>
                  <TitleRestaurante>4.9</TitleRestaurante>
                  <img src={estrela} alt="" />
                </Nota>
              </TopoRestaurante>
              <Descricao>
                <p>
                  Peça já o melhor da culinária japonesa no conforto da sua
                  casa! Sushis frescos, sashimis deliciosos e pratos quentes
                  irresistíveis. Entrega rápida, embalagens cuidadosas e
                  qualidade garantida. Experimente o Japão sem sair do lar com
                  nosso delivery!
                </p>
              </Descricao>
              <SaibaMaisContainer>
                <Botao size="big">Saiba mais</Botao>
              </SaibaMaisContainer>
            </div>
          </ContainerRestaurante>
          <ContainerRestaurante>
            <ImagemWrapper>
              <ImagemLi src={imagem2} alt="" />
              <BotaoContainer>
                <Botao size="small">Destaque da semana</Botao>
                <Botao size="small">Japonesa</Botao>
              </BotaoContainer>
            </ImagemWrapper>
            <div>
              <TopoRestaurante>
                <TitleRestaurante>Hioki Sushi</TitleRestaurante>
                <Nota>
                  <TitleRestaurante>4.9</TitleRestaurante>
                  <img src={estrela} alt="" />
                </Nota>
              </TopoRestaurante>
              <Descricao>
                <p>
                  Peça já o melhor da culinária japonesa no conforto da sua
                  casa! Sushis frescos, sashimis deliciosos e pratos quentes
                  irresistíveis. Entrega rápida, embalagens cuidadosas e
                  qualidade garantida. Experimente o Japão sem sair do lar com
                  nosso delivery!
                </p>
              </Descricao>
              <SaibaMaisContainer>
                <Botao size="big">Saiba mais</Botao>
              </SaibaMaisContainer>
            </div>
          </ContainerRestaurante>
          <ContainerRestaurante>
            <ImagemWrapper>
              <ImagemLi src={imagem1} alt="" />
              <BotaoContainer>
                <Botao size="small">Destaque da semana</Botao>
                <Botao size="small">Japonesa</Botao>
              </BotaoContainer>
            </ImagemWrapper>
            <div>
              <TopoRestaurante>
                <TitleRestaurante>Hioki Sushi</TitleRestaurante>
                <Nota>
                  <TitleRestaurante>4.9</TitleRestaurante>
                  <img src={estrela} alt="" />
                </Nota>
              </TopoRestaurante>
              <Descricao>
                <p>
                  Peça já o melhor da culinária japonesa no conforto da sua
                  casa! Sushis frescos, sashimis deliciosos e pratos quentes
                  irresistíveis. Entrega rápida, embalagens cuidadosas e
                  qualidade garantida. Experimente o Japão sem sair do lar com
                  nosso delivery!
                </p>
              </Descricao>
              <SaibaMaisContainer>
                <Botao size="big">Saiba mais</Botao>
              </SaibaMaisContainer>
            </div>
          </ContainerRestaurante>
          <ContainerRestaurante>
            <ImagemWrapper>
              <ImagemLi src={imagem2} alt="" />
              <BotaoContainer>
                <Botao size="small">Destaque da semana</Botao>
                <Botao size="small">Japonesa</Botao>
              </BotaoContainer>
            </ImagemWrapper>
            <div>
              <TopoRestaurante>
                <TitleRestaurante>Hioki Sushi</TitleRestaurante>
                <Nota>
                  <TitleRestaurante>4.9</TitleRestaurante>
                  <img src={estrela} alt="" />
                </Nota>
              </TopoRestaurante>
              <Descricao>
                <p>
                  Peça já o melhor da culinária japonesa no conforto da sua
                  casa! Sushis frescos, sashimis deliciosos e pratos quentes
                  irresistíveis. Entrega rápida, embalagens cuidadosas e
                  qualidade garantida. Experimente o Japão sem sair do lar com
                  nosso delivery!
                </p>
              </Descricao>
              <SaibaMaisContainer>
                <Botao size="big">Saiba mais</Botao>
              </SaibaMaisContainer>
            </div>
          </ContainerRestaurante>
          <ContainerRestaurante>
            <ImagemWrapper>
              <ImagemLi src={imagem1} alt="" />
              <BotaoContainer>
                <Botao size="small">Destaque da semana</Botao>
                <Botao size="small">Japonesa</Botao>
              </BotaoContainer>
            </ImagemWrapper>
            <div>
              <TopoRestaurante>
                <TitleRestaurante>Hioki Sushi</TitleRestaurante>
                <Nota>
                  <TitleRestaurante>4.9</TitleRestaurante>
                  <img src={estrela} alt="" />
                </Nota>
              </TopoRestaurante>
              <Descricao>
                <p>
                  Peça já o melhor da culinária japonesa no conforto da sua
                  casa! Sushis frescos, sashimis deliciosos e pratos quentes
                  irresistíveis. Entrega rápida, embalagens cuidadosas e
                  qualidade garantida. Experimente o Japão sem sair do lar com
                  nosso delivery!
                </p>
              </Descricao>
              <SaibaMaisContainer>
                <Botao size="big">Saiba mais</Botao>
              </SaibaMaisContainer>
            </div>
          </ContainerRestaurante>
          <ContainerRestaurante>
            <ImagemWrapper>
              <ImagemLi src={imagem2} alt="" />
              <BotaoContainer>
                <Botao size="small">Destaque da semana</Botao>
                <Botao size="small">Japonesa</Botao>
              </BotaoContainer>
            </ImagemWrapper>
            <div>
              <TopoRestaurante>
                <TitleRestaurante>Hioki Sushi</TitleRestaurante>
                <Nota>
                  <TitleRestaurante>4.9</TitleRestaurante>
                  <img src={estrela} alt="" />
                </Nota>
              </TopoRestaurante>
              <Descricao>
                <p>
                  Peça já o melhor da culinária japonesa no conforto da sua
                  casa! Sushis frescos, sashimis deliciosos e pratos quentes
                  irresistíveis. Entrega rápida, embalagens cuidadosas e
                  qualidade garantida. Experimente o Japão sem sair do lar com
                  nosso delivery!
                </p>
              </Descricao>
              <SaibaMaisContainer>
                <Botao size="big">Saiba mais</Botao>
              </SaibaMaisContainer>
            </div>
          </ContainerRestaurante>
        </ContainerUl>
      </div>
    </section>
  </>
)

export default Header

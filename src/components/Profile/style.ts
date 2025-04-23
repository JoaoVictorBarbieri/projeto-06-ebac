import styled from 'styled-components'
import backgroundImage from '../../assets/images/fundoHeader.png'
import backgroundPerfil from '../../assets/images/backgroundPerfil.png'
import { cores } from '../../styles'

export const Container = styled.header`
  background-image: url(${backgroundImage});
  height: 186px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerSmaller = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`
export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 64px 0;
`

export const Imagem = styled.img`
  width: 125px;
  height: auto;
  object-fit: contain;
`
export const Titles = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
export const Categoria = styled.h4`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branca};
  margin-bottom: 156px;
`
export const NomeRestaurante = styled.h1`
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 32px;
  color: ${cores.branca};
`

export const SubHeader = styled.div`
  background-image: url(${backgroundPerfil});
  position: relative;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
`

export const ContentWrapper = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const ImagemPefil = styled.img`
  max-width: 304px;
`

export const ProdutoUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px 0;
  max-width: 1024px;
  margin: 32px auto;
  width: 100%;
`

export const ProdutoBox = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.SalmaoClaro};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  height: 100%;
  text-align: left;

  h3 {
    font-weight: 900;
    font-size: 16px;
  }
  h3,
  p {
    width: 100%;
    text-align: left;
    margin: 8px 0px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    align-self: center;
    background-color: ${cores.SalmaoClaro};
    color: ${cores.salmao};
  }
`
export const ProdutoSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 120px;
`
export const Produto = styled.li`
  display: flex;
  height: 100%;
`

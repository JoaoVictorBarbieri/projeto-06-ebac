import styled from 'styled-components'
import backgroundImage from '../../assets/images/fundoHeader.png'
import backgroundPerfil from '../../assets/images/backgroundPerfil.png'
import { cores } from '../../styles'

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 186px;
  width: 100%;
  background-image: url(${backgroundImage});
`
export const ContainerSmaller = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 186px;
  margin: 0 auto;
  padding: 0 24px;
`
export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 64px 0;
`

export const Imagem = styled.img`
  max-width: 125px;
  max-height: 57px;
`
export const Titles = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
export const Categoria = styled.h4`
  font-size: 32px;
  font-weight: 400;
  color: ${cores.branca};
  margin-bottom: 156px;
`
export const NomeRestaurante = styled.h3`
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 32px;
  color: ${cores.branca};
`

export const SubHeader = styled.div`
  background-image: url(${backgroundPerfil});
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
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

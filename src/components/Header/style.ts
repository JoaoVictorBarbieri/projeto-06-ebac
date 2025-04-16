import styled from 'styled-components'
import backgroundImage from '../../assets/images/fundoHeader.png'

export const Cabecalho = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 384px;
  background-image: url(${backgroundImage});
`
export const Imagem = styled.img`
  width: 125px;
  height: 57px;
  margin-bottom: 138px;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #e66767;
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

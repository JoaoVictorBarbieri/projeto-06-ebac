import styled from 'styled-components'
import backgroundImage from '../../assets/images/fundoHeader.png'

export const Hero = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 384px;
  background-image: url(${backgroundImage});
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Imagem = styled.img`
  max-width: 125px;
  max-height: 57px;
  margin-bottom: 138px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`

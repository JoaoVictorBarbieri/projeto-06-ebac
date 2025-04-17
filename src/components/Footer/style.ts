import { cores } from '../../styles'
import styled from 'styled-components'

export const FooterDiv = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 298px;
  background-color: ${cores.SalmaoClaro};
`
export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 8px;
  margin-bottom: 80px;
`

export const FooterLogo = styled.div`
  max-width: 100%;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 32px;
`

export const ImagemFooter = styled.img`
  max-width: 125px;
  max-height: 57px;
`

export const FooterP = styled.p`
  font-size: 10px;
  text-align: center;
  padding-bottom: 40px;
`

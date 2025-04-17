import styled from 'styled-components'
import backgroundImage from '../../assets/images/fundoHeader.png'
import { cores } from '../../styles'

interface BotaoProps {
  size?: 'big' | 'small'
}

export const Hero = styled.header`
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
export const ImagemLi = styled.img`
  width: 100%;
  max-width: 472px;
  max-height: 217px;
  display: block;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const ContainerUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  max-width: 1024px;
  margin: 32px auto;
  list-style: none;
  padding: 0;
`

export const ContainerRestaurante = styled.li`
  max-width: 472px;
  max-height: 398px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${cores.salmao};
  background-color: ${cores.branca};
`

export const TitleRestaurante = styled.h2`
  display: flex;
  font-size: 18px;
  font-weight: bold;
`
export const TopoRestaurante = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
`
export const Nota = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Descricao = styled.div`
  margin: 16px 0;
  padding: 0px 8px;

  p {
    font-size: 14px;
    line-height: 1.4;
    color: ${cores.salmao};
  }
`
export const ImagemWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const Botao = styled.button<BotaoProps>`
  background-color: ${cores.salmao};
  color: ${cores.branca};
  border: none;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  cursor: pointer;
  font-weight: bold;
  color: ${cores.SalmaoBotao};
`
export const BotaoContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`

export const SaibaMaisContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 8px;
`

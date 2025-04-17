import { createGlobalStyle } from 'styled-components'
export const cores = {
  branca: '#FFFFFF',
  SalmaoClaro: '#ffebd9',
  fundo: '#fff8f1',
  salmao: '#E66767;'
}
export const GlobalCss = createGlobalStyle`
 * {
margin: 0;
padding: 0;
box-sizing:border-box;
font-family: Roboto, sans-serif;
list-style: none;
}

body {
  background-color: ${cores.fundo};
  color: ${cores.salmao};
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`

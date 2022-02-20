import { Grommet } from 'grommet'
import { theme } from "../../config/theme"
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  html {
    font-size: clamp(16px, 1.8vh, 163.84px);
    line-height: 1.35em;

    /* Minimum aspect ratio */
    @media (min-aspect-ratio: 4/4) {
        font-size: clamp(16px, 1.8vh, 163.84px);
    }
    
    /* Maximum aspect ratio */
    @media (max-aspect-ratio: 4/4) {
        font-size: clamp(16px, 1.8vw, 163.84px);
    }

  }

`

function Application({ Component, pageProps }) {
  console.log(process.cwd())
  return (
    <Grommet theme={theme} background="black" full={true}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Grommet>)
}

export default Application

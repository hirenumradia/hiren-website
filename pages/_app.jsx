// import '@styles/globals.css'
import { Grommet } from 'grommet'
// import theme, { colours } from "../config/theme"
import { theme } from "../config/theme"


function Application({ Component, pageProps }) {
  console.log(process.cwd())
  return (
    <Grommet theme={theme} background="black" full={true}>
      <Component {...pageProps} />
    </Grommet>)
}

export default Application

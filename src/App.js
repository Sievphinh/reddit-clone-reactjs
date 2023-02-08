import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './chakra/theme'
import Layout from './components/layout'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout></Layout>
    </ChakraProvider>
  )
}

export default App

import { Button } from '@chakra-ui/react'

const AuthButtons = () => {
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{
          base: 'none',
          sm: 'flex'
        }}
        width={{ base: '70px', md: '100px' }}
        mr={2}
        onClick={() => console.log('Clicked')}
      >
        Login
      </Button>
      <Button
        height="28px"
        display={{
          base: 'none',
          sm: 'flex'
        }}
        width={{ base: '70px', md: '100px' }}
        mr={2}
        onClick={() => console.log('Clicked')}
      >
        Sign up
      </Button>
    </>
  )
}

export default AuthButtons

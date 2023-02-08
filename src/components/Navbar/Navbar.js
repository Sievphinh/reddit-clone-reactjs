import { Flex, Image } from '@chakra-ui/react'
import SearchInput from './SearchInput'
import RightContent from './RightContent'

const Navbar = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center" mr={2}>
        <Image
          src="../../assets/images/reddit.png"
          alt="Image not found"
          height="30px"
        />
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  )
}

export default Navbar

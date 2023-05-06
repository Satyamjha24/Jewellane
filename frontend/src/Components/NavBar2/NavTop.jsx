import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const NavTop = () => {
  return (
    <Flex 
    backgroundColor={'#4f3267'}
    justifyContent='center'
			flexDirection={{
				base: "row",
				sm: "row",
				md: "row",
				xl: "row",
				"2xl": "row",
			}}>
                <Box>
                <Heading
					as={"p"}
					fontSize='sm'
					textAlign={{ sm: "center", base: "center" }}
					marginBottom='3'
					marginTop={2}
					color='#FFFFFF'>
					Introducing CartLane Pop! Plan your purchase here
				</Heading>
                </Box>
      
    </Flex>
  )
}

export default NavTop

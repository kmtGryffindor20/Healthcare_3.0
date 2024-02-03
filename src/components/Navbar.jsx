import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <>
        <div className="sticky top-0 z-10 font-sans opacity-90">
            <nav className="bg-white shadow-lg py-8 flex justify-between px-16 items-center">
                <h3 className="text-blue-600 font-extrabold text-3xl">
                    HEALTH<span className="text-black font-bold">CARE</span> <span className="text-black font-bold text-5xl">3.0</span>
                </h3>
                <a href="" className="btn">
                    Connect Wallet
                </a>
            </nav>
        </div>
        <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </>
    )
}
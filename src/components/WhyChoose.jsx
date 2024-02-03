import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import {Card, CardBody, CardFooter, CardHeader} from '@chakra-ui/react';



export default function WhyChoose() {

    return (
        <>
        <div className='w-3/4 px-24 flex py-16 justify-evenly'>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  borderRight={0}
  width='100%'
>

        <CardBody>
                <Heading size='lg' fontWeight={16} marginBottom={8}>Why Choose Us?</Heading>
                <a className='btn'>
                    Learn More
                </a>
        </CardBody>
    </Card>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0'>
    <Card border='2px solid' borderColor='black.200' borderRight={0} borderLeft={0}>
        <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
    </Card>
    <Card>
        <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
    </Card>
    <Card>
        <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
    </Card>
    </div>
        </div>
        </>
    );
}
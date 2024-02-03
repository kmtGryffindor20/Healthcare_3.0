import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import {Card, CardBody, CardFooter, CardHeader} from '@chakra-ui/react';
import sthethoscope from '../sthethoscope.png'
import cadusceus from '../caduceus.png'
import syringe from '../syringe.png'


export default function WhyChoose() {

    return (
        <>
        <div className='px-16 flex py-16 justify-between items-center'>
            <div className='w-full mr-16'>
                        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            shadow={0}
            >

                    <CardBody>
                            <Heading size='lg' fontWeight={'bold'} marginBottom={8}>Why Choose Us?</Heading>
                            <a className='btn'>
                                Learn More
                            </a>
                    </CardBody>
                </Card>
            </div>
       
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
    <Card border='2px solid' borderColor='black.200' borderRight={0} borderLeft={0} shadow={0}>
        <CardHeader>
        <img src={sthethoscope} alt="sthethoscope" className='w-[15%]'/>
        <Heading size='md'> Lorem Ipsum</Heading>
        </CardHeader>
        <CardBody>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam officia error beatae ullam cum ea placeat ducimus quo recusandae nemo. Non soluta vero aliquam fuga corporis molestiae ipsa obcaecati cumque.</Text>
        </CardBody>
    </Card>
    <Card border='2px solid' borderColor='black.200' borderRight={0} borderLeft={0} shadow={0}>
        <CardHeader>
        <img src={cadusceus} alt="cadusceus" className='w-[15%]'/>
        <Heading size='md'> Lorem Ipsum</Heading>
        </CardHeader>
        <CardBody>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus autem velit ut, quia aliquid officia laudantium maxime voluptatibus nisi molestias? Numquam ullam blanditiis impedit non repellat sit consequatur distinctio!</Text>
        </CardBody>
    </Card>
    <Card border='2px solid' borderColor='black.200' borderRight={0} borderLeft={0} shadow={0}>
        <CardHeader>
        <img src={syringe} alt="syringe" className='w-[15%]'/>
        <Heading size='md'> Lorem Impsum</Heading>
        </CardHeader>
        <CardBody>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo neque cumque! Dolor labore nulla, eligendi, quis laboriosam hic nihil quaerat quidem, dolorem quasi itaque nostrum! Nulla dolor id doloribus..</Text>
        </CardBody>
    </Card>
    <Card border='2px solid' borderColor='black.200' borderRight={0} borderLeft={0} shadow={0}>
        <CardHeader>
        <img src={syringe} alt="syringe" className='w-[15%]'/>
        <Heading size='md'> Lorem Impsum</Heading>
        </CardHeader>
        <CardBody>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo neque cumque! Dolor labore nulla, eligendi, quis laboriosam hic nihil quaerat quidem, dolorem quasi itaque nostrum! Nulla dolor id doloribus..</Text>
        </CardBody>
    </Card>
    
    </div>
        </div>
        </>
    );
}
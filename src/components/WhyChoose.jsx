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
        <Heading size='md'>Extreme security of user's data</Heading>
        </CardHeader>
        <CardBody>
        <Text>Healthcare 3.0 is made to give
confidence to the patient to openly talk
about their diseases without knowing
about it any other person
</Text>
        </CardBody>
    </Card>
    <Card border='2px solid' borderColor='black.200' borderRight={0} borderLeft={0} shadow={0}>
        <CardHeader>
        <img src={cadusceus} alt="cadusceus" className='w-[15%]'/>
        <Heading size='md'>Order Medicine</Heading>
        </CardHeader>
        <CardBody>
        <Text>Can order the medicine via healthcare
3.0 and all the data will be stored on
blockchain</Text>
        </CardBody>
    </Card>
    <Card border='2px solid' borderColor='black.200' borderRight={0} borderLeft={0} shadow={0}>
        <CardHeader>
        <img src={syringe} alt="syringe" className='w-[15%]'/>
        <Heading size='md'>Safe from Hackers</Heading>
        </CardHeader>
        <CardBody>
        <Text>Due to extreme security of blockchain
this site can only be access via the
private key , and there is no threat of
leaking information of the user/patient
</Text>
        </CardBody>
    </Card>
    <Card border='2px solid' borderColor='black.200' borderRight={0} borderLeft={0} shadow={0}>
        <CardHeader>
        <img src={sthethoscope} alt="syringe" className='w-[15%]'/>
        <Heading size='md'>World class Doctor</Heading>
        </CardHeader>
        <CardBody>
        <Text>Interact doctor via chat,
        video call etc, and take
        your prescription from
        them
</Text>
        </CardBody>
    </Card>
    
    </div>
        </div>
        </>
    );
}
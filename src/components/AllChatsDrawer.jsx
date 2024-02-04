import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import React from 'react'
import Conversation from './Conversation'



export default function AllChatsDrawer(){
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
      
        return (
          <>
          <div className='absolute top-48 lg:top-52' id="drawer">

            <Button ref={btnRef} colorScheme='blue' onClick={onOpen}>
              Open All Chats
            </Button>
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
              
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>All Conversations</DrawerHeader>
      
                <DrawerBody padding={0}>
                  <Conversation person='Doctor' message="Great. I'll provide you with the necessary instructions and information for the telemedicine appointment. Don't hesitate to reach out if you have any further questions or concerns." />
                </DrawerBody>
      
                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          </>
        )
      }

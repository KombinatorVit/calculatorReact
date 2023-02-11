import './App.css';
import {HamburgerIcon} from '@chakra-ui/icons'
import {Button, Container, List, ListItem, UnorderedList} from '@chakra-ui/react'
import {SlideFade, useDisclosure} from '@chakra-ui/react'

import Calculator from "./components/Calculator";
import {Box} from "@chakra-ui/react";
import React, {useState} from "react";
import ClickCalc from "./components/ClickCalc";
import {InputCalc} from "./components/InputCalc";


function Menu(props) {
    const {isOpen, onToggle} = useDisclosure()

    return (
        <Box>
            <HamburgerIcon w={'45px'} h={'45px'} p={'5px'} m={'5px'} borderRadius={'5px'} onClick={onToggle}/>

            <SlideFade in={isOpen} offsetY={'-20px'} unmountOnExit>

                <Box bg={'gray.100'} p={'10px'} m={'4px'} borderRadius={'8px'} w={'60%'} position={'absolute'}
                     zIndex={'10'}>
                    <List display={'flex'} flexDirection={'column'} gap={'10px'} fontSize={'20px'}>
                        <Button onClick={() => {props.onClick('Calculator')}}> Calculator </Button>

                        <Button onClick={() => {props.onClick('Converter')}}> Converter </Button>
                        <Button>Settings</Button>
                    </List>
                </Box>
            </SlideFade>
        </Box>
    )
}

function App() {

    const [mode, setMode] = useState('Calculator')
    let application;




    switch (mode) {
        case 'Calculator':
            application = <Calculator/>
            break;
        case 'Converter':
            application = <Converter/>
            break;
        default:
            application = <Calculator/>

    }


    return (

        <Box h={'90vh'}>
            <Menu onClick={setMode}/>
            {application}
        </Box>


    );
}


export default App;

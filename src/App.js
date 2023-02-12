import './App.css';
import {HamburgerIcon} from '@chakra-ui/icons'
import {Button, Container, Flex, Input, List, ListItem, Select, Text, UnorderedList} from '@chakra-ui/react'
import {SlideFade, useDisclosure} from '@chakra-ui/react'
import { Routes, Route, Link } from 'react-router-dom'

import Calculator from "./components/Calculator";
import {Box} from "@chakra-ui/react";
import React, {useRef, useState} from "react";
import {Converter} from "./components/Converter";
import {useSelector} from "react-redux";
import {historyState} from "./historySlice";


function MainMenu(props) {

    const {isOpen, onToggle} = useDisclosure()

    return (
        <Box>
            <HamburgerIcon w={'45px'} h={'45px'} p={'5px'} m={'5px'} borderRadius={'5px'} onClick={onToggle}/>

            <SlideFade in={isOpen} offsetY={'-20px'} unmountOnExit>

                <Box bg={'gray.100'} p={'10px'} m={'4px'} borderRadius={'8px'} w={'60%'} position={'absolute'}
                     zIndex={'10'}>
                    <List display={'flex'} flexDirection={'column'} gap={'10px'} fontSize={'20px'}>
                        <Button onClick={() => {
                            props.onClick('Calculator')
                        }}> Calculator </Button>

                        <Button onClick={() => {
                            props.onClick('Converter')
                        }}> Converter </Button>
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
    const history = useSelector(historyState).map(e => {
        return <Button>{e}</Button>
    })


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

        <Flex flexDirection={'column'} justifyContent={'space-between'} maxWidth={'400%'} w={'100%'} h={'90%'}>
            <Flex gap={'10px'} color={'tomato'} >{history}</Flex>
            <MainMenu setMode={setMode}/>

            {application}

            <Routes>

                <Route path={'/'} element={<Calculator />} />
                <Route path={'converter'} element={<Converter />} />
                <Route path={'calculator'} element={<Calculator />} />

            </Routes>
        </Flex>


    );
}


export default App;

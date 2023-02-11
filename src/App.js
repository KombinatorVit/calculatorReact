import './App.css';
import {HamburgerIcon} from '@chakra-ui/icons'
import {Button, Container, Flex, Input, List, ListItem, Select, Text, UnorderedList} from '@chakra-ui/react'
import {SlideFade, useDisclosure} from '@chakra-ui/react'

import Calculator from "./components/Calculator";
import {Box} from "@chakra-ui/react";
import React, {useRef, useState} from "react";

function Converter() {

    const [input, setInput] = useState(0)
    const [result, setResult] = useState(0)
    const first = useRef()
    const second = useRef()


    function convert() {
        if (first.current.value == 'Meters') {
            switch(first.current.value) {
                case 'Centimeters': setResult(input * 100);
                break
                case 'Meters': setResult(input * 100);
                break

            }
        }

        if (first.current.value == 'Centimeters') {
            switch(second.current.value) {
                case 'Centimeters': setResult(input );
                    break
                case 'Meters': setResult(input / 100);
                break


            }
        }


    }


    return (
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'10px'} w={'100px'}>
            <Text>{result}</Text>
            <Input onChange={(e) => {
                setInput(e.current.value)
            }} w={'50px'} type="number"/>
            <Flex gap={'15px'}>

                <Select ref={first} size={'md'} w={'90%'}>
                    <option value={'Centimeters'}>Centimeters</option>
                    <option value={'Meters'}>Meters</option>
                </Select>
            </Flex>
            <Button onClick={() => {
                convert()
            }}>Convert</Button>

            <Text>{result}</Text>
            <Input onChange={(e) => {
                setInput(e.current.value)
            }} w={'50px'} type="number"/>

            <Flex gap={'15px'}>

                <Select ref={second} size={'md'} w={'90%'}>
                    <option value={'Centimeters'}>Centimeters</option>
                    <option value={'Meters'}>Meters</option>
                </Select>
            </Flex>
            <Button onClick={() => {
                convert()
            }}>Convert</Button>

        </Flex>
    )
}


function Menu(props) {
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

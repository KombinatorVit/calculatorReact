import React, {useRef, useState} from "react";
import {Box, Button, Flex, Input, List, Select, SlideFade, Text, useDisclosure} from "@chakra-ui/react";
import getData from "../parser";
import {HamburgerIcon} from "@chakra-ui/icons";
import {useSelector, useDispatch} from 'react-redux';
import {updateHistory, historyState} from '../historySlice';

export function Converter() {

    const history = useSelector(historyState)
    const dispatch = useDispatch()
    const [mode, setMode] = useState('Distance')

    const [input, setInput] = useState(0)
    const [result, setResult] = useState(0)
    const first = useRef(null)
    const second = useRef(null)
    const data = ['Доллар США', 'Рубли']
    const dataDistance = ['Meters', 'Centimeters']

    let converter;

    switch (mode) {
        case 'Distance':
            converter =
                <Distance setInput={setInput} convert={convert} first={first} second={second} data={dataDistance}/>
            break
        case 'Money':
            converter = <Money setInput={setInput} convert={convertMoney} first={first} second={second} data={data}/>
            break
        default:
            converter = <Distance/>

    }

    function convert() {
        if (first.current.value === 'Meters') {
            switch (first.current.value) {
                case 'Centimeters':
                    setResult(input * 100);
                    break
                case 'Meters':
                    setResult(input * 100);
                    break

            }
        }

        if (first.current.value === 'Centimeters') {
            switch (second.current.value) {
                case 'Centimeters':
                    setResult(input);
                    break
                case 'Meters':
                    setResult(input / 100);
                    break


            }
        }


    }


    async function convertMoney() {
        getData(first.current.value).then(x => {
                switch (second.current.value) {
                    case 'Доллар США':
                        setResult(input);
                        break

                    case 'Рубли':
                        setResult(input * Number(x));
                        break
                }
            }
        )

    }


    return (
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'10px'} w={'100px'}>
            <Text>{history}</Text>
            {converter}
            <Input onChange={(e) => {
                setInput(+e.currentTarget.value)
            }} w={'50px'} type="number"/>
            <Flex gap={'15px'}>

                <Select ref={first} size={'md'} w={'90%'}>
                    <option value={'Centimeters'}>Centimeters</option>
                    <option value={'Meters'}>Meters</option>
                </Select>
            </Flex>
            <Button onClick={() => dispatch(updateHistory(result))}>Add to history</Button>


            <Text>{result}</Text>
            <Input onChange={(e) => {
                setInput(+e.currentTarget.value)
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
                            props.onClick('Money')
                        }}> Calculator </Button>

                        <Button onClick={() => {
                            props.onClick('Distance')
                        }}> Converter </Button>
                    </List>
                </Box>
            </SlideFade>
        </Box>
    )
}
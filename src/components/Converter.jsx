import React, {useRef, useState} from "react";
import {Button, Flex, Input, Select, Text} from "@chakra-ui/react";

export function Converter() {

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
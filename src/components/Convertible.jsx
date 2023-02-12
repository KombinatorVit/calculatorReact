import React from 'react';
import {Button, Flex, Input, Select, Text} from "@chakra-ui/react";

const Convertible = (props) => {

    const selection = props.data.map(e => {return <option key={e} value={e}>{e}</option>})

    return (
            <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'10px'} w={'100px'}>
            <Input onChange={(e) => {
                props.setInput(e.target.value)
            }} w={'50px'} type="number"/>
            <Flex gap={'15px'}>

                <Select ref={props.first} size={'md'} w={'90%'}>
                    {selection}
                </Select>
            </Flex>

                <Flex gap={'15px'}>

                    <Select ref={props.second} size={'md'} w={'90%'}>
                        {selection}
                    </Select>
                </Flex>
            <Button onClick={() => {
                props.convert()
            }}>Convert</Button>

            </Flex>    );
};

export default Convertible;
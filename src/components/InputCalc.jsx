import {Flex, Input, Text} from "@chakra-ui/react";
import { useState, useEffect } from 'react'


export function InputCalc() {
    const [result, setResult] = useState('')
    const [counts, setCounts] = useState('')
    useEffect(() => { document.querySelector("input").focus() })


    function updateCount(e) {
        const expressions = /\+|\-|\/|\*|=|[A-z]| /
        const lastNumber = e.target.value[e.target.value.length - 2]
        if (expressions.test(lastNumber) && expressions.test(e.nativeEvent.data) && e.nativeEvent.data != null) return
        if (!expressions.test(e.nativeEvent.data)) setResult(eval(e.target.value))
        setCounts(e.target.value)

    }

    return (
        <Flex display={'flex'} w={'100%'} justifyContent={'center'}  alignItems={'center'} marginTop={'200px'} >
            <Flex justifyContent={'center'} alignItems={'center'} border={'2px'} borderRadius={'8px'}
                  borderColor={'gray.50'}>
                <Input placeholder={'Введите циферку'} border={'transparent'} type="text" onInput={(e) => {
                    updateCount(e)}} value={counts} />
                <Text textColor={'tomato'} px={'4px'}>{result} </Text>
            </Flex>
        </Flex>

    )

}


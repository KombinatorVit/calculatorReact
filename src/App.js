import {Box, Button, Text, Input, Flex} from '@chakra-ui/react'
import './App.css';
import {useState} from "react";
import {Numbers} from "./components/Numbers";


function InputCalc(props) {
    const [result, setResult] = useState('')
    const [counts, setCounts] = useState('')


    function updateCount(e) {
        const expressions = /\+|\-|\/|\*|=|[A-z]| /
        const lastNumber = e.target.value[e.target.value.length - 2]
        if (expressions.test(lastNumber) && expressions.test(e.nativeEvent.data) && e.nativeEvent.data != null) return
        if (!expressions.test(e.nativeEvent.data)) setResult(eval(e.target.value))
        setCounts(e.target.value)

    }

    return (
        <Flex w={'100%'} justifyContent={'center'}>
            <Flex justifyContent={'center'} alignItems={'center'} border={'2px'} borderRadius={'8px'}
                  borderColor={'gray.50'}>
                <Input border={'transparent'} type="text" onInput={(e) => {
                    updateCount(e)}} value={counts}/>
                <Text textColor={'tomato'} px={'4px'}>{result} </Text>
            </Flex>
        </Flex>

    )

}


function App() {

    const [counts, setCounts] = useState('0')
    const [result, setResult] = useState('')

    function applyExpression(countedNumber) {
        setCounts(countedNumber)
        setResult(eval(counts))
    }

    return (


<div className={'App'}>

    <Flex display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} h={'100vh'}>
        <Flex gap={'5px'} flexDirection={'column'} justifyContent={'center'}
              alignItems={'center'} w={'200px'}>
            <InputCalc />

            <Flex  w={'100%'} justifyContent='space-between' alignItems={'center'} bg={'gray.50'} borderRadius={'8px'} >


                <Text display={'flex'} justifyContent='start' alignItems={'center'}
                      w="fit-content"
                      h={'38px'} px={'16px'} >
                    {counts}
                </Text>


                <Text display={'flex'} justifyContent='start' alignItems={'center'}
                      w="fit-content" h={'38px'} textColor='tomato' px={'16px'}>
                    {result}
                </Text>
            </Flex>

            <Flex>
                <Numbers data={counts} onClick={setCounts}/>
                <Flex  flexDirection='column'>

                    <CountButton data={counts} expression={'+'} onClick={applyExpression}/>
                    <CountButton data={counts} expression={'-'} onClick={applyExpression}/>
                    <CountButton data={counts} expression={'/'} onClick={applyExpression}/>
                    <CountButton data={counts} expression={'*'} onClick={applyExpression}/>
                </Flex>

                <Button bg={'tomato'} m={'4px'} onClick={() => {
                    setResult(eval(counts))
                }}
                > =</Button>
            </Flex>
        </Flex>
    </Flex>
</div>


    );
}


function CountButton(props) {

    const expressions = /\+|\-|\/|\*| /
    const lastNumber = props.data[props.data.length - 1]

    function checkExpressionType() {
        if (expressions.test(lastNumber)) return
        props.onClick(props.data + props.expression)

    }

    return (
        <Button onClick={() => {
            checkExpressionType()
        }}>

            {props.expression}
        </Button>
    )
}

export default App;

import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {useState} from "react";

export function Numbers(props) {
 const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','].map(
        number => {
            return <Button
                onClick={(e) => {
                    if (props.data != '0') props.onClick(props.data + e.target.innerHTML)
                    else props.onClick(e.target.innerHTML)


                }}
                key={number} w={'60px'} h={'60px'} margin={'4px'}> {number}</Button>
        })

    return <Box display={'flex'} flexWrap={'wrap'} w={'150px'}> {nums}</Box>
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



const ClickCalc = (props) => {

    const [counts, setCounts] = useState('0')
    const [result, setResult] = useState('')

    function applyExpression(countedNumber) {
        setCounts(countedNumber)
        setResult(eval(counts))
    }
    return (
        <Flex display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}  >
            <Flex gap={'5px'} flexDirection={'column'} justifyContent={'center'}
                  alignItems={'center'} >

                <Flex w={'90%'} justifyContent='space-between' alignItems={'center'} bg={'gray.50'}
                      borderRadius={'8px'}>


                    <Text display={'flex'} justifyContent='start' alignItems={'center'}
                          w="fit-content"
                         px={'16px'}>
                        {counts}
                    </Text>


                    <Text display={'flex'} justifyContent='start' alignItems={'center'}
                          w="fit-content"  textColor='tomato' px={'16px'}>
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
                        setCounts('0')
                }}
                    > =</Button>
            </Flex>
            </Flex>
        </Flex>
    );
};

export default ClickCalc;
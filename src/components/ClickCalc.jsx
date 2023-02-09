import {Box, Button, Flex} from "@chakra-ui/react";

export function Numbers(props) {
    const nums = Array.from(Array(10).keys()).map(
        number => {
            return <Button
                onClick={(e) => {
                    if (props.data != '0') props.onClick(props.data + e.target.innerHTML)
                    else props.onClick(e.target.innerHTML)


                }}
                key={number} w={'40px'} h={'40px'} margin={'4px'}> {number}</Button>
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
    return (
        <Flex>
            <Numbers data={props.counts} onClick={props.setCounts}/>
            <Flex  flexDirection='column'>

                <CountButton data={props.counts} expression={'+'} onClick={props.applyExpression}/>
                <CountButton data={props.counts} expression={'-'} onClick={props.applyExpression}/>
                <CountButton data={props.counts} expression={'/'} onClick={props.applyExpression}/>
                <CountButton data={props.counts} expression={'*'} onClick={props.applyExpression}/>
            </Flex>

            <Button bg={'tomato'} m={'4px'} onClick={() => {
                props.setResult(eval(props.counts))
            }}
            > =</Button>
        </Flex>
    );
};

export default ClickCalc;
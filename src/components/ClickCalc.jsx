import {Box, Button, Flex, Grid, GridItem, Text} from "@chakra-ui/react";
import {useState} from "react";
import Dragging from "./Dragging";
import {useDispatch} from "react-redux";
import {updateHistory} from "../historySlice";


function MemoryZone(props) {
    const results = props.memory.map((result, index) => {
        return (
            <Button
                className={'draggable'}
                key={index}>
                {result}
            </Button>
        )
    })
    return (
        <Flex display={'flex'} h={'20px'} m={'20px'} gap={'10px'} className={'droppable memory'}>
            {results}
        </Flex>
    )
}

export function Numbers(props) {

    const passTheNumber = (e) => {
        if (props.data != '0') props.onClick(props.data + e.target.innerHTML)
        else props.onClick(e.target.innerHTML)
    }

    const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ',', '😺'].map(
        number => {
            return (
                <GridItem key={number}>
                    <Button size={'xl'}
                            onClick={(e) => {
                                passTheNumber(e)
                            }}> {number}</Button>
                </GridItem>
            )
        })

    return <Grid templateColumns={'repeat(3, 1fr)'} w={'234px'}> {nums}</Grid>
}

function CountButton(props) {
    const checkInput = (lastCountSymbol) => {
        if (!/\d/.test(lastCountSymbol)) return
        if (props.data === '0') props.onClick(props.expression)
        else props.onClick(props.data + props.expression)
    }

    // const expressions = /\+|\-|\/|\*| /
    // const lastNumber = props.data[props.data.length - 1]
    //
    // function checkExpressionType() {
    //     if (expressions.test(lastNumber)) return
    //     props.onClick(props.data + props.expression)
    //
    // }

    return (
        <Button className="droppable" size={'xl'} bg={'capri'} m={'4px'} onClick={() => {
            checkInput(props.data.at(-1))
        }}>

            {props.expression}
        </Button>
    )
}


const ClickCalc = (props) => {

    const [counts, setCounts] = useState('0')
    const [result, setResult] = useState('')
    const [memory, setMemory] = useState([])

    const dispatch = useDispatch()
    const clear = () => {
        setCounts('0')
        setResult('')
    }

    const equalize = () => {
        if (/😺/.test(counts)) {
            setResult('Мяу');
            return
        }
        if (/\+|\-|\*|\//.test(counts[0])) setResult(eval(result + counts))
        else setResult(eval(counts))
        setCounts('0')
    }

    return (
        <Flex display={'flex'} flexDirection={'column'} justifyContent={'center'}
              alignItems={'center'}>
            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} w={'90%'}>

                <Dragging result={result} memory={memory} setResult={setResult} setMemory={setMemory}>

                    <MemoryZone memory={memory}/>


                    <Text className={'test'} display={'flex'} justifyContent='flex-end' alignItems={'center'}
                          w="100%" px={'16px'} h={'40px'} textColor={'tomato'} fontSize={'40px'} fontWeight={'bold'}>
<span className={'draggable'}>
    {result}
</span>
                    </Text>

                    <Text display={'flex'} justifyContent='flex-end' alignItems={'center'}
                          w="100%" textColor='tomato' px={'16px'} h={'40px'} fontSize={'20px'} fontWeight={'bold'}>
                        {counts}
                    </Text>
                    <Button onClick={() => dispatch(updateHistory(result))}> Add to history</Button>
                    <Flex justifyContent={'space-between'}>
                        <Button w={'70px'} h={'70px'} m={'4px'} onClick={clear}>C</Button>
                        <Button w={'70px'} h={'70px'} m={'4px'}></Button>
                        <Button w={'70px'} h={'70px'} m={'4px'}>X</Button>
                        <Button w={'70px'} h={'70px'} m={'4px'} bg={'tomato'} onClick={equalize}>~</Button>
                    </Flex>
                    <Flex>
                        <Numbers data={counts} onClick={setCounts}/>
                        <Flex flexDirection='column' justifyContent={"space-between"} alignItems={'center'}
                              flexWrap={'wrap'}>
                            <CountButton data={counts} expression={'+'} onClick={setCounts}/>
                            <CountButton data={counts} expression={'-'} onClick={setCounts}/>
                            <CountButton data={counts} expression={'*'} onClick={setCounts}/>
                            <CountButton data={counts} expression={'/'} onClick={setCounts}/>
                        </Flex>
                    </Flex>

                </Dragging>

            </Flex>
        </Flex>
    );
}

export default ClickCalc;
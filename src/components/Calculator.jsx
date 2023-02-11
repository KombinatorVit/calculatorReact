import React, {useState} from 'react';
import {Box, Text, Button, Input, Flex} from '@chakra-ui/react'
import ClickCalc from "./ClickCalc";
import {InputCalc} from "./InputCalc";


function History(props) {
    const results = props.data.map((result, index) => {
        return <Button className = 'draggable' key={index}>{result}</Button>
    })
    return (
        <Box display={'flex'} h={'30px'} m={'20px'} gap={'10px'}>
            {results}
        </Box>
    )
}


const Calculator = () => {

    const [history, setHistory] = useState([])
    const [calcType, setCalcType] = useState('ClickCalc')

    function updateHistory(calcResult) {
        if (history.length > 6) {history.shift()}
        setHistory(history.concat(eval(calcResult)))
    }


    let calculator;
    switch (calcType) {
        case 'ClickCalc':
            calculator = <ClickCalc onClick={updateHistory} />
            break;
        case 'InputCalc':
            calculator = <InputCalc onKeyDown={updateHistory}/>
            break;
        default:
            calculator = <ClickCalc onClick={updateHistory} />

    }

    function calcTypeChange() {
        calcType == 'ClickCalc' ? setCalcType('InputCalc') : setCalcType('ClickCalc')
    }

    return (<Box display={'flex'} flexDirection={'column'} justifyContent={'center'} m={'10px'}>
        <Button onClick={calcTypeChange}
        >
            Change CalcType

        </Button>

        <Box m={'10px'}>
            <History data={history}/>
            {calculator}

        </Box>


    </Box>)

};

export default Calculator;
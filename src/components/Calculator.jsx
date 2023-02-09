import React, {useState} from 'react';
import {Box, Text, Button, Input, Flex} from '@chakra-ui/react'
import ClickCalc from "./ClickCalc";
import {InputCalc} from "./InputCalc";


const Calculator = () => {
    const [calcType, setCalcType] = useState('ClickCalc')
    let calculator;
    switch (calcType) {
        case 'ClickCalc':
            calculator = <ClickCalc/>
            break;
        case 'InputCalc':
            calculator = <InputCalc/>
            break;
        default:
            calculator = <ClickCalc/>

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
            {calculator}

        </Box>


    </Box>)

};

export default Calculator;
import {Text, Flex} from '@chakra-ui/react'
import './App.css';
import {useState} from "react";
import {InputCalc} from "./components/InputCalc";
import ClickCalc from "./components/ClickCalc";


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
                    <InputCalc/>

                    <Flex w={'100%'} justifyContent='space-between' alignItems={'center'} bg={'gray.50'}
                          borderRadius={'8px'}>


                        <Text display={'flex'} justifyContent='start' alignItems={'center'}
                              w="fit-content"
                              h={'38px'} px={'16px'}>
                            {counts}
                        </Text>


                        <Text display={'flex'} justifyContent='start' alignItems={'center'}
                              w="fit-content" h={'38px'} textColor='tomato' px={'16px'}>
                            {result}
                        </Text>
                    </Flex>

                    <ClickCalc counts={counts} setCounts={setCounts} applyExpression={applyExpression}
                               setResult={setResult}/>
                </Flex>
            </Flex>
        </div>


    );
}


export default App;

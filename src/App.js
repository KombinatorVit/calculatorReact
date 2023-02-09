import './App.css';
import { HamburgerIcon } from '@chakra-ui/icons'

import Calculator from "./components/Calculator";
import {Box} from "@chakra-ui/react";



function Menu(){
    return (
        <Box>

        </Box>
    )
}

function App() {



    return (

<Box h={'90vh'}>
    <HamburgerIcon w={'45px'} h={'45px'} p={'5px'} m={'5px'} borderRadius={'5px'} />
    <Calculator />

</Box>



    );
}


export default App;

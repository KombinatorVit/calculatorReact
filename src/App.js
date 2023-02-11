import './App.css';
import {HamburgerIcon} from '@chakra-ui/icons'
import {List, ListItem, UnorderedList} from '@chakra-ui/react'
import {SlideFade, useDisclosure} from '@chakra-ui/react'

import Calculator from "./components/Calculator";
import {Box} from "@chakra-ui/react";


function Menu() {
    const {isOpen, onToggle} = useDisclosure()

    return (
<Box>
    <HamburgerIcon w={'45px'} h={'45px'} p={'5px'} m={'5px'} borderRadius={'5px'} onClick={onToggle}/>

    <SlideFade in={isOpen} offsetY={'-20px'} unmountOnExit>

        <Box bg={'gray.100'} p={'10px'} m={'4px'} borderRadius={'8px'} w={'60%'} position={'absolute'} zIndex={'10'}>
            <List display={'flex'} flexDirection={'column'} gap={'10px'} fontSize={'20px'}>
                <ListItem>Calculator</ListItem>
                <ListItem>Converter</ListItem>
                <ListItem>Settings</ListItem>
            </List>
        </Box>
    </SlideFade>
</Box>
    )
}

function App() {


    return (

        <Box h={'90vh'}>
            <Menu />
            <Calculator/>

        </Box>


    );
}


export default App;

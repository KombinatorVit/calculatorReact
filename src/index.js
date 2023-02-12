import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider, extendTheme, Flex} from '@chakra-ui/react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {store} from "./store";


const theme = extendTheme({colors: {capri: '#00C0F9', tomato: '#FF6347',},})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>

        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} h={'100vh'} w={'100%'}>
                    <App/>

                </Flex>
            </ChakraProvider>
        </BrowserRouter>
    </Provider>
);


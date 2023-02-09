import {Box, Button} from "@chakra-ui/react";

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
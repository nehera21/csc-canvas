import React from 'react';
import MenuItem from "./MenuItem";
import { Box, Heading } from "@chakra-ui/react";

export default function Menu(props: any) {
    return (
        <Box pl='6' width='600px' justifyContent='right'>
            {props.menuItems.map((item: any) => <MenuItem {...item} />)}
        </Box>
    )
}
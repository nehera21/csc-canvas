import React from 'react';
import { Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export type MenuProps = {
    jumpID: string
    name: string
}
export default function MenuItem(props: MenuProps) {
    const {jumpID, name} = props;
    const router = useRouter();
    console.log(jumpID);
    return (
        <Box fontSize={'2xl'} mt='8'>
            <Button
                as={motion.button} 
                onClick={()=> router.push(`#${jumpID}`)}
                fontFamily='mono' 
                bgColor='transparent' 
                color='brand.accent'
                border='1px'
                borderColor='brand.accent'
                width='100px'
                whileHover={{ backgroundColor: '#F6B75D', color: '#30064f', width: '200px'}}
                whileTap={{ scale: 0.95 }}
            >
                {name}
            </Button>
        </Box>
    )
}
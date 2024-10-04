'use client'
import React from 'react';
import { Box, Heading, Text, Flex, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Tag from './Tag'
import { AnimatedBox } from './AnimatedBox';
import brand from '../Providers';


export default function ListItem(props : any) {
    const {title, description, link, image, tags} = props;
    
    return (
        <Box pl='3' pb='5'>
            <AnimatedBox
                as={motion.div}
                pl='2' 
                pr='2' 
                pt='3' 
                pb='3' 
                bg='transparent' 
                border='1px' 
                borderColor='brand.accent' 
                borderRadius='10'
                whileHover={{scale: 1.02, boxShadow: '5px 5px 10px #333333'}}
                whileTap={{ scale: 0.98 }}
            >
                <Link href={link} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                    <Flex direction='row'>
                        <Box width='70%'>
                            <Flex direction='column' justifyContent='space-between' height='100%'>
                                <Heading fontSize='30' pb='7px' pl='5px' color='white' fontWeight='bolder'>
                                    {title}
                                </Heading>
                                <Text pb='5px' pl='5px' fontSize='18' color='white' fontWeight='bold'>
                                    {description}
                                </Text>
                                <Flex>
                                    {tags.map((tags : any) => <Tag {...tags} key={tags.name} />)}
                                </Flex>
                            </Flex>
                        </Box>
                        <Box width='30%'>
                            <img src={image} alt={title} />
                        </Box>
                    </Flex>
                </Link>
            </AnimatedBox>
        </Box>
    );
}

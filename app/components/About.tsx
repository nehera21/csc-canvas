'use client'
import React from 'react';
import { Box, Text } from '@chakra-ui/react'

export type AboutProps = {
    text: string
}
export default function About (props: AboutProps) {
  const {text} = props;
  return (
    <Box id='about'>
      <Text fontSize='18' fontFamily='mono' mt='15px' mr='45px' ml='35px'>
        {text}
      </Text>
    </Box>
  )
}
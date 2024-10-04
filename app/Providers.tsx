'use client'
import React from "react"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

export const colors = {
    brand: {
        bg: '#30064f',
        text: '#E3EAEB',
        emphasis: '#366570',
        accent: '#F6B75D'
    }
}

const theme = extendTheme({ colors });

export default function Provider({
    children
} : {children: React.ReactNode}) {
    return (
        <ChakraProvider theme={theme}>
            <CacheProvider>
                {children}
            </CacheProvider>
        </ChakraProvider>
    )
}
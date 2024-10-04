import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import Project from './ListItem'

export default function ItemList(props : any) {
    return (
        <Box pl='6' pt='10' width='800px' justifyContent='right'>
            <Heading size='2xl' pl='3' pb='8' pt='5' id={props.id}>
                {props.title}
            </Heading>
            {props.projects.map((project : any) => <Project {...project} />)}
        </Box>
    )
}
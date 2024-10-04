import React from 'react';
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import Skill from "./Skill";

export default function SkillList(props: any) {
    return (
        <Box pt='30px'>
            <Heading size='2xl' pb='6' pt='15' pl='9' id='skills'>
                Skills
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={5} pt='3' pl='9'>
                {props.skills.map((skill: any) => { 
                    return (
                        <GridItem>
                            <Skill {...skill} />
                        </GridItem>
                    )
                })}
            </Grid>
        </Box>
    )
}
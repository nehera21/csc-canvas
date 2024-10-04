'use client';
import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ItemList from './components/ItemList';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import SkillList from './components/SkillList';
import Head from 'next/head';
import { background, header, about, contacts, projects, menuItems, skills, experience, research } from './configurations';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Alexander Neher Portfolio</title>
      </Head>
      <div
        style={{
          minWidth: '100vw',
          minHeight: '100vh',
          background: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -2,
        }}
      />
      <Box
        style={{
          minWidth: '100vw',
          height: '3320px',
          background: 'linear-gradient(to bottom, rgba(18, 7, 89, 0.8), rgba(48, 6, 79, 0.8))',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Flex
        minW='100vw'
        minH='100vh'
        color={'brand.text'}
        position='relative'
        direction='column'
      >
        <Box position='fixed' p={8} minH={'100vh'} minW={'100vw'} color='brand.text'>
          <Header {...header} />
          <Contact links={contacts} />
          <Menu menuItems={menuItems} />
        </Box>
        <Box position='absolute' p={8} left='40vw' minH={'100vh'} minW={'55vw'} top={'0'}>
          <About {...about} />
          <ItemList title="Projects" id="projects" projects={projects} />
          <ItemList title="Experience" id="experience" projects={experience} />
          <ItemList title="Research" id="research" projects={research} />
          <SkillList skills={skills} id='skills' />
        </Box>
      </Flex>
    </>
  );
}
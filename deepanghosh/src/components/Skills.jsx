import { Container, Grid, Img, Text } from "@chakra-ui/react";
import js from '../images/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y-removebg-preview.png';
import html from '../images/logo-gb9fabe57b_1920.png';
import css from '../images/logo-gb41d62256_1920.png';
import react from '../images/React-icon.svg.png';
import chakra from '../images/chakra-ui_title2-400x400-removebg-preview.png';
import redux from '../images/Reduxlogo.png';

export default function Skills(){
    return <Container id="skills" className="" backgroundColor="#13005A" maxW={'100%'} h={'container.md'} pb={'50px'}>
        <Text as={'b'} color={'#03C988'} fontSize={'4xl'}>SKILLS</Text>
        <Grid gridTemplateColumns={{base:'repeat(2,1fr)',md:'repeat(3,1fr)',lg:'repeat(4,1fr)'}} gap={50} w={'80%'} m={'auto'} mt={'10'}>
        <Img src={html} w={'70%'}/>
        <Img src={css} w={'70%'}/>
        <Img src={js} w={'70%'}/>
        <Img src={react} w={'70%'}/>
        <Img src={chakra} w={'70%'}/>
        <Img src={redux} w={'70%'}/>
        </Grid>
    </Container>
}
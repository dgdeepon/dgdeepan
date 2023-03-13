import { Box, Container,Divider,Grid,Text,Image } from "@chakra-ui/react";




export default function About(){

    return <Container id="about" className="about section" backgroundColor="#13005A" maxW={'100%'} h={'max'} pb={'50px'}>
        <Text as="b" color={'#03C988'} fontSize={'4xl'}>ABOUT</Text>
        <Grid w={'60%'} m={'auto'} gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)'}} textAlign={{base:'center',md:'left'}} color={'white'} gap="5" mt={'15px'}>
        <Box>
            <Text>
            An aspiring web developer, a lifelong learner, skilled in front-end
            and back-end web development and passionate about creating
            responsive and user-friendly websites. Eager to begin career as a
            web developer.
            </Text>
        </Box>
        <Box>
            <Text as={'b'}>Masai School, Bangalore</Text>
            <Text>Full Stack Web Development (Full Time)</Text>
            <Text>Oct,2022 - Present</Text>
            <Divider w={{base:'100%',md:'20%'}} m={'5px 0 5px 0'}/>
            {/* <hr style={{width:'20%',margin:'5px 0 5px 0'}}/> */}
            <Text as={'b'}>Suryasen Mahavidyalaya, Siliguri</Text>
            <Text>Bachelor of Arts (B.A)</Text>
            <Text>Apr,2018 - Aug,2021</Text>
        </Box>
            <Image src="https://github-readme-stats.vercel.app/api?username=dgdeepon&theme=prussian&hide_border=false&include_all_commits=false&count_private=false" alt='img'/>
            <Image src="https://github-readme-streak-stats.herokuapp.com/?user=dgdeepon&theme=prussian&hide_border=false" alt="img"/>
            <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=dgdeepon&theme=prussian&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="img"/>
        </Grid>
    </Container>
}
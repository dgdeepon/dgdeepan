import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import MyImage from '../images/Main.JPG';
  
  export default function Home() {
    return (
      <Container id="home" maxW={'100%'} backgroundColor={'#13005A'} pt="50" height={{lg:'container.md','2xl':'container.lg'}} textAlign={{base:'center',md:'left'}}>
        <Stack
          align={'center'}
          spacing={{ base: 8}}
          py={{ base: 20 }}
          direction={{ base: 'column', md: 'row' }} 
          w='90%'
          m={'auto'}
          mt={{lg:'50px'}}
          >
          <Stack flex={1} spacing={{ base: 5, md: 10 }} ml={{base:0,md:100}}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}
                color={'#03C988'}>
                  Hi, I am
              </Text>
              <br />
              <Text as={'span'} color={'white'} >
                Deepan Ghosh
              </Text>
            </Heading>
            <Text color={'white'}>
            An aspiring web developer, a lifelong learner, skilled in front-end
            and back-end web development and passionate about creating
            responsive and user-friendly websites. Eager to begin career as a
            web developer.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
              justify={{base:'center',md:'left'}}
              >
              <Button
                border={'1px'}
                borderColor="white"
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'white'}
                bg={'#03C988'}
                _hover={{ bg: 'white',color:'black' }}>
                    Resume
                    <FontAwesomeIcon icon={faDownload}/>
              </Button>
              {/* <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                _hover={{
                    bg:'#03C988',
                    color:'white'
                }}
                >
                About
              </Button> */}
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
              <Image
                alt={'myImage'}
                align={'center'}
                objectFit={'cover'}
                w={{sm:'65%',md:'50%'}}
                h={'100%'}
                borderRadius={'50'}
                src={MyImage}
              />
          </Flex>
        </Stack>
      </Container>
    );
  }
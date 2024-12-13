import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout >
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full stack developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jivn Shet
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/boy.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Jivn is a full-stack developer based in India with a
          passion for building digital stuff. Has a knack
          for coding, from planning and designing all the
          way to solving real-life problems with code. When not online, loves
          snacking.
        </Paragraph>
        {/* <Paragraph>
          Jivn is a freelancer and a full-stack blockchain developer based in India with a
          passion for building digital services/stuff. He has a knack
          for all technology, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/what" passHref scroll={false}>
            <Link>what</Link>
          </NextLink>
          . He publishes entertaining content on his YouTube
          channel called &quot;
          <NextLink href="https://www.youtube.com/" passHref>
            <Link target="_blank">What a Life</Link>
          </NextLink>
          &quot; has more than 100M subscribers.
        </Paragraph> */}
        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1DRrDPTq9tJUFeBpnEOHAr09P0CD51tJh/view?usp=sharing" passHref target="_blank" scroll={false}>
            <a target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Resume
              </Button>
            </a>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Dharwad, India
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed B. Tech, Electrical and Electronics Engineering from National Institute of Technology, Goa
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Started as a Frontend Developer at L&#38;T
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Started as a Frontend Lead at Sutrix
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Started as a Senior Software Engineer at Servion
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music,{' '}
          {/* <Link href="https://illusttd.fddodofdruinu.net/" target="_blank">
            Dancing
          </Link> */}
          Pizza,{' '}
          <Link href="https://www.linkedin.com/feed/update/urn:li:activity:6993589488983707648/" target="_blank">
            Metaverse
          </Link>
            ,{' '}
          <Link href="https://github.com/jivnshet?tab=repositories" target="_blank">
            Blockchain
          </Link>
            ,{' '}
          <Link href="https://github.com/jivnshet?tab=repositories" target="_blank">
            Web Development
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the Web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jivnshet" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @jivnshet
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/jivnshet" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @jivnshet
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/jivnshet/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @jivnshet
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/nothing" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @nothing (English)
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link href="https://twitter.com/JivnShet" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @JivnShet
              </Button>
            </Link>
          </ListItem>
          
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/"
            title="What a Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.nothing.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

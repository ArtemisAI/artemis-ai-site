import { Box, Container } from "@chakra-ui/react"
import ChatWidget from "../src/components/ChatWidget"
import Footer from "../src/components/Footer"
import Hero from "../src/components/Hero"
import Navbar from "../src/components/Navbar"
import NewsSection from "../src/components/NewsSection"
import Services from "../src/components/ServiceCard"
import { loadAllMarkdown } from "../src/utils/markdown"

export default function Home({ services, news }) {
  return (
    <Box>
      <Navbar />
      <Container maxW="5xl">
        <Hero />
        {/* Add other main sections here */}
        <Box my={14}>
          <Services services={services} />
        </Box>
        <NewsSection news={news}/>
      </Container>
      <Footer />
      <ChatWidget />
    </Box>
  )
}

export async function getStaticProps() {
  const [services, news] = await Promise.all([
    loadAllMarkdown('content/services'),
    loadAllMarkdown('content/blog').then(arr => arr.slice(0,3))
  ])
  return { props: { services, news } }
}
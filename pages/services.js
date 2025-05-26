import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import ServiceCard from "../src/components/ServiceCard"
import { loadAllMarkdown } from "../src/utils/markdown"

export default function Services({services}) {
  const { t } = useTranslation()
  return (
    <Box py={10} px={[2, 12]}>
      <Heading as="h1" mb={8} color="accent.500">{t("navbar.services")}</Heading>
      <SimpleGrid columns={[1,1,2,3]} spacing={8}>
        {services.length > 0 ? services.map(service =>
          <ServiceCard key={service.slug} service={service}/>
        )
        : <Text>No services found. Check content/services/</Text>}
      </SimpleGrid>
    </Box>
  )
}

// SSG
export async function getStaticProps() {
  const services = await loadAllMarkdown('content/services')
  return { props: { services } }
}
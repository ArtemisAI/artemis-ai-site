import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

export default function NewsSection({news}) {
  const { t } = useTranslation()
  return (
    <Box my={14}>
      <Heading mb={4} color="accent.500">{t('navbar.news') || "AI News"}</Heading>
      <Stack spacing={6}>
        {news.map(item => (
          <Box key={item.slug} p={4} bg="brand.800" borderRadius="md" boxShadow="xs">
            <Heading as="h4" size="sm" color="accent.400">{item.title}</Heading>
            <Text fontSize="sm"><span dangerouslySetInnerHTML={{__html: item.contentHtml.slice(0,180)+"..."}}/></Text>
            <Link href={`/blog/${item.slug}`} color="accent.500" fontSize="xs">Read More →</Link>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
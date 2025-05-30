import { Box, Link as CLink, Flex, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()
  return (
    <Box as="footer" py={4} px={8} bg="brand.900" mt={12}>
      <Flex justify="space-between" align="center">
        <Text color="gray.400">&copy; {year} ArtemisAI</Text>
        <Flex gap={2}>
          <CLink href="/privacy" color="accent.500">Privacy</CLink>
          <CLink href="/terms" color="accent.500">Terms</CLink>
        </Flex>
      </Flex>
    </Box>
  )
}
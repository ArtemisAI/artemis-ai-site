import { Box, Button, Heading, Text } from "@chakra-ui/react"
import Link from 'next/link'

export default function Custom404() {
  return (
    <Box py={20} textAlign="center">
      <Heading color="accent.500">404 - Not Found</Heading>
      <Text>No ArtemisAI at this route 👻</Text>
      <Link href="/" passHref>
        <Button mt={8} colorScheme="accent">Go Home</Button>
      </Link>
    </Box>
  )
}
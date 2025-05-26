import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ServiceCard({service}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 10, stiffness: 120 }}
      whileHover={{ scale: 1.04, boxShadow: "0px 0px 24px #854ff622" }}
    >
      <Box p={6} bg="brand.800" borderRadius="lg" shadow="md" minHeight="280px">
        <Box fontSize="4xl">{service.icon || "🧩"}</Box>
        <Heading as="h3" size="md" color="accent.500">{service.title}</Heading>
        <Text color="gray.200" mt={2}>{service.description}</Text>
        <Box mt={4}>
          <Link href={`/services/${service.slug}`} passHref>
            <Button as="a" size="sm" colorScheme="accent" variant="outline">Learn More</Button>
          </Link>
        </Box>
      </Box>
    </motion.div>
  )
}
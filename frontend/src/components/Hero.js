import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslation } from "react-i18next"

const MotionBox = motion(Box)

export default function Hero() {
  const { t } = useTranslation()

  return (
    <MotionBox
      py={16}
      textAlign="center"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Heading size="2xl" color="accent.500" mb={4}>
        {t('hero.title')}
      </Heading>
      <Text color="gray.200" fontSize="xl" mb={8}>
        {t('hero.subtitle')}
      </Text>
      <Stack direction="row" spacing={4} justify="center">
        <Link href="/services" passHref>
          <Button as="a" colorScheme="accent" px={8}>
            {t('buttons.see_services')}
          </Button>
        </Link>
        <Link href="/contact" passHref>
          <Button as="a" colorScheme="whiteAlpha" px={8}>
            {t('buttons.contact')}
          </Button>
        </Link>
      </Stack>
    </MotionBox>
  )
}
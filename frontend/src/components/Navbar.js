import { Box, Button, Link as ChakraLink, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <Flex as="nav" align="center" justify="space-between" p={4} bg="brand.900" boxShadow="sm">
      <Box>
        <Link href="/" passHref>
          <ChakraLink fontWeight="bold" color="accent.500" fontSize="2xl">
            {/* Logo Icon */}
            <img src="/images/artemis_logo.svg" alt="ArtemisAI logo" width={40}
              style={{ verticalAlign: "middle", marginRight: 8 }}/>
            ArtemisAI
          </ChakraLink>
        </Link>
      </Box>
      <Spacer />
      <Flex align="center" gap={3}>
        <Link href="/services" passHref>
          <Button as={ChakraLink} variant="ghost" color="white">{t('navbar.services')}</Button>
        </Link>
        <Link href="/solutions" passHref>
          <Button as={ChakraLink} variant="ghost" color="white">{t('navbar.solutions')}</Button>
        </Link>
        <Link href="/courses" passHref>
          <Button as={ChakraLink} variant="ghost" color="white">{t('navbar.courses')}</Button>
        </Link>
        <Link href="/blog" passHref>
          <Button as={ChakraLink} variant="ghost" color="white">{t('navbar.news')}</Button>
        </Link>
        <Link href="/about" passHref>
          <Button as={ChakraLink} variant="ghost" color="white">{t('navbar.about')}</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button as={ChakraLink} variant="solid" colorScheme="accent">{t('navbar.contact')}</Button>
        </Link>
        <LanguageSwitcher/>
      </Flex>
    </Flex>
  )
}
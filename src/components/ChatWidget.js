import { Box, Button, Textarea, useColorModeValue } from "@chakra-ui/react"
import { useState } from 'react'
import { useTranslation } from "react-i18next"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const bg = useColorModeValue("brand.800", "brand.800")

  return (
    <Box zIndex={1000} position="fixed" bottom="6" right="6" width="fit-content">
      <Button colorScheme="accent" size="lg" borderRadius="full"
        shadow="lg" onClick={() => setOpen(!open)}>
        💬
      </Button>
      {open && (
        <Box 
          bg={bg} color="white" p={4} mt={2} borderRadius="lg" w={["xs", "sm"]}
          boxShadow="2xl"
          border="1px solid #854ff666"
        >
          <Box fontWeight="bold" mb={2}>{t('chat.prompt')}</Box>
          <Textarea bg="gray.800" mb={2} value={t('chat.brb')} isDisabled resize="none"/>
          <Button colorScheme="accent" width="100%" isDisabled>{t('buttons.contact')}</Button>
        </Box>
      )}
    </Box>
  )
}
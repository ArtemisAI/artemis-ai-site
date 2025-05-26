import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
  { code: 'zh', label: '中文' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="outline" colorScheme="accent" size="sm">
        {languages.find(l=>l.code===i18n.language)?.label || "EN"}
      </MenuButton>
      <MenuList>
        {languages.map(lang =>
          <MenuItem key={lang.code} onClick={() => i18n.changeLanguage(lang.code)}>
            {lang.label}
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}
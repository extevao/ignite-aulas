import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  //só vai ser true quando a largura da tela for lg
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { onOpen } = useSidebarDrawer()

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center">

      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      <SearchBox />

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
import { ElementType } from "react";
import { Box, Icon, Link, Stack, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string
}
export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && <Box
        mr="4"
        textAlign="right"
      >
        <Text>Estevão B L Vasques</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          estevao@email.com
        </Text>
      </Box>}

      <Avatar
        size="md"
        name="Estevão B L Vasques"
        src="https://github.com/extevao.png" />
    </Flex>
  )
}
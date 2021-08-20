import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  isCurrent?: boolean;
  page: number; // o cara da rocket chamou de number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, page, onPageChange }: PaginationItemProps) {

  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {page}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
      onClick={() => onPageChange(page)}
    >
      {page}
    </Button>
  )
}
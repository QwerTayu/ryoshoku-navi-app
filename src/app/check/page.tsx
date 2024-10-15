import { Liff } from "@/app/_components/Liff";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Stack,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>日付</Th>
              <Th>曜日</Th>
              <Th>朝</Th>
              <Th>昼</Th>
              <Th>晩</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>10/14</Td>
              <Td>月</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>10/14</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>10/14</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>10/14</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>10/14</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>10/14</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>10/14</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Stack spacing={2} direction='row' align='center'>
        <Button colorScheme='teal' size='lg'>
          Edit!
        </Button>
        <Button colorScheme='teal' size='lg'>
          履歴
        </Button>
      </Stack>
    </main>
  );
}

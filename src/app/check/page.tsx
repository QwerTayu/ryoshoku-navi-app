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
  Flex,
} from '@chakra-ui/react'

// 今日の日付をフォーマットする関数
const formatDate = (date) => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月は0始まりなので+1
  const day = date.getDate().toString().padStart(2, '0');
  return `${month}/${day}`;
};

// 曜日を取得する関数
const getDayOfWeek = (date) => {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  return days[date.getDay()];
};

// 指定した日数後の日付を計算する関数
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export default function Home() {
  // 今日の日付を取得
  const today = new Date();

  // 表に表示するデータの配列を生成（7日分）
  const tableData = Array.from({ length: 7 }, (_, index) => {
    const currentDate = addDays(today, index);  // index日後の日付を取得
    return {
      date: formatDate(currentDate),  // 日付をフォーマット
      day: getDayOfWeek(currentDate),  // 曜日を取得
      morning: "",
      afternoon: "",
      night: ""
    };
  });

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
            {tableData.map((row, index) => (
              <Tr key={index}>
                <Td>{row.date}</Td>
                <Td>{row.day}</Td>
                <Td>{row.morning}</Td>
                <Td>{row.afternoon}</Td>
                <Td>{row.night}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="center" alignItems="center" height="10vh">
        <Button colorScheme='teal' size='lg' mr={4}>
          Edit!
        </Button>
        <Button colorScheme='teal' size='lg'>
          履歴
        </Button>
      </Flex>
    </main>
  );
}

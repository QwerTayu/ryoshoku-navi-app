import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
} from "@chakra-ui/react";

// Helper function to format date as MM/DD
function formatDate(date: Date) {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}/${day}`;
}

// Helper function to get the Japanese day of the week
function getJapaneseDayOfWeek(date: Date) {
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  return days[date.getDay()];
}

// Generate dates for the upcoming week starting from today
function generateWeekDates() {
  const today = new Date();
  const dates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i); // Get the upcoming days starting from today
    dates.push({
      date: formatDate(date),
      day: getJapaneseDayOfWeek(date),
      morning: "未",
      afternoon: "未",
      evening: "未",
    });
  }

  return dates;
}

export default function Home() {
  const weekDates = generateWeekDates(); // Generate a week of dates starting from today

  return (
    <main>
      <TableContainer>
        <Table variant="simple">
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
            {weekDates.map((row, index) => (
              <Tr key={index}>
                <Td>{row.date}</Td>
                <Td>{row.day}</Td>
                <Td>{row.morning}</Td>
                <Td>{row.afternoon}</Td>
                <Td>{row.evening}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="center" alignItems="center" height="10vh">
        <Button colorScheme='teal' size='lg' mr={4}>記録</Button>
      </Flex>
    </main>
  );
}
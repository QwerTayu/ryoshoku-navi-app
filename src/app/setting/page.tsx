import { Liff } from "@/app/_components/Liff";
import { Highlight } from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <Liff />
      <Highlight query='SETTING' styles={{ px: '1', py: '1', bg: 'orange.100' }}>
        This is the SETTING page.
      </Highlight>
    </main>
  );
}

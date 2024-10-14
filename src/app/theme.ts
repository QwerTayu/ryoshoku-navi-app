import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-mplus)',
    body: 'var(--font-mplus)',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
  components: {
    // ここにカスタムコンポーネントスタイルを追加できます
  },
})

export default theme

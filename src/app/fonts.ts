// app/fonts.ts
import { M_PLUS_2 } from 'next/font/google'


const mplus = M_PLUS_2({
  subsets: ['latin'],
  variable: "--font-mplus",
  weight: ["400", "700"],
});

export const fonts = {
  mplus,
}

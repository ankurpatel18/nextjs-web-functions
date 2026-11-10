export const metadata = {
  title: "Next.js on Lambda Web Functions",
  description: "A stateless SSR and streaming demonstration",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}

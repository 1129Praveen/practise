import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "My NextAuth App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

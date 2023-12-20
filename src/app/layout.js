import "./globals.css";

export const metadata = {
  title: "Mon Site Pro",
  description: "Mon site Pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

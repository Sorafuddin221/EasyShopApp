import "./globals.css";
import { ReduxProvider } from "./ReduxProvider";
import LayoutClient from "../components/LayoutClient"; // Import LayoutClient

export const metadata = {
  title: {
    template: "%s | My E-Shop",
    default: "My E-Shop",
  },
  description: "An e-commerce application built with Next.js and Redux.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <ReduxProvider>
          <LayoutClient>{children}</LayoutClient>
        </ReduxProvider>
      </body>
    </html>
  );
}
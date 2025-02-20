import { Header, Sidebar } from "@/layout";
import '@/styles/globals.scss'

export const metadata = {
  title: "TIC DDoS Radar",
  description: "TIC DDoS Radar app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

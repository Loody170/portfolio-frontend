import Footer from "@/components/Footer";
import "../app/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header>
            <Navbar />
          </header>
          <div className="flex-grow bg-gray-950">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

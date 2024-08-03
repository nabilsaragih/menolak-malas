import { Inter } from "next/font/google";
import "./globals.css";

import { Card, CardContent } from "@/components/ui/card";

import { ThemeProvider } from "@/components/theme-provider";
import { House, NotebookPen, BriefcaseBusiness, Phone, User } from "lucide-react";

import HeaderCard from "@/components/header";
import NavigationButton from "@/components/navigation";

const navigationIcons = [
  <House />, 
  <NotebookPen />, 
  <BriefcaseBusiness />, 
  <Phone />, 
  <User />
];

const navigation = ["Home", "Blog", "Project", "Contact", "About"];
const navigationLinks = ["/", "/blog", "/project", "/contact", "/about"];

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Nabil Saragih",
  description: "Nabil's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex justify-center">
            <header className="flex justify-center space-x-2 px-4 pt-4 pb-2 w-3/4">
              <HeaderCard />
            </header>
          </div>
          <div className="flex justify-center">
            <main className="flex justify-center space-x-2 w-3/4 px-4">
              <div className="w-1/4">
                <Card className="flex items-center w-full">
                  <CardContent className="py-4 w-full">
                    <NavigationButton navItems={navigation} navIcons={navigationIcons} navLinks={navigationLinks} />
                  </CardContent>
                </Card>
              </div>
              <div className="w-3/4">
                <Card className="w-full p-4">
                  <div className="px-4">
                    {children}
                  </div>
                </Card>
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { ReactNode } from "react";

import FloatingNavbar from "../components/ui/FloatingNavbar";
import MusicToggle from "../components/ui/MusicToggle";
import Footer from "../components/footer/footer";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <FloatingNavbar />

      <main>{children}</main>

      <Footer />

      <MusicToggle />
    </>
  );
};

export default MainLayout;

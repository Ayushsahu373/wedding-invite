import type { ReactNode } from "react";
import MusicToggle from "../components/ui/MusicToggle";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <MusicToggle />
    </div>
  );
};

export default MainLayout;

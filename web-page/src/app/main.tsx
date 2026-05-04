import { useState } from "react";
import CompleteCalculator from "@/features/CompleteCalculator/views/CompleteCalculator";
import Home from "@/features/Home/views/Home";
import RickAndMorty from "@/features/RickandMorty/views/RickAndMorty";
import SimpleCalculator from "@/features/SimpleCalculator/views/SimpleCalculator";
import type { AppPage, NavigateToAppPage } from "@/shared/types/navigation";

function MainApp() {
  const [currentPage, setCurrentPage] = useState<AppPage>("home");

  const navigateToPage: NavigateToAppPage = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "simpleCalculator":
        return <SimpleCalculator onNavigate={navigateToPage} />;
      case "completeCalculator":
        return <CompleteCalculator onNavigate={navigateToPage} />;
      case "characterExplorer":
        return <RickAndMorty onNavigate={navigateToPage} />;
      case "home":
      default:
        return <Home onNavigate={navigateToPage} />;
    }
  };

  return <main>{renderCurrentPage()}</main>;
}

export default MainApp;

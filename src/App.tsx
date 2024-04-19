import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourClasses',
  ContactUs = 'contactUs',
}

function App() {
  const [selectedPage, setSelectedPage] = useState<string>(SelectedPage.Home);

  return (
    <div className="app bg-gray-20">
      <Navbar
        // isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App

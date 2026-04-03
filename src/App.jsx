
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import MasterclassPage from "./components/MasterclassPage";
import ContactSection from "./components/ContactSection";
import GuidePage from "./components/GuidePage";
import GuideDetailPage from "./components/GuideDetailPage";
import BridalServicePage from "./components/BridalServicePage";
import { guideTopics } from "./data/guideTopics";

const availableGuideTopicKeys = new Set(guideTopics.map((topic) => topic.key));

const getRouteFromHash = (hashValue) => {
  const currentHash = hashValue.toLowerCase();

  if (currentHash === "" || currentHash === "#" || currentHash === "#home") {
    return { page: "home", guideTopicKey: null };
  }

  if (currentHash === "#about") {
    return { page: "about", guideTopicKey: null };
  }

  if (currentHash === "#masterclass") {
    return { page: "masterclass", guideTopicKey: null };
  }

  if (currentHash === "#bridal-service") {
    return { page: "bridal-service", guideTopicKey: null };
  }

  if (currentHash === "#contact") {
    return { page: "contact", guideTopicKey: null };
  }

  if (currentHash === "#guide") {
    return { page: "guide", guideTopicKey: null };
  }

  if (currentHash.startsWith("#guide-")) {
    const guideTopicKey = currentHash.replace("#guide-", "");
    if (availableGuideTopicKeys.has(guideTopicKey)) {
      return { page: "guide-detail", guideTopicKey };
    }
  }

  return { page: "home", guideTopicKey: null };
};

function App() {
  const [activeRoute, setActiveRoute] = useState(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    const syncPageFromHash = () => {
      setActiveRoute(getRouteFromHash(window.location.hash));
    };

    window.addEventListener("hashchange", syncPageFromHash);
    return () => window.removeEventListener("hashchange", syncPageFromHash);
  }, []);

  return (
    <>
      <Navbar />
      {activeRoute.page === "home" ? <HomePage /> : null}
      {activeRoute.page === "about" ? <AboutPage /> : null}
      {activeRoute.page === "masterclass" ? <MasterclassPage /> : null}
      {activeRoute.page === "bridal-service" ? <BridalServicePage /> : null}
      {activeRoute.page === "contact" ? <ContactSection /> : null}
      {activeRoute.page === "guide" ? <GuidePage /> : null}
      {activeRoute.page === "guide-detail" ? (
        <GuideDetailPage topicKey={activeRoute.guideTopicKey} />
      ) : null}
      <Footer />
    </>
  );
}

export default App;
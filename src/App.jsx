
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
import PolicyPage from "./components/PolicyPage";
import { guideTopics } from "./data/guideTopics";

const availableGuideTopicKeys = new Set(guideTopics.map((topic) => topic.key));
const policySectionHashes = new Set(["#privacy", "#terms", "#shipping", "#refund"]);

const getRouteFromHash = (hashValue) => {
  const currentHash = hashValue.toLowerCase();

  if (currentHash === "" || currentHash === "#" || currentHash === "#home") {
    return { page: "home", guideTopicKey: null, policySection: null };
  }

  if (currentHash === "#about") {
    return { page: "about", guideTopicKey: null, policySection: null };
  }

  if (currentHash === "#masterclass") {
    return { page: "masterclass", guideTopicKey: null, policySection: null };
  }

  if (currentHash === "#bridal-service") {
    return { page: "bridal-service", guideTopicKey: null, policySection: null };
  }

  if (currentHash === "#contact") {
    return { page: "contact", guideTopicKey: null, policySection: null };
  }

  if (currentHash === "#guide") {
    return { page: "guide", guideTopicKey: null, policySection: null };
  }

  if (currentHash === "#policies") {
    return { page: "policies", guideTopicKey: null, policySection: "privacy" };
  }

  if (policySectionHashes.has(currentHash)) {
    return {
      page: "policies",
      guideTopicKey: null,
      policySection: currentHash.replace("#", ""),
    };
  }

  if (currentHash.startsWith("#guide-")) {
    const guideTopicKey = currentHash.replace("#guide-", "");
    if (availableGuideTopicKeys.has(guideTopicKey)) {
      return { page: "guide-detail", guideTopicKey, policySection: null };
    }
  }

  return { page: "home", guideTopicKey: null, policySection: null };
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [activeRoute]);

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
      {activeRoute.page === "policies" ? (
        <PolicyPage activeSection={activeRoute.policySection} />
      ) : null}
      <Footer />
    </>
  );
}

export default App;
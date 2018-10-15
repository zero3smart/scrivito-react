import * as React from "react";
import * as Scrivito from "scrivito";
import CurrentPageMetaData from "./Components/CurrentPageMetaData";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import Intercom from "./Components/Intercom";
import NotFoundErrorPage from "./Components/NotFoundErrorPage";
import CookieConsent from "./Components/CookieConsent";

export default function App() {
  return (
    <ErrorBoundary>
      <div>
        <div className="content-wrapper">
          <Scrivito.CurrentPage />
          <NotFoundErrorPage />
        </div>
        <Footer />
        <CookieConsent />
        <CurrentPageMetaData />
        <GoogleAnalytics />
        <Intercom />
      </div>
    </ErrorBoundary>
  );
}

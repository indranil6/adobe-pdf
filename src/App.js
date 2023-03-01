import React, { useEffect, useRef } from "react";
import "./App.css";
const url =
  "https://storage.googleapis.com/medwiki/43_server/docs/1643005943_Dr._Desarda's_book_on_cryosorgery_(1)_(1).pdf";
function App() {
  const viewerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("adobe_dc_view_sdk.ready", function () {
      var adobeDCView = new window.AdobeDC.View({
        clientId: "<YOUR_CLIENT_ID>",
        divId: "adobe-dc-view",
      });
      adobeDCView.previewFile(
        {
          content: {
            location: {
              url,
            },
          },
          metaData: { fileName: "Bodea Brochure.pdf" },
        },
        {}
      );
    });

    return () => {
      // Clean up the PDF Embed API
      // adobeDCView.destroy();
    };
  }, [url]);
  return (
    <div className="App">
      <div id="adobe-dc-view" ref={viewerRef} style={{ height: "100vh" }}>
        <p>Loading PDF...</p>
      </div>
    </div>
  );
}

export default App;

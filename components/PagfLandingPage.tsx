"use client";

import { useEffect, useState } from "react";
import "@/app/pagf-landing.css";

export function PagfLandingPage() {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    document.body.classList.remove("no-js");
  }, []);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="pagf-shell">
      <iframe
        className="pagf-shell__frame"
        title="The Pan-African Girls Fund"
        src="/pagf_landing_page_v3.html"
        style={{ height: `${Math.max(height, 900)}px` }}
      />
    </main>
  );
}

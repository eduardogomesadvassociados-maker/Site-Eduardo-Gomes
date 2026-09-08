"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Dispara PageView nas navegações internas (Next Router não recarrega a página).
 * A primeira execução é ignorada — o PageView da carga inicial já sai do
 * código-base em <Analytics>.
 */
export function RouteChangeTracker() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
    window.dataLayer?.push({ event: "spa_pageview", page_path: pathname });
  }, [pathname]);

  return null;
}

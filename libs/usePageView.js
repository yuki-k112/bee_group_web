import { useEffect } from "react";
import { useRouter } from "next/router";

import * as gtag from "./gtag";

export default function usePageView() {
    useEffect(() => {
        const router = useRouter();

        if (!gtag.existsGaId) {
            return;
        }

        const handleRouteChange = (path) => {
            gtag.pageview(path);
        };

        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
}

// src/rtlCache.ts
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const createEmotionCache = (isRTL: boolean) =>
  createCache({
    key: isRTL ? "muirtl" : "mui",
    stylisPlugins: isRTL ? [prefixer, rtlPlugin] : [],
  });

export default createEmotionCache;

import { useState } from "#app";

export function usePreloader() {
  const isLoaded = useState("preloader", () => false);
  const finishLoading = () => (isLoaded.value = true);
  return { isLoaded, finishLoading };
}

import { QueryClient, useQuery } from "@tanstack/react-query";
import { getMarkets } from "./utils";

export const useMarkets = () =>
  useQuery({ queryKey: ["markets"], queryFn: getMarkets });

export const useMarketsPrefetcher = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({ queryKey: ["markets"], queryFn: getMarkets });

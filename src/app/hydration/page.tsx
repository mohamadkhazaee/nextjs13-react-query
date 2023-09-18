import { dehydrate } from "@tanstack/query-core";
import Markets from "./Markets";
import { Hydrate, getQueryClient } from "@/shared/react-query";
import { getMarkets } from "@/shared/api/public/utils";

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["markets"], getMarkets);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Markets />
    </Hydrate>
  );
}

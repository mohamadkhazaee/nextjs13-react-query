"use client";

import { useMarkets } from "@/shared/api";
import Image from "next/image";

export default function Markets() {
  const { data } = useMarkets();
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div
        style={{
          display: "flex",

          gap: 20,
        }}
      >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Base Asset</th>
              <th>Quote Asset</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(data)?.map((market: any, index) => {
              const marketData = market.OTC || market.EXCHANGE;
              return (
                <tr key={marketData?.symbol ?? index}>
                  <td>{marketData?.symbol ?? " - "}</td>
                  <td>{marketData.baseAsset}</td>
                  <td>{marketData.quoteAsset}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

import * as React from 'react';
import Home from "./Home";
import { KitProvider } from "@0xsequence/kit";
import { getDefaultWaasConnectors } from "@0xsequence/kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
const queryClient = new QueryClient();
import {
    mainnet,
    polygon,
    Chain,
    polygonAmoy,
    arbitrumSepolia,
  } from "wagmi/chains";
  
  const chains = [mainnet, polygon, polygonAmoy, arbitrumSepolia] as [
    Chain,
    ...Chain[],
  ];

const App = () => {
  // Get your own keys on sequence.build
  const projectAccessKey =
    "AQAAAAAAABL7m8Y6sdKRhOU2etUqkwJ3uHE";
  const waasConfigKey =
    "eyJwcm9qZWN0SWQiOjQ4NTksImVtYWlsUmVnaW9uIjoiY2EtY2VudHJhbC0xIiwiZW1haWxDbGllbnRJZCI6IjRuN3FwMHRrYmZiNG91ZDFtMGpqa3YxZTVrIiwicnBjU2VydmVyIjoiaHR0cHM6Ly93YWFzLnNlcXVlbmNlLmFwcCJ9";
//   const googleClientId =
//     "336046267103-p0qqjauf89ug8o9jdvikgnif46ik2td3.apps.googleusercontent.com";
  const walletConnectId =
    "c65a6cb1aa83c4e24500130f23a437d8";

  const connectors = getDefaultWaasConnectors({
    walletConnectProjectId: walletConnectId,
    waasConfigKey,
    // Notice: Uncomment for Google and set your credentials
    // googleClientId,
    // Notice: Apple Login only works if deployed on https (to support Apple redirects)
    /* Arbitrum sepolia chainId */
    defaultChainId: 421614,
    appName: "Kit Starter",
    projectAccessKey,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transports: { [key: number]: any } = {};

  chains.forEach((chain) => {
    transports[chain.id] = http();
  });

  const config = createConfig({
    transports,
    connectors,
    chains,
  });

  const kitConfig = {
    projectAccessKey,
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <KitProvider config={kitConfig}>
            <Home></Home>
        </KitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
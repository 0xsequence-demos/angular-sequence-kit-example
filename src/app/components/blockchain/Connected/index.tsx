import * as React from 'react';
import { Text } from "@0xsequence/design-system";
import { useAccount } from "wagmi";
import ChainInfo from "./ChainInfo";

const Connected = () => {
  const { address, chain, chainId } = useAccount();
  return (
    <>
      <Text variant="large" fontWeight="bold">
        Connected with address: {address}
      </Text>
      {chain && <ChainInfo chain={chain} address={address!} />}
    </>
  );
};

export default Connected;

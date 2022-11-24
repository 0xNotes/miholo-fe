import Premint from "./pages/premint";
import "./styles/styles.css";
import '@rainbow-me/rainbowkit/styles.css';

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ apiKey: "KmZbcEb5jtgo02w8mq25LRcfeCUfxv8h" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider coolMode chains={chains}>
    <div className="App">
      <Premint/>
    </div>
    </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

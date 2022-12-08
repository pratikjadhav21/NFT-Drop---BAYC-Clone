import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThirdwebProvider
            desiredChainId={ChainId.Goerli}
            chainRpc={{
                [ChainId.Goerli]: 'https://goerli.infura.io/v3/3cae04de1be6433b98cf5f48b969abb5',
            }}
        >
            <Component {...pageProps} />
        </ThirdwebProvider>
    )
}

export default MyApp

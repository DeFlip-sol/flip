export type Config = ReturnType<typeof getConfig>

export const getConfig = () => {
  const conf = import.meta.env
  return {
    appName: "DeFlip",
    appLink: "https://twitter.com/DeFlipSOL",
    creatorAddress: conf.GAMBA_CREATOR_ADDRESS as string | undefined,
    rpcEndpoint: conf.GAMBA_SOLANA_RPC as string | undefined,
    rpcWsEndpoint: conf.GAMBA_SOLANA_RPC_WS as string | undefined,
  }
}

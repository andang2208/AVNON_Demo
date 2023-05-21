interface AzureAdConfig {
    clientId: string;
    scopes: string;
    authority: string;
    redirectUrl: string;
}

const azureAdConfig: AzureAdConfig = {
    clientId: window['AzureAd'].clientId,
    scopes: window['AzureAd'].scopes,
    authority: window['AzureAd'].authority,
    redirectUrl: window['AzureAd'].redirectUrl,
};

export const AzureAdConfig = azureAdConfig;

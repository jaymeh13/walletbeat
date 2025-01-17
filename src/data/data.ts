import { type Features } from '@/types/Features';
import { type Info } from '@/types/Info';

export const wallets: Record<string, Features & Info> = {
  Metamask: {
    url: 'https://metamask.io/',
    deviceCompatibility: {
      mobile: true,
      desktop: false,
      browser: true,
    },
    accountType: {
      eoa: true,
      erc4337: false,
      safe: false,
    },
    chainCompatibility: {
      ethereum: true,
      optimism: true,
      arbitrum: true,
      base: false,
      polygon: true,
      gnosis: false,
      bnbSmartChain: true,
    },
    ensCompatibility: {
      mainnet: true,
      subDomains: true,
      offchain: true,
      L2s: false,
      customDomains: true,
      freeUsernames: false,
    },
    backupOptions: {
      cloud: false,
      local: true,
      socialRecovery: false,
    },
    securityFeatures: {
      multisig: false,
      MPC: false,
      keyRotation: false,
      transactionScanning: true,
      limitsAndTimelocks: false,
      hardwareWalletSupport: true,
    },
    availableTestnets: {
      availableTestnets: true,
    },
  },
  'Coinbase Wallet': {
    url: 'https://www.coinbase.com/wallet',
    deviceCompatibility: {
      mobile: true,
      desktop: false,
      browser: true,
    },
    accountType: {
      eoa: true,
      erc4337: false,
      safe: false,
    },
    chainCompatibility: {
      ethereum: true,
      optimism: true,
      arbitrum: true,
      base: true,
      polygon: true,
      gnosis: true,
      bnbSmartChain: true,
    },
    ensCompatibility: {
      mainnet: true,
      subDomains: true,
      offchain: true,
      L2s: true,
      customDomains: false,
      freeUsernames: true,
    },
    backupOptions: {
      cloud: true,
      local: true,
      socialRecovery: false,
    },
    securityFeatures: {
      multisig: false,
      MPC: false,
      keyRotation: false,
      transactionScanning: true,
      limitsAndTimelocks: false,
      hardwareWalletSupport: true,
    },
    availableTestnets: {
      availableTestnets: true,
    },
  },
  Rainbow: {
    url: 'https://rainbow.me/',
    deviceCompatibility: {
      mobile: true,
      desktop: false,
      browser: true,
    },
    accountType: {
      eoa: true,
      erc4337: false,
      safe: false,
    },
    chainCompatibility: {
      ethereum: true,
      optimism: true,
      arbitrum: true,
      base: true,
      polygon: true,
      gnosis: false,
      bnbSmartChain: true,
    },
    ensCompatibility: {
      mainnet: true,
      subDomains: true,
      offchain: true,
      L2s: true,
      customDomains: false,
      freeUsernames: false,
    },
    backupOptions: {
      cloud: true,
      local: true,
      socialRecovery: false,
    },
    securityFeatures: {
      multisig: false,
      MPC: false,
      keyRotation: false,
      transactionScanning: true,
      limitsAndTimelocks: false,
      hardwareWalletSupport: true,
    },
    availableTestnets: {
      availableTestnets: false,
    },
  },
  'Safe Wallet': {
    url: 'https://app.safe.global/',
    deviceCompatibility: {
      mobile: true,
      desktop: false,
      browser: true,
    },
    accountType: {
      eoa: false,
      erc4337: false,
      safe: true,
    },
    chainCompatibility: {
      ethereum: true,
      optimism: true,
      arbitrum: true,
      base: true,
      polygon: true,
      gnosis: true,
      bnbSmartChain: true,
    },
    ensCompatibility: {
      mainnet: true,
      subDomains: true,
      offchain: false,
      L2s: false,
      customDomains: false,
      freeUsernames: false,
    },
    backupOptions: {
      cloud: false,
      local: true,
      socialRecovery: true,
    },
    securityFeatures: {
      multisig: true,
      MPC: false,
      keyRotation: true,
      transactionScanning: true,
      limitsAndTimelocks: true,
      hardwareWalletSupport: true,
    },
    availableTestnets: {
      availableTestnets: true,
    },
  },
};

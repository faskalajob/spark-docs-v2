import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Spark Docs',
  topNav: [
    { text: 'Website', link: 'https://spark.fi/' },
    { text: 'App', link: 'https://app.spark.fi/' },
    { text: 'Analytics', link: 'https://spark.blockanalitica.com/' },
    { text: 'Bug Bounty', link: 'https://immunefi.com/bug-bounty/sparklend/information/' },
  ],
  socials: [
    {
      icon: 'x',
      link: 'https://x.com/sparkdotfi',
    },
    {
      icon: 'github',
      link: 'https://github.com/sparkdotfi/',
    },
    {
      icon: 'discord',
      link: 'https://discord.com/invite/sparkdotfi',
    }
  ],
  logoUrl: {
    light: '/logo-color-black.svg',
    dark: '/logo-color-white.svg',
  },
  iconUrl: '/fav.svg',
  theme: { 
    accentColor: '#FF8D70',   
  },
  editLink: { 
    pattern: 'https://github.com/sparkdotfi/spark-docs-v2/edit/master/docs/pages/:path', 
    text: 'Edit on GitHub'
  },
  sidebar: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'FAQ',
      link: '/faq',
    },
    {
      text: 'USER GUIDES',
      collapsed: false,
      items: [ 
        { 
          text: 'Getting Started', 
          link: '/user-guides/getting-started', 
        },
        { 
          text: 'Earning Savings',
          link: '/user-guides/earning-savings/',
          collapsed: true,
          items: [ 
            { 
              text: 'Savings USDS', 
              link: '/user-guides/earning-savings/susds', 
            },
            { 
              text: 'Savings USDC', 
              link: '/user-guides/earning-savings/susdc', 
            },
            { 
              text: 'Savings DAI', 
              link: '/user-guides/earning-savings/sdai', 
            }
          ],
        },
        { 
          text: 'Using SparkLend',
          link: '/user-guides/using-sparklend/',
          collapsed: true,
          items: [ 
            { 
              text: 'Borrow DAI & USDS', 
              link: '/user-guides/using-sparklend/borrow-dai-and-usds', 
            },
            { 
              text: 'Depositing Assets',
              link: '/user-guides/using-sparklend/depositing-assets',
            },
            { 
              text: 'Borrowing Assets',
              link: '/user-guides/using-sparklend/borrowing-assets',
            },
            { 
              text: 'Adjusting Your Position',
              link: '/user-guides/using-sparklend/adjusting-your-position',
            },
            { 
              text: 'Repaying Your Loan',
              link: '/user-guides/using-sparklend/repaying-your-loan',
            },
            { 
              text: 'Overview of Markets',
              link: '/user-guides/using-sparklend/overview-of-markets',
            },
            { 
              text: 'Oracles',
              link: '/user-guides/using-sparklend/oracles',
            },
            { 
              text: 'Liquidations',
              link: '/user-guides/using-sparklend/liquidations',
            },
            { 
              text: 'E-Mode',
              link: '/user-guides/using-sparklend/e-mode',
            },
            { 
              text: 'Isolation Mode',
              link: '/user-guides/using-sparklend/isolation-mode',
            }
          ],
        },
        { 
          text: 'Farms',
          link: '/user-guides/farming-rewards/',
          collapsed: true,
          items: [ 
            { 
              text: 'Depositing Into Farms', 
              link: '/user-guides/farming-rewards/depositing-into-farms', 
            },
            { 
              text: 'Claiming Rewards', 
              link: '/user-guides/farming-rewards/claiming-rewards', 
            },
            { 
              text: 'Withdrawing From Farms', 
              link: '/user-guides/farming-rewards/withdrawing-from-farms', 
            },
          ],
        },
        { 
          text: 'Converting Tokens',
          link: '/user-guides/converting-tokens/',
          collapsed: false,
        },
        { 
          text: 'Spark Liquidity Layer',
          link: '/user-guides/spark-liquidity-layer/',
        },
        { 
          text: 'Troubleshooting',
          link: '/user-guides/troubleshooting/',
        }, 
      ],
    },
    { 
      text: 'REWARDS',
      collapsed: false,
      items: [ 
        { 
          text: 'Spark Rewards',
          link: '/rewards/',
          collapsed: true,
          items: [ 
            { 
              text: 'Redstone Rewards', 
              link: '/rewards/redstone', 
            }
          ],
        },
        {
          text: 'Spark Points',
          link: '/points/',
          collapsed: true,
          items: [ 
            { 
              text: 'Pendle Campaign', 
              link: '/points/pendle', 
            }
          ],
        }
      ],
    },
    { 
      text: 'GOVERNANCE',
      collapsed: false,
      items: [ 
        { 
          text: 'SPK Token', 
          link: '/governance/spk-token', 
        },
        { 
          text: 'SPK Airdrop', 
          link: '/governance/spk-airdrop', 
        },
      ],
    },
    { 
      text: 'GOVERNANCE',
      collapsed: false,
      items: [ 
        { 
          text: 'SPK Token', 
          link: '/governance/spk-token', 
        },
        { 
          text: 'SPK Airdrop', 
          link: '/governance/spk-airdrop', 
        },
      ],
    },
    {
      text: 'DEVELOPERS',
      collapsed: false,
      items: [ 
        { 
          text: 'Deployments', 
          link: '/dev/deployments/', 
        },
        { 
          text: 'Savings', 
          collapsed: true,
          items: [ 
            { 
              text: 'sUSDS Token', 
              link: '/dev/savings/susds-token', 
            },
            { 
              text: 'sUSDC Token', 
              link: '/dev/savings/susdc-token', 
            },
            { 
              text: 'Cross-chain USDS & sUSDS', 
              link: '/dev/savings/cross-chain-usds-and-susds', 
            },
            { 
              text: 'Cross-chain Savings Rate Oracle', 
              link: '/dev/savings/cross-chain-savings-rate-oracle', 
            },
            { 
              text: 'Spark PSM', 
              link: '/dev/savings/spark-psm', 
            },
            { 
              text: 'sDAI Token', 
              link: '/dev/savings/sdai-token', 
            }
          ], 
        },
        { 
          text: 'SparkLend', 
          collapsed: true,
          items: [ 
            { 
              text: 'Core Contracts',
              collapsed: true, 
              items: [ 
                { 
                  text: 'ACLManager', 
                  link: '/dev/sparklend/core-contracts/aclmanager', 
                },
                { 
                  text: 'AaveDataProvider', 
                  link: '/dev/sparklend/core-contracts/aavedataprovider', 
                },
                { 
                  text: 'PoolAddressesProvider', 
                  link: '/dev/sparklend/core-contracts/pooladdressesprovider', 
                },
                { 
                  text: 'PoolAddressesProviderRegistry', 
                  link: '/dev/sparklend/core-contracts/pooladdressesproviderregistry', 
                },
                { 
                  text: 'PriceOracleSentinel', 
                  link: '/dev/sparklend/core-contracts/priceoraclesentinel', 
                },
                { 
                  text: 'Pool', 
                  link: '/dev/sparklend/core-contracts/pool', 
                },
                { 
                  text: 'PoolConfigurator', 
                  link: '/dev/sparklend/core-contracts/poolconfigurator', 
                },
                { 
                  text: 'AaveOracle', 
                  link: '/dev/sparklend/core-contracts/aaveoracle', 
                },
              ], 
            },
            { 
              text: 'Periphery Contracts', 
              collapsed: true, 
              items: [ 
                { 
                  text: 'RewardsController', 
                  link: '/dev/sparklend/periphery-contracts/rewardscontroller', 
                },
                { 
                  text: 'UiIncentiveDataProviderV3', 
                  link: '/dev/sparklend/periphery-contracts/uiincentivedataproviderv3', 
                },
                { 
                  text: 'UiPoolDataProviderV3', 
                  link: '/dev/sparklend/periphery-contracts/uipooldataproviderv3', 
                },
                { 
                  text: 'WalletBalanceProvider', 
                  link: '/dev/sparklend/periphery-contracts/walletbalanceprovider', 
                },
                { 
                  text: 'WETHGateway', 
                  link: '/dev/sparklend/periphery-contracts/wethgateway', 
                }
              ], 
            },
            { 
              text: 'Tokens', 
              collapsed: true, 
              items: [ 
                { 
                  text: 'spToken', 
                  link: '/dev/sparklend/tokens/sptoken', 
                },
                { 
                  text: 'DebtToken', 
                  link: '/dev/sparklend/tokens/debttoken', 
                },
                { 
                  text: 'DelegationAwareSpToken', 
                  link: '/dev/sparklend/tokens/delegationawaresptoken', 
                }
              ], 
            },
            { 
              text: 'Features', 
              collapsed: true, 
              items: [ 
                { 
                  text: 'Efficiency Mode', 
                  link: '/dev/sparklend/features/efficiency-mode-emode', 
                },
                { 
                  text: 'Isolation Mode', 
                  link: '/dev/sparklend/features/isolation-mode', 
                },
                { 
                  text: 'Repay with spTokens', 
                  link: '/dev/sparklend/features/repay-with-sptokens', 
                },
                { 
                  text: 'Siloed Borrowing', 
                  link: '/dev/sparklend/features/siloed-borrowing', 
                },
                { 
                  text: 'Supply & Borrow caps', 
                  link: '/dev/sparklend/features/supply-borrow-caps', 
                },
                { 
                  text: 'Credit Delegation', 
                  link: '/dev/sparklend/features/credit-delegation', 
                },
                { 
                  text: 'Flash Loans', 
                  link: '/dev/sparklend/features/flash-loans', 
                },
                { 
                  text: 'Liquidations', 
                  link: '/dev/sparklend/features/liquidations', 
                },
                { 
                  text: 'Troubleshooting', 
                  link: '/dev/sparklend/features/troubleshooting-errors', 
                }
              ], 
            },
          ], 
        },
        { 
          text: 'Spark Liquidity Layer', 
          collapsed: true,
          items: [ 
            { 
              text: 'Spark ALM Controller', 
              link: '/dev/spark-liquidity-layer/spark-alm-controller', 
            },
          ], 
        },
        { 
          text: 'Integration Guides', 
          collapsed: true,
          items: [ 
            { 
              text: 'Listing sUSDS on Lending Markets', 
              link: '/dev/integration-guides/susds-lending-market', 
            },
          ], 
        },
      ],
    },
    { 
      text: 'SECURITY', 
      collapsed: false,
      items: [ 
        { 
          text: 'Security Audits', 
          link: '/dev/security/security-and-audits', 
        },
        { 
          text: 'Bug Bounty Program', 
          link: '/dev/security/bug-bounty-program', 
        },
      ], 
    },
    { 
      text: 'Spark Analytics', 
      link: 'https://spark.blockanalitica.com/',
    },
    {
      text: 'Brand Assets | Press Kit', 
      link: 'https://web3-growth.notion.site/Spark-Brand-Kit-13b40bd4be65808098bddf08f31cfacf', 
    },
    {
      text: 'Terms of Use', 
      link: 'https://spark.fi/terms-of-use', 
    },
  ],
})

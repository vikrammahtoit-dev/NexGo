// privacyPolicyData.js

export const privacyPolicyData = {
  title: "Privacy Policy",

  effectiveDate: "15 August 2026",
  lastUpdated: "15 August 2026",

  breadcrumb: ["Home", "Privacy Policy"],

  intro: [
    `Nexgo (“Nexgo”, “we”, “us”, or “our”) respects your privacy and is committed to protecting personal information handled through our website, merchant dashboard, mobile applications, APIs, tracking pages, integrations and logistics services.`,

    `This Privacy Policy explains what information Nexgo collects, why we collect it, how we use it, when we share it, how we protect it, and the choices available to you.`,

    `This Privacy Policy applies to merchants, customers, consignees, website visitors, users of the Nexgo Platform, API users and other individuals whose information is processed through Nexgo.`,

    `By using Nexgo, you acknowledge that you have read this Privacy Policy.`,
  ],

  sections: [
    {
      id: "about-nexgo",
      number: "1",
      title: "ABOUT NEXGO",

      intro:
        "Nexgo is a technology-enabled logistics aggregation platform that allows businesses to:",

      bulletColumns: [
        [
          "Create shipments",
          "Compare and select courier services",
          "Schedule pickups",
          "Generate AWBs and labels",
          "Track shipments",
          "Manage NDR",
        ],
        [
          "Manage RTO",
          "Manage reverse pickups",
          "Manage COD shipments",
          "Access billing and reports",
          "Integrate ecommerce stores and business systems",
          "Use Nexgo APIs and webhooks",
        ],
      ],

      paragraphs: [
        "Nexgo may work with independent third-party courier and logistics providers to provide transportation and delivery services.",
      ],
    },

    {
      id: "information-we-collect",
      number: "2",
      title: "INFORMATION WE COLLECT",

      intro:
        "Depending on how you use Nexgo, we may collect different categories of information.",

      subsections: [
        {
          number: "2.1",
          title: "Account Information",

          intro:
            "When you create a Nexgo account, we may collect:",

          bulletColumns: [
            [
              "Name",
              "Business name",
              "Email address",
            ],
            [
              "Mobile number",
              "Login information",
              "Business address",
            ],
            [
              "Pickup address",
              "Billing address",
              "Account preferences",
            ],
          ],
        },

        {
          number: "2.2",
          title: "Business and KYC Information",

          intro:
            "For business verification and applicable services, we may collect:",

          bulletColumns: [
            [
              "PAN",
              "GSTIN",
              "Business registration information",
            ],
            [
              "Company/LLP/proprietorship information",
              "KYC documents",
              "Bank account information",
            ],
            [
              "Cancelled cheque or bank verification information",
              "Authorized-person information",
            ],
          ],

          paragraphs: [
            "The information required may depend on the Services you use.",
          ],
        },
      ],
    },

    {
      id: "shipment-information",
      number: "3",
      title: "SHIPMENT INFORMATION",

      intro:
        "When you create a Shipment through Nexgo, we may process information relating to the Shipment, including:",

      informationGroups: [
        {
          title: "Sender Information",
          icon: "user",
          items: [
            "Name",
            "Phone number",
            "Email address",
            "Pickup address",
            "Pincode",
          ],
        },
        {
          title: "Receiver Information",
          icon: "user",
          items: [
            "Name",
            "Phone number",
            "Email address",
            "Delivery address",
            "Pincode",
          ],
        },
        {
          title: "Shipment Information",
          icon: "box",
          columns: [
            [
              "Order number",
              "AWB number",
              "Product description",
              "Quantity",
              "Product value",
              "Invoice information",
            ],
            [
              "Weight",
              "Dimensions",
              "Payment method",
              "COD amount",
              "Shipment status",
              "Delivery information",
              "NDR/RTO information",
            ],
          ],
        },
      ],

      paragraphs: [
        "This information is necessary to provide logistics services.",
      ],
    },

    {
      id: "payment-information",
      number: "4",
      title: "PAYMENT INFORMATION",

      intro:
        "Where you make payments through Nexgo, we may process information relating to:",

      bulletColumns: [
        [
          "Payment status",
          "Transaction ID",
          "Invoice information",
        ],
        [
          "Wallet transactions",
          "Refund information",
        ],
        [
          "COD remittance information",
        ],
      ],

      paragraphs: [
        "Where payment processing is performed by a third-party payment provider, your payment information may be processed directly by that provider according to its applicable privacy policy.",

        "Nexgo does not necessarily store complete card or banking credentials.",
      ],
    },

    {
      id: "wallet-cod-information",
      number: "5",
      title: "WALLET AND COD INFORMATION",

      intro:
        "If you use Nexgo wallet or COD services, we may process:",

      bulletColumns: [
        [
          "Wallet balance",
          "Wallet transactions",
          "Recharge information",
        ],
        [
          "COD amount",
          "COD settlement information",
          "Remittance information",
        ],
        [
          "Bank account details",
          "Payment reconciliation information",
        ],
      ],

      paragraphs: [
        "This information is used to provide billing, reconciliation and settlement services.",
      ],
    },

    {
      id: "device-technical-information",
      number: "6",
      title: "DEVICE AND TECHNICAL INFORMATION",

      intro:
        "When you access Nexgo, we may automatically collect certain technical information, including:",

      bulletColumns: [
        [
          "IP address",
          "Browser type",
          "Operating system",
          "Device type",
          "Device identifiers",
          "Screen resolution",
        ],
        [
          "Language",
          "Time zone",
          "Login information",
          "Session information",
          "Referring URL",
        ],
        [
          "Platform activity",
          "Error information",
        ],
      ],

      paragraphs: [
        "We use this information to maintain security, improve performance and operate the Platform.",
      ],
    },

    {
      id: "usage-information",
      number: "7",
      title: "USAGE INFORMATION",

      intro:
        "We may collect information about how you use Nexgo, including:",

      bulletColumns: [
        [
          "Pages visited",
          "Features used",
          "Dashboard activity",
          "Shipment-related actions",
        ],
        [
          "Search activity",
          "API activity",
          "Login activity",
        ],
        [
          "Interaction with notifications",
          "Error and performance information",
        ],
      ],

      paragraphs: [
        "We may use this information to understand how users interact with Nexgo and improve the Platform.",
      ],
    },

    {
      id: "cookies",
      number: "8",
      title: "COOKIES AND SIMILAR TECHNOLOGIES",

      intro:
        "Nexgo uses cookies and similar technologies such as:",

      bullets: [
        "Cookies",
        "Pixels",
        "Local storage",
        "SDKs",
        "Session identifiers",
        "Web beacons",
      ],

      secondaryIntro:
        "These technologies may be used for:",

      secondaryBullets: [
        "Login",
        "Authentication",
        "Security",
        "Preferences",
        "Analytics",
        "Performance monitoring",
        "Marketing, where permitted",
      ],

      paragraphs: [
        "For detailed information, please see the Nexgo Cookie Policy.",
      ],
    },

    {
      id: "integrations",
      number: "9",
      title: "INFORMATION FROM INTEGRATIONS",

      intro:
        "If you connect Nexgo with another platform, we may receive information from that platform.",

      secondaryIntro: "Examples include:",

      bullets: [
        "Ecommerce stores",
        "Marketplaces",
        "ERP systems",
        "OMS systems",
        "WMS systems",
        "Payment platforms",
        "Other business applications",
      ],

      paragraphs: [
        "The information received depends on the permissions and integration you authorize.",
      ],
    },

    {
      id: "api-information",
      number: "10",
      title: "API INFORMATION",

      intro: "When you use Nexgo APIs, we may process:",

      bulletColumns: [
        [
          "API credentials",
          "API requests",
          "API responses",
          "IP addresses",
        ],
        [
          "API usage information",
          "Request timestamps",
          "Error logs",
        ],
        [
          "Webhook information",
          "Integration information",
        ],
      ],

      paragraphs: [
        "API activity may be logged for security, troubleshooting, billing and service improvement.",

        "For more information, see the Nexgo API Terms of Use.",
      ],
    },

    {
      id: "courier-partner-information",
      number: "11",
      title: "INFORMATION FROM COURIER PARTNERS",

      intro:
        "Nexgo may receive information from Courier Partners, including:",

      bulletColumns: [
        [
          "Pickup status",
          "Shipment status",
          "Delivery status",
          "Tracking events",
        ],
        [
          "NDR information",
          "RTO information",
          "Proof of delivery",
        ],
        [
          "Weight information",
          "Delivery attempt information",
          "COD information",
          "Claim information",
        ],
      ],

      paragraphs: [
        "This information allows Nexgo to provide shipment tracking and management services.",
      ],
    },

    {
      id: "how-we-use",
      number: "12",
      title: "HOW WE USE YOUR INFORMATION",

      contentGroups: [
        {
          title: "Providing Services",
          intro: "To:",
          bullets: [
            "Create and process shipments",
            "Arrange pickups",
            "Facilitate delivery",
            "Generate labels",
            "Generate AWBs",
            "Track shipments",
            "Manage NDR",
            "Manage RTO",
            "Process reverse shipments",
            "Facilitate COD",
            "Provide billing and reports",
          ],
        },
        {
          title: "Account Management",
          intro: "To:",
          bullets: [
            "Create accounts",
            "Authenticate users",
            "Verify businesses",
            "Complete KYC",
            "Manage account settings",
            "Provide customer support",
          ],
        },
        {
          title: "Security",
          intro: "To:",
          bullets: [
            "Prevent fraud",
            "Detect suspicious activity",
            "Protect accounts",
            "Protect the Platform",
            "Investigate security incidents",
            "Prevent unauthorized access",
          ],
        },
        {
          title: "Platform Improvement",
          intro: "To:",
          bullets: [
            "Improve features",
            "Improve performance",
            "Identify technical problems",
            "Analyze usage",
            "Develop new products",
            "Improve merchant experience",
          ],
        },
        {
          title: "Communications",
          intro: "To send:",
          bullets: [
            "Shipment notifications",
            "Account notifications",
            "Billing information",
            "COD notifications",
            "Security alerts",
            "Service updates",
            "Support communications",
          ],
          paragraphs: [
            "We may also send promotional communications where permitted by applicable law and your preferences.",
          ],
        },
      ],
    },

    {
      id: "legal-bases",
      number: "13",
      title: "LEGAL BASES / PURPOSES FOR PROCESSING",

      intro:
        "Depending on the circumstances and applicable law, Nexgo may process personal information where necessary to:",

      bullets: [
        "Provide a requested service",
        "Perform contractual obligations",
        "Comply with legal requirements",
        "Protect security and prevent fraud",
        "Respond to requests",
        "Obtain consent where required",
        "Pursue legitimate business purposes where permitted by applicable law",
      ],
    },

    {
      id: "information-sharing",
      number: "14",
      title: "HOW WE SHARE INFORMATION",

      intro:
        "Nexgo may share relevant information with third parties where necessary to provide the Services or comply with applicable law.",

      contentGroups: [
        {
          title: "Courier Partners",
          intro: "To facilitate:",
          bullets: [
            "Pickup",
            "Transportation",
            "Delivery",
            "Tracking",
            "NDR",
            "RTO",
            "Reverse pickup",
          ],
        },
        {
          title: "Payment Providers",
          intro: "To process:",
          bullets: [
            "Payments",
            "Refunds",
            "Wallet transactions",
            "COD settlements",
          ],
        },
        {
          title: "Technology Providers",
          intro: "For:",
          bullets: [
            "Cloud hosting",
            "Analytics",
            "Security",
            "Customer support",
            "Communication",
            "Monitoring",
            "Infrastructure",
          ],
        },
        {
          title: "Ecommerce and Business Platforms",
          paragraphs: [
            "Where you have authorized an integration.",
          ],
        },
        {
          title: "Insurers / Claims Providers",
          paragraphs: [
            "Where required to process a claim or shipment protection service.",
          ],
        },
        {
          title: "Government and Regulatory Authorities",
          paragraphs: [
            "Where disclosure is required or permitted by law.",
          ],
        },
      ],
    },

    {
      id: "courier-partner-disclosure",
      number: "15",
      title: "COURIER PARTNER DISCLOSURE",

      intro:
        "When you create a Shipment, relevant sender and receiver information may be shared with the selected Courier Partner.",

      secondaryIntro: "This is necessary to enable:",

      bullets: [
        "Pickup",
        "Shipment transportation",
        "Delivery",
        "Tracking",
        "Customer communication",
        "Delivery confirmation",
        "NDR/RTO processing",
      ],

      paragraphs: [
        "Courier Partners may process information under their own applicable policies and contractual obligations.",
      ],
    },

    {
      id: "customer-communications",
      number: "16",
      title: "CUSTOMER COMMUNICATIONS",

      intro:
        "For delivery-related purposes, Nexgo or a Courier Partner may contact a consignee using the contact details provided with the Shipment.",

      secondaryIntro: "Communications may include:",

      bullets: [
        "Pickup notifications",
        "Delivery notifications",
        "Out-for-delivery notifications",
        "Delivery confirmation",
        "NDR communications",
        "RTO information",
        "Customer support",
      ],

      paragraphs: [
        "These communications are part of the logistics service.",
      ],
    },

    {
      id: "data-security",
      number: "17",
      title: "DATA SECURITY",

      intro:
        "Nexgo uses reasonable technical and organizational safeguards designed to protect personal information.",

      secondaryIntro:
        "Depending on the nature of the information, security measures may include:",

      bullets: [
        "Encryption",
        "Access controls",
        "Authentication",
        "Logging",
        "Monitoring",
        "Network security",
        "Credential management",
        "Backup controls",
        "Employee access restrictions",
        "Security monitoring",
      ],

      paragraphs: [
        "However, no internet-based service can guarantee absolute security.",
      ],
    },

    {
      id: "data-retention",
      number: "18",
      title: "DATA RETENTION",

      intro:
        "Nexgo retains information only for as long as reasonably necessary for the purposes for which it was collected, including:",

      bullets: [
        "Providing Services",
        "Maintaining accounts",
        "Financial reconciliation",
        "Customer support",
        "Fraud prevention",
        "Legal compliance",
        "Dispute resolution",
        "Security",
        "Regulatory requirements",
      ],

      paragraphs: [
        "Retention periods may vary depending on the type of information and applicable legal requirements.",

        "When information is no longer required, Nexgo may delete, anonymize or securely dispose of it, subject to applicable law.",
      ],
    },

    {
      id: "data-hosting",
      number: "19",
      title: "DATA HOSTING",

      paragraphs: [
        "Nexgo may use third-party infrastructure and cloud service providers to store and process information.",

        "Data may be processed or stored in India or other jurisdictions where permitted by applicable law and subject to appropriate safeguards.",
      ],
    },

    {
      id: "international-transfers",
      number: "20",
      title: "INTERNATIONAL DATA TRANSFERS",

      paragraphs: [
        "Where Nexgo or its service providers process information outside India, such processing will be conducted in accordance with applicable legal requirements.",

        "Nexgo may use contractual, technical or organizational safeguards where appropriate.",
      ],
    },

    {
      id: "rights-choices",
      number: "21",
      title: "YOUR RIGHTS AND CHOICES",

      intro:
        "Depending on applicable law, you may have rights relating to your personal information, including:",

      bullets: [
        "Requesting access to certain information",
        "Requesting correction of inaccurate information",
        "Requesting deletion where applicable",
        "Withdrawing consent where processing is based on consent",
        "Requesting information about processing",
        "Raising a grievance",
        "Exercising other rights available under applicable law",
      ],

      paragraphs: [
        "Some requests may be subject to legal or contractual limitations.",
      ],
    },

    {
      id: "withdrawing-consent",
      number: "22",
      title: "WITHDRAWING CONSENT",

      paragraphs: [
        "Where Nexgo processes information based on your consent, you may withdraw that consent where permitted by law.",

        "Withdrawal of consent does not affect processing that occurred lawfully before withdrawal.",

        "Please note that withdrawing consent may affect Nexgo's ability to provide certain Services.",
      ],
    },

    {
      id: "marketing",
      number: "23",
      title: "MARKETING COMMUNICATIONS",

      intro:
        "You may receive promotional communications from Nexgo where permitted.",

      secondaryIntro:
        "You may opt out of marketing communications by:",

      bullets: [
        "Using the unsubscribe option in an email",
        "Changing communication preferences",
        "Contacting Nexgo support",
      ],

      paragraphs: [
        "Even if you opt out of marketing communications, Nexgo may continue sending essential service communications such as shipment, security, billing and account notifications.",
      ],
    },

    {
      id: "children",
      number: "24",
      title: "CHILDREN'S PRIVACY",

      paragraphs: [
        "Nexgo's Services are primarily intended for businesses and users capable of entering into legally binding agreements.",

        "Nexgo does not knowingly seek to collect children's personal information for purposes prohibited by applicable law.",

        "If you believe that a child has provided personal information to Nexgo improperly, please contact us.",
      ],
    },

    {
      id: "third-party-websites",
      number: "25",
      title: "THIRD-PARTY WEBSITES",

      paragraphs: [
        "Nexgo may contain links to third-party websites or services.",

        "Nexgo is not responsible for the privacy practices of third-party websites.",

        "We recommend reviewing the privacy policy of any third-party website before providing personal information.",
      ],
    },

    {
      id: "third-party-services",
      number: "26",
      title: "THIRD-PARTY SERVICES",

      intro:
        "Nexgo may use third-party providers for:",

      bullets: [
        "Cloud infrastructure",
        "Analytics",
        "Security",
        "Payment processing",
        "Communication",
        "Customer support",
        "Monitoring",
        "Email",
        "SMS",
        "WhatsApp",
        "Other technical services",
      ],

      paragraphs: [
        "These providers may process information on Nexgo's behalf or independently where applicable.",
      ],
    },

    {
      id: "business-transfers",
      number: "27",
      title: "BUSINESS TRANSFERS",

      intro:
        "If Nexgo is involved in:",

      bullets: [
        "Merger",
        "Acquisition",
        "Reorganization",
        "Sale of assets",
        "Financing",
        "Business transfer",
      ],

      paragraphs: [
        "personal information may be transferred as part of the transaction, subject to applicable law and appropriate safeguards.",
      ],
    },

    {
      id: "fraud-security",
      number: "28",
      title: "FRAUD AND SECURITY INVESTIGATIONS",

      intro:
        "Nexgo may process and share information where reasonably necessary to:",

      bullets: [
        "Detect fraud",
        "Investigate suspicious activity",
        "Prevent abuse",
        "Protect users",
        "Protect Courier Partners",
        "Protect payment systems",
        "Investigate security incidents",
        "Comply with legal requirements",
      ],
    },

    {
      id: "legal-disclosures",
      number: "29",
      title: "LEGAL DISCLOSURES",

      intro:
        "Nexgo may disclose information where required or permitted by law, including to:",

      bullets: [
        "Courts",
        "Government authorities",
        "Law enforcement",
        "Regulators",
        "Tax authorities",
        "Legal advisers",
        "Other authorized entities",
      ],

      paragraphs: [
        "Such disclosures may occur where necessary to comply with legal obligations or protect rights and safety.",
      ],
    },

    {
      id: "business-user-responsibilities",
      number: "30",
      title: "BUSINESS USER RESPONSIBILITIES",

      intro:
        "If you use Nexgo to process information relating to your customers, you are responsible for:",

      bullets: [
        "Providing accurate information",
        "Having appropriate authorization to share customer information",
        "Providing required notices to customers",
        "Complying with applicable privacy laws",
        "Protecting customer information",
        "Using Nexgo information only for legitimate purposes",
      ],

      paragraphs: [
        "For example, a merchant must have the appropriate authority to provide a customer's name, phone number and delivery address to Nexgo for shipment processing.",
      ],
    },

    {
      id: "data-breaches",
      number: "31",
      title: "DATA BREACHES AND SECURITY INCIDENTS",

      paragraphs: [
        "Nexgo maintains procedures designed to detect, investigate and respond to security incidents.",

        "Where required by applicable law, Nexgo may notify relevant parties or authorities regarding a personal-data breach.",

        "If you believe your Nexgo account or information has been compromised, contact us immediately.",
      ],
    },

    {
      id: "cookies-section",
      number: "32",
      title: "COOKIES",

      intro:
        "Nexgo uses cookies and similar technologies.",

      secondaryIntro: "Cookies may be used for:",

      bullets: [
        "Authentication",
        "Security",
        "Session management",
        "Preferences",
        "Analytics",
        "Performance",
        "Marketing, where applicable",
      ],

      paragraphs: [
        "For complete information, see:",

        "Nexgo Cookie Policy",
      ],
    },

    {
      id: "policy-changes",
      number: "33",
      title: "CHANGES TO THIS PRIVACY POLICY",

      intro:
        "Nexgo may update this Privacy Policy from time to time.",

      secondaryIntro: "Changes may be made because of:",

      bullets: [
        "New Services",
        "Changes to technology",
        "Changes to applicable law",
        "Changes to data practices",
        "Security improvements",
        "Business requirements",
      ],

      paragraphs: [
        "The latest version will be published on the Nexgo website.",

        "The “Last Updated” date at the top of this Policy indicates when it was most recently updated.",

        "Where required by applicable law, Nexgo may provide additional notice or obtain consent.",
      ],
    },

    {
      id: "grievance",
      number: "34",
      title: "GRIEVANCE REDRESSAL",

      intro:
        "If you have a privacy-related concern, complaint or request, you may contact Nexgo.",

      contact: {
        title: "Privacy / Grievance Contact",

        fields: [
          {
            label: "Name",
            value: "[PRIVACY OFFICER / GRIEVANCE OFFICER NAME]",
          },
          {
            label: "Email",
            value: "[PRIVACY@NEXGO DOMAIN]",
          },
          {
            label: "Phone",
            value: "[PHONE NUMBER]",
          },
        ],
      },

      office: {
        title: "Registered Office",

        lines: [
          "[NEXGO LEGAL ENTITY NAME]",
          "[FULL REGISTERED ADDRESS]",
          "[PIN CODE]",
          "[INDIA]",
        ],
      },

      paragraphs: [
        "We will review and respond to privacy-related requests in accordance with applicable law.",
      ],
    },

    {
      id: "related-policies",
      number: "35",
      title: "RELATED POLICIES",

      intro:
        "This Privacy Policy should be read together with:",

      bullets: [
        "Nexgo Terms of Service",
        "Nexgo Cookie Policy",
        "Nexgo API Terms of Use",
        "Nexgo Shipping & Packaging SOP",
        "Nexgo Claims Policy",
        "Nexgo Refund & Cancellation Policy",
        "Nexgo Prohibited Items Policy",
        "Nexgo NDR & RTO Policy",
        "Nexgo COD & Remittance Policy",
      ],
    },

    {
      id: "your-privacy-matters",
      number: "36",
      title: "YOUR PRIVACY MATTERS",

      paragraphs: [
        "At Nexgo, we aim to make logistics simple without compromising responsible handling of information.",

        "We use personal information primarily to:",
      ],

      privacyFlow: [
        "Operate",
        "Secure",
        "Deliver",
        "Improve",
      ],

      closingBrand: "NEXGO",
      closingTagline: "Ship Smart. Deliver Better.",
    },
  ],
};
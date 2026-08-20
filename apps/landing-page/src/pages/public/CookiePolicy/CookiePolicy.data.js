export const cookiePolicyData = {
  title: "Cookie Policy",

  effectiveDate: "15 Aug 2026",
  lastUpdated: "15 Aug 2026",

  intro: [
    `This Cookie Policy explains how Nexgo (“Nexgo”, “we”, “us”, “our”) uses cookies and similar technologies when you visit or use the Nexgo website, merchant dashboard, tracking pages, applications and other online services (collectively, the “Platform”).`,

    `This Cookie Policy should be read together with the Nexgo Privacy Policy and Nexgo Terms of Service.`,
  ],

  /* ============================================================
     1. WHAT ARE COOKIES
  ============================================================ */

  whatAreCookies: {
    title: "What Are Cookies?",

    description:
      "Cookies are small text files that are stored on your browser or device when you visit a website.",

    cookiesAllow: [
      "Remember your preferences",
      "Keep you signed in",
      "Maintain secure sessions",
      "Understand how visitors use the website",
      "Improve website performance",
      "Measure marketing effectiveness",
      "Provide relevant features and communications",
      "Detect suspicious or fraudulent activity",
    ],

    similarTechnologies: [
      "Web beacons",
      "Pixels",
      "SDKs",
      "Local storage",
      "Session identifiers",
      "Tracking technologies",
    ],
  },

  /* ============================================================
     2. WHY NEXGO USES COOKIES
  ============================================================ */

  whyNexgoUsesCookies: [
    "Keep you logged in.",
    "Maintain your shopping/shipping session.",
    "Remember dashboard preferences.",
    "Protect your account.",
    "Detect fraud and suspicious activity.",
    "Understand Platform usage.",
    "Improve website performance.",
    "Analyze shipment and dashboard workflows.",
    "Measure advertising and marketing campaigns.",
    "Personalize certain Platform experiences.",
  ],

  /* ============================================================
     3. TYPES OF COOKIES
  ============================================================ */

  strictlyNecessary: {
    title: "Strictly Necessary Cookies",

    description:
      "These Cookies are required for the Platform to function properly.",

    usedFor: [
      "Login sessions",
      "Authentication",
      "Account security",
      "Session management",
      "Shipment booking",
      "Dashboard functionality",
      "Fraud prevention",
      "Load balancing",
      "Security controls",
    ],

    note:
      "Because these Cookies are necessary for core functionality, disabling them may prevent certain parts of Nexgo from working.",

    examples: [
      {
        purpose: "Authentication",
        function: "Keeps you logged in",
      },
      {
        purpose: "Session",
        function: "Maintains your current session",
      },
      {
        purpose: "Security",
        function: "Protects your account",
      },
      {
        purpose: "Load balancing",
        function: "Routes requests correctly",
      },
      {
        purpose: "Preferences",
        function: "Remembers essential settings",
      },
    ],
  },

  /* ============================================================
     COOKIE CATEGORY CARDS
  ============================================================ */

  cookieTypes: [
    {
      title: "Strictly Necessary Cookies",
      description:
        "Required for the Platform to function properly. They enable core features such as login, security, session management, shipment booking and fraud prevention.",
      note:
        "These Cookies are necessary for core functionality.",
      icon: "shield",
      color: "blue",
    },

    {
      title: "Functional Cookies",
      description:
        "Functional Cookies help Nexgo remember choices you make, such as language, region, dashboard preferences, display settings and recently selected options.",
      note:
        "These Cookies improve your experience but may not always be necessary for basic Platform operation.",
      icon: "sliders",
      color: "orange",
    },

    {
      title: "Analytics Cookies",
      description:
        "Help us understand how visitors use Nexgo. They may collect information about pages visited, time spent, features used, browser/device information, approximate geographic information, referral source, errors and navigation patterns.",
      note:
        "Analytics information is generally used in aggregated or pseudonymized form where appropriate.",
      icon: "chart",
      color: "orange",
    },

    {
      title: "Performance Cookies",
      description:
        "Help us understand and improve technical performance, including slow pages, failed requests, application errors, API problems, dashboard performance issues and service interruptions.",
      note:
        "This allows Nexgo's technical teams to improve reliability and performance.",
      icon: "gauge",
      color: "orange",
    },

    {
      title: "Marketing & Advertising Cookies",
      description:
        "Where applicable and subject to your choices and applicable law, Nexgo may use marketing Cookies to understand advertising performance.",
      note:
        "These Cookies may help measure campaigns, conversions, campaign sources, advertising engagement and repeated advertisements.",
      icon: "megaphone",
      color: "orange",
    },

    {
      title: "Third-Party Cookies",
      description:
        "Some Cookies may be placed by third-party service providers used for analytics, advertising, customer support, security, performance monitoring, payment processing, embedded content and communication services.",
      note:
        "Third-party providers may process information according to their own privacy policies.",
      icon: "users",
      color: "blue",
    },

    {
      title: "Cookies on Tracking Pages",
      description:
        "Tracking pages may use Cookies to provide real-time shipment status, improve tracking performance, detect abuse and measure page performance.",
      note:
        "Where tracking pages are publicly accessible, Nexgo will limit information collected to what is reasonably required for the relevant purpose.",
      icon: "search",
      color: "blue",
    },

    {
      title: "Cookies in Integrations",
      description:
        "Integrated applications, plugins or third-party services may set Cookies as part of their functionality.",
      note:
        "Third-party services may operate according to their own applicable policies.",
      icon: "puzzle",
      color: "blue",
    },

    {
      title: "Cookies on Mobile Devices",
      description:
        "Mobile applications or browsers may use Cookies or similar technologies subject to your device settings.",
      note:
        "Cookie behavior may vary depending on the device and application environment.",
      icon: "mobile",
      color: "blue",
    },
  ],

  /* ============================================================
     COOKIE DETAILS TABLE
  ============================================================ */

  cookieDetails: [
    {
      name: "nx_session",
      category: "Strictly Necessary",
      purpose: "Maintains your session and keeps you logged in.",
      duration: "Session",
      managedBy: "Nexgo",
    },
    {
      name: "nx_auth",
      category: "Strictly Necessary",
      purpose: "Stores authentication details securely.",
      duration: "Session",
      managedBy: "Nexgo",
    },
    {
      name: "nx_csrf",
      category: "Strictly Necessary",
      purpose: "Helps prevent cross-site request forgery.",
      duration: "Session",
      managedBy: "Nexgo",
    },
    {
      name: "nx_pref",
      category: "Functional",
      purpose: "Stores your dashboard and display preferences.",
      duration: "6 Months",
      managedBy: "Nexgo",
    },
    {
      name: "nx_analytics",
      category: "Analytics",
      purpose: "Collects analytics information to improve our Platform.",
      duration: "13 Months",
      managedBy: "Nexgo / Analytics Provider",
    },
    {
      name: "nx_perf",
      category: "Performance",
      purpose: "Helps monitor performance and detect errors.",
      duration: "13 Months",
      managedBy: "Nexgo / Analytics Provider",
    },
    {
      name: "nx_marketing",
      category: "Marketing & Advertising",
      purpose: "Used to deliver relevant ads and measure campaigns.",
      duration: "13 Months",
      managedBy: "Third-Party Ad Partner",
    },
  ],

  /* ============================================================
     4 - 25 POLICY SECTIONS
  ============================================================ */

  sections: [
    {
      number: "4",
      title: "Functional Cookies",
      paragraphs: [
        "Functional Cookies help Nexgo remember choices you make.",
        "They may remember:",
      ],
      bullets: [
        "Language preference",
        "Region",
        "Dashboard preferences",
        "Display settings",
        "Recently selected options",
        "Other interface preferences",
      ],
      ending:
        "These Cookies improve your experience but may not always be necessary for basic Platform operation.",
    },

    {
      number: "5",
      title: "Analytics Cookies",
      paragraphs: [
        "Analytics Cookies help us understand how visitors use Nexgo.",
        "They may collect information such as:",
      ],
      bullets: [
        "Pages visited",
        "Time spent on pages",
        "Features used",
        "Browser/device information",
        "Approximate geographic information",
        "Referral source",
        "Errors encountered",
        "Navigation patterns",
      ],
      additionalTitle: "Nexgo may use analytics information to:",
      additionalBullets: [
        "Improve the Platform",
        "Identify technical problems",
        "Understand merchant behaviour",
        "Improve dashboard workflows",
        "Measure feature usage",
        "Develop new features",
      ],
      ending:
        "Analytics information is generally used in aggregated or pseudonymized form where appropriate.",
    },

    {
      number: "6",
      title: "Performance Cookies",
      paragraphs: [
        "Performance Cookies help us understand and improve technical performance.",
        "They may help us identify:",
      ],
      bullets: [
        "Slow pages",
        "Failed requests",
        "Application errors",
        "API problems",
        "Dashboard performance issues",
        "Service interruptions",
      ],
      ending:
        "This allows Nexgo's technical teams to improve reliability and performance.",
    },

    {
      number: "7",
      title: "Marketing and Advertising Cookies",
      paragraphs: [
        "Where applicable and subject to your choices and applicable law, Nexgo may use marketing Cookies to understand advertising performance.",
        "These Cookies may help us:",
      ],
      bullets: [
        "Measure campaigns",
        "Understand website conversions",
        "Identify campaign sources",
        "Deliver relevant advertising",
        "Limit repeated advertisements",
        "Measure engagement",
      ],
      ending:
        "Marketing Cookies may be provided by third-party advertising or analytics providers. You may be able to disable these Cookies through Nexgo's Cookie Settings.",
    },

    {
      number: "8",
      title: "Third-Party Cookies",
      paragraphs: [
        "Some Cookies may be placed by third-party service providers.",
        "These providers may include services used for:",
      ],
      bullets: [
        "Analytics",
        "Advertising",
        "Customer support",
        "Security",
        "Performance monitoring",
        "Payment processing",
        "Embedded content",
        "Communication services",
      ],
      ending:
        "Third-party providers may process information according to their own privacy policies. Nexgo does not control all third-party technologies and recommends reviewing the applicable third party's privacy documentation where relevant.",
    },

    {
      number: "9",
      title: "Nexgo Dashboard Cookies",
      paragraphs: [
        "When you log into the Nexgo Merchant Dashboard, Cookies may be used to:",
      ],
      bullets: [
        "Authenticate your account",
        "Maintain your session",
        "Protect your account",
        "Prevent unauthorized access",
        "Remember dashboard preferences",
        "Maintain workflow state",
        "Improve dashboard performance",
      ],
      ending:
        "Disabling essential dashboard Cookies may prevent you from accessing certain Nexgo features.",
    },

    {
      number: "10",
      title: "Shipment Tracking Cookies",
      paragraphs: [
        "Nexgo tracking pages may use Cookies or similar technologies to:",
      ],
      bullets: [
        "Maintain tracking sessions",
        "Improve tracking performance",
        "Detect abuse",
        "Measure page performance",
        "Improve the tracking experience",
      ],
      ending:
        "Where tracking pages are publicly accessible, Nexgo will limit the information collected through such technologies to what is reasonably required for the relevant purpose.",
    },

    {
      number: "11",
      title: "Cookies and Personal Data",
      paragraphs: [
        "Some Cookies may collect information that can identify or relate to an individual.",
        "Depending on the technology used, this may include:",
      ],
      bullets: [
        "IP address",
        "Device information",
        "Browser information",
        "Account/session identifiers",
        "Online activity",
        "Preferences",
        "Approximate location information",
      ],
      ending:
        "Nexgo handles applicable personal data in accordance with its Privacy Policy and applicable data-protection laws.",
    },

    {
      number: "12",
      title: "Cookie Consent",
      paragraphs: [
        "When you first visit a Nexgo website or applicable Platform, we may display a Cookie consent banner.",
        "Depending on the Cookies being used, you may be provided with options such as:",
      ],
      emphasis: [
        "Accept All",
        "Reject Optional Cookies",
        "Manage Preferences",
      ],
      ending:
        "Strictly necessary Cookies may remain enabled because they are required for core Platform functionality. Where consent is required, Nexgo will not treat continued browsing alone as consent where applicable law requires a clear affirmative action.",
    },

    {
      number: "13",
      title: "Managing Cookie Preferences",
      paragraphs: [
        "You can manage optional Cookie preferences through the Nexgo Cookie Settings interface.",
        "You may be able to:",
      ],
      bullets: [
        "Accept all Cookies",
        "Reject optional Cookies",
        "Enable analytics Cookies",
        "Disable analytics Cookies",
        "Enable marketing Cookies",
        "Disable marketing Cookies",
        "Change preferences later",
      ],
      ending:
        "Where applicable, Nexgo will provide a way to reopen Cookie Settings after your initial choice.",
    },

    {
      number: "14",
      title: "Withdrawing Consent",
      paragraphs: [
        "Where Cookies are used on the basis of consent, you may withdraw your consent through Nexgo Cookie Settings.",
      ],
      ending:
        "Withdrawal of consent will not affect the lawfulness of processing carried out before withdrawal. Certain essential Cookies may continue to operate because they are required for the Platform to function. India's DPDP framework provides for withdrawal of consent, with the process intended to be as easy as the process of giving consent.",
    },

    {
      number: "15",
      title: "Browser Cookie Controls",
      paragraphs: [
        "Most modern browsers allow you to control Cookies through browser settings.",
        "Depending on your browser, you may be able to:",
      ],
      bullets: [
        "Block all Cookies",
        "Block third-party Cookies",
        "Delete existing Cookies",
        "Allow Cookies from selected websites",
        "Receive warnings when Cookies are stored",
      ],
      ending:
        "Please note that blocking all Cookies may cause certain Nexgo features to stop working.",
    },

    {
      number: "16",
      title: "How Long Do Cookies Stay on Your Device?",
      paragraphs: [
        "Nexgo may use two general types of Cookies.",
      ],
      subsections: [
        {
          title: "Session Cookies",
          text: "These Cookies are deleted when you close your browser or when the session expires.",
        },
        {
          title: "Persistent Cookies",
          text: "These Cookies remain on your device for a defined period or until you delete them.",
        },
      ],
      ending:
        "The retention period may vary depending on the purpose of the Cookie. Nexgo will seek to retain Cookies only for as long as reasonably necessary for their intended purpose, subject to applicable law and operational requirements.",
    },

    {
      number: "17",
      title: "Cookie Categories at Nexgo",
      paragraphs: [
        "For transparency, Nexgo may display Cookies using the following structure:",
      ],
      categoryTable: [
        ["Essential", "Login, security, sessions", "No"],
        ["Functional", "Preferences and features", "Yes, where applicable"],
        ["Analytics", "Usage and performance analysis", "Yes"],
        ["Performance", "Technical monitoring", "Yes, where applicable"],
        ["Marketing", "Advertising and campaign measurement", "Yes"],
      ],
      ending:
        "The actual Cookies used by Nexgo may change as the Platform evolves.",
    },

    {
      number: "18",
      title: "Cookie Inventory",
      paragraphs: [
        "Nexgo may maintain an internal Cookie inventory identifying, where applicable:",
      ],
      bullets: [
        "Cookie name",
        "Provider",
        "Purpose",
        "Category",
        "Type",
        "Duration",
        "First-party/third-party status",
      ],
      ending:
        "The public Cookie Settings interface may provide additional information about Cookies active on the relevant Nexgo website.",
    },

    {
      number: "19",
      title: "Changes to Cookies",
      paragraphs: [
        "Nexgo may add, remove or modify Cookies when:",
      ],
      bullets: [
        "New features are introduced",
        "Analytics systems change",
        "Security requirements change",
        "Third-party providers change",
        "Legal requirements change",
        "Platform functionality changes",
      ],
      ending:
        "Where required, Nexgo will update its Cookie Policy and/or request new consent.",
    },

    {
      number: "20",
      title: "Cookies Used by Third-Party Services",
      paragraphs: [
        "Where third-party technologies are integrated into Nexgo, those providers may place or access Cookies according to their own policies.",
        "Examples may include providers used for:",
      ],
      bullets: [
        "Website analytics",
        "Customer support chat",
        "Error monitoring",
        "Advertising",
        "Security",
        "Payment services",
        "Communication",
      ],
      ending:
        "Nexgo will seek to use reputable service providers and appropriate contractual and technical safeguards where required.",
    },

    {
      number: "21",
      title: "Security",
      paragraphs: [
        "Nexgo uses reasonable technical and organizational measures to protect information processed through the Platform.",
        "Cookies may also be used as part of Nexgo's security controls, including:",
      ],
      bullets: [
        "Session protection",
        "Authentication",
        "Fraud detection",
        "Abuse prevention",
        "Account security",
      ],
      ending:
        "However, no online system can be guaranteed to be completely secure.",
    },

    {
      number: "22",
      title: "Children",
      paragraphs: [
        "Nexgo's Platform is primarily intended for businesses and users capable of entering into legally binding agreements.",
        "Nexgo does not knowingly use the Platform to collect personal information from children for purposes that are prohibited by applicable law.",
      ],
      ending:
        "If you believe a child has provided personal information to Nexgo improperly, please contact us.",
    },

    {
      number: "23",
      title: "Your Privacy Rights",
      paragraphs: [
        "Depending on applicable law, you may have rights relating to your personal data, including rights concerning:",
      ],
      bullets: [
        "Access",
        "Correction",
        "Updating information",
        "Withdrawal of consent",
        "Erasure/deletion, where applicable",
        "Grievance/complaint mechanisms",
      ],
      ending:
        "The exact rights and conditions depend on applicable law and the nature of the processing. For additional information, please review the Nexgo Privacy Policy.",
    },

    {
      number: "24",
      title: "Relationship With Privacy Policy",
      paragraphs: [
        "This Cookie Policy explains Nexgo's use of Cookies and similar technologies.",
        "The Nexgo Privacy Policy explains broader processing of personal data.",
      ],
      ending:
        "If you have questions about how Nexgo processes personal data beyond Cookies, please refer to the Privacy Policy.",
    },

    {
      number: "25",
      title: "Updates to This Cookie Policy",
      paragraphs: [
        "Nexgo may update this Cookie Policy from time to time.",
        "The updated version will be published on the Nexgo website.",
        "The “Last Updated” date at the top of this Policy indicates when it was most recently revised.",
      ],
      ending:
        "Where legally required, Nexgo may notify you of material changes or request renewed consent.",
    },
  ],

  /* ============================================================
     YOUR CHOICES AND CONTROL
  ============================================================ */

  choices: [
    {
      title: "Cookie Preferences",
      description:
        "You can manage or withdraw your consent for optional Cookies through our cookie banner or preference center.",
      icon: "shield",
    },

    {
      title: "Browser Settings",
      description:
        "You can block or delete Cookies through your browser settings. Note: Disabling certain Cookies may affect Platform functionality.",
      icon: "settings",
    },

    {
      title: "Opt-Out Options",
      description:
        "You can opt out of certain analytics and advertising Cookies using industry opt-out tools and links provided.",
      icon: "minus",
    },

    {
      title: "Data Subject Rights",
      description:
        "You may exercise your rights under applicable law, including DPDP Act, 2023, by contacting us.",
      icon: "user",
    },
  ],

  /* ============================================================
     26. COOKIE SETTINGS
  ============================================================ */

  cookieSettings: {
    title: "NEXGO COOKIE SETTINGS",

    options: [
      {
        title: "Essential Cookies",
        status: "Always Active",
        locked: true,
      },
      {
        title: "Functional Cookies",
        status: true,
        locked: false,
      },
      {
        title: "Analytics Cookies",
        status: true,
        locked: false,
      },
      {
        title: "Performance Cookies",
        status: true,
        locked: false,
      },
      {
        title: "Marketing Cookies",
        status: true,
        locked: false,
      },
    ],
  },

  /* ============================================================
     CLOSING
  ============================================================ */

  closing: {
    title: "YOUR CHOICE MATTERS",

    text:
      "Nexgo uses Cookies to keep the Platform secure, operate essential features, understand how the Platform is used and improve your experience.",

    secondary:
      "You can change your optional Cookie preferences at any time through Cookie Settings.",

    brand: "NEXGO",

    tagline: "Ship Smart. Deliver Better.",
  },

  /* ============================================================
     IMPLEMENTATION RECOMMENDATION
  ============================================================ */

  implementationRecommendation: {
    title: "Implementation Recommendation",

    paragraphs: [
      `On Nexgo's website, use a banner with “Accept All”, “Reject Optional”, and “Manage Preferences” rather than a single “Accept Cookies” button.`,

      `MeitY's own website currently uses an Essential / Optional model with “Decline optional cookies,” “Accept all cookies,” and “Save Preferences,” which is a useful Indian reference point.`,
    ],

    buttons: [
      "Accept All",
      "Reject Optional",
      "Manage Preferences",
    ],

    finalNote:
      "Because Nexgo will handle merchant/customer data, this Cookie Policy should ultimately be aligned with your actual Privacy Policy, cookie inventory, analytics providers, consent-management implementation, and the phased commencement dates under India's 2025 DPDP Rules.",
  },
};
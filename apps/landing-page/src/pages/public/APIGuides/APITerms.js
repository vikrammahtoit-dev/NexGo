export const apiTerms = {
  title: "NEXGO — API TERMS OF USE",
  effectiveDate: "15 Aug 2026",
  lastUpdated: "15 Aug 2026",

  intro: [
    {
      parts: [
        {
          text: "These ",
        },
        {
          text: "API Terms of Use (“API Terms”)",
          bold: true,
          highlight: true,
        },
        {
          text: " govern your access to and use of APIs, webhooks, SDKs, developer tools, documentation and related technical services provided by ",
        },
        {
          text: "Nexgo",
          bold: true,
        },
        {
          text: " (“Nexgo”, “we”, “us”, “our”).",
        },
      ],
    },
    {
      parts: [
        {
          text: "These API Terms form part of the ",
        },
        {
          text: "Nexgo Terms of Service",
          bold: true,
        },
        {
          text: ". By requesting API access, generating API credentials, integrating with Nexgo APIs, or making API requests, you agree to these API Terms.",
        },
      ],
    },
  ],

  sections: [
    {
      id: "what-nexgo-api-provides",
      number: "1",
      title: "What Nexgo API Provides",
      paragraphs: [
        "Nexgo APIs may allow approved merchants and technology partners to programmatically access logistics functionality, including:",
      ],
      bullets: [
        "Create shipments",
        "Cancel shipments",
        "Generate AWBs",
        "Generate shipping labels",
        "Generate manifests",
        "Check shipment status",
        "Track shipments",
        "Fetch courier information",
        "Check pincode serviceability",
        "Calculate shipping rates",
        "Manage NDR",
        "Manage RTO",
        "Create reverse shipments",
        "Access COD information",
        "Retrieve invoices",
        "Access reports",
        "Receive shipment updates through webhooks",
        "Other logistics functionality made available by Nexgo",
      ],
      after: [
        "The specific API features available to you depend on your account, subscription, integration and applicable Nexgo documentation.",
      ],
    },

    {
      id: "api-access",
      number: "2",
      title: "API Access",
      paragraphs: [
        "API access may be provided only after Nexgo approves your account or integration.",
      ],
      introList: "Nexgo may provide:",
      bullets: [
        "API keys",
        "Client IDs",
        "Client secrets",
        "Access tokens",
        "Webhook credentials",
        "Sandbox credentials",
        "Production credentials",
      ],
      after: [
        "You must use API credentials only for the account and purpose for which they were issued.",
        "Nexgo may refuse, suspend or revoke API access where necessary for security, compliance, operational or commercial reasons.",
      ],
    },

    {
      id: "developer-account",
      number: "3",
      title: "Developer Account",
      paragraphs: [
        "You are responsible for maintaining accurate information associated with your developer or merchant account.",
      ],
      introList: "You must promptly update:",
      bullets: [
        "Business information",
        "Contact information",
        "Technical contact",
        "Authorized users",
        "Integration information",
        "Other relevant account details",
      ],
      after: [
        "You must ensure that only authorized personnel have access to your Nexgo API credentials.",
      ],
    },

    {
      id: "api-credentials",
      number: "4",
      title: "API Credentials",
      paragraphs: ["API credentials are confidential."],
      introList: "You must:",
      bullets: [
        "Store credentials securely",
        "Restrict access to authorized personnel",
        "Use appropriate encryption and security controls",
        "Rotate credentials where necessary",
        "Immediately report compromised credentials",
      ],
      secondIntroList: "You must not:",
      secondBullets: [
        "Publish API keys publicly",
        "Upload credentials to public GitHub repositories",
        "Include secrets in client-side applications where avoidable",
        "Share credentials with unauthorized third parties",
        "Sell or transfer API credentials",
      ],
      after: [
        "If you believe your credentials have been compromised, notify Nexgo immediately.",
        "Nexgo may deactivate compromised credentials and issue replacement credentials.",
      ],
    },

    {
      id: "sandbox-and-production",
      number: "5",
      title: "Sandbox and Production",
      paragraphs: [
        "Where provided, Nexgo may offer separate:",
      ],
      subsections: [
        {
          title: "Sandbox Environment",
          intro: "Used for:",
          bullets: [
            "Development",
            "Testing",
            "Integration",
            "Debugging",
          ],
          after: [
            "Sandbox data may not represent actual production performance or availability.",
          ],
        },
        {
          title: "Production Environment",
          paragraphs: [
            "Used for live shipments and real customer transactions.",
          ],
          after: [
            "You are responsible for testing your integration before sending production requests.",
          ],
        },
      ],
    },

    {
      id: "api-documentation",
      number: "6",
      title: "API Documentation",
      paragraphs: [
        "Nexgo may provide technical documentation describing:",
      ],
      bullets: [
        "Endpoints",
        "Request methods",
        "Parameters",
        "Authentication",
        "Response formats",
        "Error codes",
        "Webhooks",
        "Rate limits",
        "Integration requirements",
      ],
      after: [
        "Nexgo may update its documentation from time to time.",
        "You are responsible for using the latest version of the documentation.",
      ],
      special: [
        {
          label: "Developer Documentation:",
          value: "[NEXGO API DOCUMENTATION URL]",
        },
      ],
    },

    {
      id: "permitted-api-usage",
      number: "7",
      title: "Permitted API Usage",
      paragraphs: ["You may use Nexgo APIs only to:"],
      bullets: [
        "Integrate your business systems with Nexgo",
        "Automate legitimate shipping operations",
        "Manage your own shipments",
        "Manage shipments for customers you are authorized to represent",
        "Access information available to your account",
        "Perform other activities expressly authorized by Nexgo",
      ],
      after: [
        "Your API usage must comply with all applicable laws and the Nexgo Terms of Service.",
      ],
    },

    {
      id: "prohibited-api-activities",
      number: "8",
      title: "Prohibited API Activities",
      paragraphs: ["You must not use Nexgo APIs to:"],
      bullets: [
        "Gain unauthorized access",
        "Access another user's data",
        "Circumvent security controls",
        "Probe or scan Nexgo systems",
        "Reverse engineer Nexgo APIs",
        "Extract data beyond your authorization",
        "Scrape Nexgo services",
        "Create fake shipments",
        "Manipulate tracking information",
        "Abuse COD services",
        "Circumvent billing",
        "Circumvent rate limits",
        "Perform denial-of-service attacks",
        "Introduce malware",
        "Upload malicious code",
        "Conduct fraudulent activity",
        "Resell API access without authorization",
        "Use the API for unlawful activities",
      ],
    },

    {
      id: "rate-limits",
      number: "9",
      title: "Rate Limits",
      paragraphs: [
        "Nexgo may impose API rate limits to maintain platform stability and security.",
      ],
      introList: "Rate limits may apply to:",
      bullets: [
        "Requests per second",
        "Requests per minute",
        "Requests per hour",
        "Daily requests",
        "Specific API endpoints",
        "Account-level usage",
      ],
      after: [
        "Your application must handle rate-limit responses appropriately.",
        "Nexgo may temporarily restrict or suspend API access where excessive traffic threatens platform performance.",
      ],
    },

    {
      id: "fair-usage",
      number: "10",
      title: "Fair Usage",
      paragraphs: [
        "API access must be used responsibly.",
        "You must not generate unnecessary requests, including repeated requests that could reasonably be avoided through:",
      ],
      bullets: [
        "Caching",
        "Webhooks",
        "Pagination",
        "Incremental synchronization",
        "Appropriate retry logic",
      ],
      after: [
        "Where Nexgo provides webhooks for shipment updates, you should use webhooks instead of repeatedly polling APIs where reasonably possible.",
      ],
    },

    {
      id: "retry-policy",
      number: "11",
      title: "Retry Policy",
      paragraphs: [
        "Your application should use reasonable retry mechanisms.",
        "You should avoid repeatedly retrying failed requests without appropriate delays.",
        "For temporary failures, you should use an appropriate exponential backoff strategy.",
        "You should not repeatedly retry requests that have received a permanent error response.",
      ],
    },

    {
      id: "idempotency",
      number: "12",
      title: "Idempotency",
      paragraphs: [
        "Where Nexgo provides idempotency functionality, you should use idempotency keys for operations where duplicate requests could result in duplicate transactions or shipments.",
      ],
      introList: "For example:",
      bullets: [
        "Shipment creation",
        "Pickup requests",
        "Reverse shipment creation",
        "Other transaction-based operations",
      ],
      after: [
        "You are responsible for designing your integration to minimize accidental duplicate operations.",
      ],
    },

    {
      id: "shipment-creation",
      number: "13",
      title: "Shipment Creation",
      paragraphs: [
        "When creating a Shipment through the API, you must provide accurate information.",
      ],
      introList: "This may include:",
      bullets: [
        "Sender information",
        "Receiver information",
        "Address",
        "Pincode",
        "Product details",
        "Product value",
        "Weight",
        "Dimensions",
        "Payment mode",
        "COD amount",
        "Invoice information",
        "Other required fields",
      ],
      after: [
        "You must not submit false, misleading or fraudulent information.",
      ],
    },

    {
      id: "customer-data",
      number: "14",
      title: "Customer Data",
      paragraphs: [
        "Your API integration may process personal information belonging to your customers.",
      ],
      introList: "This may include:",
      bullets: [
        "Customer name",
        "Phone number",
        "Email address",
        "Delivery address",
        "Order information",
        "Shipment information",
      ],
      after: [
        "You must have the appropriate legal authority to provide such information to Nexgo.",
        "You must process customer information in accordance with applicable privacy and data-protection laws.",
      ],
    },

    {
      id: "data-security",
      number: "15",
      title: "Data Security",
      paragraphs: [
        "You are responsible for maintaining appropriate security measures for information received through Nexgo APIs.",
      ],
      introList: "You should:",
      bullets: [
        "Encrypt sensitive information where appropriate",
        "Secure API credentials",
        "Restrict employee access",
        "Maintain access logs",
        "Monitor suspicious activity",
        "Use secure HTTPS connections",
        "Remove unnecessary stored data",
        "Protect webhook endpoints",
      ],
      after: [
        "You must notify Nexgo promptly if you discover a security incident involving Nexgo data or credentials.",
      ],
    },

    {
      id: "webhooks",
      number: "16",
      title: "Webhooks",
      paragraphs: [
        "Nexgo may provide webhook notifications for events such as:",
      ],
      bullets: [
        "Shipment created",
        "Pickup scheduled",
        "Pickup completed",
        "In transit",
        "Out for delivery",
        "Delivered",
        "NDR",
        "RTO",
        "RTO delivered",
        "Shipment cancelled",
        "COD updates",
        "Other shipment events",
      ],
      after: [
        "Webhook events may be delivered more than once.",
        "Your system should therefore be designed to safely handle duplicate events.",
      ],
    },

    {
      id: "webhook-security",
      number: "17",
      title: "Webhook Security",
      paragraphs: [
        "You are responsible for securing your webhook endpoints.",
        "Where Nexgo provides webhook signatures or authentication mechanisms, you should verify them before processing webhook requests.",
        "You should not expose webhook endpoints unnecessarily.",
        "You should also protect your system against:",
      ],
      bullets: [
        "Replay attacks",
        "Duplicate events",
        "Unauthorized requests",
        "Malformed payloads",
        "Excessive requests",
      ],
    },

    {
      id: "api-response-data",
      number: "18",
      title: "API Response Data",
      paragraphs: [
        "Information returned through the Nexgo API may be confidential or subject to restrictions.",
        "You may use API response data only for legitimate purposes connected with your Nexgo account and authorized integration.",
      ],
      introList: "You must not:",
      bullets: [
        "Sell Nexgo data",
        "Create unauthorized databases",
        "Publish private shipment information",
        "Share customer information without authorization",
        "Use data for unrelated purposes",
      ],
    },

    {
      id: "data-retention",
      number: "19",
      title: "Data Retention",
      paragraphs: [
        "You should retain API data only for as long as reasonably necessary for your legitimate business purpose or as required by applicable law.",
        "Where customer or personal information is no longer required, you should securely delete or anonymize it where appropriate.",
        "Nexgo may maintain API logs and records for security, operational, accounting, legal and compliance purposes.",
      ],
    },

    {
      id: "third-party-integrations",
      number: "20",
      title: "Third-Party Integrations",
      paragraphs: [
        "You may integrate Nexgo with third-party systems such as:",
      ],
      bullets: [
        "Ecommerce platforms",
        "Marketplaces",
        "ERP systems",
        "OMS systems",
        "WMS systems",
        "CRM systems",
        "Payment systems",
        "Other software",
      ],
      after: [
        "You are responsible for ensuring that your third-party integrations comply with applicable terms and privacy requirements.",
        "Nexgo is not responsible for failures caused solely by third-party systems.",
      ],
    },

    {
      id: "api-changes",
      number: "21",
      title: "API Changes",
      paragraphs: [
        "Nexgo may modify APIs from time to time.",
      ],
      introList: "Changes may include:",
      bullets: [
        "New endpoints",
        "New fields",
        "New features",
        "Bug fixes",
        "Security improvements",
        "Performance improvements",
        "Deprecated endpoints",
      ],
      after: [
        "Nexgo may provide notice for material breaking changes where reasonably practicable.",
        "You are responsible for maintaining your integration.",
      ],
    },

    {
      id: "api-versioning",
      number: "22",
      title: "API Versioning",
      paragraphs: [
        "Nexgo may provide versioned APIs.",
      ],
      versions: ["v1", "v2", "v3"],
      after: [
        "You should use the version specified in Nexgo's current API documentation.",
        "Nexgo may eventually deprecate older API versions.",
        "Where applicable, Nexgo may provide a migration period before discontinuing an older version.",
      ],
    },

    {
      id: "api-availability",
      number: "23",
      title: "API Availability",
      paragraphs: [
        "Nexgo aims to maintain reliable API availability but does not guarantee that APIs will always be:",
      ],
      bullets: [
        "Available",
        "Uninterrupted",
        "Error-free",
        "Free from latency",
        "Free from maintenance periods",
      ],
      after: [
        "Nexgo may temporarily restrict API availability for:",
      ],
      secondBullets: [
        "Maintenance",
        "Security",
        "Upgrades",
        "Emergency situations",
        "Infrastructure changes",
        "Regulatory requirements",
      ],
    },

    {
      id: "api-errors",
      number: "24",
      title: "API Errors",
      paragraphs: [
        "API responses may include errors caused by:",
      ],
      bullets: [
        "Invalid authentication",
        "Invalid parameters",
        "Missing information",
        "Unauthorized access",
        "Rate limits",
        "Service unavailability",
        "Shipment status restrictions",
        "Courier Partner errors",
        "Other technical or operational conditions",
      ],
      after: [
        "Your application must handle API errors appropriately.",
      ],
    },

    {
      id: "courier-partner-data",
      number: "25",
      title: "Courier Partner Data",
      paragraphs: [
        "Some API responses may contain information received from third-party Courier Partners.",
      ],
      introList: "Such information may:",
      bullets: [
        "Change over time",
        "Be delayed",
        "Be incomplete",
        "Be subject to Courier Partner systems",
        "Be unavailable temporarily",
      ],
      after: [
        "Nexgo does not guarantee that all third-party information will always be accurate or available in real time.",
      ],
    },

    {
      id: "api-charges",
      number: "26",
      title: "API Charges",
      paragraphs: [
        "Nexgo may charge fees for certain API usage or services.",
      ],
      introList: "Applicable charges may include:",
      bullets: [
        "API subscription fees",
        "Transaction fees",
        "Shipment charges",
        "Premium API charges",
        "Excess usage charges",
        "Other applicable fees",
      ],
      after: [
        "Any applicable pricing will be communicated through the relevant commercial plan, rate card or agreement.",
      ],
    },

    {
      id: "no-circumvention",
      number: "27",
      title: "No Circumvention",
      paragraphs: [
        "You must not use APIs or technical methods to circumvent:",
      ],
      bullets: [
        "Shipping charges",
        "Account restrictions",
        "Rate limits",
        "Courier restrictions",
        "Subscription limits",
        "Security controls",
        "Usage limits",
        "Other Nexgo controls",
      ],
      after: [
        "Attempts to circumvent such controls may result in immediate suspension.",
      ],
    },

    {
      id: "security-testing",
      number: "28",
      title: "Security Testing",
      paragraphs: [
        "You must not conduct penetration testing, vulnerability scanning, load testing or other security testing against Nexgo APIs without prior written authorization.",
        "If you identify a security vulnerability, report it to:",
      ],
      special: [
        {
          label: "Security Email:",
          value: "[SECURITY@NEXGO DOMAIN]",
        },
      ],
      after: [
        "Please do not publicly disclose the vulnerability before Nexgo has had a reasonable opportunity to investigate and address it.",
      ],
    },

    {
      id: "intellectual-property",
      number: "29",
      title: "Intellectual Property",
      paragraphs: [
        "Nexgo retains all rights in:",
      ],
      bullets: [
        "APIs",
        "API architecture",
        "Documentation",
        "SDKs",
        "Software",
        "Endpoints",
        "Data structures",
        "Nexgo trademarks",
        "Nexgo branding",
      ],
      after: [
        "Your use of the API does not transfer ownership of Nexgo intellectual property to you.",
      ],
    },

    {
      id: "sdks-and-developer-tools",
      number: "30",
      title: "SDKs and Developer Tools",
      paragraphs: [
        "Where Nexgo provides SDKs, libraries or developer tools, they are provided for authorized integration purposes.",
      ],
      introList: "You must not:",
      bullets: [
        "Modify them to bypass security",
        "Remove license notices",
        "Redistribute proprietary components without permission",
        "Use them for unlawful purposes",
      ],
    },

    {
      id: "branding",
      number: "31",
      title: "Branding",
      paragraphs: [
        "You may not represent your application or service as being owned, operated or officially endorsed by Nexgo unless Nexgo has provided written authorization.",
        "Use of the Nexgo name, logo or trademarks must comply with Nexgo's brand guidelines.",
      ],
    },

    {
      id: "api-suspension",
      number: "32",
      title: "API Suspension",
      paragraphs: [
        "Nexgo may suspend API access if:",
      ],
      bullets: [
        "Credentials are compromised",
        "Unusual traffic is detected",
        "Rate limits are repeatedly violated",
        "Security risks are identified",
        "Fraud is suspected",
        "The account violates these Terms",
        "Payments remain overdue",
        "Required KYC is incomplete",
        "The API is used unlawfully",
        "Suspension is required for security or compliance",
      ],
      after: [
        "Nexgo may restore access after the relevant issue has been resolved.",
      ],
    },

    {
      id: "api-termination",
      number: "33",
      title: "API Termination",
      paragraphs: [
        "Nexgo may terminate API access or discontinue an API where reasonably necessary.",
      ],
      introList: "Upon termination, you must:",
      bullets: [
        "Stop making API requests",
        "Stop using Nexgo credentials",
        "Remove credentials from your systems",
        "Stop representing the integration as active",
        "Handle stored data according to applicable requirements",
      ],
      after: [
        "Termination does not remove outstanding financial or legal obligations.",
      ],
    },

    {
      id: "indemnification",
      number: "34",
      title: "Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless Nexgo, its affiliates, officers, employees, agents and service providers against claims, losses, damages, liabilities and expenses arising from:",
      ],
      bullets: [
        "Your API usage",
        "Your violation of these API Terms",
        "Unauthorized access caused by your security failure",
        "Misuse of customer information",
        "Fraudulent API activity",
        "Violation of applicable law",
        "Your application or integration",
        "Intellectual property infringement",
        "Unauthorized use of Nexgo data",
      ],
    },

    {
      id: "limitation-of-liability",
      number: "35",
      title: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Nexgo shall not be liable for indirect, incidental, special, consequential or punitive damages arising from API use.",
        "Nexgo shall not be responsible for losses caused solely by:",
      ],
      bullets: [
        "Your application",
        "Your infrastructure",
        "Third-party integrations",
        "Internet connectivity",
        "Courier Partner systems",
        "Incorrect API implementation",
        "Failure to securely store credentials",
      ],
      after: [
        "Nothing in these API Terms excludes liability that cannot legally be excluded.",
      ],
    },

    {
      id: "confidentiality",
      number: "36",
      title: "Confidentiality",
      paragraphs: [
        "Information exchanged through the Nexgo API that is confidential or reasonably understood to be confidential must be protected from unauthorized disclosure.",
        "You must not disclose confidential Nexgo technical information except to authorized personnel who need it for the integration.",
      ],
    },

    {
      id: "compliance-with-laws",
      number: "37",
      title: "Compliance With Laws",
      paragraphs: [
        "You must use Nexgo APIs in compliance with all applicable laws and regulations, including those relating to:",
      ],
      bullets: [
        "Data protection",
        "Privacy",
        "Cybersecurity",
        "Consumer protection",
        "Taxation",
        "Logistics",
        "E-commerce",
        "Telecommunications",
        "Fraud prevention",
      ],
      after: [
        "You are responsible for determining which laws apply to your business.",
      ],
    },

    {
      id: "changes-to-api-terms",
      number: "38",
      title: "Changes to API Terms",
      paragraphs: [
        "Nexgo may update these API Terms from time to time.",
        "The latest version will be published on the Nexgo website or developer portal.",
        "Where required, Nexgo may provide notice of material changes.",
        "Continued API usage after the effective date of updated Terms constitutes acceptance of the revised Terms, to the extent permitted by law.",
      ],
    },

    {
      id: "governing-law",
      number: "39",
      title: "Governing Law",
      paragraphs: [
        "These API Terms shall be governed by the laws of India.",
        "Subject to applicable law, courts located in:",
      ],
      highlightedBlock: "[CITY, STATE, INDIA]",
      after: [
        "shall have jurisdiction.",
      ],
    },

    {
      id: "dispute-resolution",
      number: "40",
      title: "Dispute Resolution",
      paragraphs: [
        "The parties will first attempt to resolve disputes through good-faith discussions.",
        "If the dispute cannot be resolved amicably, it may be referred to arbitration in accordance with applicable Indian law.",
      ],
      details: [
        ["Seat of Arbitration:", "[CITY, INDIA]"],
        ["Language:", "English"],
        ["Number of Arbitrators:", "One"],
      ],
    },

    {
      id: "relationship-with-other-nexgo-policies",
      number: "41",
      title: "Relationship With Other Nexgo Policies",
      paragraphs: [
        "These API Terms should be read together with:",
      ],
      bullets: [
        "Nexgo Terms of Service",
        "Nexgo Privacy Policy",
        "Nexgo Cookie Policy",
        "Nexgo Merchant Agreement",
        "Nexgo Prohibited Items Policy",
        "Nexgo Claims Policy",
        "Nexgo Shipping & Packaging SOP",
        "Nexgo API Documentation",
        "Applicable pricing/rate card",
      ],
      after: [
        "If there is a conflict, the specific agreement or API documentation applicable to the relevant service may prevail to the extent stated therein.",
      ],
    },

    {
      id: "acceptance",
      number: "42",
      title: "Acceptance",
      paragraphs: [
        "By requesting API access, generating API credentials, connecting your application to Nexgo, or making API requests, you acknowledge that you have read, understood and accepted these API Terms of Use.",
      ],
      brand: "NEXGO",
      tagline: "Ship Smart. Deliver Better.",
    },
  ],

  developerPortal: {
    eyebrow: "Recommended Nexgo Developer Portal",
    title: "NEXGO DEVELOPER PORTAL",

    heading: "Build with Nexgo",

    description:
      "Connect your store, ERP or application\nto India's logistics network.",

    actions: ["Get API Key", "View Documentation"],

    api: [
      "Getting Started",
      "Authentication",
      "Create Shipment",
      "Cancel Shipment",
      "Track Shipment",
      "Rate Calculator",
      "Pincode Serviceability",
      "AWB & Labels",
      "NDR",
      "RTO",
      "COD",
      "Reverse Pickup",
      "Webhooks",
      "Error Codes",
      "API Changelog",
    ],

    developers: [
      "API Terms of Use",
      "Security",
      "SDKs",
      "Support",
    ],
  },
};
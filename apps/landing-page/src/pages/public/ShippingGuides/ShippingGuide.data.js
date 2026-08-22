// src/data/shippingGuide/shippingGuideData.js

export const shippingGuideData = {
  hero: {
    breadcrumb: ["Home", "Shipping Guide"],

    title: "Shipping Guide",

    description:
      "Everything you need to know about our policies, shipping rules and important guidelines to ensure smooth and secure deliveries.",

    primaryButton: {
      label: "View All Policies",
      target: "policies",
    },

    downloadButton: {
      label: "Download Guide",
    },

    trustItems: [
      {
        title: "Secure Shipping",
        subtitle: "100% Protected",
        icon: "shield",
      },
      {
        title: "Reliable Delivery",
        subtitle: "On-time. Every time",
        icon: "truck",
      },
      {
        title: "Customer First",
        subtitle: "Support that cares",
        icon: "headset",
      },
    ],
  },

  navigation: [
    {
      label: "All Policies",
      icon: "file",
      target: "policies",
    },
    {
      label: "NDR & RTO",
      icon: "rotate",
      slug: "ndr-rto",
    },
    {
      label: "Weight Dispute",
      icon: "scale",
      slug: "weight-dispute",
    },
    {
      label: "COD & Remittance",
      icon: "rupee",
      slug: "cod-remittance",
    },
    {
      label: "Claims & Insurance",
      icon: "shield",
      slug: "claims-insurance",
    },
    {
      label: "Prohibited Items",
      icon: "ban",
      slug: "prohibited-items",
    },
  ],

  section: {
   
    title: "NEXGO Shipping Policies",
    description:
      "Explore our key policies and guidelines to ship with confidence.",
  },

  policies: [
    {
      slug: "prohibited-items",
      title: "Prohibited & Restricted Items Policy",
      description:
        "Know what items are not allowed or restricted for shipping through Nexgo to ensure legal and safe deliveries.",
      icon: "list",
      color: "blue",
    },

    {
      slug: "claims-insurance",
      title: "Claims & Insurance Policy",
      description:
        "Understand our claims process, coverage details and how we ensure protection for your valuable shipments.",
      icon: "shield",
      color: "green",
    },

    {
      slug: "cod-remittance",
      title: "COD & Remittance Policy",
      description:
        "Learn about Cash on Delivery, collection process, deductions and remittance cycles.",
      icon: "rupee",
      color: "orange",
    },

    {
      slug: "weight-dispute",
      title: "Weight Dispute Policy",
      description:
        "Find out how weight is calculated, how disputes are handled and best practices to avoid extra charges.",
      icon: "scale",
      color: "purple",
    },

    {
      slug: "ndr-rto",
      title: "NDR & RTO Policy",
      description:
        "Understand Non-Delivery Reports (NDR), Return to Origin (RTO) and how to manage them effectively.",
      icon: "rotate",
      color: "cyan",
    },

    {
      slug: "shipping-packaging",
      title: "Shipping & Packaging Best Practices",
      description:
        "Essential packaging and shipping tips to ensure safe delivery and avoid damages.",
      icon: "book",
      color: "yellow",
    },
  ],

  cta: {
    eyebrow: "SHIP SAFE, SHIP SMART",

    title: "Your Trust, Our Responsibility",

    description:
      "Nexgo is committed to safe and transparent shipping for every business.",

    items: [
      {
        title: "Secure & Compliant",
        description: "Follow all regulations",
        icon: "shield",
      },
      {
        title: "Transparent Policies",
        description: "Clear rules, no hidden terms",
        icon: "sparkles",
      },
      {
        title: "Fast Resolution",
        description: "Quick support & claims",
        icon: "clock",
      },
      {
        title: "Business Focused",
        description: "Solutions that scale",
        icon: "target",
      },
    ],
  },
};

// src/data/shippingGuide/ndrRtoPolicy.js

export const ndrRtoPolicy = {
  slug: "ndr-rto",

  title: "NDR & RTO Policy",

  description:
    "Learn how Non-Delivery Reports (NDR) and Return to Origin (RTO) are handled on Nexgo platform.",

  effectiveDate: "15 August 2026",
  lastUpdated: "15 August 2026",

  sections: [
    {
      id: "what-is-ndr",
      number: "01",
      heading: "What is NDR?",

      paragraphs: [
        `NDR (Non-Delivery Report) is generated when a Courier Partner attempts to deliver a shipment but is unable to complete the delivery due to reasons like customer unavailability, wrong address, refusal, COD issues and more.`,
      ],

      points: [
        "Customer unavailable",
        "Customer does not answer the phone",
        "Incorrect or incomplete address",
        "Customer refuses delivery",
        "Customer requests delivery at a later date",
        "Operational or service-related issues",
      ],
    },

    {
      id: "what-is-rto",
      number: "02",
      heading: "What is RTO?",

      paragraphs: [
        `RTO (Return to Origin) occurs when a shipment cannot be successfully delivered after the applicable delivery and NDR resolution attempts and is returned to the seller's pickup location.`,
      ],

      points: [
        "Customer refusal",
        "Incorrect address",
        "Customer unavailable",
        "Repeated unsuccessful delivery attempts",
        "Customer not responding to NDR communication",
        "Other delivery failure reasons",
      ],
    },

    {
      id: "ndr-management",
      number: "03",
      heading: "NDR Management by Nexgo",

      paragraphs: [
        "Nexgo follows a structured NDR management process to improve delivery success.",
      ],

      points: [
        "Attempt customer communication",
        "Record the customer's response",
        "Request address or contact corrections",
        "Schedule another delivery attempt where applicable",
        "Update the shipment status",
        "Initiate RTO when delivery cannot be completed",
      ],
    },

    {
      id: "ndr-reasons",
      number: "04",
      heading: "NDR Reasons",

      paragraphs: [
        "NDR reasons may include:",
      ],

      points: [
        "Customer unavailable",
        "Customer refused",
        "Customer requested reschedule",
        "Incorrect address",
        "Incomplete address",
        "Customer phone number unreachable",
        "Customer phone switched off",
        "Customer did not respond",
        "Delivery location inaccessible",
        "Operational constraints",
      ],
    },

    {
      id: "customer-contact",
      number: "05",
      heading: "Customer Contact",

      paragraphs: [
        "Nexgo or the assigned Courier Partner may attempt to contact the customer using the contact information supplied by the seller.",
      ],

      points: [
        "Correct customer name",
        "Valid mobile number",
        "Complete delivery address",
        "Correct pincode",
        "Useful landmark where applicable",
      ],
    },

    {
      id: "ndr-reattempt",
      number: "06",
      heading: "NDR Reattempt",

      paragraphs: [
        "Where operationally possible, Nexgo may arrange another delivery attempt after an NDR.",
        "The number and timing of reattempts may vary depending on the applicable operational circumstances.",
      ],
    },

    {
      id: "address-correction",
      number: "07",
      heading: "Address & Phone Correction",

      paragraphs: [
        "If an NDR is generated because of an incorrect or incomplete address, the seller may provide corrected information.",
        "Address correction is subject to Courier Partner rules and serviceability.",
        "A correction does not guarantee successful delivery.",
      ],
    },

    {
      id: "multiple-attempts",
      number: "08",
      heading: "Multiple Delivery Attempts",

      paragraphs: [
        "The Courier Partner may make multiple delivery attempts according to its operational guidelines.",
        "The number of attempts is not guaranteed and may differ by location, Courier Partner and shipment.",
      ],
    },

    {
      id: "ndr-to-rto",
      number: "09",
      heading: "When NDR Becomes RTO",

      paragraphs: [
        "An NDR may become RTO when delivery cannot be completed within the applicable delivery and resolution process.",
      ],

      points: [
        "Delivery attempts are exhausted",
        "The customer refuses delivery",
        "The customer cannot be contacted",
        "Required corrections are not received",
        "Delivery is otherwise not possible",
      ],
    },

    {
      id: "rto-charges",
      number: "10",
      heading: "RTO Charges & Delivery",

      paragraphs: [
        "Applicable RTO charges may be levied according to the seller's plan, Courier Partner, shipment type and applicable commercial terms.",
        "Once RTO is initiated, the shipment enters the applicable return logistics process.",
        "The return timeline may vary by location and Courier Partner.",
      ],
    },

    {
      id: "merchant-responsibilities",
      number: "11",
      heading: "Merchant & Customer Responsibilities",

      paragraphs: [
        "The seller is responsible for providing accurate customer and shipment information.",
        "Customers are expected to remain available during the delivery period, provide accurate information, respond to delivery communication and accept the shipment when delivered.",
      ],

      points: [
        "Accurate customer information",
        "Complete delivery address",
        "Valid phone number",
        "Prompt NDR response",
        "Cooperation during delivery",
      ],
    },

    {
      id: "ndr-communication",
      number: "12",
      heading: "NDR Communication",

      paragraphs: [
        "Nexgo may use available communication channels to facilitate customer contact.",
      ],

      points: [
        "Phone",
        "SMS",
        "Notifications",
        "Other supported communication channels",
      ],
    },

    {
      id: "ndr-resolution",
      number: "13",
      heading: "NDR Resolution",

      paragraphs: [
        "A successful NDR resolution generally requires a clear customer response and a deliverable shipment address.",
      ],
    },

    {
      id: "seller-action",
      number: "14",
      heading: "Seller Action After NDR",

      paragraphs: [
        "Sellers should review NDR shipments promptly and provide required instructions or corrections.",
      ],
    },

    {
      id: "rto-processing",
      number: "15",
      heading: "RTO Processing",

      paragraphs: [
        "Once RTO is initiated, the shipment enters the applicable return logistics process.",
        "The return timeline may vary by location and Courier Partner.",
      ],
    },

    {
      id: "returned-shipment",
      number: "16",
      heading: "Returned Shipment Inspection",

      paragraphs: [
        "The seller should inspect returned shipments after receiving them and report any discrepancy according to the applicable claims process.",
      ],
    },

    {
      id: "rto-condition",
      number: "17",
      heading: "RTO Shipment Condition",

      paragraphs: [
        "Nexgo and its Courier Partners take reasonable operational measures to handle shipments during transit. However, shipment condition may be affected by handling and transportation circumstances.",
      ],
    },

    {
      id: "rto-claims",
      number: "18",
      heading: "RTO and Claims",

      paragraphs: [
        "If a shipment is received in damaged or otherwise discrepant condition, the seller should follow the applicable Claims & Insurance Policy.",
      ],
    },

    {
      id: "incorrect-contact",
      number: "19",
      heading: "Incorrect Contact Information",

      paragraphs: [
        "Nexgo is not responsible for delivery failures caused by inaccurate customer contact information supplied by the seller.",
      ],
    },

    {
      id: "serviceability",
      number: "20",
      heading: "Serviceability",

      paragraphs: [
        "Delivery and RTO operations remain subject to Courier Partner serviceability.",
      ],
    },

    {
      id: "force-majeure",
      number: "21",
      heading: "Force Majeure",

      paragraphs: [
        "Delivery timelines may be affected by events outside reasonable operational control, including natural disasters, strikes, government restrictions and other force majeure events.",
      ],
    },

    {
      id: "policy-changes",
      number: "22",
      heading: "Policy Changes",

      paragraphs: [
        "Nexgo may modify this NDR & RTO Policy from time to time.",
      ],

      points: [
        "Courier Partner policy changes",
        "New services",
        "Operational changes",
        "Technology changes",
        "Legal requirements",
        "Commercial changes",
      ],
    },
  ],
};

// src/data/shippingGuide/weightDisputePolicy.js

export const weightDisputePolicy = {
  slug: "weight-dispute",

  title: "Weight Dispute Policy",

  description:
    "Learn how shipment weight, dimensions and additional weight charges are handled by Nexgo.",

  effectiveDate: "15 August 2026",
  lastUpdated: "15 August 2026",

  sections: [
    {
      id: "what-is-weight-dispute",
      number: "01",
      heading: "What Is a Weight Dispute?",

      paragraphs: [
        "A Weight Dispute occurs when the weight or dimensions recorded by a Courier Partner differ from the weight or dimensions declared by the merchant while creating a shipment.",
        "For example:",
      ],

      highlights: [
        "Merchant declared: 1.00 kg",
        "Courier measured: 1.80 kg",
      ],

      paragraphsAfter: [
        "The Courier Partner may therefore apply an additional weight charge.",
        "If the merchant believes the measured weight or dimensions are incorrect, the merchant may raise a Weight Dispute through Nexgo.",
      ],
    },

    {
      id: "types",
      number: "02",
      heading: "Types of Weight Disputes",

      paragraphs: [
        "Weight disputes may relate to:",
      ],

      points: [
        "Dead Weight — The actual physical weight of the shipment.",
        "Volumetric Weight — Weight calculated using shipment dimensions.",
        "Chargeable Weight — The weight used by the Courier Partner for billing purposes.",
        "Dimensional Dispute — A disagreement regarding Length, Breadth/Width or Height.",
        "Weight Slab Dispute — A disagreement regarding the applicable billing slab.",
        "Additional Weight Charges — Charges applied because the Courier Partner reports a higher chargeable weight.",
      ],
    },

    {
      id: "chargeable-weight",
      number: "03",
      heading: "Chargeable Weight",

      paragraphs: [
        "The chargeable weight may be determined using the applicable Courier Partner's rules.",
        "Generally, the chargeable weight may be based on the higher of Actual Dead Weight or Volumetric Weight depending on the service and Courier Partner.",
        "The applicable calculation method may vary by Courier Partner, service type and destination.",
      ],
    },

    {
      id: "volumetric-weight",
      number: "04",
      heading: "Volumetric Weight",

      paragraphs: [
        "Volumetric weight may be calculated using the dimensions of the shipment.",
      ],

      highlights: [
        "Volumetric Weight = Length × Breadth × Height ÷ Volumetric Divisor",
      ],

      points: [
        "Length = 40 cm",
        "Breadth = 30 cm",
        "Height = 20 cm",
        "Divisor = 5000",
      ],

      paragraphsAfter: [
        "40 × 30 × 20 ÷ 5000 = 4.8 kg",
        "The applicable Courier Partner rules determine whether 4.8 kg or the actual dead weight is used as the chargeable weight.",
      ],
    },

    {
      id: "why-discrepancies",
      number: "05",
      heading: "Why Weight Discrepancies Occur",

      paragraphs: [
        "Weight discrepancies may occur because:",
      ],

      points: [
        "Merchant entered incorrect weight",
        "Merchant entered incorrect dimensions",
        "Packaging was changed",
        "Additional packaging was added",
        "Courier scale measured a different weight",
        "Dimensions were measured differently",
        "Weight was rounded according to Courier Partner rules",
        "Shipment was re-packed",
        "Multiple packages were consolidated",
        "Courier Partner applied volumetric weight",
        "Data was incorrectly transmitted through an integration",
      ],
    },

    {
      id: "packaging",
      number: "06",
      heading: "Packaging Must Be Included",

      paragraphs: [
        "The declared weight should normally include the complete shipment package.",
        "This may include:",
      ],

      points: [
        "Product",
        "Outer box",
        "Polybag",
        "Bubble wrap",
        "Tape",
        "Protective material",
        "Inserts",
        "Other packaging materials",
      ],

      paragraphsAfter: [
        "For volumetric calculations, the dimensions of the final packed package should be used.",
      ],
    },

    {
      id: "raise-dispute",
      number: "07",
      heading: "How to Raise a Weight Dispute",

      paragraphs: [
        "Merchants can raise a Weight Dispute through the Nexgo Dashboard.",
      ],

      highlights: [
        "Nexgo Dashboard → Shipments → Select Shipment → Billing → Weight Dispute",
      ],

      paragraphsAfter: [
        "The merchant should provide the requested supporting evidence and shipment information.",
      ],
    },

    {
      id: "evidence",
      number: "08",
      heading: "Required Evidence",

      paragraphs: [
        "The seller may be required to provide supporting evidence such as:",
      ],

      points: [
        "Package photographs",
        "Measurement photographs",
        "Weight photographs",
        "Shipment labels",
        "Packaging details",
        "Other requested evidence",
      ],
    },

    {
      id: "evidence-quality",
      number: "09",
      heading: "Evidence Quality",

      paragraphs: [
        "Evidence should clearly show the shipment and the relevant measurement.",
        "Blurry, incomplete, edited or otherwise unreliable evidence may not be accepted.",
      ],
    },

    {
      id: "investigation",
      number: "10",
      heading: "Dispute Investigation",

      paragraphs: [
        "Nexgo may investigate a dispute based on the information available from the seller, Courier Partner and shipment records.",
        "The outcome may depend on the available evidence and applicable Courier Partner rules.",
      ],
    },

    {
      id: "outcome",
      number: "11",
      heading: "Dispute Outcome",

      paragraphs: [
        "After review, a dispute may be accepted, partially accepted, rejected or sent for additional verification.",
      ],
    },

    {
      id: "final-weight",
      number: "12",
      heading: "Final Chargeable Weight",

      paragraphs: [
        "The final chargeable weight may be determined after the applicable verification process.",
      ],
    },

    {
      id: "seller-cooperation",
      number: "13",
      heading: "Seller Cooperation",

      paragraphs: [
        "Sellers are expected to provide requested information promptly during the investigation.",
      ],
    },

    {
      id: "repeated-disputes",
      number: "14",
      heading: "Repeated Disputes",

      paragraphs: [
        "Repeated disputes with insufficient evidence may be reviewed for misuse or unusual patterns.",
      ],
    },

    {
      id: "policy-changes",
      number: "15",
      heading: "Policy Changes",

      paragraphs: [
        "Nexgo may update the Weight Dispute Policy from time to time.",
      ],
    },

    {
      id: "contact",
      number: "16",
      heading: "Contact Nexgo",

      paragraphs: [
        "For questions relating to weight disputes, sellers may contact Nexgo support through the available support channels.",
      ],
    },
  ],
};

// src/data/shippingGuide/codRemittancePolicy.js

export const codRemittancePolicy = {
  slug: "cod-remittance",

  title: "COD & Remittance Policy",

  description:
    "Learn about Cash on Delivery, collection process, deductions and remittance cycles.",

  effectiveDate: "15 August 2026",
  lastUpdated: "15 August 2026",

  sections: [
    {
      id: "what-is-cod",
      number: "01",
      heading: "What is COD?",

      paragraphs: [
        "Cash on Delivery (COD) is a payment method where the recipient pays the applicable order amount at the time of delivery.",
        "Depending on the shipment and Courier Partner, payment may be collected through:",
      ],

      points: [
        "Cash",
        "UPI",
        "Other supported digital payment methods",
      ],

      paragraphsAfter: [
        "The availability of a particular payment method may vary by location, Courier Partner and service.",
      ],
    },

    {
      id: "cod-through-nexgo",
      number: "02",
      heading: "COD Through Nexgo",

      paragraphs: [
        "Nexgo may facilitate COD logistics services through its Courier Partners.",
        "The general process is:",
      ],

      steps: [
        "Merchant creates COD shipment",
        "Nexgo assigns Courier Partner",
        "Courier Partner picks up shipment",
        "Courier Partner attempts delivery",
        "Customer pays COD amount",
        "Courier Partner collects payment",
        "Payment is reconciled",
        "Eligible amount is remitted to Merchant",
      ],
    },

    {
      id: "cod-amount",
      number: "03",
      heading: "COD Amount",

      paragraphs: [
        "The merchant is responsible for entering the correct COD amount while creating the shipment.",
        "The COD amount may include the amount that the merchant has instructed Nexgo/Courier Partner to collect from the customer.",
      ],

      points: [
        "Order record",
        "Invoice",
        "Customer communication",
        "Ecommerce platform",
        "Shipment information",
      ],
    },

    {
      id: "cod-charges",
      number: "04",
      heading: "COD Charges",

      paragraphs: [
        "Nexgo may charge a COD fee for COD shipments.",
        "COD charges may be calculated based on:",
      ],

      points: [
        "COD amount",
        "Courier Partner",
        "Service type",
        "Merchant plan",
        "Destination",
        "Commercial agreement",
        "Applicable rate card",
      ],
    },

    {
      id: "remittance",
      number: "05",
      heading: "COD Remittance",

      paragraphs: [
        "COD Remittance means transferring the eligible amount collected from customers to the merchant after applicable reconciliation and deductions.",
      ],

      highlights: [
        "COD Collected Amount − Applicable COD Charges − Shipping Charges − RTO/Reverse Charges − Weight Discrepancy Charges − Other Valid Deductions = Net Remittance Amount",
      ],

      paragraphsAfter: [
        "The exact calculation may vary depending on the merchant's commercial arrangement.",
      ],
    },

    {
      id: "remittance-cycle",
      number: "06",
      heading: "Remittance Cycle",

      paragraphs: [
        "Nexgo may offer different COD remittance cycles depending on the merchant plan and commercial agreement.",
      ],

      points: [
        "Daily",
        "T+1",
        "T+2",
        "T+3",
        "Weekly",
        "Other agreed cycles",
      ],

      paragraphsAfter: [
        "Where T represents the applicable settlement/collection date.",
        "The actual remittance cycle applicable to a merchant will be displayed on the Nexgo dashboard or specified in the merchant's commercial agreement.",
      ],
    },

    {
      id: "delivery-remittance",
      number: "07",
      heading: "Delivery-Based Remittance",

      paragraphs: [
        "COD remittance is generally initiated only after the shipment is successfully delivered and the COD collection is recorded.",
        "An undelivered shipment does not normally generate a COD remittance.",
      ],
    },

    {
      id: "rto-cod",
      number: "08",
      heading: "RTO and COD",

      paragraphs: [
        "If a COD shipment is not delivered and becomes RTO:",
      ],

      points: [
        "No customer COD amount may be collected.",
        "No COD remittance is generally generated for that shipment.",
        "Applicable forward/RTO charges may still apply.",
      ],
    },

    {
      id: "partial-cod",
      number: "09",
      heading: "Partial COD Collection",

      paragraphs: [
        "Where a Courier Partner reports a partial COD collection, Nexgo may reconcile the collected amount against the applicable shipment records.",
      ],
    },

    {
      id: "bank-details",
      number: "10",
      heading: "Bank Account Details",

      paragraphs: [
        "The merchant is responsible for maintaining accurate bank account information for remittance.",
        "Incorrect or incomplete bank details may delay settlement.",
      ],
    },

    {
      id: "reconciliation",
      number: "11",
      heading: "Reconciliation",

      paragraphs: [
        "Nexgo may reconcile COD collections against shipment, delivery and settlement records before remittance.",
      ],
    },

    {
      id: "settlement",
      number: "12",
      heading: "Final Settlement",

      paragraphs: [
        "A COD transaction will be considered settled when:",
      ],

      steps: [
        "Delivery is confirmed.",
        "COD collection is recorded.",
        "Courier Partner settlement is reconciled.",
        "Applicable deductions are calculated.",
        "Eligible funds are processed for remittance.",
      ],

      paragraphsAfter: [
        "A transaction marked as delivered does not necessarily mean that the amount has already been remitted.",
      ],
    },

    {
      id: "no-immediate-remittance",
      number: "13",
      heading: "No Guarantee of Immediate Remittance",

      paragraphs: [
        "COD remittance may be subject to:",
      ],

      points: [
        "Courier Partner settlement",
        "Banking systems",
        "Reconciliation",
        "KYC",
        "Fraud checks",
        "Holidays",
        "Technical issues",
        "Other operational factors",
      ],

      paragraphsAfter: [
        "Therefore, Nexgo does not guarantee that every COD amount will reach the merchant's bank account immediately after delivery.",
      ],
    },

    {
      id: "policy-abuse",
      number: "14",
      heading: "Policy Abuse",

      paragraphs: [
        "Nexgo may take appropriate action if a merchant attempts to manipulate:",
      ],

      points: [
        "COD amounts",
        "Delivery status",
        "Remittance records",
        "Settlement disputes",
        "Customer information",
        "Shipment records",
      ],
    },

    {
      id: "policy-changes",
      number: "15",
      heading: "Changes to This Policy",

      paragraphs: [
        "Nexgo may update this COD & Remittance Policy from time to time due to:",
      ],

      points: [
        "Courier Partner changes",
        "Payment-system changes",
        "Banking requirements",
        "Regulatory requirements",
        "New services",
        "Commercial changes",
        "Operational requirements",
      ],
    },
  ],
};

// src/data/shippingGuide/claimsInsurancePolicy.js

export const claimsInsurancePolicy = {
  slug: "claims-insurance",

  title: "Claims & Insurance Policy",

  description:
    "Understand our claims process, coverage details and how we ensure protection for your valuable shipments.",

  effectiveDate: "15 August 2026",
  lastUpdated: "15 August 2026",

  sections: [
    {
      id: "purpose",
      number: "01",
      heading: "Purpose of This Policy",

      paragraphs: [
        "Nexgo operates as a logistics aggregation platform connecting merchants with available Courier Partners.",
        "This Policy explains:",
      ],

      points: [
        "What shipment incidents may be eligible for a claim",
        "Who may raise a claim",
        "Claim filing timelines",
        "Required documents and evidence",
        "Damage and tampering procedures",
        "Loss claims",
        "RTO claims",
        "Claim investigation",
        "Insurance/declared-value coverage",
        "Claim approval and settlement",
        "Exclusions and limitations",
        "Dispute and escalation procedures",
      ],
    },

    {
      id: "definitions",
      number: "02",
      heading: "Important Definitions",

      definitions: [
        {
          term: "Shipment",
          description: "A parcel booked through the Nexgo platform.",
        },
        {
          term: "AWB",
          description:
            "The Air Waybill/shipment tracking number assigned to a shipment.",
        },
        {
          term: "Claim",
          description:
            "A formal request for compensation relating to an eligible shipment incident.",
        },
        {
          term: "Lost Shipment",
          description:
            "A shipment that cannot be located or delivered and is confirmed as lost according to the applicable Courier Partner's process.",
        },
        {
          term: "Damaged Shipment",
          description:
            "A shipment where the product or packaging has suffered physical damage during transportation.",
        },
        {
          term: "Tampered Shipment",
          description:
            "A shipment showing evidence that its packaging was opened, altered or interfered with during transit.",
        },
        {
          term: "Short Shipment",
          description:
            "A shipment delivered with one or more items missing from the package.",
        },
        {
          term: "Declared Value",
          description:
            "The value of the goods declared by the merchant when creating the shipment.",
        },
        {
          term: "Insured Shipment",
          description:
            "A shipment covered under an applicable insurance or shipment-protection arrangement, subject to its terms, limits and exclusions.",
        },
      ],
    },

    {
      id: "role-nexgo",
      number: "03",
      heading: "Role of Nexgo",

      paragraphs: [
        "Nexgo provides a technology and logistics aggregation platform.",
        "The physical transportation of shipments may be performed by independent Courier Partners.",
        "Depending on the applicable service, Nexgo may:",
      ],

      points: [
        "Facilitate claim submission",
        "Collect supporting documents",
        "Coordinate with Courier Partners",
        "Coordinate with insurers or shipment-protection providers",
        "Track claim status",
        "Communicate claim decisions",
        "Process approved adjustments or settlements",
      ],
    },

    {
      id: "eligible-claims",
      number: "04",
      heading: "Eligible Claims",

      paragraphs: [
        "Eligible claims may relate to:",
      ],

      points: [
        "Shipment damage",
        "Shipment loss",
        "Shortage",
        "Tampering",
        "Other eligible transit-related discrepancies",
      ],
    },

    {
      id: "claim-intimation",
      number: "05",
      heading: "Claim Intimation",

      paragraphs: [
        "A claim should be reported within the applicable claim period after the shipment is delivered, returned or otherwise becomes eligible for claim reporting.",
      ],
    },

    {
      id: "claim-evidence",
      number: "06",
      heading: "Claim Evidence",

      paragraphs: [
        "The seller may be required to provide supporting documents and evidence, including:",
      ],

      points: [
        "Order information",
        "Invoice",
        "Shipment photographs",
        "Packaging photographs",
        "Product photographs",
        "Delivery or RTO evidence",
        "Other documents requested during investigation",
      ],
    },

    {
      id: "packaging",
      number: "07",
      heading: "Packaging Requirement",

      paragraphs: [
        "The shipment should have been packaged appropriately for the product and transportation conditions.",
        "Inadequate packaging may affect claim eligibility.",
      ],
    },

    {
      id: "transit-damage",
      number: "08",
      heading: "Transit Damage",

      paragraphs: [
        "A claim for transit damage may be considered where damage is reasonably attributable to transportation or handling.",
      ],
    },

    {
      id: "concealed-damage",
      number: "09",
      heading: "Concealed Damage",

      paragraphs: [
        "Where damage is discovered after delivery, the seller should report it within the applicable claim period and provide supporting evidence.",
      ],
    },

    {
      id: "visible-damage",
      number: "10",
      heading: "Visible Damage",

      paragraphs: [
        "Where visible damage is observed at the time of delivery, the seller or customer should document the condition as soon as possible.",
      ],
    },

    {
      id: "shortage",
      number: "11",
      heading: "Shortage",

      paragraphs: [
        "A shortage claim may be considered where the delivered contents do not match the declared shipment contents.",
      ],
    },

    {
      id: "tampering",
      number: "12",
      heading: "Tampering",

      paragraphs: [
        "Evidence of tampering should be documented and reported promptly.",
      ],
    },

    {
      id: "lost-shipment",
      number: "13",
      heading: "Lost Shipment",

      paragraphs: [
        "A shipment may be treated as lost after the applicable investigation and tracing process determines that the shipment cannot be located.",
      ],
    },

    {
      id: "investigation",
      number: "14",
      heading: "Investigation",

      paragraphs: [
        "Nexgo may investigate claims using information from:",
      ],

      points: [
        "Seller",
        "Customer",
        "Courier Partner",
        "Shipment tracking",
        "Delivery records",
        "Photographs",
        "Other available evidence",
      ],
    },

    {
      id: "claim-review",
      number: "15",
      heading: "Claim Review",

      paragraphs: [
        "Each claim is reviewed based on the applicable policy, evidence and circumstances.",
      ],
    },

    {
      id: "claim-approval",
      number: "16",
      heading: "Claim Approval",

      paragraphs: [
        "An approved claim may result in settlement according to the applicable coverage, limits and commercial terms.",
      ],
    },

    {
      id: "claim-rejection",
      number: "17",
      heading: "Claim Rejection",

      paragraphs: [
        "A claim may be rejected where:",
      ],

      points: [
        "The shipment is excluded",
        "Required evidence is not provided",
        "The claim is submitted outside the applicable period",
        "Packaging is inadequate",
        "The loss or damage is not attributable to eligible transit circumstances",
        "Other policy conditions are not met",
      ],
    },

    {
      id: "prohibited-items",
      number: "18",
      heading: "Prohibited Items",

      paragraphs: [
        "Claims are generally not available for shipments containing items prohibited under the Nexgo Prohibited Items Policy, subject to applicable terms.",
      ],
    },

    {
      id: "restricted-items",
      number: "19",
      heading: "Restricted Items",

      paragraphs: [
        "Restricted items may require specific conditions, documentation or prior approval.",
        "Failure to meet such conditions may affect claim eligibility.",
      ],
    },

    {
      id: "policy-updates",
      number: "20",
      heading: "Policy Updates",

      paragraphs: [
        "Nexgo may update the Claims & Insurance Policy from time to time.",
      ],
    },

    {
      id: "contact",
      number: "21",
      heading: "Contact Nexgo",

      paragraphs: [
        "For claims and insurance-related queries, sellers may contact Nexgo support through the available support channels.",
      ],
    },
  ],
};

// src/data/shippingGuide/prohibitedItemsPolicy.js

export const prohibitedItemsPolicy = {
  slug: "prohibited-items",

  title: "Prohibited & Restricted Items Policy",

  description:
    "Know what items are not allowed or restricted for shipping through Nexgo to ensure legal and safe deliveries.",

  effectiveDate: "15 August 2026",
  lastUpdated: "15 August 2026",

  sections: [
    {
      id: "purpose",
      number: "01",
      heading: "Purpose",

      paragraphs: [
        "Nexgo works with multiple Courier Partners, and each Courier Partner may have its own restrictions.",
        "An item that is accepted by one Courier Partner may be prohibited by another.",
        "Therefore, merchants must verify the applicable Courier Partner's serviceability and item restrictions before shipping.",
      ],
    },

    {
      id: "important-principle",
      number: "02",
      heading: "Important Principle",

      highlights: [
        "If an item is prohibited by applicable law, regulation, Nexgo policy, Courier Partner policy or transportation rules, it must not be shipped through Nexgo.",
      ],

      paragraphsAfter: [
        "Merchants are responsible for ensuring that every shipment complies with:",
      ],

      points: [
        "Applicable Indian laws",
        "Applicable regulations",
        "Nexgo policies",
        "Courier Partner policies",
        "Packaging requirements",
        "Customs requirements, where applicable",
        "Destination-country requirements for international shipments",
      ],
    },

    {
      id: "illegal-goods",
      number: "03",
      heading: "Illegal Goods",

      paragraphs: [
        "The following categories are generally not accepted through Nexgo unless Nexgo expressly confirms otherwise in writing.",
        "Items prohibited by applicable law, including:",
      ],

      points: [
        "Illicit drugs",
        "Narcotic substances",
        "Psychotropic substances where unauthorized",
        "Contraband",
        "Stolen goods",
        "Counterfeit goods",
        "Goods obtained through illegal activity",
        "Other unlawful merchandise",
      ],
    },

    {
      id: "weapons",
      number: "04",
      heading: "Weapons & Weapon Components",

      paragraphs: [
        "Weapons and weapon-related items may be prohibited or highly restricted.",
        "Examples include:",
      ],

      points: [
        "Firearms",
        "Ammunition",
        "Explosives",
        "Weapon components",
        "Improvised weapons",
        "Certain knives and blades",
        "Swords",
        "Daggers",
        "Switchblades",
        "Other restricted weapons",
      ],

      paragraphsAfter: [
        "Items that are legally permitted in certain circumstances may still be prohibited by individual Courier Partners.",
      ],
    },

    {
      id: "explosives",
      number: "05",
      heading: "Explosives & Pyrotechnic Materials",

      paragraphs: [
        "Explosives and pyrotechnic materials are generally prohibited unless specifically accepted under applicable law and Courier Partner requirements.",
      ],
    },

    {
      id: "dangerous-goods",
      number: "06",
      heading: "Dangerous Goods",

      paragraphs: [
        "Dangerous goods, hazardous materials and substances that may create a risk to people, property or transportation infrastructure may be prohibited or restricted.",
      ],
    },

    {
      id: "flammable",
      number: "07",
      heading: "Flammable Materials",

      paragraphs: [
        "Highly flammable substances and materials may be prohibited or restricted according to applicable regulations and Courier Partner requirements.",
      ],
    },

    {
      id: "toxic",
      number: "08",
      heading: "Toxic Substances",

      paragraphs: [
        "Toxic, poisonous or otherwise hazardous substances may be prohibited.",
      ],
    },

    {
      id: "corrosive",
      number: "09",
      heading: "Corrosive Materials",

      paragraphs: [
        "Corrosive substances that may damage people, packaging, vehicles or other shipments may be prohibited or restricted.",
      ],
    },

    {
      id: "counterfeit",
      number: "10",
      heading: "Counterfeit Goods",

      paragraphs: [
        "Counterfeit, pirated or unauthorized replica goods are prohibited.",
      ],
    },

    {
      id: "stolen",
      number: "11",
      heading: "Stolen Goods",

      paragraphs: [
        "Stolen property or goods obtained through unlawful means are prohibited.",
      ],
    },

    {
      id: "wildlife",
      number: "12",
      heading: "Wildlife",

      paragraphs: [
        "Wildlife, protected species, animal parts and other regulated biological materials may be prohibited or restricted.",
      ],
    },

    {
      id: "precious",
      number: "13",
      heading: "Precious Items",

      paragraphs: [
        "Precious metals, gemstones, jewellery and high-value goods may be subject to restrictions, declared-value requirements or specific service conditions.",
      ],
    },

    {
      id: "perishable",
      number: "14",
      heading: "Perishable Goods",

      paragraphs: [
        "Perishable products may be restricted because of storage, temperature and delivery requirements.",
      ],
    },

    {
      id: "food",
      number: "15",
      heading: "Food Items",

      paragraphs: [
        "Food products may be subject to applicable packaging, hygiene, legal and Courier Partner requirements.",
      ],
    },

    {
      id: "liquids",
      number: "16",
      heading: "Liquids",

      paragraphs: [
        "Liquids may be restricted depending on their composition, packaging and transportation characteristics.",
      ],
    },

    {
      id: "batteries",
      number: "17",
      heading: "Batteries",

      paragraphs: [
        "Lithium batteries and other battery types may be subject to applicable dangerous-goods requirements.",
      ],
    },

    {
      id: "medical",
      number: "18",
      heading: "Medical Products",

      paragraphs: [
        "Medicines, medical devices and related products may be subject to legal and transportation restrictions.",
      ],
    },

    {
      id: "alcohol",
      number: "19",
      heading: "Alcohol",

      paragraphs: [
        "Alcoholic beverages may be restricted or prohibited depending on applicable law, destination and Courier Partner service.",
      ],
    },

    {
      id: "tobacco",
      number: "20",
      heading: "Tobacco Products",

      paragraphs: [
        "Tobacco and related products may be subject to legal and service restrictions.",
      ],
    },

    {
      id: "seller-responsibility",
      number: "21",
      heading: "Seller Responsibility",

      paragraphs: [
        "The seller is responsible for ensuring that the shipment contents comply with this policy and applicable law.",
      ],
    },

    {
      id: "accurate-declaration",
      number: "22",
      heading: "Accurate Declaration",

      paragraphs: [
        "Shipment contents must be accurately declared.",
        "Misdeclaration may result in shipment rejection, penalties, account action or other consequences.",
      ],
    },

    {
      id: "packaging",
      number: "23",
      heading: "Packaging",

      paragraphs: [
        "Restricted items, where accepted, must be packaged according to applicable safety and Courier Partner requirements.",
      ],
    },

    {
      id: "documentation",
      number: "24",
      heading: "Documentation",

      paragraphs: [
        "The seller may be required to provide licences, certificates, declarations or other documents for restricted products.",
      ],
    },

    {
      id: "courier-rules",
      number: "25",
      heading: "Courier Partner Rules",

      paragraphs: [
        "Individual Courier Partners may impose additional restrictions beyond this policy.",
      ],
    },

    {
      id: "destination",
      number: "26",
      heading: "Destination Restrictions",

      paragraphs: [
        "A product permitted at origin may still be restricted at the destination because of local law or Courier Partner rules.",
      ],
    },

    {
      id: "customs",
      number: "27",
      heading: "Customs",

      paragraphs: [
        "International shipments are subject to applicable customs laws and documentation requirements.",
      ],
    },

    {
      id: "inspection",
      number: "28",
      heading: "Inspection",

      paragraphs: [
        "Shipments may be inspected where permitted by applicable law or Courier Partner procedures.",
      ],
    },

    {
      id: "non-compliance",
      number: "29",
      heading: "Non-Compliance",

      paragraphs: [
        "Nexgo may refuse, hold, return or otherwise handle a non-compliant shipment according to applicable operational and legal requirements.",
      ],
    },

    {
      id: "policy-changes",
      number: "30",
      heading: "Policy Changes",

      paragraphs: [
        "Nexgo may update the Prohibited & Restricted Items Policy to reflect legal, regulatory, Courier Partner or operational changes.",
      ],
    },

    {
      id: "contact",
      number: "31",
      heading: "Contact Nexgo",

      paragraphs: [
        "For questions regarding whether a product can be shipped, sellers should contact Nexgo support before dispatch.",
      ],
    },
  ],
};
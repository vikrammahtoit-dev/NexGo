export const termsConditionsData = {
    effectiveDate: "15 Aug 2026",
    lastUpdated: "15 Aug 2026",

    intro: [
    {
      type: "paragraph",
      text: 'Welcome to **Nexgo** (“Nexgo”, “we”, “us”, “our”). Nexgo is a technology-enabled logistics and shipping aggregation platform that enables businesses and individuals to book, manage, track and monitor shipments through third-party courier and logistics service providers (“Courier Partners”).',
    },
    {
      type: "paragraph",
      text: 'These Terms & Conditions (“Terms”) govern your access to and use of the Nexgo website, application, dashboard, APIs, integrations and logistics-related services (collectively, the “Platform” or “Services”).',
    },
    {
      type: "paragraph",
      text: "By registering an account, accessing the Platform, creating a shipment, purchasing a service, or otherwise using Nexgo, you confirm that you have read, understood and agreed to these Terms.",
    },
  ],

  warning:
    "If you do not agree with these Terms, you must not use the Platform or Services.",

    sections: [
    {
      id: 1,
      title: "Definitions",
      blocks: [
        {
          type: "paragraph",
          text: "For the purpose of these Terms:",
        },
        {
          type: "list",
          items: [
            '**“Nexgo”** means [NEXGO LEGAL ENTITY NAME], having its registered office at [REGISTERED OFFICE ADDRESS].',
            '**“User”, “Merchant”, “Customer” or “You”** means any individual, company, partnership, LLP, proprietorship or other entity using the Nexgo Platform.',
            '**“Consignor” or “Shipper”** means the person or business sending a shipment.',
            '**“Consignee” or “Receiver”** means the person or business receiving a shipment.',
            '**“Courier Partner”** means an independent third-party courier, transportation, freight or logistics service provider made available through Nexgo.',
            '**“Shipment”** means any parcel, document, package, product or consignment booked through Nexgo.',
            '**“AWB”** means Air Waybill or shipment tracking number assigned to a Shipment.',
            '**“COD”** means Cash on Delivery.',
            '**“NDR”** means Non-Delivery Report/Record generated when a shipment cannot be delivered during an attempted delivery.',
            '**“RTO”** means Return to Origin, where a shipment is returned to the original pickup location.',
            '**“Chargeable Weight”** means the weight used for billing purposes, which may be based on actual/dead weight or volumetric weight, as applicable.',
          ],
        },
      ],
    },

    {
      id: 2,
      title: "Nature of Nexgo Services",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo provides a technology platform through which Users can access and manage logistics services offered by Courier Partners.",
        },
        {
          type: "paragraph",
          text: "Nexgo may provide:",
        },
        {
          type: "gridList",
          items: [
            "Shipment booking",
            "Courier comparison and selection",
            "Courier allocation/recommendation",
            "Pickup scheduling",
            "Shipment tracking",
            "AWB generation",
            "Shipping labels",
            "Manifest generation",
            "NDR management",
            "RTO management",
            "Reverse pickup services",
            "COD collection and remittance",
            "Billing and wallet services",
            "Reports and analytics",
            "Store/channel integrations",
            "API and webhook services",
            "Other logistics-related technology services",
          ],
        },
        {
          type: "paragraph",
          text: "Unless expressly stated otherwise, Nexgo does not itself physically transport, store or deliver every Shipment. Physical transportation and delivery may be performed by the applicable Courier Partner.",
        },
        {
          type: "paragraph",
          text: "Courier Partner availability, serviceability, delivery timelines, charges and operational procedures may vary by location, shipment type and service.",
        },
      ],
    },

    {
      id: 3,
      title: "Acceptance of Terms",
      blocks: [
        {
          type: "paragraph",
          text: "By using Nexgo, you agree that:",
        },
        {
          type: "orderedList",
          items: [
            "You are legally capable of entering into a binding agreement.",
            "The information provided by you is accurate and complete.",
            "You will comply with all applicable laws and regulations.",
            "You will comply with these Terms.",
            "You will comply with the applicable terms and service conditions of the selected Courier Partner.",
            "You are responsible for all activities performed through your Nexgo account.",
          ],
        },
        {
          type: "paragraph",
          text: "Where a User registers or acts on behalf of a company or business, that person represents that they are authorized to bind such entity.",
        },
      ],
    },

    {
      id: 4,
      title: "Account Registration",
      blocks: [
        {
          type: "paragraph",
          text: "Users may be required to create an account before using certain Services.",
        },
        {
          type: "paragraph",
          text: "You agree to provide accurate and current information including, where applicable:",
        },
        {
          type: "list",
          items: [
            "Name",
            "Business name",
            "Registered address",
            "Pickup address",
            "Email address",
            "Mobile number",
            "PAN",
            "GST details",
            "Bank account details",
            "KYC documents",
            "Other information requested by Nexgo",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may verify the information provided and may request additional documents.",
        },
        {
          type: "paragraph",
          text: "You must immediately notify Nexgo if any information becomes inaccurate or changes.",
        },
        {
          type: "paragraph",
          text: "Nexgo may suspend or restrict an account where information is incomplete, misleading, fraudulent or unverifiable.",
        },
      ],
    },

    {
      id: 5,
      title: "KYC and Business Verification",
      blocks: [
        {
          type: "paragraph",
          text: "Certain Nexgo Services may require completion of KYC or business verification.",
        },
        {
          type: "paragraph",
          text: "Nexgo may request documents including:",
        },
        {
          type: "list",
          items: [
            "PAN",
            "Aadhaar or other permitted identity/address documentation",
            "GST certificate, where applicable",
            "Bank details",
            "Cancelled cheque/bank proof",
            "Business registration documents",
            "Other documents required for verification or regulatory compliance",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may refuse or delay activation of Services until required verification is completed.",
        },
      ],
    },

    {
      id: 6,
      title: "Account Security",
      blocks: [
        {
          type: "paragraph",
          text: "You are responsible for maintaining the confidentiality of:",
        },
        {
          type: "list",
          items: [
            "Login credentials",
            "Passwords",
            "OTPs",
            "API keys",
            "Authentication tokens",
            "Other account credentials",
          ],
        },
        {
          type: "paragraph",
          text: "You must not share your account credentials with unauthorized persons.",
        },
        {
          type: "paragraph",
          text: "All activity performed through your account may be treated as activity authorized by you unless you promptly notify Nexgo of unauthorized access.",
        },
        {
          type: "paragraph",
          text: "You must immediately inform Nexgo if you suspect:",
        },
        {
          type: "list",
          items: [
            "Unauthorized access",
            "Password compromise",
            "API key leakage",
            "Fraudulent activity",
            "Unauthorized shipment creation",
          ],
        },
      ],
    },

    {
      id: 7,
      title: "Shipment Information",
      blocks: [
        {
          type: "paragraph",
          text: "The User is solely responsible for providing accurate shipment information.",
        },
        {
          type: "paragraph",
          text: "This includes:",
        },
        {
          type: "list",
          items: [
            "Sender details",
            "Receiver details",
            "Mobile number",
            "Delivery address",
            "Pincode",
            "Product description",
            "Quantity",
            "Declared value",
            "Payment mode",
            "Actual weight",
            "Dimensions",
            "COD amount",
            "Applicable tax information",
            "Required shipping documents",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo and its Courier Partners may rely upon the information supplied by the User.",
        },
        {
          type: "paragraph",
          text: "Incorrect or incomplete information may result in:",
        },
        {
          type: "list",
          items: [
            "Pickup failure",
            "Delivery failure",
            "NDR",
            "RTO",
            "Additional charges",
            "Shipment delay",
            "Cancellation",
            "Regulatory penalties",
            "Claims being rejected",
          ],
        },
        {
          type: "paragraph",
          text: "Any resulting costs may be charged to the User.",
        },
      ],
    },

    {
      id: 8,
      title: "Product Declaration",
      blocks: [
        {
          type: "paragraph",
          text: "The User must accurately declare the contents of every Shipment.",
        },
        {
          type: "paragraph",
          text: "The User must not:",
        },
        {
          type: "list",
          items: [
            "Misdeclare products",
            "Undervalue products",
            "Use false product descriptions",
            "Hide prohibited goods",
            "Misrepresent the quantity or value",
            "Declare one product while shipping another",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may refuse, suspend, hold or cancel a Shipment where the declared information appears inaccurate or suspicious.",
        },
        {
          type: "paragraph",
          text: "The User remains responsible for all consequences arising from incorrect or fraudulent declarations.",
        },
      ],
    },

    {
      id: 9,
      title: "Prohibited and Restricted Shipments",
      blocks: [
        {
          type: "paragraph",
          text: "Users must not book or ship products prohibited by applicable law, regulatory authorities, Nexgo policy or the relevant Courier Partner.",
        },
        {
          type: "paragraph",
          text: "Prohibited/restricted products may include, without limitation:",
        },
        {
          type: "list",
          items: [
            "Illegal drugs and narcotic substances",
            "Weapons and ammunition",
            "Explosives",
            "Firearms",
            "Hazardous or dangerous goods",
            "Flammable substances",
            "Toxic chemicals",
            "Radioactive materials",
            "Infectious substances",
            "Counterfeit goods",
            "Stolen goods",
            "Currency and certain financial instruments",
            "Illegal wildlife products",
            "Products prohibited under applicable law",
            "Any product prohibited by the selected Courier Partner",
            "Any other item notified by Nexgo from time to time",
          ],
        },
        {
          type: "paragraph",
          text: "Some products may be transportable only under specific regulatory, packaging, declaration or documentation requirements.",
        },
        {
          type: "paragraph",
          text: "Users are solely responsible for determining whether their products are legally eligible for transportation.",
        },
      ],
    },

    {
      id: 10,
      title: "Shipment Inspection",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo, Courier Partners or authorized governmental/regulatory authorities may inspect, scan, open or examine a Shipment where permitted or required by applicable law, security procedures or Courier Partner policy.",
        },
        {
          type: "paragraph",
          text: "Inspection may occur for purposes including:",
        },
        {
          type: "list",
          items: [
            "Security",
            "Regulatory compliance",
            "Customs",
            "Prohibited-item screening",
            "Shipment verification",
            "Damage investigation",
            "Fraud prevention",
          ],
        },
        {
          type: "paragraph",
          text: "The User agrees to cooperate with such inspections.",
        },
      ],
    },

    {
      id: 11,
      title: "Packaging Requirements",
      blocks: [
        {
          type: "paragraph",
          text: "The User is responsible for properly packaging every Shipment.",
        },
        {
          type: "paragraph",
          text: "Packaging must be appropriate for:",
        },
        {
          type: "list",
          items: [
            "Product type",
            "Weight",
            "Dimensions",
            "Fragility",
            "Liquid content",
            "Transit conditions",
            "Transportation mode",
          ],
        },
        {
          type: "paragraph",
          text: "The User must use suitable:",
        },
        {
          type: "list",
          items: [
            "Corrugated boxes",
            "Poly mailers",
            "Bubble wrap",
            "EPE/foam",
            "Void-fill material",
            "Tamper-evident packaging",
            "Sealing tape",
            "Strapping",
            "Other protective material",
          ],
        },
        {
          type: "paragraph",
          text: "Fragile, liquid, electronic, heavy or sensitive products may require specialized packaging.",
        },
        {
          type: "paragraph",
          text: "Nexgo may publish additional Packaging SOPs, which shall form part of these Terms.",
        },
        {
          type: "paragraph",
          text: "Nexgo and/or Courier Partners may refuse improperly packaged Shipments.",
        },
      ],
    },

    {
      id: 12,
      title: "Packaging and Damage Claims",
      blocks: [
        {
          type: "paragraph",
          text: "Where a Shipment is damaged, leakage/pilferage occurs, or packaging is inadequate, the User may be required to provide evidence including:",
        },
        {
          type: "list",
          items: [
            "Photos before shipment",
            "Photos of packaging",
            "Photos after delivery",
            "Unboxing video",
            "POD remarks",
            "Invoice",
            "Product value proof",
            "Weight/dimension evidence",
            "Other documents requested by Nexgo or the Courier Partner",
          ],
        },
        {
          type: "paragraph",
          text: "The absence of required evidence may affect claim eligibility.",
        },
        {
          type: "paragraph",
          text: "Where damage is visible at delivery, the Consignee should record appropriate remarks on the Proof of Delivery (POD) wherever the Courier Partner's process permits.",
        },
        {
          type: "paragraph",
          text: "Claims shall be governed by the applicable Courier Partner's claim policy and Nexgo's claim policy.",
        },
      ],
    },

    {
      id: 13,
      title: "Shipment Charges",
      blocks: [
        {
          type: "paragraph",
          text: "Shipping charges may depend upon:",
        },
        {
          type: "list",
          items: [
            "Courier Partner",
            "Origin",
            "Destination",
            "Actual weight",
            "Volumetric weight",
            "Chargeable weight",
            "Shipment dimensions",
            "Service type",
            "COD",
            "RTO",
            "Remote/ODA location",
            "Additional delivery attempts",
            "Fuel or other applicable surcharges",
            "Special handling",
            "Government taxes",
            "Other applicable charges",
          ],
        },
        {
          type: "paragraph",
          text: "Displayed rates may be estimates until the Shipment is processed and verified.",
        },
        {
          type: "paragraph",
          text: "Nexgo reserves the right to apply additional charges where actual shipment characteristics differ from the information supplied during booking.",
        },
      ],
    },

    {
      id: 14,
      title: "Volumetric and Chargeable Weight",
      blocks: [
        {
          type: "paragraph",
          text: "Where applicable, Courier Partners may calculate shipping charges using volumetric weight.",
        },
        {
          type: "paragraph",
          text: "The chargeable weight may be the higher of:",
        },
        {
          type: "highlight",
          text: "Actual Weight and Applicable Volumetric Weight",
        },
        {
          type: "paragraph",
          text: "The applicable volumetric divisor and calculation methodology may vary by Courier Partner, service type and shipment category.",
        },
        {
          type: "paragraph",
          text: "Any subsequent weight discrepancy identified by the Courier Partner may result in additional charges.",
        },
      ],
    },

    {
      id: 15,
      title: "Weight and Dimension Disputes",
      blocks: [
        {
          type: "paragraph",
          text: "If a User believes that a weight or dimension charge is incorrect, the User may raise a dispute through the Nexgo Platform within the applicable dispute period.",
        },
        {
          type: "paragraph",
          text: "Nexgo may request:",
        },
        {
          type: "list",
          items: [
            "Shipment photographs",
            "Weighing-scale photographs",
            "Measurement photographs",
            "Packaging photographs",
            "Packing videos",
            "Invoice",
            "Courier weight records",
            "Other supporting evidence",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may coordinate with the relevant Courier Partner for resolution.",
        },
        {
          type: "paragraph",
          text: "Submission of a dispute does not guarantee reversal of charges.",
        },
        {
          type: "paragraph",
          text: "The final resolution may depend on available evidence and the Courier Partner's verification process.",
        },
      ],
    },

    {
      id: 16,
      title: "Courier Allocation and Selection",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo may provide automated, recommended or manually selectable Courier Partners.",
        },
        {
          type: "paragraph",
          text: "Courier selection may consider factors including:",
        },
        {
          type: "list",
          items: [
            "Pincode serviceability",
            "Historical delivery performance",
            "SLA",
            "Cost",
            "COD availability",
            "Shipment weight",
            "Shipment dimensions",
            "Shipment category",
            "RTO performance",
            "Courier capacity",
            "Operational constraints",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo does not guarantee that a particular Courier Partner will always be available.",
        },
        {
          type: "paragraph",
          text: "Nexgo may change, reassign or recommend another Courier Partner where operationally necessary.",
        },
      ],
    },

    {
      id: 17,
      title: "Pickup",
      blocks: [
        {
          type: "paragraph",
          text: "Pickup times displayed on the Platform are estimates or scheduled windows and may be affected by:",
        },
        {
          type: "list",
          items: [
            "Courier availability",
            "Location",
            "Weather",
            "Traffic",
            "Holidays",
            "Operational disruptions",
            "Incorrect pickup information",
            "Packaging issues",
            "Other circumstances outside Nexgo's reasonable control",
          ],
        },
        {
          type: "paragraph",
          text: "The User must ensure that the Shipment is ready for pickup at the specified location and time.",
        },
      ],
    },

    {
      id: 18,
      title: "Delivery",
      blocks: [
        {
          type: "paragraph",
          text: "Estimated delivery dates are estimates and are not guaranteed unless a specific service expressly provides a guaranteed delivery commitment.",
        },
        {
          type: "paragraph",
          text: "Delivery may be delayed due to:",
        },
        {
          type: "list",
          items: [
            "Weather",
            "Natural disasters",
            "Traffic",
            "Strikes",
            "Government restrictions",
            "Incorrect address",
            "Customer unavailability",
            "Operational issues",
            "Remote/ODA locations",
            "Security events",
            "Force majeure events",
            "Other circumstances beyond reasonable control",
          ],
        },
      ],
    },

    {
      id: 19,
      title: "NDR — Non-Delivery",
      blocks: [
        {
          type: "paragraph",
          text: "A Shipment may be marked NDR where delivery cannot be completed.",
        },
        {
          type: "paragraph",
          text: "NDR reasons may include:",
        },
        {
          type: "list",
          items: [
            "Customer unavailable",
            "Incorrect address",
            "Customer refusal",
            "Phone unreachable",
            "Premises closed",
            "Address incomplete",
            "Delivery area inaccessible",
            "Other Courier Partner-defined reasons",
          ],
        },
        {
          type: "paragraph",
          text: "The User may be required to take action within the time specified by Nexgo.",
        },
        {
          type: "paragraph",
          text: "Nexgo does not guarantee a successful reattempt.",
        },
      ],
    },

    {
      id: 20,
      title: "RTO — Return to Origin",
      blocks: [
        {
          type: "paragraph",
          text: "A Shipment may be returned to origin due to circumstances including:",
        },
        {
          type: "list",
          items: [
            "Repeated delivery failure",
            "Customer refusal",
            "Incorrect/incomplete address",
            "Non-serviceable destination",
            "Customer unavailability",
            "Prohibited shipment",
            "Courier Partner policy",
            "Regulatory restrictions",
            "Other operational reasons",
          ],
        },
        {
          type: "paragraph",
          text: "Applicable forward, RTO or additional charges may be deducted from the User's wallet or billed separately.",
        },
        {
          type: "paragraph",
          text: "Once an RTO process has commenced, cancellation or interception may not always be possible.",
        },
      ],
    },

    {
      id: 21,
      title: "Reverse Pickup and Customer Returns",
      blocks: [
        {
          type: "paragraph",
          text: "Where available, Nexgo may facilitate reverse pickup services.",
        },
        {
          type: "paragraph",
          text: "Reverse pickup availability depends on:",
        },
        {
          type: "list",
          items: [
            "Pincode",
            "Courier Partner",
            "Product category",
            "Service type",
            "Operational conditions",
          ],
        },
        {
          type: "paragraph",
          text: "Reverse shipping charges may apply.",
        },
        {
          type: "paragraph",
          text: "Nexgo is not responsible for the condition or contents of a returned product unless liability is specifically established under the applicable Courier Partner claim policy.",
        },
      ],
    },

    {
      id: 22,
      title: "COD Services",
      blocks: [
        {
          type: "paragraph",
          text: "Where COD is available, Nexgo may facilitate collection and remittance of COD amounts through applicable Courier Partners/payment systems.",
        },
        {
          type: "paragraph",
          text: "COD remittance timelines may vary depending on:",
        },
        {
          type: "list",
          items: [
            "Courier Partner",
            "Delivery date",
            "Banking holidays",
            "Reconciliation",
            "KYC status",
            "Account status",
            "Disputes",
            "Fraud/security checks",
            "Applicable payment policies",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may temporarily hold COD remittances where:",
        },
        {
          type: "list",
          items: [
            "There is a dispute",
            "Fraud is suspected",
            "Incorrect delivery status is identified",
            "KYC is incomplete",
            "Account information is incorrect",
            "Regulatory or compliance review is required",
          ],
        },
      ],
    },

    {
      id: 23,
      title: "COD Reconciliation",
      blocks: [
        {
          type: "paragraph",
          text: "If a COD amount is incorrectly credited or remitted due to an incorrect delivery status, reconciliation issue or other error, Nexgo may recover the applicable amount by:",
        },
        {
          type: "list",
          items: [
            "Wallet adjustment",
            "Deduction from future COD remittances",
            "Invoice adjustment",
            "Other lawful recovery methods",
          ],
        },
        {
          type: "paragraph",
          text: "The User agrees to cooperate with reconciliation requests.",
        },
      ],
    },

    {
      id: 24,
      title: "Wallet",
      blocks: [
        {
          type: "paragraph",
          text: "Certain Nexgo Services may operate through a prepaid wallet.",
        },
        {
          type: "paragraph",
          text: "The User is responsible for maintaining sufficient wallet balance.",
        },
        {
          type: "paragraph",
          text: "Charges may be deducted for:",
        },
        {
          type: "list",
          items: [
            "Shipping",
            "RTO",
            "COD",
            "Additional attempts",
            "Weight discrepancies",
            "Taxes",
            "Special services",
            "Other applicable fees",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may restrict shipment booking where the wallet has insufficient balance.",
        },
      ],
    },

    {
      id: 25,
      title: "Refunds and Wallet Credits",
      blocks: [
        {
          type: "paragraph",
          text: "Refunds, reversals or wallet credits will be governed by the applicable refund/cancellation policy.",
        },
        {
          type: "paragraph",
          text: "Where a Courier Partner refunds an amount to Nexgo after a successful dispute or claim, Nexgo may credit the eligible amount to the User's Nexgo wallet after applicable deductions.",
        },
      ],
    },

    {
      id: 26,
      title: "Shipment Cancellation",
      blocks: [
        {
          type: "paragraph",
          text: "Shipment cancellation is permitted only where the Shipment status and Courier Partner process allow cancellation.",
        },
        {
          type: "paragraph",
          text: "Once a Shipment has progressed to certain operational stages, cancellation may not be possible.",
        },
        {
          type: "paragraph",
          text: "Charges may apply depending upon the Shipment status and Courier Partner policy.",
        },
      ],
    },

    {
      id: 27,
      title: "Claims — Lost, Damaged, Shortage, Leakage and Pilferage",
      blocks: [
        {
          type: "paragraph",
          text: "Claims must be raised within the time specified by Nexgo or the applicable Courier Partner.",
        },
        {
          type: "paragraph",
          text: "Depending on the claim type, supporting evidence may include:",
        },
        {
          type: "list",
          items: [
            "Invoice",
            "Product value proof",
            "Packaging photographs",
            "Product photographs",
            "Unboxing video",
            "POD",
            "Weight/dimension evidence",
            "Shipment details",
            "Customer declaration",
            "Other evidence requested by Nexgo",
          ],
        },
        {
          type: "paragraph",
          text: "Claim approval is subject to verification and applicable Courier Partner policies.",
        },
        {
          type: "paragraph",
          text: "Approval of a claim is not automatic merely because a claim has been submitted.",
        },
      ],
    },

    {
      id: 28,
      title: "Fake Delivery / Non-Receipt Claims",
      blocks: [
        {
          type: "paragraph",
          text: "Where a Shipment is marked delivered but the Consignee claims non-receipt, the User must raise the issue within the applicable dispute period.",
        },
        {
          type: "paragraph",
          text: "Nexgo may request:",
        },
        {
          type: "list",
          items: [
            "Delivery confirmation",
            "POD",
            "OTP information",
            "Delivery photographs, where available",
            "GPS/location information, where available",
            "Customer declaration",
            "Other supporting information",
          ],
        },
        {
          type: "paragraph",
          text: "The final decision may depend on the investigation conducted by Nexgo and/or the Courier Partner.",
        },
      ],
    },

    {
      id: 29,
      title: "Insurance and Carrier Risk",
      blocks: [
        {
          type: "paragraph",
          text: "Where insurance or shipment protection is available, coverage will be governed by the applicable insurance provider, Courier Partner or protection plan terms.",
        },
        {
          type: "paragraph",
          text: "Users should review the coverage, exclusions, limits, deductibles, documentation requirements and claim timelines before booking protected shipments.",
        },
        {
          type: "paragraph",
          text: "Nexgo does not guarantee reimbursement for every loss or damage event.",
        },
        {
          type: "paragraph",
          text: "Where the applicable Courier Partner determines the amount payable to Nexgo, the User's recovery may be limited to the amount actually received by Nexgo, subject to the applicable agreement and claim policy.",
        },
      ],
    },

    {
      id: 30,
      title: "Taxes and Government Charges",
      blocks: [
        {
          type: "paragraph",
          text: "The User is responsible for applicable:",
        },
        {
          type: "list",
          items: [
            "GST",
            "Customs duties",
            "Import/export duties",
            "Government levies",
            "Regulatory charges",
            "Other taxes or statutory charges",
          ],
        },
        {
          type: "paragraph",
          text: "Where such amounts are payable by Nexgo on behalf of the User, Nexgo may recover them from the User.",
        },
      ],
    },

    {
      id: 31,
      title: "International Shipments",
      blocks: [
        {
          type: "paragraph",
          text: "International Shipments may be subject to:",
        },
        {
          type: "list",
          items: [
            "Customs regulations",
            "Import/export laws",
            "Customs duties",
            "Taxes",
            "Documentation requirements",
            "Product restrictions",
            "Country-specific regulations",
          ],
        },
        {
          type: "paragraph",
          text: "The User is responsible for providing accurate customs information and documentation.",
        },
        {
          type: "paragraph",
          text: "Any delay, seizure, penalty, duty or additional charge resulting from incorrect or incomplete information may be charged to the User.",
        },
      ],
    },

    {
      id: 32,
      title: "Integrations and APIs",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo may provide integrations with ecommerce platforms, marketplaces, ERP systems, OMS systems, WMS systems and other third-party services.",
        },
        {
          type: "paragraph",
          text: "The User is responsible for:",
        },
        {
          type: "list",
          items: [
            "Maintaining valid credentials",
            "Protecting API keys",
            "Providing correct integration information",
            "Complying with third-party platform terms",
            "Maintaining its own systems",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo does not guarantee uninterrupted availability of third-party integrations.",
        },
        {
          type: "paragraph",
          text: "Nexgo may impose API rate limits, security controls or usage restrictions.",
        },
      ],
    },

    {
      id: 33,
      title: "Third-Party Services",
      blocks: [
        {
          type: "paragraph",
          text: "Courier Partners, payment processors, ecommerce platforms and other third parties may provide certain components of the Services.",
        },
        {
          type: "paragraph",
          text: "Such third parties may have separate terms, policies and service conditions.",
        },
        {
          type: "paragraph",
          text: "The User agrees to comply with all applicable third-party requirements.",
        },
        {
          type: "paragraph",
          text: "Nexgo shall not be responsible for independent acts, omissions, failures or policies of third-party service providers except to the extent required by applicable law.",
        },
      ],
    },

    {
      id: 34,
      title: "Service Availability",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo aims to provide reliable Services but does not guarantee that the Platform will always be:",
        },
        {
          type: "list",
          items: [
            "Available",
            "Error-free",
            "Uninterrupted",
            "Free from delays",
            "Free from technical issues",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may temporarily suspend services for:",
        },
        {
          type: "list",
          items: [
            "Maintenance",
            "Security",
            "System upgrades",
            "Emergency situations",
            "Regulatory requirements",
            "Technical failures",
          ],
        },
      ],
    },

    {
      id: 35,
      title: "Intellectual Property",
      blocks: [
        {
          type: "paragraph",
          text: "All rights in the Nexgo Platform, including:",
        },
        {
          type: "list",
          items: [
            "Software",
            "Website",
            "Dashboard",
            "Logo",
            "Brand",
            "Designs",
            "Content",
            "Graphics",
            "Documentation",
            "User interface",
            "Technology",
          ],
        },
        {
          type: "paragraph",
          text: "belong to Nexgo or its licensors.",
        },
        {
          type: "paragraph",
          text: "Users may not:",
        },
        {
          type: "list",
          items: [
            "Copy",
            "Modify",
            "Reverse engineer",
            "Scrape",
            "Reproduce",
            "Resell",
            "Redistribute",
            "Extract",
            "Commercially exploit",
          ],
        },
        {
          type: "paragraph",
          text: "any part of the Nexgo Platform without prior written authorization.",
        },
      ],
    },

    {
      id: 36,
      title: "Prohibited Platform Activities",
      blocks: [
        {
          type: "paragraph",
          text: "Users must not use Nexgo to:",
        },
        {
          type: "list",
          items: [
            "Conduct unlawful activities",
            "Ship prohibited products",
            "Commit fraud",
            "Create fake shipments",
            "Manipulate tracking",
            "Abuse COD",
            "Circumvent charges",
            "Misuse promotional credits",
            "Attempt unauthorized access",
            "Introduce malicious code",
            "Scrape or harvest platform data",
            "Interfere with Platform operations",
            "Create multiple fraudulent accounts",
            "Misuse APIs",
            "Attempt to manipulate courier allocation",
          ],
        },
        {
          type: "paragraph",
          text: "Nexgo may suspend or terminate accounts involved in such activities.",
        },
      ],
    },

    {
      id: 37,
      title: "Fraud Prevention",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo may use automated systems, manual reviews and third-party information to identify suspicious activity.",
        },
        {
          type: "paragraph",
          text: "Nexgo may temporarily restrict:",
        },
        {
          type: "list",
          items: [
            "Shipment booking",
            "COD",
            "Wallet withdrawals/credits",
            "Account access",
            "API access",
            "Other Services",
          ],
        },
        {
          type: "paragraph",
          text: "during a security or fraud investigation.",
        },
        {
          type: "paragraph",
          text: "Where permitted by law, Nexgo may share relevant information with Courier Partners, payment providers, insurers, regulators or law-enforcement authorities.",
        },
      ],
    },

    {
      id: 38,
      title: "Account Suspension and Termination",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo may suspend or terminate an account where:",
        },
        {
          type: "list",
          items: [
            "These Terms are violated",
            "Fraud is suspected",
            "Prohibited products are shipped",
            "Payments remain unpaid",
            "KYC requirements are not satisfied",
            "False information is provided",
            "The account creates security risks",
            "The User misuses the Platform",
            "Required by law or regulatory authority",
          ],
        },
        {
          type: "paragraph",
          text: "Termination does not remove obligations that arose before termination.",
        },
      ],
    },

    {
      id: 39,
      title: "Indemnification",
      blocks: [
        {
          type: "paragraph",
          text: "You agree to indemnify and hold harmless Nexgo, its affiliates, employees, officers, directors, agents and service providers against claims, losses, liabilities, penalties, damages, costs and expenses arising from:",
        },
        {
          type: "list",
          items: [
            "Your breach of these Terms",
            "Incorrect shipment information",
            "Prohibited or illegal goods",
            "Inadequate packaging",
            "Fraudulent activity",
            "Violation of law",
            "Incorrect documentation",
            "Intellectual property infringement",
            "Misuse of the Platform",
            "Claims arising from your products or business",
          ],
        },
      ],
    },

    {
      id: 40,
      title: "Limitation of Liability",
      blocks: [
        {
          type: "paragraph",
          text: "To the maximum extent permitted by applicable law, Nexgo shall not be liable for indirect, incidental, special, consequential or punitive damages, including loss of profits, business interruption, loss of goodwill or loss of anticipated revenue.",
        },
        {
          type: "paragraph",
          text: "Nexgo's liability, where legally applicable, shall be subject to the applicable service agreement, claim policy, insurance terms and the amount actually recoverable from the relevant Courier Partner or insurer.",
        },
        {
          type: "paragraph",
          text: "Nothing in these Terms excludes liability that cannot legally be excluded or limited under applicable law.",
        },
      ],
    },

    {
      id: 41,
      title: "Force Majeure",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo shall not be responsible for delay or failure caused by circumstances beyond its reasonable control, including:",
        },
        {
          type: "list",
          items: [
            "Natural disasters",
            "Floods",
            "Earthquakes",
            "Fire",
            "Epidemics/pandemics",
            "War",
            "Terrorism",
            "Riots",
            "Strikes",
            "Government restrictions",
            "Regulatory actions",
            "Network failures",
            "Power outages",
            "Cyber incidents",
            "Transport disruptions",
            "Courier Partner disruptions",
            "Other events beyond reasonable control",
          ],
        },
      ],
    },

    {
      id: 42,
      title: "Data and Privacy",
      blocks: [
        {
          type: "paragraph",
          text: "Use of personal information through Nexgo is subject to Nexgo's Privacy Policy.",
        },
        {
          type: "paragraph",
          text: "Users are responsible for ensuring that they have the necessary rights, permissions and lawful basis to provide customer information to Nexgo for shipment processing.",
        },
        {
          type: "paragraph",
          text: "The User must not provide personal information that it is not legally authorized to share.",
        },
      ],
    },

    {
      id: 43,
      title: "Customer Communications",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo may communicate with Users through:",
        },
        {
          type: "list",
          items: [
            "Email",
            "SMS",
            "WhatsApp",
            "Phone",
            "Platform notifications",
            "Other permitted communication channels",
          ],
        },
        {
          type: "paragraph",
          text: "Communications may include:",
        },
        {
          type: "list",
          items: [
            "Shipment updates",
            "Wallet notifications",
            "COD notifications",
            "Billing information",
            "Security alerts",
            "Service announcements",
            "Promotional communications, where permitted",
          ],
        },
      ],
    },

    {
      id: 44,
      title: "Modification of Services",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo may modify, add, remove or discontinue features, Courier Partners, services, pricing structures or Platform functionality from time to time.",
        },
        {
          type: "paragraph",
          text: "Where required, Nexgo may provide notice of material changes.",
        },
        {
          type: "paragraph",
          text: "Continued use of Nexgo after applicable changes take effect constitutes acceptance of the revised Terms.",
        },
      ],
    },

    {
      id: 45,
      title: "Modification of Terms",
      blocks: [
        {
          type: "paragraph",
          text: "Nexgo may update these Terms from time to time.",
        },
        {
          type: "paragraph",
          text: "The latest version will be published on the Nexgo website or Platform.",
        },
        {
          type: "paragraph",
          text: "Users are responsible for reviewing the latest version.",
        },
        {
          type: "paragraph",
          text: "The “Last Updated” date will indicate when these Terms were most recently modified.",
        },
      ],
    },

    {
      id: 46,
      title: "Governing Law",
      blocks: [
        {
          type: "paragraph",
          text: "These Terms shall be governed by and interpreted in accordance with the laws of India.",
        },
        {
          type: "paragraph",
          text: "Subject to applicable law, the courts located in **[DELHI, INDIA]** shall have jurisdiction over disputes arising from or relating to these Terms.",
        },
      ],
    },

    {
      id: 47,
      title: "Dispute Resolution",
      blocks: [
        {
          type: "paragraph",
          text: "The parties shall first attempt to resolve disputes through good-faith discussions.",
        },
        {
          type: "paragraph",
          text: "Where a dispute cannot be resolved amicably, it shall be referred to arbitration in accordance with the applicable arbitration laws of India.",
        },
        {
          type: "paragraph",
          text: "**Seat of Arbitration:** [DELHI, INDIA]",
        },
        {
          type: "paragraph",
          text: "**Language:** English",
        },
        {
          type: "paragraph",
          text: "**Number of Arbitrators:** [ONE / THREE]",
        },
        {
          type: "paragraph",
          text: "Nothing in this clause prevents either party from seeking urgent interim relief from a court of competent jurisdiction where legally permissible.",
        },
      ],
    },

    {
      id: 48,
      title: "Severability",
      blocks: [
        {
          type: "paragraph",
          text: "If any provision of these Terms is found to be invalid or unenforceable, that provision shall be modified or removed to the minimum extent necessary, and the remaining provisions shall continue in full force.",
        },
      ],
    },
  ],
}
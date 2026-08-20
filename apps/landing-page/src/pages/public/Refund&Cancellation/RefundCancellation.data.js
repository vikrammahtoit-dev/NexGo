

export const refundCancellationPolicy = {
    title: "Refund & Cancellation Policy",
    effectiveDate: "15 August 2026",
    lastUpdated: "15 August 2026",

    intro: [
    `This **Refund & Cancellation Policy** (“Policy”) explains the rules applicable to shipment cancellations, refunds, wallet credits, failed shipments, duplicate payments and other related transactions on the Nexgo platform.`,

    `This Policy applies to merchants, businesses and other users purchasing or using logistics services through **Nexgo** (“Nexgo”, “we”, “us”, “our”).`,

    `This Policy should be read together with the **Nexgo Terms of Service**, **Privacy Policy**, **Shipping SOP**, **Claims Policy**, and applicable commercial/rate-card terms.`,
  ],
};


export const refundSections = [
  {
    number: 1,
    title: "Scope",
    content: [
      {
        type: "paragraph",
        text: `Nexgo provides logistics aggregation services through which users may access services offered by different Courier Partners.`,
      },
      {
        type: "paragraph",
        text: `Depending on the service, charges may include:`,
      },
      {
        type: "bullets",
        items: [
          "Shipping charges",
          "Forward shipping charges",
          "Reverse shipping charges",
          "COD charges",
          "Additional handling charges",
          "Weight discrepancy charges",
          "RTO charges",
          "NDR-related charges",
          "Packaging charges",
          "Other applicable logistics or service fees",
        ],
      },
      {
        type: "paragraph",
        text: `Refund eligibility may vary depending on the specific service and shipment status.`,
      },
    ],
  },

  {
    number: 2,
    title: "Shipment Cancellation",
    content: [
      {
        type: "paragraph",
        text: `A shipment may generally be cancelled through the Nexgo dashboard or API before the shipment reaches a stage where cancellation is no longer technically or operationally possible.`,
      },
      {
        type: "paragraph",
        text: `**Cancellation may be available when:**`,
      },
      {
        type: "bullets",
        items: [
          "Shipment has been created but not manifested",
          "Shipment has not been picked up",
          "Courier Partner permits cancellation",
          "AWB has not entered an irreversible operational stage",
        ],
      },
      {
        type: "paragraph",
        text: `**Cancellation may not be available when:**`,
      },
      {
        type: "bullets",
        items: [
          "Shipment has already been picked up",
          "Shipment is in transit",
          "Shipment has reached the destination hub",
          "Shipment is out for delivery",
          "Shipment has already been delivered",
          "Shipment has entered RTO processing",
          "Courier Partner does not permit cancellation",
        ],
      },
      {
        type: "paragraph",
        text: `The actual cancellation status shown on the Nexgo Platform will be considered the applicable status for that shipment.`,
      },
    ],
  },

  {
    number: 3,
    title: "Cancellation Before Pickup",
    content: [
      {
        type: "paragraph",
        text: `If an eligible shipment is cancelled before pickup, Nexgo may reverse or credit eligible prepaid shipping charges.`,
      },
      {
        type: "paragraph",
        text: `However, certain charges may remain non-refundable where they have already been incurred.`,
      },
      {
        type: "paragraph",
        text: `These may include:`,
      },
      {
        type: "bullets",
        items: [
          "Processing charges",
          "Payment gateway charges",
          "Special service charges",
          "Packaging charges",
          "Other third-party charges",
        ],
      },
      {
        type: "paragraph",
        text: `Any applicable deduction will be displayed or communicated where reasonably practicable.`,
      },
    ],
  },

  {
    number: 4,
    title: "Cancellation After Pickup",
    content: [
      {
        type: "paragraph",
        text: `Once a shipment has been picked up, cancellation generally cannot be treated as a normal cancellation.`,
      },
      {
        type: "paragraph",
        text: `The shipment may instead need to proceed through:`,
      },
      {
        type: "bullets",
        items: [
          "Delivery",
          "NDR",
          "RTO",
          "Reverse shipment",
          "Another operational process",
        ],
      },
      {
        type: "paragraph",
        text: `Applicable shipping and logistics charges may therefore remain payable.`,
      },
    ],
  },

  {
    number: 5,
    title: "RTO and Cancellation",
    content: [
      {
        type: "paragraph",
        text: `Cancellation of an order does not automatically eliminate RTO-related charges.`,
      },
      {
        type: "paragraph",
        text: `If a shipment has already entered RTO processing, the applicable:`,
      },
      {
        type: "bullets",
        items: [
          "Forward shipping charges",
          "RTO charges",
          "Handling charges",
          "Other applicable charges",
        ],
      },
      {
        type: "paragraph",
        text: `may remain payable according to the applicable Courier Partner rate card.`,
      },
    ],
  },

  {
    number: 6,
    title: "Refund for Failed Shipment Creation",
    content: [
      {
        type: "paragraph",
        text: `If payment has been successfully deducted but Nexgo is unable to create the shipment because of a technical issue, the amount may be:`,
      },
      {
        type: "bullets",
        items: [
          "Automatically reversed,",
          "Credited to the Nexgo wallet, or",
          "Refunded to the original payment method,",
        ],
      },
      {
        type: "paragraph",
        text: `depending on the payment method and transaction status.`,
      },
    ],
  },

  {
    number: 7,
    title: "Duplicate Payments",
    content: [
      {
        type: "paragraph",
        text: `If you accidentally make the same payment more than once for the same transaction, please contact Nexgo Support.`,
      },
      {
        type: "paragraph",
        text: `After verification, Nexgo may:`,
      },
      {
        type: "bullets",
        items: [
          "Adjust the excess amount against your Nexgo wallet,",
          "Adjust it against future invoices, or",
          "Process a refund where applicable.",
        ],
      },
      {
        type: "paragraph",
        text: `You may be required to provide:`,
      },
      {
        type: "bullets",
        items: [
          "Transaction ID",
          "Payment reference",
          "Account information",
          "Proof of payment",
        ],
      },
    ],
  },

  {
    number: 8,
    title: "Failed or Pending Payments",
    content: [
      {
        type: "paragraph",
        text: `A payment may sometimes show as:`,
      },
      {
        type: "paragraph",
        text: `**Pending → Failed → Successful**`,
      },
      {
        type: "paragraph",
        text: `due to delays between payment systems.`,
      },
      {
        type: "paragraph",
        text: `Users should avoid making repeated payments while a transaction is still showing as pending unless instructed by Nexgo.`,
      },
      {
        type: "paragraph",
        text: `If an amount is deducted but the Nexgo account is not credited, Nexgo may verify the transaction with the relevant payment provider.`,
      },
    ],
  },

  {
    number: 9,
    title: "Wallet Refunds",
    content: [
      {
        type: "paragraph",
        text: `Where Nexgo determines that a refund should be credited to the Nexgo wallet, the amount may be added to the user's wallet balance.`,
      },
      {
        type: "paragraph",
        text: `Wallet credits may be used for eligible Nexgo services.`,
      },
      {
        type: "paragraph",
        text: `Wallet balances may be subject to:`,
      },
      {
        type: "bullets",
        items: [
          "Account verification",
          "KYC requirements",
          "Fraud checks",
          "Applicable commercial terms",
        ],
      },
    ],
  },

  {
    number: 10,
    title: "Refund to Original Payment Method",
    content: [
      {
        type: "paragraph",
        text: `Where a refund is approved for the original payment method, Nexgo may initiate the refund through the applicable payment provider.`,
      },
      {
        type: "paragraph",
        text: `The actual time taken for the refund to appear in the user's bank account, card or payment account may depend on:`,
      },
      {
        type: "bullets",
        items: [
          "Payment gateway",
          "Bank",
          "Card network",
          "UPI provider",
          "Other financial institution",
        ],
      },
      {
        type: "paragraph",
        text: `Nexgo cannot guarantee the processing time of third-party financial institutions.`,
      },
    ],
  },

  {
    number: 11,
    title: "Shipping Charge Refunds",
    content: [
      {
        type: "paragraph",
        text: `Shipping charges are generally paid for logistics services provided or initiated through Nexgo.`,
      },
      {
        type: "paragraph",
        text: `A shipping charge may be refundable where:`,
      },
      {
        type: "bullets",
        items: [
          "A shipment was never successfully created despite payment",
          "A duplicate charge occurred",
          "Nexgo incorrectly charged an amount",
          "A refund is specifically approved by Nexgo",
          "A Courier Partner charge is reversed",
          "Another refund condition expressly applies",
        ],
      },
      {
        type: "paragraph",
        text: `Shipping charges may not be refundable where the logistics service has already been performed or costs have already been incurred.`,
      },
    ],
  },

  {
    number: 12,
    title: "Weight Discrepancy Charges",
    content: [
      {
        type: "paragraph",
        text: `If the actual shipment weight or dimensions differ from the information declared by the merchant, the Courier Partner may apply additional charges.`,
      },
      {
        type: "paragraph",
        text: `Such charges are generally **not refundable** merely because the merchant disputes the measurement.`,
      },
      {
        type: "paragraph",
        text: `If you believe a weight or dimension charge is incorrect, you may raise a dispute through the applicable **Weight Dispute / Billing Dispute** process.`,
      },
      {
        type: "paragraph",
        text: `Supporting evidence may be requested.`,
      },
    ],
  },

  {
    number: 13,
    title: "RTO Charges",
    content: [
      {
        type: "paragraph",
        text: `RTO charges are generally not refundable where the shipment has actually entered or completed the RTO process.`,
      },
      {
        type: "paragraph",
        text: `RTO may occur due to reasons including:`,
      },
      {
        type: "bullets",
        items: [
          "Customer refusal",
          "Incorrect address",
          "Customer unavailable",
          "Delivery failure",
          "COD refusal",
          "Multiple unsuccessful delivery attempts",
          "Other delivery-related circumstances",
        ],
      },
      {
        type: "paragraph",
        text: `Applicable charges depend on the Courier Partner and service selected.`,
      },
    ],
  },

  {
    number: 14,
    title: "COD Charges",
    content: [
      {
        type: "paragraph",
        text: `**COD** charges generally relate to the collection and processing of COD payments.`,
      },
      {
        type: "paragraph",
        text: `If a **COD** shipment is successfully delivered, applicable COD charges may remain payable.`,
      },
      {
        type: "paragraph",
        text: `**COD** charges may not be refundable simply because:`,
      },
      {
        type: "bullets",
        items: [
          "The customer later requests cancellation",
          "The customer returns the product",
          "The shipment enters RTO",
        ],
      },
      {
        type: "paragraph",
        text: `unless Nexgo's applicable commercial terms provide otherwise.`,
      },
    ],
  },

  {
    number: 15,
    title: "NDR Shipments",
    content: [
      {
        type: "paragraph",
        text: `NDR-related charges, where applicable, may be non-refundable once the relevant service or operational activity has been performed.`,
      },
      {
        type: "paragraph",
        text: `Nexgo may provide tools to:`,
      },
      {
        type: "bullets",
        items: [
          "Contact customers",
          "Request reattempts",
          "Update instructions",
          "Manage NDR",
        ],
      },
      {
        type: "paragraph",
        text: `The availability of these services does not guarantee successful delivery.`,
      },
    ],
  },

  {
    number: 16,
    title: "Reverse Shipments",
    content: [
      {
        type: "paragraph",
        text: `Reverse shipment charges are generally treated as separate logistics charges.`,
      },
      {
        type: "paragraph",
        text: `If a reverse shipment has already been picked up or processed, the applicable charges may not be refundable.`,
      },
      {
        type: "paragraph",
        text: `If a reverse shipment is cancelled before processing begins, eligible charges may be reversed depending on the Courier Partner and service conditions.`,
      },
    ],
  },

  {
    number: 17,
    title: "Courier Partner Failure",
    content: [
      {
        type: "paragraph",
        text: `If a Courier Partner fails to provide a service, Nexgo may investigate the issue.`,
      },
      {
        type: "paragraph",
        text: `Depending on the circumstances, Nexgo may:`,
      },
      {
        type: "bullets",
        items: [
          "Raise the issue with the Courier Partner",
          "Provide a service adjustment",
          "Issue an eligible credit",
          "Process a refund",
          "Offer an alternative resolution",
        ],
      },
      {
        type: "paragraph",
        text: `Refunds are not automatic solely because a delivery takes longer than the estimated delivery period.`,
      },
    ],
  },

  {
    number: 18,
    title: "Delivery Delays",
    content: [
      {
        type: "paragraph",
        text: `Estimated delivery timelines are generally estimates and may be affected by:`,
      },
      {
        type: "bullets",
        items: [
          "Weather",
          "Traffic",
          "Natural disasters",
          "Operational disruptions",
          "Public holidays",
          "Remote locations",
          "Customer availability",
          "Incorrect address",
          "Courier Partner delays",
          "Regulatory restrictions",
          "Other circumstances outside Nexgo's reasonable control",
        ],
      },
      {
        type: "paragraph",
        text: `A delivery delay does not automatically create a right to a refund.`,
      },
    ],
  },

  {
    number: 19,
    title: "Lost or Damaged Shipments",
    content: [
      {
        type: "paragraph",
        text: `Refunds for lost or damaged shipments are handled under the applicable **Nexgo Claims Policy**.`,
      },
      {
        type: "paragraph",
        text: `Depending on the circumstances, a claim may require:`,
      },
      {
        type: "bullets",
        items: [
          "Shipment information",
          "Invoice",
          "Product details",
          "Proof of value",
          "Packaging information",
          "Images/videos",
          "Delivery information",
          "Other supporting documents",
        ],
      },
      {
        type: "paragraph",
        text: `Approval of a claim does not automatically mean that the entire shipment value will be refunded.`,
      },
    ],
  },

  {
    number: 20,
    title: "Incorrect or Unauthorized Charges",
    content: [
      {
        type: "paragraph",
        text: `If you believe that Nexgo has charged you incorrectly, you should contact Nexgo Support as soon as possible.`,
      },
      {
        type: "paragraph",
        text: `Please provide:`,
      },
      {
        type: "bullets",
        items: [
          "Shipment/AWB number",
          "Invoice number",
          "Transaction ID",
          "Date of transaction",
          "Amount charged",
          "Reason for dispute",
          "Supporting documents",
        ],
      },
      {
        type: "paragraph",
        text: `Nexgo may investigate the transaction and, where appropriate, issue an adjustment or refund.`,
      },
    ],
  },

  {
    number: 21,
    title: "Promotional Credits",
    content: [
      {
        type: "paragraph",
        text: `Nexgo may occasionally provide:`,
      },
      {
        type: "bullets",
        items: [
          "Promotional credits",
          "Coupons",
          "Shipping credits",
          "Cashback",
          "Referral credits",
          "Promotional wallet balances",
        ],
      },
      {
        type: "paragraph",
        text: `Unless expressly stated otherwise, promotional credits:`,
      },
      {
        type: "bullets",
        items: [
          "Are not cash",
          "Are non-transferable",
          "Cannot be withdrawn",
          "May have an expiry date",
          "May be subject to eligibility requirements",
        ],
      },
      {
        type: "paragraph",
        text: `Promotional credits may not be refundable.`,
      },
    ],
  },

  {
    number: 22,
    title: "Taxes and GST",
    content: [
      {
        type: "paragraph",
        text: `Where applicable, refunds and adjustments will be processed subject to applicable tax and GST requirements.`,
      },
      {
        type: "paragraph",
        text: `If a tax invoice has already been issued, the appropriate credit note or adjustment mechanism may be used where required.`,
      },
    ],
  },

  {
    number: 23,
    title: "Refund Processing Time",
    content: [
      {
        type: "paragraph",
        text: `Once a refund is approved, Nexgo will generally initiate the refund within a reasonable processing period.`,
      },
      {
        type: "paragraph",
        text: `The actual time for funds to reach the user's account may depend on the relevant payment provider or bank.`,
      },
      {
        type: "paragraph",
        text: `Typical processing may vary depending on:`,
      },
    ],
  },

  {
    number: 24,
    title: "How to Request a Refund",
    content: [
      {
        type: "paragraph",
        text: `To request a refund or billing adjustment:`,
      },
    ],
  },

  {
    number: 25,
    title: "Refund Review",
    content: [
      {
        type: "paragraph",
        text: `Nexgo may review:`,
      },
      {
        type: "bullets",
        items: [
          "Shipment status",
          "Courier Partner records",
          "Payment records",
          "API logs",
          "Tracking events",
          "Pickup records",
          "Delivery records",
          "Billing records",
          "Account history",
        ],
      },
      {
        type: "paragraph",
        text: `Nexgo may request additional information before approving or rejecting a refund.`,
      },
    ],
  },

  {
    number: 26,
    title: "Fraudulent Refund Requests",
    content: [
      {
        type: "paragraph",
        text: `Nexgo may reject or suspend refund requests where it reasonably believes that:`,
      },
      {
        type: "bullets",
        items: [
          "False information was provided",
          "Documents were manipulated",
          "The transaction is fraudulent",
          "The account is being abused",
          "Multiple duplicate claims are being submitted",
          "The refund process is being intentionally misused",
        ],
      },
      {
        type: "paragraph",
        text: `Nexgo may also suspend the relevant account where necessary.`,
      },
    ],
  },

  {
    number: 27,
    title: "Cancellation Through API",
    content: [
      {
        type: "paragraph",
        text: `If you use the Nexgo API, cancellation must follow the applicable API documentation.`,
      },
      {
        type: "paragraph",
        text: `A successful API cancellation request does not necessarily mean that a shipment has been cancelled.`,
      },
      {
        type: "paragraph",
        text: `Merchants should verify the shipment status returned by Nexgo.`,
      },
      {
        type: "paragraph",
        text: `For API integrations, merchants are responsible for handling:`,
      },
      {
        type: "bullets",
        items: [
          "Cancellation responses",
          "Errors",
          "Duplicate requests",
          "Webhook events",
          "Shipment status changes",
        ],
      },
    ],
  },

  {
    number: 28,
    title: "Cancellation Through Third-Party Integrations",
    content: [
      {
        type: "paragraph",
        text: `If a shipment is created through an ecommerce platform, marketplace, ERP or other integration, cancellation may depend on both:`,
      },
      {
        type: "bullets",
        items: [
          "Nexgo's system, and",
          "The third-party platform.",
        ],
      },
      {
        type: "paragraph",
        text: `A cancellation request submitted to one platform may not automatically cancel a shipment on another platform.`,
      },
      {
        type: "paragraph",
        text: `Merchants should verify the final shipment status.`,
      },
    ],
  },

   {
    number: 29,
    title: "Non-Refundable Charges",
    content: [
      {
        type: "paragraph",
        text: `Unless otherwise agreed, the following may generally be non-refundable once incurred:`,
      },
      {
        type: "bullets",
        items: [
          "Completed shipping charges",
          "RTO charges",
          "Reverse pickup charges",
          "COD processing charges",
          "Weight discrepancy charges",
          "Additional handling charges",
          "Third-party payment charges",
          "Completed premium services",
          "Charges resulting from incorrect information supplied by the merchant",
          "Other third-party charges already incurred",
        ],
      },
    ],
  },

  {
    number: 30,
    title: "Exceptions",
    content: [
      {
        type: "paragraph",
        text: `Nexgo may make exceptions to this Policy where:`,
      },
      {
        type: "bullets",
        items: [
          "Required by law",
          "Necessary to correct a Nexgo error",
          "Required due to a payment-system issue",
          "Approved by Nexgo management",
          "Required under a separate written agreement",
          "Necessary to resolve an exceptional technical or operational issue",
        ],
      },
      {
        type: "paragraph",
        text: `An exception in one case does not create an obligation to provide the same exception in another case.`,
      },
    ],
  },

  {
    number: 31,
    title: "No Automatic Refund",
    content: [
      {
        type: "paragraph",
        text: `Submitting a cancellation or refund request does not guarantee approval.`,
      },
      {
        type: "paragraph",
        text: `Each request may be evaluated according to:`,
      },
      {
        type: "bullets",
        items: [
          "Shipment status",
          "Applicable service terms",
          "Courier Partner rules",
          "Payment status",
          "Reason for cancellation",
          "Applicable commercial agreement",
          "Applicable law",
        ],
      },
    ],
  },

];


export const paymentTimeline = [
  {
    method: "UPI",
    processing: "Subject to payment provider",
  },
  {
    method: "Debit/Credit Card",
    processing: "Subject to bank/card network",
  },
  {
    method: "Net Banking",
    processing: "Subject to bank",
  },
  {
    method: "Wallet",
    processing: "Subject to Nexgo processing",
  },
  {
    method: "Other methods",
    processing: "According to applicable provider",
  },
];

export const refundSteps = [
  {
    step: "Step 1",
    text: "Log in to your Nexgo Dashboard.",
  },
  {
    step: "Step 2",
    prefix: "Go to:",
    highlight: "Support → Billing & Payments",
  },
  {
    step: "Step 3",
    prefix: "Select:",
    highlight: "Raise a Refund / Billing Dispute",
  },
  {
    step: "Step 4",
    prefix: "Provide:",
    bullets: [
      "Shipment/AWB number",
      "Transaction ID",
      "Invoice number",
      "Amount",
      "Reason",
      "Supporting documents",
    ],
  },
  {
    step: "Step 5",
    text: "Submit the request.",
  },
];

export const policyProcessingNote =
  "The displayed processing timeline should be treated as an estimate rather than a guarantee.";

export const refundRequestNote =
  "Nexgo may review the request and contact you for additional information.";

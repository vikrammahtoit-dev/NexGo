export const navbarLinks = [
  {
    label: "Solutions",
    dropdown: true,

    menu: {
      title: "SOLUTIONS",

      items: [
        {
          label: "Domestic Shipping",
          description: "Simplify your online deliveries",
          icon: "ShoppingBag",
          path: "/solutions/ecommerce",
        },
        // {
        //   label: "Enterprise Logistics",
        //   description: "Power your large-scale operations",
        //   icon: "Building2",
        //   path: "/solutions/enterprise",
        // },
        // {
        //   label: "Shipping Solutions",
        //   description: "Ship faster with multiple courier partners",
        //   icon: "Package",
        //   path: "/solutions/shipping",
        // },
        // {
        //   label: "Last-Mile Delivery",
        //   description: "Improve your final-mile delivery",
        //   icon: "MapPin",
        //   path: "/solutions/last-mile",
        // },
      ],
    },
  },

  {
    label: "Platform",
    dropdown: true,

    menu: {
      title: "PLATFORM",

      items: [
        {
          label: "Multi-Courier Shipping",
          description: "Connect with multiple courier partners",
          icon: "Truck",
          path: "/platform/shipping",
        },
        // {
        //   label: "Real-Time Tracking",
        //   description: "Track every shipment in real time",
        //   icon: "Map",
        //   path: "/platform/tracking",
        // },
        // {
        //   label: "Analytics",
        //   description: "Make smarter logistics decisions",
        //   icon: "ChartNoAxesCombined",
        //   path: "/platform/analytics",
        // },
        // {
        //   label: "Automation",
        //   description: "Automate repetitive logistics workflows",
        //   icon: "Workflow",
        //   path: "/platform/automation",
        // },
      ],
    },
  },

  {
    label: "Tracking",
    path: "/tracking",
    dropdown: false,
  },

  {
    label: "Pricing",
    path: "/pricing",
    dropdown: false,
  },

  {
    label: "Resources",
    dropdown: true,

    menu: {
      title: "RESOURCES",

      items: [
        {
          label: "Blog",
          description: "Latest logistics insights",
          icon: "BookOpen",
          path: "/resources/blog",
        },
        {
          label: "Guides",
          description: "Learn logistics best practices",
          icon: "BookMarked",
          path: "/resources/guides",
        },
        {
          label: "Help Center",
          description: "Find answers to common questions",
          icon: "CircleHelp",
          path: "/resources/help",
        },
      ],
    },
  },
];
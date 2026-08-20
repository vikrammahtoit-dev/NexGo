import React from "react";

export default function CookiePolicyHero({
    className = "",
}) {
    return (
        <svg
            viewBox="0 0 530 323"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-label="Nexgo cookie preferences illustration"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                {/* =====================================================
            BACKGROUND GRADIENT
        ===================================================== */}

                <linearGradient
                    id="heroBg"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stopColor="#eef4ff"
                    />

                    <stop
                        offset="100%"
                        stopColor="#ffffff"
                    />
                </linearGradient>

                {/* =====================================================
            BLUE HEADER GRADIENT
        ===================================================== */}

                <linearGradient
                    id="browserHeader"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stopColor="#0b38a8"
                    />

                    <stop
                        offset="100%"
                        stopColor="#08247e"
                    />
                </linearGradient>

                {/* =====================================================
            PANEL SHADOW
        ===================================================== */}

                <filter
                    id="panelShadow"
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="170%"
                >
                    <feDropShadow
                        dx="0"
                        dy="8"
                        stdDeviation="8"
                        floodColor="#183d91"
                        floodOpacity="0.18"
                    />
                </filter>

                {/* =====================================================
            TRUCK SHADOW
        ===================================================== */}

                <filter
                    id="softShadow"
                    x="-30%"
                    y="-50%"
                    width="160%"
                    height="200%"
                >
                    <feGaussianBlur
                        stdDeviation="5"
                    />
                </filter>

                {/* =====================================================
            SHIELD GRADIENT
        ===================================================== */}

                <linearGradient
                    id="shieldGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stopColor="#123da8"
                    />

                    <stop
                        offset="100%"
                        stopColor="#06216e"
                    />
                </linearGradient>

                {/* =====================================================
            TRUCK GRADIENT
        ===================================================== */}

                <linearGradient
                    id="truckGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stopColor="#0c3baa"
                    />

                    <stop
                        offset="100%"
                        stopColor="#061f73"
                    />
                </linearGradient>

                {/* =====================================================
            WINDOW GRADIENT
        ===================================================== */}

                <linearGradient
                    id="windowGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stopColor="#dbe8ff"
                    />

                    <stop
                        offset="100%"
                        stopColor="#a9c5f5"
                    />
                </linearGradient>
            </defs>

            {/* =======================================================
          BACKGROUND
      ======================================================= */}

            <rect
                x="0"
                y="0"
                width="530"
                height="323"
                fill="url(#heroBg)"
            />

            {/* =======================================================
          SOFT BACKGROUND GLOW
      ======================================================= */}

            <ellipse
                cx="250"
                cy="180"
                rx="245"
                ry="135"
                fill="#ffffff"
                opacity="0.55"
            />

            {/* =======================================================
          CITY SKYLINE
      ======================================================= */}

            <g
                fill="#dce8fb"
                opacity="0.48"
            >
                {/* Left buildings */}

                <rect
                    x="23"
                    y="147"
                    width="25"
                    height="92"
                    rx="3"
                />

                <rect
                    x="52"
                    y="126"
                    width="31"
                    height="113"
                    rx="3"
                />

                <rect
                    x="87"
                    y="153"
                    width="23"
                    height="86"
                    rx="3"
                />

                <rect
                    x="114"
                    y="111"
                    width="31"
                    height="128"
                    rx="3"
                />

                <rect
                    x="149"
                    y="139"
                    width="22"
                    height="100"
                    rx="3"
                />

                {/* Middle */}

                <rect
                    x="180"
                    y="154"
                    width="29"
                    height="85"
                    rx="3"
                />

                <rect
                    x="213"
                    y="121"
                    width="25"
                    height="118"
                    rx="3"
                />

                {/* Right */}

                <rect
                    x="348"
                    y="148"
                    width="27"
                    height="91"
                    rx="3"
                />

                <rect
                    x="379"
                    y="127"
                    width="30"
                    height="112"
                    rx="3"
                />

                <rect
                    x="414"
                    y="154"
                    width="24"
                    height="85"
                    rx="3"
                />

                <rect
                    x="443"
                    y="139"
                    width="30"
                    height="100"
                    rx="3"
                />

                <rect
                    x="478"
                    y="155"
                    width="29"
                    height="84"
                    rx="3"
                />
            </g>

            {/* =======================================================
          BUILDING WINDOWS
      ======================================================= */}

            <g
                fill="#c6d9f5"
                opacity="0.6"
            >
                <rect x="58" y="140" width="6" height="8" rx="1" />
                <rect x="72" y="140" width="6" height="8" rx="1" />
                <rect x="58" y="158" width="6" height="8" rx="1" />
                <rect x="72" y="158" width="6" height="8" rx="1" />

                <rect x="119" y="124" width="6" height="8" rx="1" />
                <rect x="132" y="124" width="6" height="8" rx="1" />
                <rect x="119" y="141" width="6" height="8" rx="1" />
                <rect x="132" y="141" width="6" height="8" rx="1" />

                <rect x="384" y="139" width="6" height="8" rx="1" />
                <rect x="398" y="139" width="6" height="8" rx="1" />
                <rect x="384" y="157" width="6" height="8" rx="1" />
                <rect x="398" y="157" width="6" height="8" rx="1" />

                <rect x="448" y="151" width="7" height="8" rx="1" />
                <rect x="461" y="151" width="7" height="8" rx="1" />
            </g>

            {/* =======================================================
          DOTTED DELIVERY ROUTE
      ======================================================= */}

            <path
                d="M328 69
           C370 56 415 61 446 78
           C472 92 473 111 450 120
           C427 129 405 119 412 99
           C420 78 458 77 485 91
           C510 104 517 126 508 148"
                fill="none"
                stroke="#9bb9f7"
                strokeWidth="1.3"
                strokeDasharray="5 5"
            />

            <path
                d="M395 64
           C423 51 457 50 476 63
           C492 73 485 86 469 92"
                fill="none"
                stroke="#0b39a5"
                strokeWidth="1.2"
                strokeDasharray="4 5"
            />

            {/* =======================================================
          LOCATION PIN
      ======================================================= */}

            <g transform="translate(475 10)">
                <path
                    d="M11 0
             C4.9 0 0 4.9 0 11
             C0 19.5 11 31 11 31
             C11 31 22 19.5 22 11
             C22 4.9 17.1 0 11 0Z"
                    fill="#082e98"
                />

                <circle
                    cx="11"
                    cy="11"
                    r="4.2"
                    fill="#ffffff"
                />
            </g>

            {/* =======================================================
          BROWSER / PREFERENCE PANEL
      ======================================================= */}

            <g filter="url(#panelShadow)">

                {/* Outer panel */}

                <rect
                    x="94"
                    y="9"
                    width="264"
                    height="276"
                    rx="14"
                    fill="#ffffff"
                    stroke="#d2ddf1"
                    strokeWidth="1"
                />

                {/* Blue browser top */}

                <path
                    d="M94 23
             C94 15.3 100.3 9 108 9
             H344
             C351.7 9 358 15.3 358 23
             V31
             H94Z"
                    fill="url(#browserHeader)"
                />

                {/* Browser dots */}

                <circle
                    cx="108"
                    cy="20"
                    r="3"
                    fill="#ffffff"
                />

                <circle
                    cx="120"
                    cy="20"
                    r="3"
                    fill="#ffffff"
                    opacity="0.85"
                />

                <circle
                    cx="132"
                    cy="20"
                    r="3"
                    fill="#ffffff"
                    opacity="0.7"
                />

                {/* Inner top divider */}

                <line
                    x1="95"
                    y1="34"
                    x2="357"
                    y2="34"
                    stroke="#edf1f8"
                    strokeWidth="1"
                />

                {/* ===================================================
            PANEL TITLE
        =================================================== */}

                <text
                    x="114"
                    y="57"
                    fill="#10194a"
                    fontSize="11.5"
                    fontWeight="700"
                    fontFamily="Arial, Helvetica, sans-serif"
                >
                    Your preferences
                </text>

                {/* ===================================================
            ROW 1
        =================================================== */}

                <line
                    x1="108"
                    y1="75"
                    x2="344"
                    y2="75"
                    stroke="#edf1f7"
                />

                {/* Shield icon background */}

                <rect
                    x="113"
                    y="65"
                    width="23"
                    height="23"
                    rx="7"
                    fill="#eff4ff"
                />

                <path
                    d="M124.5 68
             L130 70
             V75
             C130 79 127.2 82 124.5 83
             C121.8 82 119 79 119 75
             V70Z"
                    fill="none"
                    stroke="#0734a3"
                    strokeWidth="1.4"
                />

                <path
                    d="M122 75
             L124 77
             L127.5 73"
                    fill="none"
                    stroke="#0734a3"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <text
                    x="144"
                    y="80"
                    fill="#10194a"
                    fontSize="9"
                    fontWeight="600"
                    fontFamily="Arial, Helvetica, sans-serif"
                >
                    Strictly Necessary
                </text>

                <text
                    x="270"
                    y="80"
                    fill="#ff5a00"
                    fontSize="8.5"
                    fontWeight="600"
                    fontFamily="Arial, Helvetica, sans-serif"
                >
                    Always Active
                </text>

                {/* ===================================================
            ROW 2
        =================================================== */}

                <line
                    x1="108"
                    y1="112"
                    x2="344"
                    y2="112"
                    stroke="#edf1f7"
                />

                <rect
                    x="113"
                    y="102"
                    width="23"
                    height="23"
                    rx="7"
                    fill="#eff4ff"
                />

                {/* Sliders */}

                <g
                    stroke="#0734a3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                >
                    <line x1="119" y1="108" x2="130" y2="108" />
                    <line x1="119" y1="113" x2="130" y2="113" />
                    <line x1="119" y1="118" x2="130" y2="118" />

                    <circle cx="123" cy="108" r="1.6" fill="#0734a3" />
                    <circle cx="127" cy="113" r="1.6" fill="#0734a3" />
                    <circle cx="122" cy="118" r="1.6" fill="#0734a3" />
                </g>

                <text
                    x="144"
                    y="117"
                    fill="#10194a"
                    fontSize="9"
                    fontWeight="600"
                    fontFamily="Arial, Helvetica, sans-serif"
                >
                    Functional
                </text>

                {/* Toggle */}

                <rect
                    x="304"
                    y="106"
                    width="28"
                    height="14"
                    rx="7"
                    fill="#ff5a00"
                />

                <circle
                    cx="324"
                    cy="113"
                    r="5"
                    fill="#ffffff"
                />

                {/* ===================================================
            ROW 3
        =================================================== */}

                <line
                    x1="108"
                    y1="149"
                    x2="344"
                    y2="149"
                    stroke="#edf1f7"
                />

                <rect
                    x="113"
                    y="139"
                    width="23"
                    height="23"
                    rx="7"
                    fill="#eff4ff"
                />

                {/* Analytics icon */}

                <g
                    stroke="#0734a3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                >
                    <line x1="119" y1="156" x2="119" y2="148" />
                    <line x1="124" y1="156" x2="124" y2="145" />
                    <line x1="129" y1="156" x2="129" y2="142" />
                </g>

                <text
                    x="144"
                    y="154"
                    fill="#10194a"
                    fontSize="9"
                    fontWeight="600"
                    fontFamily="Arial, Helvetica, sans-serif"
                >
                    Analytics
                </text>

                <rect
                    x="304"
                    y="143"
                    width="28"
                    height="14"
                    rx="7"
                    fill="#ff5a00"
                />

                <circle
                    cx="324"
                    cy="150"
                    r="5"
                    fill="#ffffff"
                />

                {/* ===================================================
            ROW 4
        =================================================== */}

                <line
                    x1="108"
                    y1="186"
                    x2="344"
                    y2="186"
                    stroke="#edf1f7"
                />

                <rect
                    x="113"
                    y="176"
                    width="23"
                    height="23"
                    rx="7"
                    fill="#eff4ff"
                />

                {/* Gauge */}

                <path
                    d="M119 192
             A7 7 0 0 1 131 192"
                    fill="none"
                    stroke="#0734a3"
                    strokeWidth="1.5"
                />

                <line
                    x1="125"
                    y1="191"
                    x2="128"
                    y2="186"
                    stroke="#0734a3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />

                <text
                    x="144"
                    y="191"
                    fill="#10194a"
                    fontSize="9"
                    fontWeight="600"
                    fontFamily="Arial, Helvetica, sans-serif"
                >
                    Performance
                </text>

                <rect
                    x="304"
                    y="180"
                    width="28"
                    height="14"
                    rx="7"
                    fill="#ff5a00"
                />

                <circle
                    cx="324"
                    cy="187"
                    r="5"
                    fill="#ffffff"
                />

                {/* ===================================================
            ROW 5
        =================================================== */}

                <line
                    x1="108"
                    y1="223"
                    x2="344"
                    y2="223"
                    stroke="#edf1f7"
                />

                <rect
                    x="113"
                    y="213"
                    width="23"
                    height="23"
                    rx="7"
                    fill="#eff4ff"
                />

                {/* Megaphone */}

                <path
                    d="M119 220
             L126 217
             L130 217
             V226
             L126 226
             L119 223Z"
                    fill="none"
                    stroke="#0734a3"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                />

                <line
                    x1="119"
                    y1="223"
                    x2="117"
                    y2="228"
                    stroke="#0734a3"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                />

                <text
                    x="144"
                    y="228"
                    fill="#10194a"
                    fontSize="9"
                    fontWeight="600"
                    fontFamily="Arial, Helvetica, sans-serif"
                >
                    Marketing &amp; Advertising
                </text>

                {/* OFF toggle */}

                <rect
                    x="304"
                    y="217"
                    width="28"
                    height="14"
                    rx="7"
                    fill="#cbd5e7"
                />

                <circle
                    cx="312"
                    cy="224"
                    r="5"
                    fill="#ffffff"
                />

                {/* Bottom subtle area */}

                <line
                    x1="108"
                    y1="245"
                    x2="344"
                    y2="245"
                    stroke="#f0f3f8"
                />

            </g>

            {/* =======================================================
          SHIELD
      ======================================================= */}

            <g transform="translate(15 195)">

                {/* Outer shield */}

                <path
                    d="M39 0
             L76 14
             V48
             C76 72 59 88 39 97
             C19 88 2 72 2 48
             V14Z"
                    fill="#061d6c"
                    stroke="#041657"
                    strokeWidth="1"
                />

                {/* Inner shield */}

                <path
                    d="M39 8
             L68 19
             V47
             C68 65 55 78 39 87
             C23 78 10 65 10 47
             V19Z"
                    fill="url(#shieldGradient)"
                />

                {/* Orange check */}

                <path
                    d="M25 48
             L34 57
             L55 34"
                    fill="none"
                    stroke="#ff5a00"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

            </g>

            {/* =======================================================
          TRUCK SHADOW
      ======================================================= */}

            <ellipse
                cx="422"
                cy="286"
                rx="101"
                ry="10"
                fill="#a9c0e7"
                opacity="0.35"
                filter="url(#softShadow)"
            />

            {/* =======================================================
          TRUCK
      ======================================================= */}

            <g transform="translate(351 195)">

                {/* Cargo body */}

                <path
                    d="M0 8
             C0 3.6 3.6 0 8 0
             H101
             C105.4 0 109 3.6 109 8
             V67
             H0Z"
                    fill="url(#truckGradient)"
                />

                {/* Cargo highlight */}

                <path
                    d="M7 8
             H101
             C103 8 105 10 105 12
             V17
             H7Z"
                    fill="#0f4bc1"
                    opacity="0.65"
                />

                {/* Front cabin */}

                <path
                    d="M109 25
             H137
             C143 25 147 29 149 35
             L154 52
             V67
             H109Z"
                    fill="#092d91"
                />

                {/* Cabin lower */}

                <path
                    d="M109 53
             H149
             V67
             H109Z"
                    fill="#072473"
                />

                {/* Front windshield */}

                <path
                    d="M116 29
             H135
             C138 29 140 31 141 34
             L144 45
             H116Z"
                    fill="url(#windowGradient)"
                    stroke="#061f6e"
                    strokeWidth="1.5"
                />

                {/* Windshield divider */}

                <line
                    x1="132"
                    y1="29"
                    x2="132"
                    y2="45"
                    stroke="#092c91"
                    strokeWidth="1.3"
                />

                {/* Nexgo logo */}

                <g transform="translate(18 25)">

                    <text
                        x="0"
                        y="15"
                        fill="#ffffff"
                        fontSize="17"
                        fontWeight="800"
                        fontFamily="Arial, Helvetica, sans-serif"
                        letterSpacing="-0.8"
                    >
                        NEXGO
                    </text>

                    <path
                        d="M-3 8
               L3 5
               L0 12
               L7 8"
                        fill="#ff5a00"
                    />

                </g>

                {/* Door line */}

                <path
                    d="M110 49
             V66"
                    fill="none"
                    stroke="#061e6b"
                    strokeWidth="1.5"
                />

                {/* Door handle */}

                <rect
                    x="134"
                    y="50"
                    width="7"
                    height="2"
                    rx="1"
                    fill="#a9c3ed"
                />

                {/* Bumper */}

                <path
                    d="M148 62
             H156
             V68
             H146Z"
                    fill="#071d62"
                />

                {/* ===================================================
            WHEELS
        =================================================== */}

                <g>
                    <circle
                        cx="34"
                        cy="69"
                        r="17"
                        fill="#061344"
                    />

                    <circle
                        cx="34"
                        cy="69"
                        r="10"
                        fill="#ffffff"
                    />

                    <circle
                        cx="34"
                        cy="69"
                        r="5"
                        fill="#9aa8c0"
                    />

                    <circle
                        cx="127"
                        cy="69"
                        r="17"
                        fill="#061344"
                    />

                    <circle
                        cx="127"
                        cy="69"
                        r="10"
                        fill="#ffffff"
                    />

                    <circle
                        cx="127"
                        cy="69"
                        r="5"
                        fill="#9aa8c0"
                    />
                </g>

            </g>

            {/* =======================================================
          FOREGROUND GROUND SHADOW
      ======================================================= */}

            <ellipse
                cx="264"
                cy="297"
                rx="251"
                ry="11"
                fill="#d8e5f8"
                opacity="0.55"
            />

        </svg>
    );
}
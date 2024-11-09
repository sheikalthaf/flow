/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}",
    "./dist/mee/**/*.{html,ts,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--primary"),
        muted: withOpacity("--muted"),
        gy: withOpacity("--color-gray"),
        background: withOpacity("--background"),
        foreground: withOpacity("--foreground"),
        "muted-background": withOpacity("--muted-background"),
        border: withOpacity("--border"),
        text: withOpacity("--text"),
        input: withOpacity("--input"),
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Inter"],
        code: ["Geist Mono"],
        "dm-mono": [`"DM Mono", monospace`],
      },
      spacing: {
        "b0.5": "calc(var(--spacing-base) * 0.5)",
        b: "var(--spacing-base)",
        "b1.5": "calc(var(--spacing-base) * 1.5)",
        b2: "calc(var(--spacing-base) * 2)",
        "b2.5": "calc(var(--spacing-base) * 2.5)",
        b3: "calc(var(--spacing-base) * 3)",
        "b3.5": "calc(var(--spacing-base) * 3.5)",
        b4: "calc(var(--spacing-base) * 4)",
        b5: "calc(var(--spacing-base) * 5)",
        b6: "calc(var(--spacing-base) * 6)",
        b7: "calc(var(--spacing-base) * 7)",
        b8: "calc(var(--spacing-base) * 8)",
        b9: "calc(var(--spacing-base) * 9)",
        b10: "calc(var(--spacing-base) * 10)",
        b11: "calc(var(--spacing-base) * 11)",
        b12: "calc(var(--spacing-base) * 12)",
        b13: "calc(var(--spacing-base) * 13)",
      },
      borderWidth: {
        "b0.5": "calc(var(--spacing-base) * 0.5)",
      },
      borderRadius: {
        base: "var(--radius)",
        bt: "calc(var(--radius) * calc(2/3))",
        h: "calc(var(--radius) / 2)",
      },
      zIndex: {
        p: 599,
      },
    },
  },
  plugins: [],
};

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

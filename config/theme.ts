export const colours = {
  black: "#000000",
  lightBlack: "#1A1A18",
  lightYellow: "#FFF9E2",
  softYellow: "#FFF4CC",
  green: "#D5DAA3",
  blue: "#8DB2CB",
  orange: "#EBC476",
  red: "#E98C67",
  pink: "#DB85A8",
  grey1: "#333331",
  grey2: "#4D4C4A",
  grey3: "#807F7A",
  grey4: "#999892",
  grey5: "#B3B2AB",
  grey6: "#CCCAC3",
  grey7: "#E6E4DC",
  grey8: "#FFFDF4",
  grey9: "#FFFEF8",
  white: "#FFFFFF",
};

export const theme = {
  button: {
    size: {
      small: {
        border: {
          radius: "0.2rem",
        },
        pad: {
          vertical: "clamp(10px, 0.5rem, 0.5rem)",
          horizontal: "clamp(20px, 1rem, 1rem)",
        },
      },
      medium: {
        border: {
          radius: "0.3rem",
        },
        pad: {
          vertical: "clamp(12px, 0.7rem, 0.7rem)",
          horizontal: "clamp(24px, 2rem, 2rem)",
        },
      },
      large: {
        border: {
          radius: "0.4rem",
        },
        pad: {
          vertical: "clamp(16px, 0.9rem, 0.9rem)",
          horizontal: "clamp(32px, 3rem, 3rem)",
        },
      },
    },
    primary: {
      background: {
        color: {
          dark: colours.softYellow,
          light: colours.softYellow,
        },
      },
    },
    default: {
      background: {
        color: { dark: "transparent", light: "transparent" },
      },
    },
    color: { dark: "white", light: "white" },
    border: {
      width: "2px",
      // "radius": "1.2rem"
    },
  },
  global: {
    colors: {
      brand: colours.softYellow,
      brandTint: colours.lightYellow,
      brandShade: colours.green,
      black: colours.black,
      active: "transparent",
      border: {
        light: colours.grey5,
        dark: colours.grey3,
      },
      focus: "transparent",
      placeholder: colours.grey4,
      text: {
        light: colours.grey8,
        dark: colours.grey8,
      },
      ...colours,
    },
    breakpoints: {
      small: {
        value: 768, // 12
      },
      medium: {
        value: 1280, // 20
      },
      large: {
        value: 1600, // 25
      },
      xlarge: {
        value: 2560,
      },
    },
    font: {
      family: "'Titillium Web', sans-serif",
      height: "1.3rem",
      size: "1rem",
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "0.125rem",
      xsmall: "0.25rem",
      small: "0.5rem",
      medium: "1rem",
      large: "2rem",
      xlarge: "4rem",
      xxlarge: "6rem",
      xxxlarge: "8rem",
      responsiveBreakpoint: "small",
    },
    control: {
      border: {
        radius: "0.3rem",
      },
    },
    input: {
      font: {
        height: "2.5rem",
      },
      padding: {
        horizontal: "1rem",
        vertical: "0rem",
      },
      extend: () => `
            border: none;
            color: ${theme.global.colors.softYellow};
            background : ${theme.global.colors.grey7};
        `,
    },
  },
  font: {
    family: "'Titillium Web', sans-serif",
    height: "1.3rem",
    maxWidth: "432px",
    size: "1rem",
  },
  heading: {
    font: {
      family: "'Play', sans-serif",
    },
    level: {
      "1": {
        xxsmall: {
          size: "0.6rem",
          height: "1rem",
          maxWidth: "auto",
        },
        xsmall: {
          size: "0.8rem",
          height: "1.1rem",
          maxWidth: "auto",
        },
        small: {
          size: "0.9rem",
          height: "1.2rem",
          maxWidth: "auto",
        },
        medium: {
          size: "1rem",
          height: "1.6rem",
          maxWidth: "auto",
        },
        large: {
          size: "1.2rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xlarge: {
          size: "1.4rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xxlarge: {
          size: "1.7rem",
          height: "2.3rem",
          maxWidth: "auto",
        },
        xxxlarge: {
          size: "2rem",
          height: "2.5rem",
          maxWidth: "auto",
        },
        superlarge: {
          size: "2.3rem",
          height: "2.95rem",
          maxWidth: "auto",
        },
        megalarge: {
          size: "2.6rem",
          height: "3.35rem",
          maxWidth: "auto",
        },
        ultralarge: {
          size: "3rem",
          height: "3.9rem",
          maxWidth: "auto",
        },
      },
      "2": {
        xxsmall: {
          size: "0.6rem",
          height: "1rem",
          maxWidth: "auto",
        },
        xsmall: {
          size: "0.8rem",
          height: "1.1rem",
          maxWidth: "auto",
        },
        small: {
          size: "0.9rem",
          height: "1.2rem",
          maxWidth: "auto",
        },
        medium: {
          size: "1rem",
          height: "1.6rem",
          maxWidth: "auto",
        },
        large: {
          size: "1.2rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xlarge: {
          size: "1.4rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xxlarge: {
          size: "1.7rem",
          height: "2.3rem",
          maxWidth: "auto",
        },
        xxxlarge: {
          size: "2rem",
          height: "2.5rem",
          maxWidth: "auto",
        },
        superlarge: {
          size: "2.3rem",
          height: "2.95rem",
          maxWidth: "auto",
        },
        megalarge: {
          size: "2.6rem",
          height: "3.35rem",
          maxWidth: "auto",
        },
        ultralarge: {
          size: "3rem",
          height: "3.9rem",
          maxWidth: "auto",
        },
      },
      "3": {
        xxsmall: {
          size: "0.6rem",
          height: "1rem",
          maxWidth: "auto",
        },
        xsmall: {
          size: "0.8rem",
          height: "1.1rem",
          maxWidth: "auto",
        },
        small: {
          size: "0.9rem",
          height: "1.2rem",
          maxWidth: "auto",
        },
        medium: {
          size: "1rem",
          height: "1.6rem",
          maxWidth: "auto",
        },
        large: {
          size: "1.2rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xlarge: {
          size: "1.4rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xxlarge: {
          size: "1.7rem",
          height: "2.3rem",
          maxWidth: "auto",
        },
        xxxlarge: {
          size: "2rem",
          height: "2.5rem",
          maxWidth: "auto",
        },
        superlarge: {
          size: "2.3rem",
          height: "2.95rem",
          maxWidth: "auto",
        },
        megalarge: {
          size: "2.6rem",
          height: "3.35rem",
          maxWidth: "auto",
        },
        ultralarge: {
          size: "3rem",
          height: "3.9rem",
          maxWidth: "auto",
        },
      },
      "4": {
        xxsmall: {
          size: "0.6rem",
          height: "1rem",
          maxWidth: "auto",
        },
        xsmall: {
          size: "0.8rem",
          height: "1.1rem",
          maxWidth: "auto",
        },
        small: {
          size: "0.9rem",
          height: "1.2rem",
          maxWidth: "auto",
        },
        medium: {
          size: "1rem",
          height: "1.6rem",
          maxWidth: "auto",
        },
        large: {
          size: "1.2rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xlarge: {
          size: "1.4rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xxlarge: {
          size: "1.7rem",
          height: "2.3rem",
          maxWidth: "auto",
        },
        xxxlarge: {
          size: "2rem",
          height: "2.5rem",
          maxWidth: "auto",
        },
        superlarge: {
          size: "2.3rem",
          height: "2.95rem",
          maxWidth: "auto",
        },
        megalarge: {
          size: "2.6rem",
          height: "3.35rem",
          maxWidth: "auto",
        },
        ultralarge: {
          size: "3rem",
          height: "3.9rem",
          maxWidth: "auto",
        },
      },
      "5": {
        xxsmall: {
          size: "0.6rem",
          height: "1rem",
          maxWidth: "auto",
        },
        xsmall: {
          size: "0.8rem",
          height: "1.1rem",
          maxWidth: "auto",
        },
        small: {
          size: "0.9rem",
          height: "1.2rem",
          maxWidth: "auto",
        },
        medium: {
          size: "1rem",
          height: "1.6rem",
          maxWidth: "auto",
        },
        large: {
          size: "1.2rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xlarge: {
          size: "1.4rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xxlarge: {
          size: "1.7rem",
          height: "2.3rem",
          maxWidth: "auto",
        },
        xxxlarge: {
          size: "2rem",
          height: "2.5rem",
          maxWidth: "auto",
        },
        superlarge: {
          size: "2.3rem",
          height: "2.95rem",
          maxWidth: "auto",
        },
        megalarge: {
          size: "2.6rem",
          height: "3.35rem",
          maxWidth: "auto",
        },
        ultralarge: {
          size: "3rem",
          height: "3.9rem",
          maxWidth: "auto",
        },
      },
      "6": {
        xxsmall: {
          size: "0.6rem",
          height: "1rem",
          maxWidth: "auto",
        },
        xsmall: {
          size: "0.8rem",
          height: "1.1rem",
          maxWidth: "auto",
        },
        small: {
          size: "0.9rem",
          height: "1.2rem",
          maxWidth: "auto",
        },
        medium: {
          size: "1rem",
          height: "1.6rem",
          maxWidth: "auto",
        },
        large: {
          size: "1.2rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xlarge: {
          size: "1.4rem",
          height: "1.8rem",
          maxWidth: "auto",
        },
        xxlarge: {
          size: "1.7rem",
          height: "2.3rem",
          maxWidth: "auto",
        },
        xxxlarge: {
          size: "2rem",
          height: "2.5rem",
          maxWidth: "auto",
        },
        superlarge: {
          size: "2.3rem",
          height: "2.95rem",
          maxWidth: "auto",
        },
        megalarge: {
          size: "2.6rem",
          height: "3.35rem",
          maxWidth: "auto",
        },
        ultralarge: {
          size: "3rem",
          height: "3.9rem",
          maxWidth: "auto",
        },
      },
    },
    responsiveBreakpoint: "small",
    weight: 600,
  },
  text: {
    xxsmall: {
      size: "0.6rem",
      height: "1rem",
      maxWidth: "auto",
    },
    xsmall: {
      size: "0.8rem",
      height: "1.1rem",
      maxWidth: "auto",
    },
    small: {
      size: "0.9rem",
      height: "1.2rem",
      maxWidth: "auto",
    },
    medium: {
      size: "1rem",
      height: "1.6rem",
      maxWidth: "auto",
    },
    large: {
      size: "1.2rem",
      height: "1.8rem",
      maxWidth: "auto",
    },
    xlarge: {
      size: "1.4rem",
      height: "1.8rem",
      maxWidth: "auto",
    },
    xxlarge: {
      size: "1.7rem",
      height: "2.3rem",
      maxWidth: "auto",
    },
    xxxlarge: {
      size: "2rem",
      height: "2.5rem",
      maxWidth: "auto",
    },
    superlarge: {
      size: "2.3rem",
      height: "2.95rem",
      maxWidth: "auto",
    },
    megalarge: {
      size: "2.6rem",
      height: "3.35rem",
      maxWidth: "auto",
    },
    ultralarge: {
      size: "3rem",
      height: "3.9rem",
      maxWidth: "auto",
    },
  },
  formField: {
    round: "0.3rem",
    border: {
      color: "transparent",
    },
    extend: () => `

            label {
                font-weight: 500;
                color: ${theme.global.colors.lightBlack};
            }

            div {
                background: #ececec;
                border-radius: 0.3rem;
            }

            input, textarea {
                font-weight: 500;
            }
        `,
    disabled: {
      background: "#ececec",
    },
    focus: {
      background: "#ececec",
      border: {
        color: "transparent",
      },
    },
    error: {
      color: "errorRed",
    },
    label: {
      margin: {
        vertical: "small",
        horizontal: "none",
      },
    },
  },
  textInput: {},
  paragraph: {
    xxsmall: {
      size: "0.6rem",
      height: "1rem",
      maxWidth: "auto",
    },
    xsmall: {
      size: "0.8rem",
      height: "1.1rem",
      maxWidth: "auto",
    },
    small: {
      size: "0.9rem",
      height: "1.2rem",
      maxWidth: "auto",
    },
    medium: {
      size: "1rem",
      height: "1.6rem",
      maxWidth: "auto",
    },
    large: {
      size: "1.2rem",
      height: "1.8rem",
      maxWidth: "auto",
    },
    xlarge: {
      size: "1.4rem",
      height: "1.8rem",
      maxWidth: "auto",
    },
    xxlarge: {
      size: "1.7rem",
      height: "2.3rem",
      maxWidth: "auto",
    },
    xxxlarge: {
      size: "2rem",
      height: "2.5rem",
      maxWidth: "auto",
    },
    superlarge: {
      size: "2.3rem",
      height: "2.95rem",
      maxWidth: "auto",
    },
    megalarge: {
      size: "2.6rem",
      height: "3.35rem",
      maxWidth: "auto",
    },
    ultralarge: {
      size: "3rem",
      height: "3.9rem",
      maxWidth: "auto",
    },
  },
  table: {
    // "header": {
    //     "extend": {
    //         "border": "none",
    //     }
    // },
    // "extend": (props) => `
    // display:flex;
    // tr, th, td, thead, tbody {
    //     display:flex;
    // }`
  },
  menu: {
    extend: () => `

        padding: 1rem 0;

        button {
            padding: 0 1rem;
        }
    `,
  },
};

export type ZessTheme = typeof theme;

export default theme;

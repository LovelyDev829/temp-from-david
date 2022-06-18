function range(start, end, increment = 1) {
  const count = Math.floor((end - start + 1) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}

const minFontSize = 5;
const maxFontSize = 140;

const minSpacingPixel = 0;
const maxSpacingPixel = 1000;
const spacingPixelIncrement = 5;

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': 'Raleway',
        'Rajdhani': 'Rajdhani',
        lato: 'Lato',
        poppins: 'Poppins',
      },
      fontSize: {
        ...range(minFontSize, maxFontSize).reduce((merged, f) => ({ ...merged, [f]: `${f}px`}), {}),
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      letterSpacing: {
        '4': '4px',
        ...range(1, 100).reduce((merged, f) => ({ ...merged, [`${f}p`]: `${f*0.01}em`}), {}),
      },
      textIndent: {
        '2': '2px',
        '4': '4px',
        '15': '15px',
      },
      lineHeight: {
        ...range(minSpacingPixel, maxSpacingPixel, 1).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      },
      boxShadow: {
        primary: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        np1: '0px 2px 4px rgba(0, 0, 0, 0.08)',
        np: '2px 3px 6px rgba(128, 124, 118, 0.5)', // nft product
        np2: '2px 3px 4px rgba(128, 124, 118, 0.25)',
        menu: '1px 1px 1px rgba(128, 124, 118, 0.5)', // nft product
        sign1: '0px 1px 9px rgba(49, 96, 167, 0.24)',
        sign2: '0px 1px 9px rgba(115, 90, 184, 0.24)',
        sign3: '0px 1px 9px rgba(184, 107, 90, 0.24)',
      },
      dropShadow: {
        primary: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        ...range(1, 30, 1).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
        default: '4px',
        np: '10px 10px 40px 40px', //nft product
      },
      borderWidth: {
        default: '1px',
        0: '0px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
    },
    colors:{
      default: '#FFFFFF',
      white: '#ffffff',
      black: '#000000',
      corn: '#E9BC04',
      primary: '#518A89',
      iridium: '#3C3C3C',
      deepacua: '#007e7c',
      lovelyPurple: '#8235F1',

      texasRose: '#EEBC4E',
      cloudygrey: '#6A6A6A',
      darkMintGreen: '#2AB8F4',
      desertStorm: '#F9F8F6',
      friarGrey: '#807C76',
      davygrey: '#585858',
      cloud: '#c4c4c4',
      mercury: '#E5E5E5',
      pastelGrey: '#cccccc',
      clearBlue: '#247AFB',
      brightBlue: '#0066FF',
    },
    screens: {
      'msm': '320px',
      'mmd': '375px',
      'mlg': '425px',
      'lap': '890px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      primary: '1366px',
    },
    spacing: {
      ...range(minSpacingPixel, maxSpacingPixel, 1).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      ...range(minSpacingPixel, maxSpacingPixel, 1).reduce((merged, f) => ({ ...merged, [`${f}p`]: `${f}px` }), {}),
      primary : '1366px',

      m43width: 'calc(100% - 86px)',
      m110width: 'calc(100% - 220px)',
      mlg:'110px',
    },
    maxWidth: {
      primary : '1366px',
      ...range(minSpacingPixel, maxSpacingPixel, 1).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      '2xl' : '200%'
    },
    minHeight: {
      primary : '1366px',
      ...range(minSpacingPixel, maxSpacingPixel, 1).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },
    backgroundImage: {
      'centralhub': "url('./assets/images/central-hub.png');",
      'footerImg': "url('./assets/images/footer.png');"
    },
    zIndex: {
      ...range(0, 200, 10).reduce((merged, f) => ({ ...merged, [`${f}`]: `${f}` }), {}),
      '2000': '2000',
      '3000': '3000',
    }
  },
  plugins: [],
}

import type { Config } from 'tailwindcss'
// Tokens do DESIGN.md. As classes das telas do Stitch (bg-surface, text-primary, rounded-full...) funcionam sem mudar.
export default <Partial<Config>>{
  theme: { extend: {
    colors: {
      surface: '#fff7ff', 'surface-container-lowest': '#ffffff', 'surface-container-low': '#faf0ff',
      'surface-container': '#f6e9ff', 'surface-container-high': '#f2e3ff', 'surface-container-highest': '#eddcff',
      'on-surface': '#231437', 'on-surface-variant': '#4b4453', outline: '#7d7484', 'outline-variant': '#cdc3d5',
      primary: '#6221aa', 'on-primary': '#ffffff', 'primary-container': '#7b3fc4', 'primary-fixed': '#eedcff',
      secondary: '#b60d69', 'on-secondary': '#ffffff', 'secondary-container': '#fd519f', 'secondary-fixed': '#ffd9e3',
      'on-secondary-fixed': '#3e0020', tertiary: '#533b7f', error: '#ba1a1a', 'error-container': '#ffdad6',
      'on-error-container': '#93000a', 'inverse-surface': '#38294d', 'inverse-on-surface': '#f8edff'
    },
    borderRadius: { DEFAULT: '1rem', lg: '2rem', xl: '3rem' },
    fontFamily: { display: ['Montserrat', 'sans-serif'], body: ['Plus Jakarta Sans', 'sans-serif'] },
    boxShadow: {
      n1: '0 4px 20px -2px rgba(43,16,85,.06), 0 2px 6px -1px rgba(123,63,196,.04)',
      n2: '0 12px 32px -4px rgba(43,16,85,.12), 0 4px 12px -2px rgba(232,64,143,.08)'
    }
  } }
}

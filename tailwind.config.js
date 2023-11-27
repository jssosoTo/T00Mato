/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--ant-primary-color)',
        'primary-1': 'var(--ant-primary-1)',
        background: '#f0f2f5',
        danger: '#f5222d',
      },
    },
  },
  plugins: [],
};

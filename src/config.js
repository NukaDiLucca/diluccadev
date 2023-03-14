module.exports = {
  email: 'nuka.dilucca@gmail.com',

  socialMedia: [
    {
      name: 'Twitter',
      url: 'https://twitter.com/nuka_dilucca',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/michaeldilucca',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#2be7fa',
    navy: '#0a192f',
    darkNavy: '#020c1b',
    metaBlue: '#2be7fa',
    metaPink: '#ff11a9',
    metaGreen: '#0C9DAD',
    metaBlack: '#040b14',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        // background images
        'footer-top-desktop':
          "url('../images/bg-footer-top-desktop.svg')",
        'footer-top-mobile':
          "url('../images/bg-footer-top-mobile.svg')",
        'section-bottom-desktop-1':
          "url('../images/bg-section-bottom-desktop-1.svg')",
        'section-bottom-desktop-2':
          "url('../images/bg-section-bottom-desktop-2.svg')",
        'section-bottom-mobile-1':
          "url('../images/bg-section-bottom-mobile-1.svg')",
        'section-bottom-mobile-2':
          "url('../images/bg-section-bottom-mobile-2.svg')",
        'section-top-desktop-1':
          "url('../images/bg-section-top-desktop-1.svg')",
        'section-top-desktop-2':
          "url('../images/bg-section-top-desktop-2.svg')",
        'section-top-mobile-1':
          "url('../images/bg-section-top-mobile-1.svg')",
        'section-top-mobile-2':
          "url('../images/bg-section-top-mobile-2.svg')",
        // icons
        'icon-communities':
          "url('./images/icon-communities.svg')",
        'icon-email': "url('./images/icon-email.svg')",
        'icon-messages':
          "url('./images/icon-messages.svg')",
        'icon-phone': "url('./images/icon-phone.svg')",
        // illustrations
        'illustration-flowing-conversation':
          "url('../images/illustration-flowing-conversation.svg')",
        'illustration-grow-together':
          "url('../images/illustration-grow-together.svg')",
        'illustration-your-users':
          "url('../images/illustration-your-users.svg')",
        'screen-mockups':
          "url('../images/screen-mockups.svg')",
      },
      colors: {
        // primary
        pink: 'hsl(322, 100%, 66%)',
        'light-pink': 'hsl(321, 100%, 78%)',
        'light-red': 'hsl(0, 100%, 63%)',
        // Neutral
        'very-dark-cyan': 'hsl(192, 100%, 9%)',
        'very-pale-blue': 'rgb(246, 251, 255)',
      },
      fontFamily: {
        headings: ['Poppins', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
    plugins: [],
  },
};

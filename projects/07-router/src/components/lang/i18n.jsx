export const useI18n = (lang) => {
    return i18n[lang] || i18n.es
  }

  const i18n = {
    es: {
      title: 'Sobre mi',
      button: 'Página de inicio',
      description: 'Hola! Soy Alex, un Desarrollador de Software, esta es mi práctica de React Router.',
      h1: 'Inicio',
      p: 'Página de ejemplo creando un React Router.'
    },
    en: {
      title: 'About me',
      button: 'Home page',
      description: 'Hi! Im Alex, software Developer, this is my React Router practice.',
      h1: 'Home',
      p: 'Example page creating a React Router.'
    },
  }
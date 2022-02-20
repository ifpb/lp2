export default {
  github: 'https://github.com/ifpb/lp2', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/ifpb/lp2/blob/master/src/pages', // base URL for the docs repository
  titleSuffix: ' – LP2',
  nextLinks: true,
  prevLinks: true,
  floatTOC: true,
  search: false,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'IFPB - LP2',
  footerEditLink: false, // 'Edite esta página no GitHub'
  logo: (
    <>
      <strong>Linguagem de Programação 2</strong>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Linguagem de Programação 2" />
      <meta name="og:title" content="Linguagem de Programação 2" />
    </>
  ),
};

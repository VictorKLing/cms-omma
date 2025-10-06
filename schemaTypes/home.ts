export default {
  name: 'home',
  type: 'document',
  title: 'Página Home',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título Principal'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtítulo'
    },
    {
      name: 'banner',
      type: 'image',
      title: 'Imagem de destaque'
    },
    {
      name: 'button',
      type: 'object',
      title: 'Botão',
      fields: [
        { name: 'text', type: 'string', title: 'Texto do botão' },
        { name: 'href', type: 'string', title: 'Link do botão' }
      ]
    },

    // Serviços
    {
      name: 'section1',
      type: 'object',
      title: 'Seção 1',
      fields: [
        { name: 'sectionTitle', type: 'string', title: 'Título da seção' },
        { name: 'sectionImage1', type: 'image', title: 'Imagem 1 da seção' },
        { name: 'sectionImage2', type: 'image', title: 'Imagem 2 da seção' },
        { name: 'sectionImage3', type: 'image', title: 'Imagem 3 da seção' },
        { name: 'section1Text', type: 'array', title: 'Texto da seção',of: [{ type: 'block' }], },
        {
          name: 'items',
          type: 'array',
          title: 'Informações',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Título' }
              ]
            }
          ]
        },
        {
          name: 'button',
          type: 'object',
          title: 'Botão',
          fields: [
            { name: 'text', type: 'string', title: 'Texto do botão' },
            { name: 'href', type: 'string', title: 'Link do botão' }
          ]
        },
      ]
    }
  ],

  preview: {
    prepare() {
      return {
        title: 'Hero'
      }
    }
  }
};

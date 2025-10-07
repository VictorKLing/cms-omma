// schemas/layout.ts
export default {
  name: 'layout',
  type: 'document',
  title: 'Layout do Site',
  fields: [
    {
      name: 'menu',
      type: 'array',
      title: 'Itens do Menu',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Texto do Link'
            },
            {
              name: 'href',
              type: 'string',
              title: 'URL do Link'
            }
          ]
        }
      ]
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo do Site',
      options: { hotspot: true }
    },
    {
      name: 'footerText',
      type: 'string',
      title: 'Texto do Rodapé'
    }
  ]
};

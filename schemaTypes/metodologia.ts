export default {
  name: 'metodologia',
  type: 'document',
  title: 'Metodologia',
  fields: [
    {
      name: 'titulo',
      type: 'string',
      title: 'Título da página',
    },
    {
      name: 'texto',
      type: 'array',
      title: 'Texto',
      of: [{ type: 'block' }],
    },
    {
      name: 'imagens',
      type: 'array',
      title: 'Imagens',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
            },
          ],
        },
      ],
    },
    {
      name: 'botao',
      title: 'Botão',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Texto do botão' },
        { name: 'href', type: 'string', title: 'Link do botão' },
      ],
    },
    {
      name: 'timelineTitulo',
      title: 'Título da Timeline',
      type: 'string',
    },
    {
    name: 'timeline',
    title: 'Timeline',
    type: 'array',
    of: [
        {
        type: 'object',
        fields: [
            { name: 'n', title: 'Número', type: 'string' },      // Ex: "01"
            { name: 'titulo', title: 'Título', type: 'string' }, // Ex: "Diagnóstico"
            { name: 'texto', title: 'Texto', type: 'array', of: [{ type: 'block' }] } // texto corrido
        ]
        }
    ]
    },
    {
        name: 'timelineBotao',
        title: 'Botão do Timeline',
        type: 'object',
        fields: [
            { name: 'text', title: 'Texto do botão', type: 'string' },
            { name: 'href', title: 'Link do botão', type: 'url' }
        ]
        }
  ],
  preview: {
    prepare() {
      return {
        title: 'Metodologia'
      }
    }
  }
};

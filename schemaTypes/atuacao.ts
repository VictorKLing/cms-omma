export default {
  name: 'atuacao',
  type: 'document',
  title: 'Atuacão',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'subtitulo',
      title: 'Subtítulo',
      type: 'string',
    },
    {
      name: 'galeria',
      title: 'Galeria de Imagens',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo'
            }
          ]
        }
      ]
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'titulo',
              title: 'Título do Card',
              type: 'string',
            },
            {
              name: 'subtitulo',
              title: 'Subtítulo do Card',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Atuação'
      }
    }
  }
};

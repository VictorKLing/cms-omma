export default {
  name: 'obras-realizadas',
  type: 'document',
  title: 'Obras Realizadas',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
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
  ]
};

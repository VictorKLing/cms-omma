export default {
  name: 'atuacao',
  type: 'document',
  title: 'Atuacão',
  fields: [
    {
      name: 'blocos',
      title: 'Blocos de Conteúdo',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titulo', title: 'Título', type: 'string' },
            { name: 'conteudo', title: 'Conteúdo', type: 'array', of: [{ type: 'block' }] },
            { name: 'imagens', title: 'Imagens', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
          ],
        },
      ],
    },
    {
      name: 'callToAction',
      title: 'Chamada para ação',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Texto do botão' },
        { name: 'href', type: 'string', title: 'Link do botão' },
      ],
    },
  ],
};

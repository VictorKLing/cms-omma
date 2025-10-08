export default {
  name: 'obrasrealizadas',
  type: 'document',
  title: 'Obras Realizadas',
  fields: [
    {
      name: 'projetos',
      type: 'array',
      title: 'Projetos',
      of: [
        {
          type: 'object',
          title: 'Projeto',
          fields: [
            { name: 'titulo', type: 'string', title: 'Título do Projeto' },
            { name: 'local', type: 'string', title: 'Local' },
            { name: 'area', type: 'string', title: 'Área de Intervenção' },
            { name: 'tempo', type: 'string', title: 'Tempo de Execução' },
            {
              name: 'descricao',
              type: 'text',
              title: 'Descrição do Projeto',
            },
            {
              name: 'imagens',
              type: 'array',
              title: 'Imagens do Projeto',
              of: [{ type: 'image', options: { hotspot: true } }],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Obras Realizadas'
      }
    }
  }
};

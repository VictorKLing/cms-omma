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
        {
          name: 'cards',
          type: 'array',
          title: 'Cards',
          of: [
            {
              type: 'object',
              title: 'Card',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Título do Card'
                },
                {
                  name: 'svg',
                  type: 'text',
                  title: 'SVG',
                  rows: 5,
                  description: 'Cole aqui o código SVG (ex: <svg ...>...</svg>)'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'projetos',
      type: 'object',
      title: 'Projetos',
      fields: [
        {
          name: 'projects',
          type: 'array',
          title: 'Projetos',
          of: [
            {
              type: 'object',
              title: 'Projeto',
              fields: [
                { name: 'category', type: 'string', title: 'Categoria' },
                { name: 'title', type: 'string', title: 'Título' },
                { name: 'description', type: 'text', title: 'Descrição' },
                { name: 'banner', type: 'image', title: 'Imagem de destaque'},
                { name: 'href', type: 'string', title: 'Link do botão' }
              ]
            }
          ]
        },
        {
          name: 'stats',
          type: 'array',
          title: 'Estatísticas da Empresa',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'number', type: 'string', title: 'Número' },
                { name: 'label', type: 'string', title: 'Descrição' }
              ]
            }
          ]
        },
      ]
    },
    {
      name: 'clientes',
      type: 'object',
      title: 'Projetos',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Título da seção'
        },
        {
          name: 'brands',
          type: 'array',
          title: 'Marcas',
          of: [{ type: 'string' }]
        }
      ]
    },
    {
      name: 'metodologia',
      type: 'object',
      title: 'Metodologia',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Título da seção'
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtítulo da seção'
        },
       {
        name: 'cards',
        type: 'array',
        title: 'Cards',
        of: [
          {
            type: 'object',
            title: 'Card',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Título do Card'
              },
              {
                name: 'description',
                type: 'array',
                title: 'Descrição do Card',
                of: [{ type: 'block' }]
              },
              {
                name: 'svg',
                type: 'text',
                title: 'SVG',
                rows: 5,
                description: 'Cole aqui o código SVG (ex: <svg ...>...</svg>)'
              }
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
      }
      ]
    },
    {
      name: 'section06',
      type: 'object',
      title: 'Seção 06',
      fields: [
        // CTA
        {
          name: 'cta',
          type: 'object',
          title: 'CTA Inicial',
          fields: [
            { name: 'title', type: 'string', title: 'Título' },
            { name: 'subtitle', type: 'string', title: 'Subtítulo' },
            {
              name: 'buttons',
              type: 'array',
              title: 'Botões',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'text', type: 'string', title: 'Texto do botão' },
                    { name: 'href', type: 'string', title: 'Link do botão' }
                  ]
                }
              ]
            }
          ]
        },

        // Sobre
        {
          name: 'sobre',
          type: 'object',
          title: 'Seção Sobre',
          fields: [
            { name: 'title', type: 'string', title: 'Título' },
            { name: 'subtitle', type: 'string', title: 'Subtítulo' },
            {
              name: 'description',
              type: 'array',
              title: 'Descrição',
              of: [{ type: 'block' }]
            },
            {
              name: 'button',
              type: 'object',
              title: 'Botão',
              fields: [
                { name: 'text', type: 'string', title: 'Texto' },
                { name: 'href', type: 'string', title: 'Link' }
              ]
            },
            {
              name: 'images',
              type: 'array',
              title: 'Imagens',
              of: [{ type: 'image' }]
            }
          ]
        },

        // Depoimento
        {
          name: 'depoimento',
          type: 'object',
          title: 'Depoimento',
          fields: [
            { name: 'photo', type: 'image', title: 'Foto do Cliente' },
            {
              name: 'text',
              type: 'array',
              title: 'Texto do Depoimento',
              of: [{ type: 'block' }]
            },
            { name: 'location', type: 'string', title: 'Localização' },
            { name: 'extra', type: 'string', title: 'Informação Extra (ex: prazo)' }
          ]
        },

        // Parceria Arquitetos
        {
          name: 'parceria',
          type: 'object',
          title: 'Parceria Arquitetos',
          fields: [
            { name: 'title', type: 'string', title: 'Título' },
            {
              name: 'description',
              type: 'array',
              title: 'Descrição',
              of: [{ type: 'block' }]
            },
            {
              name: 'button',
              type: 'object',
              title: 'Botão',
              fields: [
                { name: 'text', type: 'string', title: 'Texto' },
                { name: 'href', type: 'string', title: 'Link' }
              ]
            },
            {
              name: 'images',
              type: 'array',
              title: 'Imagens',
              of: [{ type: 'image' }]
            }
          ]
        },

        // Contato
        {
          name: 'contato',
          type: 'object',
          title: 'Seção Contato',
          fields: [
            { name: 'title', type: 'string', title: 'Título' }
          ]
        }
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

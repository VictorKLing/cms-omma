export default {
  name: 'contato',
  type: 'document',
  title: 'Contato',
  fields: [
    {
      name: 'tituloPrincipal',
      type: 'string',
      title: 'Título principal',
    },
    {
      name: 'endereco',
      type: 'string',
      title: 'Endereço',
    },
    {
      name: 'telefone',
      type: 'string',
      title: 'Telefone',
    },
    {
      name: 'emails',
      type: 'array',
      title: 'E-mails',
      of: [{ type: 'string' }]
    },
    {
      name: 'redesSociais',
      type: 'array',
      title: 'Redes Sociais',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nome', type: 'string', title: 'Nome da rede' },
            { name: 'url', type: 'url', title: 'Link' }
          ]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Contato'
      }
    }
  }
}

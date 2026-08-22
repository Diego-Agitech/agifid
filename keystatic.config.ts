import { config, fields, collection } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : { kind: 'github', repo: 'Diego-Agitech/agifid' },
  ui: {
    brand: { name: 'AgiFid — Éditeur du site' },
  },
  collections: {
    experts: collection({
      label: 'Équipe (page d\'accueil)',
      slugField: 'name',
      path: 'src/content/experts/*',
      format: { data: 'json' },
      previewUrl: '/index.html',
      columns: ['displayName', 'role', 'order'],
      schema: {
        displayName: fields.text({
          label: 'Nom affiché sur le site',
          description: 'Ex : Mika',
          validation: { isRequired: true },
        }),
        role: fields.select({
          label: 'Rôle',
          options: [
            { label: 'Expert Comptable', value: 'Expert Comptable' },
            { label: 'Expert Odoo', value: 'Expert Odoo' },
          ],
          defaultValue: 'Expert Comptable',
        }),
        order: fields.integer({
          label: 'Position (1 = premier affiché)',
          defaultValue: 1,
        }),
        photo: fields.image({
          label: 'Photo',
          description: 'Format portrait recommandé (comme les photos actuelles).',
          directory: 'public/assets/img/experts',
          publicPath: 'assets/img/experts/',
        }),
        name: fields.slug({
          name: {
            label: 'Identifiant technique',
            description: 'Généré automatiquement depuis le nom, ne pas modifier sauf besoin particulier.',
          },
        }),
      },
    }),
  },
});

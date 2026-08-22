import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    experts: collection({
      label: 'Experts (section Experts Comptables & Odoo)',
      slugField: 'name',
      path: 'src/content/experts/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Identifiant' } }),
        displayName: fields.text({ label: 'Nom affiché' }),
        role: fields.text({ label: 'Rôle', defaultValue: 'Expert Comptable' }),
        order: fields.integer({ label: "Ordre d'affichage", defaultValue: 0 }),
        photo: fields.image({
          label: 'Photo',
          directory: 'public/assets/img/experts',
          publicPath: 'assets/img/experts/',
        }),
      },
    }),
  },
});

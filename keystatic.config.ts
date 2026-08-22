import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : { kind: 'github', repo: 'Diego-Agitech/agifid' },
  ui: {
    brand: { name: 'AgiFid — Éditeur du site' },
    navigation: {
      "Page d'accueil": ['hero', 'experts'],
    },
  },
  singletons: {
    hero: singleton({
      label: 'Bannière (haut de page)',
      path: 'src/content/hero',
      format: { data: 'json' },
      previewUrl: '/index.html#hero',
      schema: {
        kicker: fields.text({
          label: 'Petit texte au-dessus du titre',
          description: 'Ex : 98 entreprises nous font déjà confiance',
        }),
        titleBefore: fields.text({ label: 'Titre — début', description: 'Ex : Fiduciaire' }),
        titleHighlight: fields.text({ label: 'Titre — mot en surbrillance', description: 'Ex : 100% dédiée' }),
        titleAfter: fields.text({ label: 'Titre — fin', description: 'Ex : aux sociétés sur Odoo' }),
        ctaLabel: fields.text({ label: 'Texte du bouton', description: 'Ex : Parler à un expert' }),
      },
    }),
  },
  collections: {
    experts: collection({
      label: 'Équipe',
      slugField: 'name',
      path: 'src/content/experts/*',
      format: { data: 'json' },
      previewUrl: '/index.html#experts',
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

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb1b7858d929a2b8441f7c1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zmyswx99',
                  apiId: 'd0d57661-a9c5-4771-86fd-0d2a027cab70'
                },
                {
                  buildHookId: '5eb1b785268b39ac6690430a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8xyubrzy',
                  apiId: 'c6bf9d7e-d148-47e9-82a3-333390300fd0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brandiqa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8xyubrzy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

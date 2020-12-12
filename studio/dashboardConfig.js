export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5fd45d88c6f49c1192ce8d16',
                  title: 'Sanity Studio',
                  name: 'mirth-peddlers-sanity-sapper-studio',
                  apiId: 'c3ef933f-b7ee-4013-b2ea-c323f037e858'
                },
                {
                  buildHookId: '5fd45d882f090e067638a535',
                  title: 'Blog Website',
                  name: 'mirth-peddlers-sanity-sapper',
                  apiId: '5ebbdbb2-1699-45a2-b3e8-88c23e55a857'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/colinaut/mirth-peddlers-sanity-sapper',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mirth-peddlers-sanity-sapper.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

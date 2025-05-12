const sidebarStructure = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        name: 'dashboard',
        parent: true,
        icon: 'dashboard',
        link: '/dashboard'
    },
    {
        id: 'components',
        title: 'Components',
        name: 'components',
        parent: true,
        icon: 'components',
        child: [
            {
                id: 'buttons',
                title: 'Buttons',
                name: 'components.buttons',
                link: '/components/buttons',
                icon: 'dot'
            },
            {
                id: 'forms',
                title: 'Forms',
                name: 'components.forms',
                link: '/components/forms',
                icon: 'dot',
                parent: true,
                child: [
                    {
                        id: 'form-elements',
                        title: 'Form Elements',
                        name: 'components.forms.form-elements',
                        link: '/components/forms/form-elements',
                        icon: 'dot'
                    },
                    {
                        id: 'sample-form',
                        title: 'Form Sample',
                        name: 'components.forms.form-sample',
                        link: '/components/forms/form-sample',
                        icon: 'dot'
                    }
                ]
            },
            {
                id: 'antd',
                title: 'ANT Design',
                name: 'components.antd',
                link: '/components/antd',
                icon: 'dot'
            },
            {
                id: 'tables',
                title: 'Tables',
                name: 'components.tables',
                link: '/components/tables',
                icon: 'dot'
            },
            {
                id: 'i18n',
                title: 'i18next localization',
                name: 'components.i18n',
                link: '/components/i18n/en',
                icon: 'dot'
            }
        ]
    },
    {
        id: 'blog',
        title: 'Blog',
        name: 'blog',
        parent: true,
        icon: 'blog',
        link: '/blog',
        nested: true
    },
    {
        id: 'markdown',
        title: 'Markdown',
        name: 'markdown',
        parent: true,
        icon: 'markdown',
        link: '/markdown',
        nested: true
    }
];

export { sidebarStructure };

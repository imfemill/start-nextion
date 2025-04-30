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
                // link: '/components/forms',
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
                        id: 'form-layouts',
                        title: 'Form Layouts',
                        name: 'components.forms.form-layouts',
                        link: '/components/forms/form-layouts',
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
            }
        ]
    }
];

export { sidebarStructure };

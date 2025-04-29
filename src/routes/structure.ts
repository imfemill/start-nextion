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
                icon: 'dot'
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

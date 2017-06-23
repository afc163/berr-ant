module.exports = [
    { key: 'dashboard', name: 'Dashboard', icon: 'laptop', },
    {
        key: 'Menu', name: 'Catering', icon: 'inbox', clickable: false,
        child: [
            {
                key: 'catering/setup',
                name: 'Setup',
            },
        ],
    },

];

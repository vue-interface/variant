const reduce = require('./reduce');

module.exports = function safelist(subject, filter) {
    subject = subject || Object.assign({},
        require('./variations'),
        require('./colors')
    );

    const filtered = Object.keys(subject)
        .filter(typeof filter === 'function' ? filter : key => {
            return Array.isArray(filter) ? filter.indexOf(key) > -1 : true;
        })
        .map(key => {
            return [key, subject[key]];
        });

    return Object.entries(reduce(filtered))
        .map(([key]) => key)
        .reduce((carry, key) => {
            return [...carry, ...[
                `bg-${key}`,
                `border-${key}`,
                `text-${key}`
            ]];
        }, []);
};
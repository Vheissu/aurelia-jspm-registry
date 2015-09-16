export class FilterValueConverter {
    toView(array, config) {
        let prop = config.search;
        let term = config.term.trim();
        let caseSensitive = config.caseSensitive || false;

        return (!term) ? array : array.filter(item => {
            let foundItem = item[prop];

            if (!caseSensitive) {
                foundItem = foundItem.toLowerCase();
                term = term.toLowerCase();
            }

            return foundItem.indexOf(term) >= 0;
        });
    }
}
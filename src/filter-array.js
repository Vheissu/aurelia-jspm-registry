export class FilterValueConverter {
    toView(val, input) {
        let temp = val;

        if (!input.value.length) {
            return val;
        } else {
            return temp.filter(obj => {
                return obj.key.search(new RegExp(input.value, 'gi')) >= 0;
            });
        }
    }
}
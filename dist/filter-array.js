System.register([], function (_export) {
    'use strict';

    var FilterValueConverter;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            FilterValueConverter = (function () {
                function FilterValueConverter() {
                    _classCallCheck(this, FilterValueConverter);
                }

                _createClass(FilterValueConverter, [{
                    key: 'toView',
                    value: function toView(array, config) {
                        var prop = config.search;
                        var term = config.term.trim();
                        var caseSensitive = config.caseSensitive || false;

                        var filtered = array.filter(function (item) {
                            if (term) {
                                var foundItem = item[prop];

                                if (!caseSensitive) {
                                    foundItem = foundItem.toLowerCase();
                                    term = term.toLowerCase();
                                }

                                return foundItem.indexOf(term) >= 0;
                            } else {
                                return item;
                            }
                        });

                        return !config.sort ? filtered : filtered.filter(function (item) {
                            var sortKey = config.sort.key;
                            var sortVal = config.sort.value;

                            if (sortVal === '') {
                                return item;
                            } else {
                                return item[sortKey] == sortVal;
                            }
                        });
                    }
                }]);

                return FilterValueConverter;
            })();

            _export('FilterValueConverter', FilterValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1hcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxvQkFBb0I7Ozs7Ozs7OztBQUFwQixnQ0FBb0I7eUJBQXBCLG9CQUFvQjswQ0FBcEIsb0JBQW9COzs7NkJBQXBCLG9CQUFvQjs7MkJBQ3ZCLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDbEIsNEJBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDekIsNEJBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUIsNEJBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDOztBQUVsRCw0QkFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNoQyxnQ0FBSSxJQUFJLEVBQUU7QUFDTixvQ0FBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUUzQixvQ0FBSSxDQUFDLGFBQWEsRUFBRTtBQUNoQiw2Q0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNwQyx3Q0FBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQ0FDN0I7O0FBRUQsdUNBQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ3ZDLE1BQU07QUFDSCx1Q0FBTyxJQUFJLENBQUM7NkJBQ2Y7eUJBQ0osQ0FBQyxDQUFDOztBQUVILCtCQUFPLEFBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ3ZELGdDQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QixnQ0FBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O0FBRWhDLGdDQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUU7QUFDaEIsdUNBQU8sSUFBSSxDQUFDOzZCQUNmLE1BQU07QUFDSCx1Q0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFFOzZCQUNyQzt5QkFDSixDQUFDLENBQUM7cUJBQ047Ozt1QkEvQlEsb0JBQW9CIiwiZmlsZSI6ImZpbHRlci1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGaWx0ZXJWYWx1ZUNvbnZlcnRlciB7XG4gICAgdG9WaWV3KGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgbGV0IHByb3AgPSBjb25maWcuc2VhcmNoO1xuICAgICAgICBsZXQgdGVybSA9IGNvbmZpZy50ZXJtLnRyaW0oKTtcbiAgICAgICAgbGV0IGNhc2VTZW5zaXRpdmUgPSBjb25maWcuY2FzZVNlbnNpdGl2ZSB8fCBmYWxzZTtcblxuICAgICAgICBsZXQgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAodGVybSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZEl0ZW0gPSBpdGVtW3Byb3BdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kSXRlbSA9IGZvdW5kSXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICB0ZXJtID0gdGVybS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZEl0ZW0uaW5kZXhPZih0ZXJtKSA+PSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICghY29uZmlnLnNvcnQpID8gZmlsdGVyZWQgOiBmaWx0ZXJlZC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBsZXQgc29ydEtleSA9IGNvbmZpZy5zb3J0LmtleTtcbiAgICAgICAgICAgIGxldCBzb3J0VmFsID0gY29uZmlnLnNvcnQudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChzb3J0VmFsID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGl0ZW1bc29ydEtleV0gPT0gc29ydFZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
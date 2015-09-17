System.register(['bootstrap'], function (_export) {
    'use strict';

    _export('configure', configure);

    function configure(aurelia) {
        aurelia.use.standardConfiguration().globalResources(['filter-array']).developmentLogging();

        aurelia.start().then(function (a) {
            return a.setRoot();
        });
    }

    return {
        setters: [function (_bootstrap) {}],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxhQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDL0IsZUFBTyxDQUFDLEdBQUcsQ0FDTixxQkFBcUIsRUFBRSxDQUN2QixlQUFlLENBQUMsQ0FDYixjQUFjLENBQ2pCLENBQUMsQ0FDRCxrQkFBa0IsRUFBRSxDQUFDOztBQUUxQixlQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzttQkFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO1NBQUEsQ0FBQyxDQUFDO0tBQzFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuICAgIGF1cmVsaWEudXNlXG4gICAgICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICAgICAgICAgICdmaWx0ZXItYXJyYXknXG4gICAgICAgIF0pXG4gICAgICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoKTtcblxuICAgIGF1cmVsaWEuc3RhcnQoKS50aGVuKGEgPT4gYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
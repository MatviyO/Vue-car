
const car = (name, model, owner,year, phone, img) =>
    ({name, model, owner,year, phone, img})

const cars = [
    car('Bmw', '4 series', 'Oleh', '2015', '+3809311111', 'images/1.jpg'),
    car('Mercedes-benz', 'CLA', 'MyTwo', '2014', '+3809311122', 'images/2.jpeg'),
    car('Bmw', '3 series', 'MyThree', '2015', '+3809311333', 'images/3.jpg')

]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false
    },
    methods: {
        selectCar: function(index) {
            this.car = cars[index];
            this.selectedCarIndex = index;
        }
    }

});

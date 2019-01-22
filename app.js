const meal = new Vue({
    el: '#meal',
    data: {
      meal: 'Thanksgiving Meal',
      meat: 'Turkey',
      vegetable: 'Green Beans',
      starch: 'Mashed Potatoes',
    },
    methods: {
      sayHi: function() {
        alert(this.meal);
      }
    }
});
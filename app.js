const meal = new Vue({
    el: '#meal',
    data: {
      meal: 'Thanksgiving Meal',
      meat: 'Turkey',
      vegetable: 'Green Beans',
      starch: 'Mashed Potatoes',
      showIngredients: false,
    },
    methods: {
      toggleIngredients: function() {
        this.showIngredients = !this.showIngredients;
      }
    }
});
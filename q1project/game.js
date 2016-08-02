$('#male').on('click', function (){
$.ajax({
  url: 'http://uinames.com/api/?gender=male',
  dataType: 'json',
  success: function(data) {
     var male = data.name
        $("#name").html(male)
          console.log(male);

  }
});
})

$('#female').on('click', function (){
$.ajax({
  url: 'http://uinames.com/api/?gender=female',
  dataType: 'json',
  success: function(data) {
     var female = data.name
        $("#name").html(female)
        console.log(female);

  }
});
})

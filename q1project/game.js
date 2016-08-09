$('#male').on('click', function (){
$.ajax({
  url: 'http://cors-anywhere.herokuapp.com/http://uinames.com/api/?gender=male',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    var names;
     var male = data.name
        $("#name").html(male)
        names = male;
          $("#name2").html(names)
          console.log(male);
              console.log(names);

  }
});
})

$('#female').on('click', function (){
$.ajax({
  url: 'http://cors-anywhere.herokuapp.com/http://uinames.com/api/?gender=female',
  dataType: 'json',
  success: function(data) {
     var female = data.name
        $("#name").html(female)
        $("#name2").html(female)
        console.log(female);

  }
});
})

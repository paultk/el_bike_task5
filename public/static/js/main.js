$(document).ready( function () {

    var id;

    $(".code")


    /*$('#myForm').submit(function() {
     // get all the inputs into an array.
     var $inputs = $('#myForm :input');

     // not sure if you wanted this, but I thought I'd add it.
     // get an associative array of just the values.
     var values = {};
     $inputs.each(function() {
     values[this.name] = $(this).val();
     });

     });*/

    $('#myH1').click(function() {

        user2 = {};
        user2['name'] = "tryName";
        // user2['bike'] = {'name': ''};

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/bookTry",
            data: JSON.stringify(user2),
        })
    });

    $('#submitButton').click(function() {
        console.log("ping");
        // get all the inputs into an array.
        var $inputs = $('#myForm :input');

        // not sure if you wanted this, but I thought I'd add it.
        // get an associative array of just the values.
        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
        user2 = {};
        user2['name'] = values["user"];
        // user2['bike'] = {'name': ''};

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/bookTry" + '/' + id,
            data: JSON.stringify(user2),
            success: function(code) {
                console.log("code: " + code);
                $("#bookingForm").hide();
                $("#codeText").html(code);
                $("#modalHeader").html("Your code");
            }

        });


    });




    var table = null;


    $('#myTable').on( 'click', 'button', function () {
        var data1 = table.row( $(this).parents('tr') ).data();
        id = data1["id"];
    } );






    var x;

    $("book2").click(function () {
        x = $(this).val();
        console.log("d");
    });

    /*$("#myTable").click(function (event) {
        // event.preventDefault();
        let z = $(this).find('td').text();
        // let x = $(this).val();
        // let y = event.target.valueOf();
        console.log(z);
    });*/

    /*$(".table").on('click','tr',function(e){
     e.preventDefault();
     var id = $(this).attr('value');*/

    function testJson() {
        $.ajax({
            url: "/get-bikes2",
            type: "GET",
            dataType: "json",
            success: function (json) {
                console.log(json["availableBikes"]);
                table = $("#myTable").DataTable({
                        data: json["availableBikes"],
                        columns: [
                            {data: 'name'},
                            {data: 'battery'},
                            {data: 'id'},
                            {data: 'available'},
                            {
                                data: function () {
                                    return "<button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Book</button>";
                                }
                            }
                            // {data: 'available'},
                        ]
                    }
                );
            }
        });
    }

    function myBikeTable() {
        $.ajax({
            url: "/get-bikes2",
            type: "GET",
            dataType: "json",
            success: function (json) {
                console.log(json["availableBikes"]);
                table = $("#myTable").DataTable({
                        data: json["availableBikes"],
                        columns: [
                            {data: 'name'},
                            {data: 'battery'},
                            {data: 'id'},
                            {data: 'available'},
                            {
                                data: function () {
                                    return "<button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Book</button>";
                                }
                            }
                            // {data: 'available'},
                        ]
                    }
                );
            }
        });
    }




    function getLocations() {
        $.ajax({
            url: "/get-locations",
            type: "GET",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, value) {
                    $("#mySelect").append($('<option>').text(value).attr('value', value));
                    // console.log(value);
                })
            }
        })
    }

    function getBikez() {
        $.ajax({
            url: "/get-bikes2",
            type: "GET",
            dataType: "json",
            success: function (json1) {
                console.log("success");
                $("#myTable").dataTable({
                        data: myObject,
                        columns: [

                            { data: 'name' },
                            { data: 'position' },
                            { data: 'salary' },
                            { data: 'office' }
                        ]
                    }

                )/*
                 $.each(json, function (i, value) {
                 for (let i = 0; i < value.length; i++){
                 console.log(value[0]);
                 }
                 // console.log(value[1]);

                 // $("#mySelect").append($('<option>').text(value).attr('value', value));
                 // console.log(value);
                 });
                 return json;*/

            }

        })
    }


    /*function getData() {
     $.ajax({
     type: "POST",
     contentType: "application/json",
     url: "http://localhost:8080/get-bikes",
     data: JSON.stringify(message),
     dataType: 'json',
     timeout: 100000,
     success: function (data) {
     console.log("SUCCESS: ", data);
     // displayData(data);
     },
     error: function (e) {
     //                        console.log("ERROR: ", e);
     display(e);
     },
     done: function (e) {
     console.log("DONE");
     //                        enableSearchButton(true);
     }
     });
     }*/



    $("booked").click(function () {
        let x = $(this);
        console.log(42);
    });

    $("#myButton").click( function () {
        // let selected = $(this).val();
        $("#myTable").dataTable({
                ajax: {
                    url: '/get-bikes2', //+ selected,
                    data: myBikes
                },
                columns: [

                    {bikes: 'id'},
                    {bikes: 'battery'},
                    {bikes: 'name'},
                    {bikes: 'available'}
                ]
            }

        )
    });



    testJson();
    console.log("x:");
    console.log(x);
    // getBikez();
    /*
     getLocations();
     var bikes1 = getBikez();
     // console.log(bikes1);
     for (let i = 0; i < myBikes.length; i++){
     console.log("here");
     console.log(myBikes[i]);
     }
     // $("#mySelect")
     // getData();
     // getBikez();*/

});
console.log("g");

/*
 $('#myTable').DataTable(
 {
 ajax: {
 url: 'rest/kunder2',
 dataSrc: 'data'
 },
 columns: [
 { data: 'id' },
 { data: 'navn' }
 ]
 });





 $.ajax({
 url:'suggest.html',
 type:'POST',
 data: 'q=' + str,
 dataType: 'json',
 success: function( json ) {
 $.each(json, function(i, value) {
 $('#myselect').append($('<option>').text(value).attr('value', value));
 });
 }
 });


 * function getData() {
 $.ajax({
 type: "POST",
 contentType: "application/json",
 url: "http://localhost:8080/rest/second",
 data: JSON.stringify(message),
 dataType: 'json',
 timeout: 100000,
 success: function (data) {
 console.log("SUCCESS: ", data);
 displayData(data);
 },
 error: function (e) {
 //                        console.log("ERROR: ", e);
 display(e);
 },
 done: function (e) {
 console.log("DONE");
 //                        enableSearchButton(true);
 }
 });


 }*/
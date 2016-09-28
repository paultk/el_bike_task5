$(document).ready( function () {

    var id;
    var actualCode;
    var name;

    $('#myH1').click(function () {

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


    var table = null;


    $('#myTable').on('click', 'button', function () {
        var data1 = table.row($(this).parents('tr')).data();
        id = data1["id"];
        $("#bikeName").html(data1["name"]);
    });


    var x;

    $("book2").click(function () {
        x = $(this).val();
    });

    $("#submitForCode").click(function () {
        let inputCode = $("#codeInputField").value();
        console.log(inputCode);
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/takeBike" + '/' + id,
            data: inputCode,
            success: function () {
                $(this).replaceWith("<button type=\"button\" id=\"returnBike\" class=\"btn btn-info btn-lg\">Return bike</button>");
            }
        })
    });


    function testJson() {
        $.ajax({
            url: "/get-bikes2",
            type: "GET",
            dataType: "json",
            success: function (json) {
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
                $("#myTable").dataTable({
                        data: myObject,
                        columns: [

                            {data: 'name'},
                            {data: 'position'},
                            {data: 'salary'},
                            {data: 'office'}
                        ]
                    }
                );
            }

        })
    }


    $("booked").click(function () {
        let x = $(this);
        console.log(42);
    });


   /* Previous function for loading locations
   $("#myButton").click(function () {
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
    });*/

    $("#codeForSubmit2").click(function () {
        let code = $("#codeInput2").val();
        $.ajax({
            type: "POST",
            url: "/takeBike" + '/' + id,
            data: JSON.stringify(code),
        });
    });

    $("#bookModalButton").click(function () {
        console.log("ping");
        // get all the inputs into an array.
        var $inputs = $('#myForm :input');

        // not sure if you wanted this, but I thought I'd add it.
        // get an associative array of just the values.
        var values = {};
        $inputs.each(function () {
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
            success: function (code) {
                console.log("code: " + code);
                $("#bookingForm").hide();
                $("#codeText").html(code);
                $("#modalHeader").html("Your code");
                actualCode = code;
            }
        });
        $("#bookModalButton").hide();
    });
    $("#myButton").click(function () {
        $("#myTable").show();
        testJson();
    });


});

/**
 * Created by paul on 18.11.16.
 */

$(document).ready(function () {

    function getBikes() {
        $.ajax({
            url: "/get-bikes2",
            type: "GET",
            dataType: "json",
            success: function (json) {
                json["bikes"].forEach(function (val) {

                    let returnString = `<tr><td class="table-row" id='${val.name}' >${val.name}</td></tr>`;

                    console.log(val.name);

                    $("#bikesRows").append(returnString);
            });


            }
        });
    }
/*
    function append(element, string) {
        $(element).after(string);
        /!**!/
    }*/

    function getLocations() {
        $.ajax({
            url: "/get-locations",
            type: "GET",
            dataType: "json",
            success: function (json) {

                //"<tr><td>" + string + "</td></tr>"
                $.each(json, function (i, value) {

                        let returnString = "<tr><td class='table-row'>" + value + "</td></tr>";
                        $("#pickUpTable").append(returnString);
                    })
            }
        })
    }

    function giveCode(code, name, email) {
        returnString = "<h2>Code:   " + code +"</h2>"
        +"<h2>Reserved for" + name +"</h2>"
        +"<h2>And sent to email:  " + email +"</h2>";
        $("#givenCodeDiv").append(returnString)
    }

    $("#confirmButton").click(function () {
       let name = $("#name").val();
       let email = $("#email").val();
        giveCode(2121, name, email);
        console.log(name);
        console.log(email);
    });

    function init() {
        $(".bikes").hide();
        $(".nameBooking").hide();
    }

    $(".pickup").click(function () {
        $(".bikes").show();
        console.log("pint");
    });

    $(".bikes").click(function () {
        $(".nameBooking").show();
        console.log("pint");
    });

    init();
    getBikes();
    getLocations()


});
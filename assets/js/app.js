$(document).foundation();

$(document).ready(function () {

    $.get("student-views/instruments-students.html", function (data) {
        $("#studentview").html(data);
    });

    $("#testbtn").click(function () {
        $.get("student-views/tests-student.html", function (data) {
            $("#studentview").html(data);
        });
    });

    $("#notebtn").click(function () {
        $.get("student-views/notes-student.html", function (data) {
            $("#studentview").html(data);
        });
    });

    $("#eventbtn").click(function () {
        $.get("student-views/events-student.html", function (data) {
            $("#studentview").html(data);
        });
    });

    //    $("#notificationbtn").click(function(){
    //        
    //    });



});

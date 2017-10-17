$(document).foundation();

$(document).ready(function () {

    $.get("student-views/instruments-students.html", function (data) {
        $("#studentview").html(data);
    });

    $("#home").click(function () {
        $.get("student-views/instruments-students.html", function (data) {
            $("#studentview").html(data);
        });
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

    $("#completedBtn").click(function () {
        $("#completed").show();
        $("#upcoming").hide();
        $("#completedBtn").css({
            "color": "navy",
            "box-shadow": "inset 0 0 75px white"
        });
        $("#upcomingBtn").css({
            "color": "#5B5BFF",
            "box-shadow": "none"
        });
    });
    $("#upcomingBtn").click(function () {
        $("#upcoming").show();
        $("#completed").hide();
        $("#upcomingBtn").css({
            "color": "navy",
            "box-shadow": "inset 0 0 75px white"
        });
        $("#completedBtn").css({
            "color": "#5B5BFF",
            "box-shadow": "none"
        });
    });

    $(".help").click(function () {
        $(".help-overlay").toggle();
    });
    $(".close-help").click(function () {
        $(".help-overlay").hide();
    });



});

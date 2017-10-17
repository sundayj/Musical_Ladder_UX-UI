$(document).foundation();

$(document).ready(function () {

    $.get("student-views/instruments-students.html", function (data) {
        $("#studentview").html(data);
    });

    $("#home").click(function () {
        $.get("student-views/instruments-students.html", function (data) {
            $("#studentview").html(data);
            $(".help-overlay").hide();
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Welcome Riehle!");
            $(".school-notifications").hide();
        });
    });

    $("#testbtn").click(function () {
        $.get("student-views/tests-student.html", function (data) {
            $("#studentview").html(data);
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Tests");
            $(".school-notifications").hide();
        });
    });

    $("#notebtn").click(function () {
        $.get("student-views/notes-student.html", function (data) {
            $("#studentview").html(data);
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Notes");
            $(".school-notifications").hide();
        });
    });

    $("#eventbtn").click(function () {
        $.get("student-views/events-student.html", function (data) {
            $("#studentview").html(data);
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Events");
            $(".school-notifications").hide();
        });
    });

    //    Function for the notification message functionality.

        $("#notificationbtn").click(function () {
            $(".school-notifications").slideToggle();
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
        $(".school-notifications").hide();
    });
    $(".close-help").click(function () {
        $(".help-overlay").hide();
    });


    $(".notes-acc-drop").click(function () {
        $(this).next(".notes-acc-dropdown").slideToggle();
        $(this).find(".close-notes").first().toggle();
        $(this).find(".open-notes").first().toggle();
        $(".school-notifications").hide();
    });



});

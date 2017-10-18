$(document).foundation();

$(document).ready(function () {


    //    Initial load of the landing page screen

    $.get("student-views/instruments-students.html", function (data) {
        $("#studentview").html(data);
    });


    //    Home button functionality

    $("#home").click(function () {
        $.get("student-views/instruments-students.html", function (data) {
            $("#studentview").html(data);
            $(".help-overlay").hide();
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Welcome Riehle!");
            $(".school-notifications").hide();
        });
    });


    //    Bottom navigation icon functionality.

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


    //    Test Page Functionality

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


    //    Help button overlay.

    $(".help").click(function () {
        $(".help-overlay").toggle();
        $(".school-notifications").hide();
    });
    $(".close-help").click(function () {
        $(".help-overlay").hide();
    });

    //      For the notes page.

    $(".notes-acc-drop").click(function () {
        $(this).next(".notes-acc-dropdown").slideToggle();
        $(this).find(".close-notes").first().toggle();
        $(this).find(".open-notes").first().toggle();
        $(".school-notifications").hide();
    });


    //    For the events page.

    $(".global-btn").click(function () {
        $(".global-events").show();
        $(".personal-events").hide();
        $(".global-btn").css({
            "color": "navy",
            "box-shadow": "inset 0 0 75px white"
        });
        $(".personal-btn").css({
            "color": "#5B5BFF",
            "box-shadow": "none"
        });
    });

    $(".personal-btn").click(function () {
        $(".personal-events").show();
        $(".global-events").hide();
        $(".personal-btn").css({
            "color": "navy",
            "box-shadow": "inset 0 0 75px white"
        });
        $(".global-btn").css({
            "color": "#5B5BFF",
            "box-shadow": "none"
        });
    });
    $(".month-acc-drop").click(function () {
        $(this).next(".month-acc-dropdown").slideToggle();
        $(this).find(".close-month").first().toggle();
        $(this).find("label.open-month").first().toggle();
        $(".school-notifications").hide();
    });
    $(".event-title").click(function () {
        $(this).next(".event-description").slideToggle();
        $(this).find(".close-details").first().toggle();
        $(this).find("p.more-details").first().toggle();
        $(".school-notifications").hide();
    });


    $.get("student-views/tests-student.html", function (data) {
        $("#medium-tests").html(data);
    });
    $.get("student-views/notes-student.html", function (data) {
        $("#medium-notes").html(data);
    });
    $.get("student-views/events-student.html", function (data) {
        $("#medium-events").html(data);
    });




});

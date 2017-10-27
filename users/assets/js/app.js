$(document).foundation();

$(document).ready(function () {


    //    Initial load of the landing page screen
    // For Parent
    $.get("instruments-parent.html", function (data) {
        $("#studentview").html(data);
        $("#testbtn").attr("disabled", true);
        $("#notebtn").attr("disabled", true);
        $("#eventbtn").attr("disabled", true);
    });

    //For Student
    $.get("instruments-students.html", function (data) {
        $("#studentview").html(data);
    });


    //    Home button functionality
    //    For Student
    $("#home").click(function () {
        $.get("instruments-students.html", function (data) {
            $("#studentview").html(data);
            $(".help-overlay").hide();
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Welcome Riehle!");
            $(".school-notifications").hide();
        });
    });


    //For Parent
    //  Hamburger overlay functionality

    $("i.hamburger").click(function () {
        $(".hamburger-menu").slideToggle();
    });

    $("#home").click(function () {
        $.get("instruments-parent.html", function (data) {
            $("#studentview").html(data);
            $(".help-overlay").hide();
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Welcome Jennifer!");
            $(".school-notifications").hide();
            $(".hamburger-menu").hide();
            $("#testbtn").attr("disabled", true);
            $("#notebtn").attr("disabled", true);
            $("#eventbtn").attr("disabled", true);
        });
    });

    // When student is chosen from the parent screen, load student-instrument into view, and replace disabled buttons with working buttons linked to that students notes, tests, and events, respectively.
    $("#student-2").click(function () {
        $.get("../student-views/instruments-students.html", function (data) {
            $("#studentview").html(data);
        });
        $("div.welcome-student-mobile > div.small-12.cell > h1").html("Riehle's Classes");
        $("#testbtn").attr("disabled", false);
        $("#notebtn").attr("disabled", false);
        $("#eventbtn").attr("disabled", false);
        $(".hamburger-menu").hide();
    });

    $("#testbtn").click(function () {
        $.get("../student-views/tests-student.html", function (data) {
            $("#studentview").html(data);
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Tests");
            $(".school-notifications").hide();
            $(".hamburger-menu").hide();

        });
    });

    $("#notebtn").click(function () {
        $.get("../student-views/notes-student.html", function (data) {
            $("#studentview").html(data);
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Notes");
            $(".school-notifications").hide();
            $(".hamburger-menu").hide();

        });
    });

    $("#eventbtn").click(function () {
        $.get("../student-views/events-student.html", function (data) {
            $("#studentview").html(data);
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Events");
            $(".school-notifications").hide();
            $(".hamburger-menu").hide();

        });
    });


    //    Bottom navigation icon functionality for students.

    $("#testbtn").click(function () {
        $.get("tests-student.html", function (data) {
            $("#studentview").html(data);
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Tests");
            $(".school-notifications").hide();
            $(".hamburger-menu").hide();

        });
    });

    $("#notebtn").click(function () {
        $.get("notes-student.html", function (data) {
            $("#studentview").html(data);
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Notes");
            $(".school-notifications").hide();
            $(".hamburger-menu").hide();

        });
    });

    $("#eventbtn").click(function () {
        $.get("events-student.html", function (data) {
            $("#studentview").html(data);
            $("div.welcome-student-mobile > div.small-12.cell > h1").html("Events");
            $(".school-notifications").hide();
            $(".hamburger-menu").hide();

        });
    });

    //    Function for the notification message functionality.

    $("#notificationbtn").click(function () {
        $(".school-notifications").slideToggle();
        $(".hamburger-menu").hide();

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
        $(".help-overlay").slideToggle();
        $(".school-notifications").hide();
    });
    $(".close-help").click(function () {
        $(".help-overlay").hide();
    });

    $(".help-question-acc").click(function () {
        $(".help-question-acc-open").not($(this).next(".help-question-acc-open")).slideUp();
        if ($(".help-question-acc-open:hidden")) {
            $(".see-answer").show();
        }
        if ($(this).next(".help-question-acc-open:hidden")) {
            $(this).next(".help-question-acc-open").slideDown();
            $(this).find(".see-answer").first().hide();

        }
    });

    //      For the notes page.

    $(".notes-acc-drop").click(function () {
        $(".notes-acc-dropdown").not($(this).next(".notes-acc-dropdown")).slideUp();
        if ($(".notes-acc-dropdown:hidden")) {
            $(".open-notes").show();
        }
        if ($(this).next(".notes-acc-dropdown:hidden")) {
            $(this).next(".notes-acc-dropdown").slideDown();
            //                $(this).find(".close-notes").first().toggle();
            $(this).find(".open-notes").first().hide();

        }
    });

    //    $(".notes-acc-drop").click(function () {
    //        $(".notes-acc-dropdown").hide().slideUp();
    //        $(this).next(".notes-acc-dropdown").slideToggle();
    //        $(this).find(".close-notes").first().toggle();
    //        $(this).find(".open-notes").first().toggle();
    //        $(".school-notifications").hide();
    //    });


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

    //    For Medium and Large Main Screen
    //On load, open the first div with class "medium-instrument-open".
    $(".medium-instrument-open:first").show();
    //    On load, also hide ever other div with class "medium-instrument-open" and hide the open "button" of the first visible div.
    $(".medium-instrument-open").not($(".medium-instrument-open:first:visible")).hide();
    $("p.click-open-medium-teachinst:first").hide();
    //    Since the "button" is hidden, re-align the teacher/instrument title based on the window size.
    function checkSize() {
        if ($("DIV.current-teacher-instrument:first").css("padding-top") === "3px") {
            $("DIV.current-teacher-instrument:first").css("padding-top", "13px");
        }
        if ($("DIV.current-teacher-instrument:first").css("padding-top") === "0px") {
            $("DIV.current-teacher-instrument:first").css("padding-top", "10px");
        }
    }
    checkSize();
    $(window).resize(checkSize);


    $(".medium-instrument-acc").click(function () {
        //        On click, every div with class "medium-instrument-open," except the one under the clicked div, slides-up to hide.
        $(".medium-instrument-open").not($(this).next(".medium-instrument-open")).slideUp();
        //        If div with class "medium-instrument-open" is hidden, then show the open "button".
        if ($(".medium-instrument-open:hidden")) {
            $("p.click-open-medium-teachinst").show();
        }
        //        If the clicked div has a hidden div below it with class "medium-instrument-open", then show it, hide the open "button," and fix the padding of the title to realign it based on the window size.

        if ($(this).next(".medium-instrument-open:hidden")) {
            if ($(this).find("DIV.current-teacher-instrument").first().css("padding-top") === "3px") {
                if ($("DIV.current-teacher-instrument").css("padding-top", "13px")) {
                    $("DIV.current-teacher-instrument").css("padding-top", "3px");
                }
                $(this).find("DIV.current-teacher-instrument").first().css("padding-top", "13px");
            }
            if ($(this).find("DIV.current-teacher-instrument").first().css("padding-top") === "0px") {
                if ($("DIV.current-teacher-instrument").css("padding-top", "10px")) {
                    $("DIV.current-teacher-instrument").css("padding-top", "0px");
                }
                $(this).find("DIV.current-teacher-instrument").first().css("padding-top", "10px");
            }
            $(this).next(".medium-instrument-open").slideDown();
            $(this).find("p.click-open-medium-teachinst").first().hide();
        }

        if ($("DIV.current-teacher-instrument").not($(this).find("DIV.current-teacher-instrument").first()).css("padding-top") === "13px") {
            $("DIV.current-teacher-instrument").not($(this).find("DIV.current-teacher-instrument").first()).css("padding-top", "3px");
        }
        if ($("DIV.current-teacher-instrument").not($(this).find("DIV.current-teacher-instrument").first()).css("padding-top") === "10px") {
            $("DIV.current-teacher-instrument").not($(this).find("DIV.current-teacher-instrument").first()).css("padding-top", "0px");
        }
    });


    //    $(".medium-instrument-acc").click(function () {
    //        $(this).next(".medium-instrument-open").slideToggle();
    //        $(this).find("label.see-more").first().toggle();
    //        $(this).find("label.see-less").first().toggle();
    //        $(".school-notifications").hide();
    //    });



    $.get("tests-student.html", function (data) {
        $("#medium-tests").html(data);
    });
    $.get("notes-student.html", function (data) {
        $("#medium-notes").html(data);
    });
    $.get("events-student.html", function (data) {
        $("#medium-events").html(data);
    });




});

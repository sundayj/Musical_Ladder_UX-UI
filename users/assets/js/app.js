$(document).foundation();

$(document).ready(function () {

    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------


    //  Table of Contents




    //  #0 General Functionality
    //      Functionality for generating individual pages
    //      Hamburger overlay functionality
    //      Home button functionality
    //      Function for the notification message functionality.
    //      Test Page Functionality
    //      Help button overlay.
    //      For the notes page.
    //      For the events page.
    //      For Medium and Large Main Screen


    //  #1 Student
    //      Initial load of the landing page screen for student
    //      Bottom navigation icon functionality

    //  #2 Parent
    //      Initial load of the landing page screen for parent

    //  #3 Teacher
    //      Initial load of the landing page screen for teacher

    //  #4 Parent and Teacher
    //      When student is chosen

    //  #5 Director
    //      Main nav functionality
    //      Search Filter Functionality
    //      User-Student-Widget Functionality

    //  #6 Unused, old functions.

    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------


    //  #0 General Functionality

    //      Finding height of the window, then setting it to the height of the body.
    var setHeight = $(window).height();
    $("#director-main-content").css("height", setHeight);

    //      Hamburger overlay functionality

    $("i.hamburger").click(function (e) {
        $(".hamburger-menu").slideToggle();
        e.stopPropagation();
    });

    $("body").click(function () {
        $(".hamburger-menu").slideUp();
    });

    $(".hamburger-menu").click(function (e) {
        e.stopPropagation();
    });
    $("i.hamburger").on("tap", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".hamburger-menu").slideToggle();
    });

    //      Home button functionality

    $("#home").click(function () {
        //For Parent
        $.get("all-students-parent.html", function (data) {
            $("#parentview").html(data);
            $("div.welcome-medium h2").html("Welcome Jennifer!");
            $("#testbtn").attr("disabled", true);
            $("#notebtn").attr("disabled", true);
            $("#eventbtn").attr("disabled", true);
        });
        //For Teacher
        $.get("all-students-teacher.html", function (data) {
            $("#teacherview").html(data);
            $("div.welcome-medium h2").html("Welcome Teacher!");
            $("#testbtn").attr("disabled", true);
            $("#notebtn").attr("disabled", true);
            $("#eventbtn").attr("disabled", true);
        });
        //    For Student
        $.get("instruments-students.html", function (data) {
            $("#studentview").html(data);
            $("div.welcome-medium h2").html("Welcome Riehle!");
        });
        $(".help-overlay").hide();
        $(".school-notifications").hide();
        $(".hamburger-menu").hide();
    });

    //      Function for the notification message functionality.

    $("#notificationbtn").click(function () {
        $(".school-notifications").slideToggle();
        $(".hamburger-menu").hide();

    });

    //      Static functions for indivual test, note, and event buttons.

    //          Tests, Notes, and Events
    function tneBtnFunction(location, name) {
        $.get(location, function (data) {
            $("#parentview").html(data);
            $("#teacherview").html(data);
            $("div.welcome-medium h2").html(name);
            $(".welcome-student-mobile h1").html(name);
        });
        $(".school-notifications").hide();
        $(".hamburger-menu").hide();
    }


    //      Test Page Functionality

    $("#completedBtn").click(function () {
        $("#completed").show();
        $("#upcoming").hide();
        $("#completedBtn").css({
            "color": "navy",
            "box-shadow": "inset 0 0 75px white",
            "background-color": "#00B0FF",
            "text-shadow": "0 0 4px white"
        });
        $("#upcomingBtn").css({
            "color": "gray",
            "box-shadow": "none",
            "background-color": "transparent",
            "text-shadow": "none"
        });
    });
    $("#upcomingBtn").click(function () {
        $("#upcoming").show();
        $("#completed").hide();
        $("#upcomingBtn").css({
            "color": "navy",
            "box-shadow": "inset 0 0 75px white",
            "background-color": "#00B0FF",
            "text-shadow": "0 0 4px white"

        });
        $("#completedBtn").css({
            "color": "gray",
            "box-shadow": "none",
            "background-color": "transparent",
            "text-shadow": "none"
        });
    });


    //      Help button overlay.

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

    //      For the events page.


    $(".event-title").click(function () {
        $(this).next(".event-description").slideToggle();
        $(this).find(".close-details").first().toggle();
        $(this).find("p.more-details").first().toggle();
        $(".school-notifications").hide();
    });

    //      For Medium and Large Main Screen
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




    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------

    //  #1 Student

    //      Initial load of the landing page screen for student
    $.get("instruments-students.html", function (data) {
        $("#studentview").html(data);
    });

    //      Bottom navigation icon functionality

    if ($("#studentview")) {
        $("#testbtn").click(function () {
            $.get("tests-student.html", function (data) {
                $("#studentview").html(data);
                $("div.welcome-medium h2").html("Tests");
                $(".school-notifications").hide();
                $(".hamburger-menu").hide();

            });
        });

        $("#notebtn").click(function () {
            $.get("notes-student.html", function (data) {
                $("#studentview").html(data);
                $("div.welcome-medium h2").html("Notes");
                $(".school-notifications").hide();
                $(".hamburger-menu").hide();

            });
        });

        $("#eventbtn").click(function () {
            $.get("events-student.html", function (data) {
                $("#studentview").html(data);
                $("div.welcome-medium h2").html("Events");
                $(".school-notifications").hide();
                $(".hamburger-menu").hide();

            });
        });
    }

    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //  #2 Parent

    //      Initial load of the landing page screen for parent
    $.get("all-students-parent.html", function (data) {
        $("#parentview").html(data);
        $("#testbtn").attr("disabled", true);
        $("#notebtn").attr("disabled", true);
        $("#eventbtn").attr("disabled", true);
    });

    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //  #3 Teacher

    //      Initial load of the landing page screen for teacher
    $.get("all-students-teacher.html", function (data) {
        $("#teacherview").html(data);
        $("#testbtn").attr("disabled", true);
        $("#notebtn").attr("disabled", true);
        $("#eventbtn").attr("disabled", true);
    });

    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------


    //  #4 Parent and Teacher

    //      When student is chosen from the parent or teacher screen, load student-instrument into view, and replace disabled buttons with working buttons linked to that students notes, tests, and events, respectively.
    $("#student-0").click(function () {
        $.get("../student-views/instruments-johnstudent.html", function (data) {
            $("#teacherview").html(data);
        });
        $("div.welcome-student-mobile h1").html("John | Classes");
        $("#testbtn").attr("disabled", false);
        $("#testbtn").click(function () {
            tneBtnFunction("../student-views/tests-student.html", "John | Tests");
        });

        $("#notebtn").attr("disabled", false);
        $("#notebtn").click(function () {
            tneBtnFunction("../student-views/notes-student.html", "John | Notes");
        });

        $("#eventbtn").attr("disabled", false);
        $("#eventbtn").click(function () {
            tneBtnFunction("../student-views/events-student.html", "John | Events");
        });

        $(".hamburger-menu").hide();
    });


    $("#student-1").click(function () {
        $.get("../student-views/instruments-jenstudent.html", function (data) {
            $("#parentview").html(data);
            $("#teacherview").html(data);
        });
        $("div.welcome-medium h2").html("Jennifer | Classes");
        $(".welcome-student-mobile h1").html("Jennifer | Classes");
        $("#testbtn").attr("disabled", false);
        $("#testbtn").click(function () {
            tneBtnFunction("../student-views/tests-jenstudent.html", "Jennifer | Tests");
        });

        $("#notebtn").attr("disabled", false);
        $("#notebtn").click(function () {
            tneBtnFunction("../student-views/notes-jenstudent.html", "Jennifer | Notes");
        });

        $("#eventbtn").attr("disabled", false);
        $("#eventbtn").click(function () {
            tneBtnFunction("../student-views/events-student.html", "Jennifer | Events");
        });

        $(".hamburger-menu").hide();
    });

    $("#student-2").click(function () {
        $.get("../student-views/instruments-students.html", function (data) {
            $("#parentview").html(data);
            $("#teacherview").html(data);
        });
        $("div.welcome-medium h2").html("Riehle | Classes");
        $(".welcome-student-mobile h1").html("Riehle | Classes");
        $("#testbtn").attr("disabled", false);
        $("#testbtn").click(function () {
            tneBtnFunction("../student-views/tests-student.html", "Riehle | Tests");
        });

        $("#notebtn").attr("disabled", false);
        $("#notebtn").click(function () {
            tneBtnFunction("../student-views/notes-student.html", "Riehle | Notes");
        });

        $("#eventbtn").attr("disabled", false);
        $("#eventbtn").click(function () {
            tneBtnFunction("../student-views/events-student.html", "Riehle | Events");
        });
        $(".hamburger-menu").hide();
    });

    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //---------------------------------------------------------
    //  #5 Director

    //      Main nav functionality
    $(".options").hover(function () {
        $(this).children("div.actions, .dropdown").toggleClass("active-nav-options");
        $(this).children(".dropdown").toggle();
    });
    $(".options").click(function () {
        $(this).children("div.actions, .dropdown").toggleClass("active-nav-options");
        $(this).children(".dropdown").toggle();
    });

    //      Search Filter Functionality




    $("#check-parents").click(function () {
        $(".parents-all").toggle();

    });

    $("#check-teachers").click(function () {
        $(".teachers-all").toggle();

    });


    $("#check-students").click(function () {
        $(".students-all").toggle();

    });

    $("input#main-filter").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#search-director-results li.individual-user").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        if ($("input#check-parents:checked")) {
            $("#parent-results li.individual-user").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        } else if ($("input#check-teachers:checked")) {
            $("#teacher-results li.individual-user").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        } else if ($("input#check-student:checked")) {
            $("#students-results li.individual-user").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        }

    });


    //      User-Student-Widget Functionality

    $(".open-student-view").click(function () {
        $(this).closest(".panel").find(".panel-body").toggle(300);

        if ($(this).hasClass("open-student-view")) {
            $(this).closest(".panel-heading").toggle(300);

        }
        if ($(this).hasClass("minus")) {
            $(this).closest(".panel").find(".panel-heading").toggle(300);
        }
    });

    $("div#john-tests, div#john-notes, div#lindsey-notes, div#lindsey-tests, div#juliet-notes, div#juliet-tests").addClass("inactive-tab");
    $("div#riehle-events-tab").addClass("active-tab");

    $(".dir-teach-student-events-container").show();

    function dirTeachStuTabs(activeTab, inActiveTab, activePanel, inActivePanel) {
        $(activeTab).addClass("active-tab").removeClass("inactive-tab");
        $(activePanel).show();
        $(inActiveTab).addClass("inactive-tab").removeClass("active-tab");
        $(inActivePanel).hide();
    }

    $("div#riehle-events-tab.events-tab").click(function () {
        dirTeachStuTabs(this, "div#john-tests, div#john-notes, div#lindsey-notes, div#lindsey-tests, div#juliet-notes, div#juliet-tests", "div#riehle-events", "div#john-teacher-tests:visible, div#lindsey-teacher-notes:visible, div#juliet-teacher-notes:visible, div#john-teacher-notes:visible, div#lindsey - teacher - tests:visible, div#juliet-teacher-tests:visible")
    });

    $("div#john-notes").click(function () {
        dirTeachStuTabs(this, "div#riehle-events-tab.events-tab, div#john-tests, div#lindsey-notes, div#lindsey-tests, div#juliet-notes, div#juliet-tests", "div#john-teacher-notes", "div#riehle-events:visible, div#lindsey-teacher-notes:visible, div#juliet-teacher-notes:visible, div#john-teacher-tests:visible, div#lindsey-teacher-tests:visible, div#juliet-teacher-tests:visible")
    });

    $("div#john-tests").click(function () {
        dirTeachStuTabs(this, "div#riehle-events-tab.events-tab, div#john-notes, div#lindsey-notes, div#lindsey-tests, div#juliet-notes, div#juliet-tests", "div#john-teacher-tests", "div#riehle-events:visible, div#lindsey-teacher-notes:visible, div#juliet-teacher-notes:visible, div#john-teacher-notes:visible, div#lindsey-teacher-tests:visible, div#juliet-teacher-tests:visible")
    });

    $("div#lindsey-notes").click(function () {
        dirTeachStuTabs(this, "div#riehle-events-tab.events-tab, div#john-notes, div#lindsey-tests, div#john-tests, div#juliet-notes, div#juliet-tests", "div#lindsey-teacher-notes", "div#riehle-events:visible, div#lindsey-teacher-tests:visible, div#juliet-teacher-notes:visible, div#john-teacher-notes:visible, div#john-teacher-tests:visible, div#juliet-teacher-tests:visible")
    });

    $("div#lindsey-tests").click(function () {
        dirTeachStuTabs(this, "div#riehle-events-tab.events-tab, div#john-notes, div#lindsey-notes, div#john-tests, div#juliet-notes, div#juliet-tests", "div#lindsey-teacher-tests", "div#riehle-events:visible, div#lindsey-teacher-notes:visible, div#juliet-teacher-notes:visible, div#john-teacher-notes:visible, div#john-teacher-tests:visible, div#juliet-teacher-tests:visible")
    });

    $("div#juliet-notes").click(function () {
        dirTeachStuTabs(this, "div#riehle-events-tab.events-tab, div#john-notes, div#lindsey-tests, div#john-tests, div#lindsey-notes, div#juliet-tests", "div#juliet-teacher-notes", "div#riehle-events:visible, div#lindsey-teacher-tests:visible, div#lindsey-teacher-notes:visible, div#john-teacher-notes:visible, div#john-teacher-tests:visible, div#juliet-teacher-tests:visible")
    });

    $("div#juliet-tests").click(function () {
        dirTeachStuTabs(this, "div#riehle-events-tab.events-tab, div#john-notes, div#lindsey-notes, div#john-tests, div#juliet-notes, div#lindsey-tests", "div#juliet-teacher-tests", "div#riehle-events:visible, div#lindsey-teacher-notes:visible, div#juliet-teacher-notes:visible, div#john-teacher-notes:visible, div#john-teacher-tests:visible, div#lindsey-teacher-tests:visible")
    });








    //  #6 Unused, old functions.

    //  Functions commented out when better solutions were found. Collected here in case we need to go back to them.

    //      Functionality for generating individual pages for medium view (not used for now)

    //    $.get("tests-student.html", function (data) {
    //        $("#medium-tests").html(data);
    //    });
    //    $.get("notes-student.html", function (data) {
    //        $("#medium-notes").html(data);
    //    });
    //    $.get("events-student.html", function (data) {
    //        $("#medium-events").html(data);
    //    });
    //    $(".notes-acc-drop").click(function () {
    //        $(".notes-acc-dropdown").hide().slideUp();
    //        $(this).next(".notes-acc-dropdown").slideToggle();
    //        $(this).find(".close-notes").first().toggle();
    //        $(this).find(".open-notes").first().toggle();
    //        $(".school-notifications").hide();
    //    });
    //    $(".global-btn").click(function () {
    //        $(".global-events").show();
    //        $(".personal-events").hide();
    //        $(".global-btn").css({
    //            "color": "navy",
    //            "box-shadow": "inset 0 0 75px white"
    //        });
    //        $(".personal-btn").css({
    //            "color": "#5B5BFF",
    //            "box-shadow": "none"
    //        });
    //    });

    //    $(".personal-btn").click(function () {
    //        $(".personal-events").show();
    //        $(".global-events").hide();
    //        $(".personal-btn").css({
    //            "color": "navy",
    //            "box-shadow": "inset 0 0 75px white"
    //        });
    //        $(".global-btn").css({
    //            "color": "#5B5BFF",
    //            "box-shadow": "none"
    //        });
    //    });


    //    $(".month-acc-drop").click(function () {
    //        $(this).next(".month-acc-dropdown").slideToggle();
    //        $(this).find(".close-month").first().toggle();
    //        $(this).find("label.open-month").first().toggle();
    //        $(".school-notifications").hide();
    //    });
    //    $("#testbtn").click(function () {
    //        $.get("../student-views/tests-student.html", function (data) {
    //            $("#parentview").html(data);
    //            $("#teacherview").html(data);
    //            $("div.welcome-medium h2:contains('Riehle')").html("Riehle | Tests");
    //            $("div.welcome-medium h2:contains('Jennifer')").html("Jennifer | Tests");
    //            $("div.welcome-medium h2:contains('John')").html("John | Tests");
    //            $(".school-notifications").hide();
    //            $(".hamburger-menu").hide();
    //
    //        });
    //    });

    //    $("#notebtn").click(function () {
    //        if ($("div.welcome-medium h2:contains('Jennifer')")) {
    //            $("div.welcome-medium h2:contains('Jennifer')").html("Jennifer | Notes").get("../student-views/notes-jenstudent.html", function (data) {
    //                $("#parentview").html(data);
    //                $("#teacherview").html(data);
    //            });
    //        }
    //        if ($("div.welcome-medium h2:contains('Riehle')")) {
    //            $("div.welcome-medium h2:contains('Riehle')").html("Riehle | Notes");
    //
    //            $.get("../student-views/notes-student.html", function (data) {
    //                $("#parentview").html(data);
    //                $("#teacherview").html(data);
    //            });
    //        }
    //        if ($("div.welcome-medium h2:contains('John')")) {
    //            $("div.welcome-medium h2:contains('John')").html("John | Notes");
    //            $.get("../student-views/notes-student.html", function (data) {
    //                $("#parentview").html(data);
    //                $("#teacherview").html(data);
    //            });
    //        }
    //        $(".school-notifications").hide();
    //        $(".hamburger-menu").hide();
    //    });
    //
    //    $("#eventbtn").click(function () {
    //        $.get("../student-views/events-student.html", function (data) {
    //            $("#parentview").html(data);
    //            $("#teacherview").html(data);
    //            $("div.welcome-medium h2:contains('Riehle')").html("Riehle | Events");
    //            $("div.welcome-medium h2:contains('Jennifer')").html("Jennifer | Events");
    //            $("div.welcome-medium h2:contains('John')").html("John | Events");
    //            $(".school-notifications").hide();
    //            $(".hamburger-menu").hide();
    //
    //        });
    //    });

    //    $("input.search-filter").click(function () {
    //        $(".search-filter").not(this).toggleClass("search-filter-visible");
    //        $(this).next("label").toggleClass("search-filter-visible");
    //    });









});

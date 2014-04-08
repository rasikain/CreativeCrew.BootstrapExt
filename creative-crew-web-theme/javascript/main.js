$("#launchButton").bind({
    click: function () {
        var slider_width = $('.cc-side-bar').width(); //get width automaticly
        if ($(this).css("margin-left") == slider_width + "px" && !$(this).is(':animated')) {
            $('.cc-side-bar,#launchButton, #pageLoader').animate({
                "margin-left": '-=' + slider_width
            });
        } else {
            if (!$(this).is(':animated')) //perevent double click to double margin
            {
                $('.cc-side-bar,#launchButton, #pageLoader').animate({
                    "margin-left": '+=' + slider_width
                });
            }
        }
    }
});

$("#loadDashboard").bind({
    click: function () {
        $("#midContainer").load('index.html #appContent')
    }
});
$("#loadScorecard").bind({
    click: function () {

        $("#midContainer").load('scorecard.html #appContent');
    }
});
$("#loadImportProjects").bind({
    click: function () {

        $("#midContainer").load('import-projects.html #appContent');
    }
});
$("#loadTypography").bind({
    click: function () {

        $("#midContainer").load('typhography.html');
    }
});
$("#headerContainer").load('header.html');
$("#midContainer").load('index.html #appContent');
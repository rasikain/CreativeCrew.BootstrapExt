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

$("#headerContainer").load('header.html');
$("#midContainer").load('index.html');


$("#loadMessages").bind({
    click: function () {

        $("#midContainer").load('messages.html');
    }
});
$("#loadIcons").bind({
    click: function () {

        $("#midContainer").load('icons.html');
    }
});
$("#loadFormElements").bind({
    click: function () {

        $("#midContainer").load('form-elements.html');
    }
});
$("#loadFormTypes").bind({
    click: function () {

        $("#midContainer").load('form-types.html');
       
    }
});
$("#loadFormValidations").bind({
    click: function () {

        $("#midContainer").load('form-validations.html');
    }
});
$("#loadButtons").bind({
    click: function () {

        $("#midContainer").load('buttons.html');
    }
});
$("#loadContainers").bind({
    click: function () {

        $("#midContainer").load('containers.html');
    }
});
$("#loadTypography").bind({
    click: function () {

        $("#midContainer").load('typhography.html');
    }
});




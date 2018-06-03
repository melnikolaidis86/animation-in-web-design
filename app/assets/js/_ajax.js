$.getJSON('./assets/json/program.json', function(data) {

    //Injecting section titles
    $('#programTitle').html(data.programTitle);
    $('#programSubtitle').html(data.programSubtitle);

    //Injecting program info
    $('#401moduleTitle').html(data.modules[0].moduleTitle);


    data.modules[0].moduleCourses.forEach(function(element) {
        
        $('#401moduleList').append('<li><i class="fa-li fa fa-check-square"></i>' + element + '</li>');
    });

    $('#402moduleTitle').html(data.modules[1].moduleTitle);

    data.modules[1].moduleCourses.forEach(function(element) {
        
        $('#402moduleList').append('<li><i class="fa-li fa fa-check-square"></i>' + element + '</li>');
    });

    $('#501moduleTitle').html(data.modules[2].moduleTitle);

    data.modules[2].moduleCourses.forEach(function(element) {
        
        $('#501moduleList').append('<li><i class="fa-li fa fa-check-square"></i>' + element + '</li>');
    });
});






$(document).ready(function () {
    console.log('document is ready.');

    
    $('form').on('submit', function(e) {
        e.preventDefault()
        var teksti = $('#tekstikentta').val();
        console.log( teksti )
    })

    $.get('/employee/getEmployees', function (data, status) {
        console.log("palvelimelta saatiin vastaus:")
        console.log(status)
        renderTable(data);
    })

    console.log("koodirivi ajax-kutsun jälkeen")

    renderTable = function (data) {
        for (var i = 0; i < data.length; i++) {
            $('#employee-table').find('tbody')
                .append('<tr><td>' + data[i].first_name + '</td><td>' + data[i].last_name + '</td><td>' + data[i].email + '</td></tr>');
        }
    }
})
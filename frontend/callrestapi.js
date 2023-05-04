var url = "http://localhost:3300/api/teams";

function postTeams() {

    console.log(url);

    var myName = $('#name').val();
    var myLeague = $('#league').val();
    var myCup = $('#cup').val();
    var myConcacaf = $('#concacaf').val();
    var myAge = $('#age').val();
    var myStadium = $('#stadium').val();
    var myState = $('#state').val();
    var myCountry = $('#country').val();
    var myFundation = $('#fundation').val();
    var myNameleague = $('#nameleague').val();

    var myteam = {
        name: myName,
        league: myLeague,
        cup: myCup,
        concacaf: myConcacaf,
        age: myAge,
        stadium: myStadium,
        state: myState,
        country: myCountry,
        namelague: myNameleague,
        fundation: myFundation
    };
    console.log(myteam);

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        sucess: function (data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data.team));
        },
        data: JSON.stringify(myteam)
    });
}
function getTeams() {
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);

            var arrTeams = json.teams;

            var htmlTableTeams = '<table border=1">';

            arrTeams.forEach(function(item) {
                console.log(item);
                htmlTableTeams +=   '<tr>' +
                                        '<td>' + item.id + '</td>' +
                                        '<td>' + item.name + '</td>' +
                                        '<td>' + item.league + '</td>' +
                                        '<td>' + item.cup + '</td>' +
                                        '<td>' + item.concacaf + '</td>' +
                                        '<td>' + item.age + '</td>' +
                                        '<td>' + item.stadium + '</td>' +
                                        '<td>' + item.state + '</td>' +
                                        '<td>' + item.country + '</td>' +
                                        '<td>' + item.nameleague + '</td>' +
                                        '<td><img src="' + item.fundation + '" width="100" height="70"></td>' +
                                    '</tr>'                                     
            });
            htmlTableTeams += '</table>';

            $('#resultado').html(htmlTableTeams);
        }
    );
}
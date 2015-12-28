function getLatestReleaseInfo(elem) {
        var project = elem.attr("data-repo");

        $.getJSON("https://api.github.com/repos/cc-translators/"+project+"/releases/latest").done(function (release) {
            console.log(release);
        });
    }


function getAllReleaseInfos() {
    $(".latest-release").each(function (e) {
        getLatestReleaseInfo(e);
    });
}

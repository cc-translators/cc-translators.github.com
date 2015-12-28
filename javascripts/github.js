function getLatestReleaseInfo(project) {
        $.getJSON("https://api.github.com/repos/cc-translators/"+project+"/releases/latest").done(function (release) {
            console.log(release);
        });
    }


function getAllReleaseInfos() {
    $(".latest-release").each(function () {
        var project = $(this).attr("data-repo");
        getLatestReleaseInfo(project);
    });
}

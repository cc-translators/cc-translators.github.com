function getLatestReleaseInfo(project) {
        $.getJSON("https://api.github.com/repos/cc-translators/"+project+"/releases/latest").done(function (release) {
            var asset_url = release.assets[0].browser_download_url;
            $(".latest-release[data-repo='"+project+"']").attr("href", asset_url);
        });
    }


function getAllReleaseInfos() {
    $(".latest-release").each(function () {
        var project = $(this).attr("data-repo");
        getLatestReleaseInfo(project);
    });
}

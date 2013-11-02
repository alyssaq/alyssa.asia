$(document).ready(function() {
  var i = 0, prefixUrl = "//netdna.bootstrapcdn.com/bootswatch/3.0.0/",
    postfixUrl = "/bootstrap.min.css",
    themes = ["journal", "amelia", "cyborg"];
  $(".themeBtn").click(function() {
    var curTheme = $("#cssTheme").attr("href");
    $("#cssTheme").attr("href", prefixUrl + themes[i] + postfixUrl);
    i = (i + 1) % 3;
    return false;
  });
});

$(document).ready(function() {
  $("#mainform").submit(function(event) {
    event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"];
    var userSentence = $("input#sentence").val();
    var output = userSentence

    for (var index = 0; index <= userSentence.length; index++) {
      for(var index2 = 0; index2 <= vowels.length; index2++) {
        if (userSentence[index] === vowels[index2]) {
          output = output.replace(userSentence[index], "-");
        }
      }
    }
    $("#mainform").hide();
    $("#output").append(output);

  });
});

const TIME = 2500;
/**
 * Обработчик клика по кнопке "Цензура"
 * @returns {void}
 */
$("#censor-btn").click(function(){
    var text = $("#left-input").val();
    var badWords = $("#right-input").val().split(",");

    if (text === "" || $("#right-input").val() === "") {
        alert("Заполните оба поля!");
        return;
    }
        
    $("#result-text").html(text);
        
    var htmlWithSpans = text; 
    for (var i = 0; i < badWords.length; i++) {
        var word = badWords[i].trim();
        if (word === "") continue;
            
        var regex = new RegExp(word, "gi");
        htmlWithSpans = htmlWithSpans.replace(
            regex, 
            '<span class="word-wrapper" style="position: relative; \n\
            display: inline-block;">' + word +
            '<span class="censor-overlay"\n\
            style="opacity: 0;"></span></span>'
        );
    }
        
    $("#result-text").html(htmlWithSpans);
    /**
     * Последовательная анимация появления красных прямоугольниках на словах
     * @param{number}index
     */

    $(".censor-overlay").each(function(index){
        var overlay = $(this);
            
        setTimeout(function(){
            overlay.animate({
                "opacity": "1"
            }, TIME);
        }, index * TIME);
            
    });
        
});
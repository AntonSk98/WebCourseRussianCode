$(document).ready(function(){
    //modals
    var $input = $('.input'),
    $buffer = $('.input-buffer');

$input.on('input', function() {
    $buffer.text($input.val());
    $input.width($buffer.width());
})})
/* поставить openserver
    как запретить внутренний скроллинг окна basic
    эффекты доразбирать
    УСТАНОВИТЬ JQUERY И ПРОПИСАТЬ ПУТЬ БЕЗ ИНТЕРНЕТА
    САЙТ FOTORAMA.IO
    GOOGLE FORMS
    AJAX ПОСМОТРЕТЬ ВИДЕОУРОК
    JQUERY ПОСМОТРЕТЬ УРОКИ ИЛИ СПРАВОЧНИКИ*/ 
$(document).ready(function () {
  $('#datetimepicker').datetimepicker({
    format: 'd.m.Y.',
    closeOnDateSelect: true,
    timepicker: false,
    todayButton: true,
    dayOfWeekStart: 1, // Mon first in week
    scrollInput: false,
    onSelectDate:function () {
      $('#datum').text($('#datetimepicker').val()); // default is today
    }
  });
  $('#datetimepicker').val($('#datum').text()); // init input field

  $('#btn-calendar').click(function(event) {
    event.preventDefault();
    $('#datetimepicker').mousedown();
  });

  $(".dodaj-deo").click(function () {
    $("div.inputs").append(`<div class="input-group">
        <input type="text" class="form-control deo" placeholder="Unesi deo...">
        <span class="input-group-btn">
          <button class="btn btn-danger glyphicon glyphicon-remove-sign remove" type="button"></button>
        </span>
      </div>`);
  });

  $('body').on('click', 'button.remove', function () {
    $(this).parent().parent().remove();
  });

  $('#btn-refresh').click(function () {
    $('#datum').text($('#datetimepicker').val());
    $('#kilometri').text($('#input-kilometri').val());
    $('ul.delovi').empty();
    $('input.deo').each(function() {
      $('ul.delovi').append('<li>' + $(this).val() + '</li>');
    })
  });

  $('#btn-save2pdf').click(function () {
    const element = document.getElementById("pdf-preview");

    var opt = {
      margin:       [0.5, 1, 0.5, 1], // [top, left, bottom, right],
      filename:     'kreka.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 4 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
     
    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
  });

});

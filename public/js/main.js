$(document).ready(function () {
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
    // alert('refresh');
    $('#kilometri').text($('#input-kilometri').val());
    $('ul.delovi').empty();
    $('input.deo').each(function() {
      // alert($(this).val())
      $('ul.delovi').append('<li>' + $(this).val() + '</li>');
    })
  });

  $('#btn-save2pdf').click(function () {
    // var pdf = new jspdf.jsPDF('p', 'pt', 'letter');
		// pdf.html($('div.pdf-preview').html(), {
		// 	callback: function (pdf) {
		// 		var iframe = document.createElement('iframe');
		// 		iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
		// 		document.body.appendChild(iframe);
		// 		iframe.src = pdf.output('datauristring');
		// 	}
		// });

    // var doc = new jspdf.jsPDF();
    // var elementHTML = $('div.pdf-preview').html();
    // var specialElementHandlers = {
        // '#elementH': function (element, renderer) {
        //     return true;
        // }
    // };
    // doc.html(elementHTML, 15, {
    //     'width': 170,
    //     'elementHandlers': specialElementHandlers
    // });
    // doc.html(elementHTML);

    // Save the PDF
    // doc.save('sample-document.pdf');

    // var pdf = new jspdf.jsPDF('p', 'pt', 'letter');
    // pdf.html($('div.pdf-preview').html(), {
		// 	callback: function (pdf) {
		// 		var iframe = document.createElement('iframe');
    //     iframe.setAttribute("id", "preview-iframe");
		// 		iframe.setAttribute('style', 'position:absolute;top:0;right:0;height:100%; width:600px');
		// 		document.body.appendChild(iframe);
		// 		iframe.src = pdf.output('datauristring');
		// 	}
		// });

    const element = document.getElementById("pdf-preview");

    var opt = {
      margin:       [0.5, 1, 0.5, 1], // [top, left, bottom, right],
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 4 }, //, with: 600, height: 800 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
     
    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();

  });

  // $('#close-preview').click(function() {
  //   var iframe = window.parent.document.getElementById('preview-iframe');
  //   iframe.parentNode.removeChild(iframe);
  // });

});

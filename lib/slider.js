export function slider() {
  $(document).ready(function() {
    $('#slider').slider({
      min: 1,
      max: 1440,
      step: 1,
      values: [1, 1440],
      slide: function(event, ui) {
        debugger;
        if (
          (ui.handleIndex === 1 && ui.values[1] < ui.values[0] + 1) ||
          (ui.handleIndex === 0 && ui.values[1] < ui.values[0] + 1)
        ) {
          return false;
        }
        for (var i = 0; i < ui.values.length; ++i) {
          $('input.sliderValue[data-index=' + i + ']').val(
            `${('0' + Math.floor(ui.values[i] / 60)).slice(-2)}:${(
              '0' + Math.floor(ui.values[i] % 60)
            ).slice(-2)}`
          );
        }
      },
    });

    $('input.sliderValue').change(function() {
      var $this = $(this);
      $('#slider').slider('values', $this.data('index'), $this.val());
    });

    $('#slider1').slider({
      min: 0,
      max: 366,
      step: 1,
      values: [0, 366],
      slide: function(event, ui) {
        if (
          (ui.handleIndex === 1 && ui.values[1] < ui.values[0] + 1) ||
          (ui.handleIndex === 0 && ui.values[1] < ui.values[0] + 1)
        ) {
          return false;
        }
        for (var i = 0; i < ui.values.length; ++i) {
          const date = new Date(1488344401000 + ui.values[i] * 86399000);
          $('input.sliderValue1[data-index=' + i + ']').val(
            `${date.getMonth() +
              1 +
              '/' +
              date.getDate() +
              '/' +
              date.getFullYear()}`
          );
        }
      },
    });

    $('input.sliderValue').change(function() {
      var $this = $(this);
      $('#slider1').slider('values', $this.data('index'), $this.val());
    });

    // $('.ui-slider-handle:last-child').css({
    //   'margin-left': '-20px',
    //   'margin-right': '-20px',
    // });
  });
}

  $(document).ready(function() {
  var k=JSON.parse(localStorage.getItem('rateCard'));
  if(k){
    var dk=k['defaultKey'];
    if(dk){
      if (dk.search('_hi')>=0) {
        $('#classic').removeClass('selected').addClass('unselected');
        $('#high-protein').removeClass('unselected').addClass('selected');
      } else if (dk.search('_nhi')>=0) {
        $('#high-protein').removeClass('selected').addClass('unselected');
        $('#classic').removeClass('unselected').addClass('selected');
      }
    }
  }
      $('#classic').click(function() {
        if ($(this).hasClass('unselected')) {
          $('#maxPlusCheck').click();
          $(this).removeClass('unselected');
          $(this).addClass('selected');
          $('#high-protein').removeClass('selected').addClass('unselected');
        } else {
        }
      });
      $('#high-protein').click(function() {
        if ($(this).hasClass('unselected')) {
          $('#maxPlusCheck').click();
          $(this).removeClass('unselected');
          $(this).addClass('selected');
          $('#classic').removeClass('selected').addClass('unselected');
        } else {
        }
      });
    });

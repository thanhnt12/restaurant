$(document).ready(function(){
    $('#salary').DataTable();

    $('.select2ChucVu').select2({
        minimumResultsForSearch: Infinity // only start searching when the user has input 3 or more characters
      });
})
$(document).ready(function(){
	$("#tombolSimpan").click(function(){
		var nama  = $("#nama").val();
		var email = $("#email").val();
		var telp  = $("#telp").val();
		var fb    = $("#fb").val();
		var ig    = $("#ig").val();
		$.post("https://klubaners.web.id/kontak/tambah.php",
		{
			nama : nama,
			email: email,
			telp : telp,
			fb   : fb,
			ig   : ig
		},
		function(response){
			$("#submitResponse").html(response);
			$("#nama").val('');
			$("#email").val('');
			$("#telp").val('');
			$("#fb").val('');
			$("#ig").val('');
			
		});
	});
});

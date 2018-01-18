$(document).ready(function(){
	$.getJSON("https://klubaners.web.id/kontak/daftar.php", function(result){
        $.each(result, function(i, kontak){
            /*$("#daftarKontak").append("<li class='list-group-item'>"+kontak.nama+"</li>");<-- cuma nama*/
            /*untuk membuat hyperlink menampilkan detail kontak, langkahnya adalah sbb :
             * 1. simpan kontak.nomor ke localstorage melalui fungsi setNomor
             * 2. buat hyperlink kehalaman detil.html
             * */
            $("#daftarKontak").append("<li class='list-group-item' onClick=setNomor("+kontak.nomor+")>"+kontak.nama+"</li>");
        });
    });
    
    $("#tambahKontak").click(function(){
		window.location="form.html";
	});
	
	$('#cariKontak').keyup(function(){
		//ambil data dari value cariKontak
		var data = $(this).val();
		
		// cari data ke file cari.php di server
		$.getJSON('https://klubaners.web.id/kontak/cari.php?nama='+data,
					function(nama){
						console.log(nama);
						//bersihkan elemen #daaftarKontak
						$("#daftarKontak li").remove();
						$.each(nama,function(i,nk){
							$("#daftarKontak").append(
							  '<li class="list-group-item">'+nk.nama+'</li>'
							);
						});
					});
	});
});

function setNomor(nomor){
	// simpan nomor ke memori browser
	localStorage.setItem('nomor',nomor);
	
	//buka detil.html
	window.location='detil.html';
}

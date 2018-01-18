$(document).ready(function(){
	/*ambil nomor dari localstorage*/
	var nomor = localStorage.getItem('nomor');
	
	/*sematkan variable nomor ke elemen id=nomor*/
	$("#nomor").html(nomor);
	
	/*ambiol data dari server di file detil.php*/
	$.getJSON('https://klubaners.web.id/kontak/baca1.php?id='+nomor,function(data){
		// variabel data berupa json, dipecah agar menjadi array
		//var kontak = JSON.parse(data);
		
		/* tampilkan ke log console sebagai tes
		console.log(data);
		* contoh output 
			email:"andriana@gmail.com"
			fb:"Ardian"
			ig:"@ardiandri"
			nama:"Ardian Andri"
			nomor:2
			telp:"083455245438"
		*/
		
		// masukkan data kemasing-masing elemen dengan id yg sesuai
		$('#nama').html(data.nama);
		$('#telp').html(data.telp);
		$('#email').html(data.email);
		$('#fb').html(data.fb);
		$('#ig').html(data.ig);
	});
});

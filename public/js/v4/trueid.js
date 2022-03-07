$('.checkid').click(function(){
	$(this).html('<ion-spinner name="dots"></ion-spinner>');
	$('.inputAlert').hide();
	setTimeout(() => {
	const id = $('#playerid').val();
	if(id == '' || id == null || id.length <= 5)
	{
		$('.inputAlert').fadeIn();
		$('.checkid').html('Check ID');
		setTimeout(() => {
			$('.inputAlert').fadeOut();
		},3000)
		return false;
	}else{
		$('.inputAlert').hide();
		$('.checkid').html('<ion-spinner name="dots"></ion-spinner>');
	}
	$.ajax({
		url: 'DarkCodexV2/TrueID.php?id='+id,
		type: 'GET',
		dataType: 'json',
		beforeSend: function(){
			$('.checkid').html('<ion-spinner name="dots"></ion-spinner>');
		},
		success: function(sittiamina){
			$('.checkid').html('Check ID');
			const code = sittiamina.result.status;
			switch(code){
				case '200': 
					$('.trueid').fadeOut();
					$('.toast').fadeIn();
					$('#toastAlert').html('Selamat Datang ' + sittiamina.nickname);
					$('#endName').html(sittiamina.nickname);
					$('.nickname').text(sittiamina.nickname);
					$('input[name="id"]').val(id);
					$('input[name="nick"]').val(sittiamina.nickname);
					setTimeout(() => {
						$('.trueid').fadeOut();
						$('.mask').fadeOut();
						$('.toast').hide();
					},2000)
					break;
				case '400':
					$('.trueid').fadeOut();
					$('.toast').fadeIn();
					$('#toastAlert').html('ID Yang anda masukkan tidak cocok dengan akun manapun');
					setTimeout(() => {
						$('.trueid').fadeIn();
						$('.toast').hide();
					},2000)
			}
		}
	})
	},500)
})
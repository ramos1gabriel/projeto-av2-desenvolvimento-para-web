$(function() {
	//MASCARAS
    $('#cpf').mask('000.000.000-00');
	$('#tel').mask('(00) 0000-0000');
	$('#cel').mask('(00) 00000-0000');
	$('#cep').mask('00000-000');
	
	//ENDERECO
	$("#tipo").change(function(){
		var tipo = $('#tipo').val();
		if(tipo == 4){
			$("#outroEndereco").show();
		} else {
			$("#outroEndereco").hide();
		}
	});
	
	//VALIDA FORCA DA SENHA
	$("#senha").change(function(){
		var senha = $("#senha").val();
		
		if(senha.length < 6){
			$('#fraco').css({backgroundColor: "#FF0000" });
			$('#medio').css({backgroundColor: "#DDD" });
			$('#forte').css({backgroundColor: "#DDD" });
			
			$('#texto').html("Fraca");
			$("#msgSenha").html("Mínimo de 6 caracteres");
		} else if(senha.length >= 6 && senha.length <= 10){
			$('#fraco').css({backgroundColor: "#DDD" });
			$('#medio').css({backgroundColor: "#F2DC32" });
			$('#forte').css({backgroundColor: "#DDD" });
			
			$('#texto').html("Regular");
			$("#msgSenha").html("");
		} else if(senha.length > 10 && senha.length <= 12) {
			$('#fraco').css({backgroundColor: "#DDD" });
			$('#medio').css({backgroundColor: "#DDD" });
			$('#forte').css({backgroundColor: "#40CD28" });
			
			$('#texto').html("Forte");
			$("#msgSenha").html("");
		}
	});
	
	//VALIDACAO DO CAMPOS
	$("#cadastrar").click(function() {
		//EMAIL
		if($('#email').val() == ''){
			$("#emailDiv").addClass( "has-error has-feedback");
			$("#errorEmail").show();
			$("#msgEmail").html("Campo obrigatório");
		} else {
			$("#emailDiv").removeClass( "has-error has-feedback");
			$("#errorEmail").hide();
			$("#msgEmail").html("");
		}
		
		//SENHA
		if($('#senha').val() == ''){
			$("#senhaDiv").addClass( "has-error has-feedback");
			$("#errorSenha").show();
			$("#msgSenha").html("Campo obrigatório");
		} else {
			$("#senhaDiv").removeClass( "has-error has-feedback");
			$("#errorSenha").hide();
			$("#msgSenha").html("");
		}
		
		//CONFIRME SENHA
		if($('#confirmesenha').val() == ''){
			$("#confirmesenhaDiv").addClass( "has-error has-feedback");
			$("#errorConfirmesenha").show();
			$("#msgConfirmesenha").html("Campo obrigatório");
		} else {
			$("#confirmesenhaDiv").removeClass( "has-error has-feedback");
			$("#errorConfirmesenha").hide();
			$("#msgConfirmesenha").html("");
		}
		
		//COMPARA SENHAS
		if($('#senha').val() != '' && $('#confirmesenha').val() != ''){
			if($('#confirmesenha').val() != $('#senha').val()){
				$("#confirmesenhaDiv").addClass( "has-error has-feedback");
				$("#errorConfirmesenha").show();
				$("#msgConfirmesenha").html("Senha não confere");
			} else {
				$("#confirmesenhaDiv").removeClass( "has-error has-feedback");
				$("#errorConfirmesenha").hide();
				$("#msgConfirmesenha").html("");
			}
		}
		
		//NOME
		if($('#nome').val() == ''){
			$("#nomeDiv").addClass( "has-error has-feedback");
			$("#errorNome").show();
			$("#msgNome").html("Campo obrigatório");
		} else {
			$("#nomeDiv").removeClass( "has-error has-feedback");
			$("#errorNome").hide();
			$("#msgNome").html("");
		}
		//SEXO
		if(document.getElementById("mas").checked == false 
			&& document.getElementById("fem").checked == false){
			$("#msgSexo").html("Campo obrigatório");
		} else {
			$("#sexoDiv").removeClass( "has-error has-feedback");
		}
		
		//CPF
		if($('#cpf').val() == ''){
			$("#cpfDiv").addClass( "has-error has-feedback");
			$("#errorCpf").show();
			$("#msgCpf").html("CPF inválido");
		} else {
			$("#cpfDiv").removeClass( "has-error has-feedback");
			$("#errorCpf").hide();
			$("#msgCpf").html("");
		}
		
		//DATA NASCIMENTO
		if($('#datanasc').val() == ''){
			$("#datanascDiv").addClass( "has-error has-feedback");
			$("#errorDatanasc").show();
			$("#msgDatanasc").html("Campo obrigatório");
		} else {
			$("#datanascDiv").removeClass( "has-error has-feedback");
			$("#errorDatanasc").hide();
			$("#msgDatanasc").html("");
		}
		
		//TELEFONE
		if($('#tel').val() == ''){
			$("#telDiv").addClass( "has-error has-feedback");
			$("#errorTel").show();
			$("#msgTel").html("Campo obrigatório");
		} else {
			$("#telDiv").removeClass( "has-error has-feedback");
			$("#errorTel").hide();
			$("#msgTel").html("");
		}
		
		//TIPO
		if($('#tipo').val() == 4 && $('#outro').val() == ''){
			$("#outroEndereco").addClass( "has-error has-feedback");
			$("#errorTipo").show();
			$("#msgTipo").html("Campo obrigatório");
		} else {
			$("#outroEndereco").removeClass( "has-error has-feedback");
			$("#errorTipo").hide();
			$("#msgTipo").html("");
		}
		
		//CEP
		if($('#cep').val() == ''){
			$("#cepDiv").addClass( "has-error has-feedback");
			$("#errorCep").show();
			$("#msgCep").html("Campo obrigatório");
		} else {
			$("#cepDiv").removeClass( "has-error has-feedback");
			$("#errorCep").hide();
			$("#msgCep").html("");
		}
	});
});


$(document).ready(function () {

    $('.fa-times').click(function () {
        $('.slogan').css('display', 'none')
    });

    $('#confirmaCompra').click(function () {
        $('.pagamento-container').css('display', 'none');
        $('.container-sucesso').css('display', 'block');
    });

    $('#cadastrarDisplay').click(function () {
        $('#loginForm').css('display', 'none');
        $('#cadastroForm').css('display', 'block');
    });

    $('#loginDisplay').click(function () {
        $('#loginForm').css('display', 'block');
        $('#cadastroForm').css('display', 'none');
    });

    $('.confirmaCompra').click(function () {
        $('.formularioCarrinho').css('display', 'none');
        $('.compraConfirmadaDiv').css('display', 'block');
    });

});

$('document').ready(() => {
    if (localStorage.getItem('session') == "true") {

        $('#session').text("SAIR");
        $('#carrinho').click(function () {
            window.location.href = 'carrinho.html';
        });
    } else {
        $('#session').text("LOGIN");
        $('#carrinho').click(function () {
            window.location.href = 'login.html';
        });
        $('.btn-carrinho').click(function () {
            window.location.href = 'login.html';
        });
    }
});


    

$('document').ready(() => {

    
    

    if(localStorage.getItem('Itemnome') == null || localStorage.getItem('Itemnome') == ''){
        $('.nome-produto').text('Carrinho vazio');
        $('.nome-desc').text('Carrinho vazio');
        $('.nome-preco').text('R$ 00,00');

        $('.confirmaCompra').click(function () {
            $('.formularioCarrinho').css('display', 'flex');
            $('.compraConfirmadaDiv').css('display', 'none');
            alert('Carrinho vazio!');
        });
    } else{
        $('.nome-produto').text(localStorage.getItem('Itemnome'));
        $('.nome-desc').text(localStorage.getItem('Itemdesc'));
        $('.nome-preco').text(localStorage.getItem('Itempreco'));
    }

    $('.limpar-carrinho').click(function () {
        localStorage.setItem('Itemnome', '');
        localStorage.setItem('Itemdesc', '');
        localStorage.setItem('Itempreco', '');

        location.reload();
    });


    if (localStorage.getItem('session') == "true") {
        
        $('#item1').click(function () {

            localStorage.setItem('Itemnome', 'Cabelo');
            localStorage.setItem('Itemdesc', 'Cabelo desc');
            localStorage.setItem('Itempreco', 'R$ 35,00');
            
            window.location.href = 'carrinho.html';

        });
        $('#item2').click(function () {
            localStorage.setItem('Itemnome', 'Barba');
            localStorage.setItem('Itemdesc', 'Barba desc');
            localStorage.setItem('Itempreco', 'R$ 25,00');
            
            window.location.href = 'carrinho.html';
        });
        $('#item3').click(function () {
            localStorage.setItem('Itemnome', 'Sobracelha');
            localStorage.setItem('Itemdesc', 'Sobrancelha desc');
            localStorage.setItem('Itempreco', 'R$ 20,00');
            
            window.location.href = 'carrinho.html';
        });
        $('#item4').click(function () {
            localStorage.setItem('Itemnome', 'Kit Completo 1');
            localStorage.setItem('Itemdesc', 'Kit Completo 1 desc');
            localStorage.setItem('Itempreco', 'R$ 50,00');
            
            window.location.href = 'carrinho.html';
        });
        $('#item5').click(function () {
            localStorage.setItem('Itemnome', 'Kit Completo 2');
            localStorage.setItem('Itemdesc', 'Kit Completo 2 desc');
            localStorage.setItem('Itempreco', 'R$ 65,00');
            
            window.location.href = 'carrinho.html';
        });
    } else {

    }
});

//Login

$('#session').click(() => { localStorage.setItem('session', 'false') });

$('#logar').click((e) => {
    var emailLogin = $('#email');
    var senhaLogin = $('#senha');
    if (emailLogin.val() == localStorage.getItem('login') && senhaLogin.val() == localStorage.getItem('senha')) {
        localStorage.setItem('session', 'true');
        e.preventDefault();
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos');
    }
});


// Cadastro

$('#cadastrar').click((e) => {
    var email = $('#emailCad');
    var senha = $('#senhaCad');
    var confirma = $('#confirmaCad');

    if (senha.val() != confirma.val()) {
        alert('Senhas precisam ser iguais');
    } else {
        localStorage.setItem('login', email.val());
        localStorage.setItem('senha', senha.val());
        e.preventDefault();
        window.location.href = 'login.html';
    }
});




    var ls = localStorage;
    var stw=0, stw2=0;
    var vn = [];

    function inserir(){
        if(stw == 0 && stw2 == 0){
            document.getElementById("mov1").style = "position: relative; bottom: 0px;";
            stw = 1;
        } else if(stw == 0 && stw2 == 1){
            document.getElementById("mov1").style = "position: relative; bottom: 0px;";
            document.getElementById("mov2").style = "position: relative; bottom: 1000px; width: 45%;";
            stw = 1;
            stw2 = 0;
        } else {
            document.getElementById("mov1").style = "position: relative; bottom: 1000px;";
            stw = 0;
        }
    }

    function listar(){
        if(stw2 == 0 && stw ==0){
            document.getElementById("mov2").style = "position: relative; bottom: 380px; width: 45%;";
            stw2 = 1;
        } else if(stw2 == 0 && stw == 1){
            document.getElementById("mov2").style = "position: relative; bottom: 380px; width: 45%;";
            document.getElementById("mov1").style = "position: relative; bottom: 1000px;";
            stw = 0;
            stw2 = 1;
        } else {
            document.getElementById("mov2").style = "position: relative; bottom: 1000px; width: 45%;";
            stw2 = 0;
        }
    }

    function carregar() {
        if (confirm("Deseja carregar as notas?\nIra sobrescrever as já existentes.")) {
            document.getElementById("nome").innerHTML = ls.nome;
            document.getElementById("rn1").innerHTML = ls.rn1;
            document.getElementById("rn2").innerHTML = ls.rn2;
            document.getElementById("rn3").innerHTML = ls.rn3;
            document.getElementById("rfinal").innerHTML = ls.rfinal;
            document.getElementById("rme").innerHTML = ls.media;
            document.getElementById("cituacao").innerHTML = ls.cituacao;
        }
    }

    function salvar() {
        if (confirm("Deseja salvar o estado atual das notas?\nIra sobrescrever as já existentes.")) {
            ls.nome = document.getElementById("nome").innerHTML;
            ls.rn1 = document.getElementById("rn1").innerHTML;
            ls.rn2 = document.getElementById("rn2").innerHTML;
            ls.rn3 = document.getElementById("rn3").innerHTML;
            ls.rfinal = document.getElementById("rfinal").innerHTML;
            ls.media = document.getElementById("rme").innerHTML;
            ls.cituacao = document.getElementById("cituacao").innerHTML;
        }
    }

    function apagar() {
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
        document.getElementById("n3").value = "";
        document.getElementById("n0").value = "";

        document.getElementById("nf").value = "";

        document.getElementById("nome").innerHTML = "";
        document.getElementById("rn1").innerHTML = "";
        document.getElementById("rn2").innerHTML = "";
        document.getElementById("rn3").innerHTML = "";
        document.getElementById("rfinal").innerHTML = "";
        document.getElementById("rme").innerHTML = "";

        document.getElementById("divopa").style = "opacity: 0";
    }

    function processar() {
        var n0 = document.getElementById("n0").value;
	    vn[1] = parseFloat(document.getElementById("n1").value);
	    vn[2] = parseFloat(document.getElementById("n2").value);
        vn[3] = parseFloat(document.getElementById("n3").value);
         var media;

            if (isNaN(vn[1]) || isNaN(vn[2]) || isNaN(vn[3])) {
                alert("Uma ou mais notas não é um valor permitido");

            } else {
                media = (vn[1] + vn[2] + vn[3]) / 3;

                alert("Aluno inserido.");
                
                document.getElementById("nome").innerHTML = n0;
                document.getElementById("rn1").innerHTML = vn[1];
                document.getElementById("rn2").innerHTML = vn[2];
                document.getElementById("rn3").innerHTML = vn[3];
                document.getElementById("rme").innerHTML = media.toFixed(3);

                if (media >= 7) {
                    document.getElementById("cituacao").innerHTML = "Aprovado";
                    document.getElementById("rfinal").innerHTML = "";
                } else if (media < 7 && media >= 3) {
                    document.getElementById("cituacao").innerHTML = "Direito a final";
                    document.getElementById("rfinal").innerHTML = parseFloat((50 - (media*7))/3).toFixed(3);
                } else if (media < 3) {
                    document.getElementById("cituacao").innerHTML = "Reprovado";
                    document.getElementById("rfinal").innerHTML = "";
                }
            }
    }
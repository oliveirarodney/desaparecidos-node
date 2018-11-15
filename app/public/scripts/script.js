$(document).ready(function () {
		
    $.getJSON('https://gist.githubusercontent.com/ografael/2037135/raw/5d31e7baaddd0d599b64c3ec04827fc244333447/estados_cidades.json', function (data) {
        var items = [];
        var options = '<option value="">escolha um estado</option>';	
        $.each(data, function (key, val) {
            options += '<option value="' + val.nome + '">' + val.nome + '</option>';
        });					
        $("#estados").html(options);				
        
        $("#estados").change(function () {				
        
            var options_cidades = '';
            var str = "";					
            
            $("#estados option:selected").each(function () {
                str += $(this).text();
            });
            
            $.each(data, function (key, val) {
                if(val.nome == str) {							
                    $.each(val.cidades, function (key_city, val_city) {
                        options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
                    });							
                }
            });
            $("#cidades").html(options_cidades);
            
        }).change();		
    
    });

    $('#upload').change(function(){
        var input = this;
        var url = $(this).val();
        var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) 
         {
            var reader = new FileReader();
    
            reader.onload = function (e) {
               $('#img').attr('src', e.target.result);
            }
           reader.readAsDataURL(input.files[0]);
        }
        else
        {
          $('#img').attr('src', '/assets/no_preview.png');
        }
    });

});

expandMenu = () => {
    let x = document.getElementById("menu")
    if (x.className === "menu") {
        console.log("entrou")
        x.className += " responsive";
    } else {
        console.log("saiu")
        x.className = "menu";
    }
}

mostrarDelegacia = () => {
    let estado = document.getElementById("estadosdelegacias");
    let estadoSelecionado = estado.options[estado.selectedIndex].value;
    let parent = document.getElementById("link");
    let child = parent.firstChild;
    let link;
    let textLink;
    parent.removeChild(child);
    if (estadoSelecionado === "") {
        link = document.createElement("p");
        textLink = document.createTextNode("O estado não possui delegacia online");
        link.appendChild(textLink);
    } else if (!(estadoSelecionado === "Selecione um estado")) {
        link = document.createElement("a");
        link.setAttribute("href", "http://" + estadoSelecionado);
        textLink = document.createTextNode(estadoSelecionado);
        link.appendChild(textLink);
    } else {
        link = document.createElement("p");
    }
    parent.appendChild(link);
}
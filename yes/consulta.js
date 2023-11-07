var dataRef = new Firebase('https://farmacia-8b42a-default-rtdb.firebaseio.com');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'funcionarios') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $("#tbAlunos tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.tel}</td> +
    
                        <td>${value2.função}</td> +

                        <td>${value2.salário}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});

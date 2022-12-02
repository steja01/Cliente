function receta (nombre, numero){
    this.nombre = nombre;
    this.NumComensales = numero;
    this.ingrediente = new Array();
    this.cantidad = new Array();
    this.tipo = new Array();
    this.añadir = function(ingre, cant, tipo){
        this.ingrediente.push(ingre);
        cant = cant / this.NumComensales;
        this.cantidad.push(cant);
        this.tipo.push(tipo)
    }
    this.eliminar = function(ingre){
        for (let i = 0; i < this.ingrediente.length; i++) {
            if(this.ingrediente[i] == ingre){
                this.ingrediente.splice(i,1);
                this.cantidad.splice(i,1);
                this.tipo.splice(i,1)
            }
        }
    }
    this.mostrar = function(comen){
        var final = "Receta: " + this.nombre + "\nNúmero de comensales: " + comen + "\nIngredientes: ";
        for (let i = 0; i < this.ingrediente.length; i++) {
            final += "\n\t" + this.ingrediente[i] + ": " + (this.cantidad[i] * comen) + "."
        }
        return final;
    }
}
function siguiente(){
    var nombreReceta = document.getElementById('nombreReceta').value;
        numeroComensales = document.getElementById('numeroComensales').value;
        ingrediente = document.getElementById('ingrediente').value;
        cantidad = document.getElementById('cantidad').value;
        tipo = document.getElementById('tipo').value;

    console.log(nombreReceta, numeroComensales, ingrediente, cantidad, tipo);

    document.getElementById('nombreReceta').value = "";
    document.getElementById('numeroComensales').value = "";
    document.getElementById('ingrediente').value = "";
    document.getElementById('cantidad').value = "";

    sessionStorage.setItem('nombre', nombreReceta);
    sessionStorage.setItem('comensales', numeroComensales);
    sessionStorage.setItem('ingrediente', ingrediente);
    sessionStorage.setItem('cantidad', cantidad);
    sessionStorage.setItem('tipo', tipo);

    window.location.href = "segunda.html"
}
function atras(){
    window.location.href = "portada.html"
}
function aniadir(){
    var ingrediente = document.getElementById('ingrediente').value;
        cantidad = document.getElementById('cantidad').value;
        tipo = document.getElementById('tipo').value;
    receton.añadir(ingrediente, cantidad, tipo);
        document.getElementById('ingrediente').value = "";
        document.getElementById('cantidad').value = "";
    console.log(receton);
}
function eliminar(){
    var ingrediente = document.getElementById('eliminarIngrediente').value;
    receton.eliminar(ingrediente);
    document.getElementById('eliminarIngrediente').value = "";
    console.log(receton);
}
function siguiente2(){
    /*localStorage.setItem('receta', JSON.stringify(receton));
    window.location.href = "final.html"*/
    window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
}
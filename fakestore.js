fetch('https://fakestoreapi.com/products')
    .then(resp => resp.json())
    .then(data => anadirLi(data))
    .catch(error => console.log ("Ha fallado la busqueda!!", error))

    
function anadirLi(data){
    console.log(data);

    let listaUl = document.createElement("ul");
    listaUl.setAttribute("id", "ulid");
    document.getElementById("producto").appendChild(listaUl);

      for (let lista = 0; lista < data.length; lista++){ 
        let li = document.createElement("li");
        li.innerText = data[lista].title;
        listaUl.appendChild(li);
        // console.log("Producto: " + data[lista].title)
      }
    }

    let miOption = document.createElement("option");
        miOption.setAttribute("value",0);
        miOption.setAttribute("label","Todas las categorías");
        document.getElementById("select").appendChild(miOption);

    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(categorias=>{
      
      for (let i = 0; i < categorias.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value",categorias[i]);
        option.setAttribute("label",categorias[i]);
        document.getElementById("select").appendChild(option);
      }
    })


    function cambiarCategoria(value){
      fetch(`https://fakestoreapi.com/products/category/${value}`)
      .then(res=>res.json())
      .then(json=>anadirLi(json)) 
    }


    document.getElementById("select").addEventListener("change", (event)=> {
      console.log("on change del select", event.target.value)
      let ulid = document.getElementById("ulid");
      document.getElementById("producto").removeChild(ulid);
      cambiarCategoria(event.target.value);
    } )


function anadirImagenes(data){
  console.log(data);

  let imagenProducto = document.createElement("image")
  
}

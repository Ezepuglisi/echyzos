'use client'

import { useState } from 'react'

const AgregarProducto = () => {
  const [articulo, setArticulo] = useState('');
  const [precio, setPrecio] = useState('');
  const [unidades, setUnidades] = useState('');
  const [category, setCategory] = useState('')
  const [talles, setTalles] = useState('');
  const [imagen, setImagen] = useState('');
  const [clickedButtons, setClickedButtons] = useState([]);
  const [error, setError] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // // Aquí puedes enviar los datos del formulario a tu servidor o hacer lo que necesites con ellos.
    setIsLoading(true)
    setError(false)
    const data = {
      product_title:articulo.toLowerCase(),
      product_price:precio,
      units:unidades,
      sizes: clickedButtons.length > 0 ? clickedButtons : null,
      img: `${toCamelCase(articulo)}.jpg`,
      category: category.toLowerCase()
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Indica que estás enviando datos en formato JSON
      },
      body: JSON.stringify(data), // Convierte los datos en una cadena JSON
    };

    fetch('/api/products', options)
    .then((res) => res.json() )
    .then((response) => {
      console.log(response)

      if(response.message){
        setIsLoading(false)
      }else{
        setIsLoading(false)
        setError(true)
      }
    })

  };

  const handleClick = (buttonIndex) => {
    // Comprueba si el botón ya ha sido clickeado
    if (clickedButtons.includes(buttonIndex)) {
      // Si ya ha sido clickeado, lo deseleccionamos
      setClickedButtons(clickedButtons.filter(index => index !== buttonIndex));
    } else {
      // Si no ha sido clickeado, lo seleccionamos
      setClickedButtons([...clickedButtons, buttonIndex]);
    }
  };

  function toCamelCase(inputString) {
    const words = inputString.split(/\s+/);
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    return camelCaseWords.join('');
  }

  return (
    <div className="max-w-md mx-auto flex items-center justify-center">
      {
        isLoading ?
          <div className="w-20 h-20 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
          :
          (
            isSent ?
              <div className="flex flex-col items-center justify-center">
                <p className='w-auto'>Articulo guardado en la base de datos</p>
                <button onClick={() => {setIsSent(false)}} className="bg-yellow-100 rounded-lg p-2 mt-3">Agregar otro</button>
              </div>
              :
              <div className="space-y-4 bg-green-200 p-10 rounded-lg">
                <div>
                  <label htmlFor="articulo" className="block font-medium text-gray-700">
                    Artículo
                  </label>
                  <input
                    type="text"
                    id="articulo"
                    className="w-full border rounded-md p-2"
                    value={articulo}
                    onChange={(e) => setArticulo(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="precio" className="block font-medium text-gray-700">
                    Precio
                  </label>
                  <input
                    type="text"
                    id="precio"
                    className="w-full border rounded-md p-2"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="unidades" className="block font-medium text-gray-700">
                    Unidades
                  </label>
                  <input
                    type="text"
                    id="unidades"
                    className="w-full border rounded-md p-2"
                    value={unidades}
                    onChange={(e) => setUnidades(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block font-medium text-gray-700">
                    Categoria
                  </label>
                  <input
                    type="text"
                    id="category"
                    className="w-full border rounded-md p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="talles" className="block font-medium text-gray-700">
                    Talles
                  </label>
                  {/* <input
              type="text"
              id="talles"
              className="w-full border rounded-md p-2"
              value={talles}
              onChange={(e) => setTalles(e.target.value)}
            /> */}

                  <div className='flex items-center mt-2 text-white'>
                    {
                      [0, 1, 2, 3].map((item, index) => {
                        return (
                          <button
                            key={index}
                            className={`flex items-center justify-center w-5 h-5 ${clickedButtons.includes(index) ? 'bg-yellow-100' : 'bg-green-500'} p-3 mx-1 rounded-md ${clickedButtons.includes(index) ? 'text-black' : 'text-white'}`}
                            onClick={() => handleClick(index)}
                          >
                            {item}
                          </button>
                        )
                      })
                    }
                  </div>

                </div>
                <div>
                  <button
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md disabled:opacity-75 disabled:cursor-not-allowed"
                    onClick={() => handleSubmit()}
                    disabled={precio.length <= 0 || articulo.length <= 0 || unidades.length <= 0}
                    style={{}}
                  >
                    Enviar
                  </button>
                </div>
                {error &&<p className='text-center text-red-700 font-semibold'>Hubo un error</p>}
              </div>
          )
      }
    </div>
  );
};

export default AgregarProducto;

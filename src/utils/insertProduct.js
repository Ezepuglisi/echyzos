export const insertProducto = async (product_title, product_price, units, sizes, img) => {
    try {
        const query = 'INSERT INTO products (product_title, product_price, units, sizes, img) VALUES (@product_title, @product_price, @units, @sizes, @img)';
        const params = {
            product_title: product_title,
            product_price: product_price,
            units: units || null,
            sizes: sizes || null,
            img: img || null
        }

        const result = await sql.query(query, params)

        // Imprimir el ID del nuevo producto insertado
        console.log('Nuevo producto insertado con ID:', result);
    } catch (error) {
        console.error('Error al insertar el producto:', error);
    } finally {
        // Cerrar la conexión después de ejecutar la consulta
        await connection.promise().end();
    }
};
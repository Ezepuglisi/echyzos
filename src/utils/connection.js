import sql from 'mssql'

export const connectToDatabase = async () => {

    try {

        await sql.connect(`${process.env.DATABASE_URL}`)
        return sql

    } catch (e) {

        return { error: 'Hubo un error al intentar recuperar la base de datos' }

    }


};
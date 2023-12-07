import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/connection";


export async function GET() {
    const conn = await connectToDatabase()
    return NextResponse.json({ message: 'ok' })
}



export async function POST(request) {
    const data = await request.json();

    console.log(data);

    try {
        const conn = await connectToDatabase();


        if(conn.error){
            return NextResponse.json({ error: 'error' });
        }

        const request = new conn.Request();
        request.input('product_title', conn.VarChar, data.product_title);
        request.input('product_price', conn.Char, data.product_price);
        request.input('sizes', conn.VarChar, data.sizes?.toString() || null);
        request.input('units', conn.Char, data.units || null);
        request.input('img', conn.VarChar, data.img || null);
        request.input('category', conn.VarChar, data.category || 'no-category')

        const result = await request.query(`
            INSERT INTO [dbo].[products] (product_title, product_price, sizes, units, img, category)
            VALUES (@product_title, @product_price, @sizes, @units, @img, @category)
        `);

        console.log(result);

        return NextResponse.json({ message: 'ok' });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'error' });
    }
}
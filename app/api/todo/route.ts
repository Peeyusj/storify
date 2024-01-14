import { NextRequest, NextResponse } from "next/server";
import { Todo, NewTodo, db, todoTable } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";
export async function GET(request: NextRequest) {
  // const req= await request.json()
  try {
    // await sql ,'CREATE TABLE IF NOT EXISTS Todos(id serial,task varchar(255));'
    const res = await db.select().from(todoTable);

    return NextResponse.json({ data: res });
  } catch (err: any) {
    return NextResponse.json({ message: "something wrong" });
  }
}
export async function POST(request: NextRequest) {
  const req = await request.json();
  try {
    if (req.task) {
      const res = await db
        .insert(todoTable)
        .values({
          task: req.task,
        })
        .returning();

      console.log(res);

      return NextResponse.json({
        message: "Data added successfully",
        data: res,
      });
    } else {
      throw new Error("Task field is required");
    }
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}

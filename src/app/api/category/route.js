import { NextResponse } from "next/server";
import { Category } from "../../lib/models/categoryModel";

export async function GET() {
  var data = await Category.find();
  return NextResponse.json(data);
}

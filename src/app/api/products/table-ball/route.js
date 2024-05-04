import { NextResponse } from "next/server";
import { TableBall } from "@/app/lib/models/tableModel";
import { Category } from "@/app/lib/models/categoryModel";

export async function GET() {
  var data = await TableBall.find();
  var category = await Category.findOne({ url: "table-ball" });
  return NextResponse.json({ data, category });
}

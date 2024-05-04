import { NextResponse } from "next/server";
import { Category } from "@/app/lib/models/categoryModel";
import { Rubbers } from "@/app/lib/models/rubbersModel";
export async function GET() {
  var data = await Rubbers.find();
  var category = await Category.findOne({ url: "rubbers" });
  return NextResponse.json({ data, category });
}

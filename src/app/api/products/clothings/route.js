import { NextResponse } from "next/server";
import { Category } from "@/app/lib/models/categoryModel";
import { ClothingsProduct } from "@/app/lib/models/clothingModel";
export async function GET() {
  var data = await ClothingsProduct.find();
  var category = await Category.findOne({ url: "clothings" });
  return NextResponse.json({ data, category });
}

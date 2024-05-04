import { NextResponse } from "next/server";
import { AccessoryProduct } from "@/app/lib/models/accessoryModel";
import { Category } from "@/app/lib/models/categoryModel";

export async function GET() {
  var data = await AccessoryProduct.find();
  var category = await Category.findOne({ url: 'accessory' });
  return NextResponse.json({data, category});
}

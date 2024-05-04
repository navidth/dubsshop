import { NextResponse } from "next/server";
import { Blade } from "@/app/lib/models/bladeModel";
import { Category } from "@/app/lib/models/categoryModel";


export async function GET() {
  try {
    var data = await Blade.find();
    var category = await Category.findOne({ url: "blades" });
    return NextResponse.json({ data, category });
  } catch (error) {
    return NextResponse.json({ message:"error" });
  }
}

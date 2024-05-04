import { Category } from "../models/categoryModel";
import { NextResponse } from "next/server";

export async function resualtCat(params) {
  let res = await Category.findOne({ url: params });
  return NextResponse.json(res);
}

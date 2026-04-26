import { connectToDB } from "@/app/lib/connectToDB";
import infoModel from "@/app/models/info.model";
import { NextRequest, NextResponse } from "next/server";
type Information = {
  name: string | undefined;
  email: string | undefined;
  phoneNo: number | undefined;
  companyName: string | undefined;
  domain: string | undefined;
  candidates: number | undefined;
  modeOfDelivery: string | undefined;
  example: string | undefined;
};
export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    let body: Information = await req.json();
    let refInfo: Information = {
      name: "",
      email: "",
      phoneNo: 0,
      companyName: "",
      domain: "",
      candidates: 0,
      modeOfDelivery: "",
      example: "",
    };
    refInfo.name = body.name;
    refInfo.email = body.email;
    refInfo.phoneNo = body.phoneNo;
    refInfo.candidates = body.candidates;
    refInfo.companyName = body.companyName;
    refInfo.domain = body.domain;
    refInfo.modeOfDelivery = body.modeOfDelivery;
    refInfo.example = body.example;
    let newInfo = await infoModel.create(refInfo);
    return NextResponse.json({
      message: "Data stored successfully",
      data: newInfo,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
}

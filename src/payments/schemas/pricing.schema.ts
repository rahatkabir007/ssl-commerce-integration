// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Document } from "mongoose";

export type PricingDocument = Pricing & Document;


/*
fastDelivery: false
id: "364b6d21-864a-44ff-b2ac-3b492941bdfe"
image: "https://loremflickr.com/640/480/city"
inStock: 7
name: "Chair"
price: "759.0"
qty: 1
ratings: 4
*/
@Schema()
export class Pricing {
    @Prop()
    id: string;
    @Prop()
    total: number;
    @Prop()
    name: string;
    @Prop()
    quantity: string;
    @Prop()
    price: string;



    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Portfolio", required: true })
    // portfolioId: Portfolio;

}

export const PricingSchema = SchemaFactory.createForClass(Pricing);

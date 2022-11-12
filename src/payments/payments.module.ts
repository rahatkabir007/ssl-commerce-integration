import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { Pricing, PricingSchema } from './schemas/pricing.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pricing.name, schema: PricingSchema },
    ]),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService,
    JwtStrategy
  ]
})
export class PaymentsModule { }

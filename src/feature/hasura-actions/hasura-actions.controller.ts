import { invoice } from './../constants/templates';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { appConfig } from 'core/config/app-config';
import { User } from 'feature/auth/schema/user.schema';
import { HasuraActionsService } from './hasura-actions.service';
import { Response } from "express";

const stripe = require('stripe')(appConfig.STRIPE_SECRET);
stripe.setApiVersion(appConfig.STRIPE_VERSION);


@ApiTags("actions")
@Controller({ path: "/hasura-actions" })
export class HasuraActionsController {

    constructor(private service: HasuraActionsService) {}
    
    @Post("/add-order")
    @ApiOkResponse({
      description: "Register client Admin From Hasura Action",
      type: User
    })
    addOrder(@Body() body: any) {
      return this.service.addOrder(body.input.details,body.session_variables);
    }

    @Post("/add-second-hand-order")
    @ApiOkResponse({
      description: "Register client Admin From Hasura Action",
      type: User
    })
    addSecondHandOrder(@Body() body: any) {
      return this.service.addSecondHandOrder(body.input.details,body.session_variables);
    }

    @Post("/cancel-order-item")
    @ApiOkResponse({
      description: "Register client Admin From Hasura Action",
      type: User
    })
    cancelOrder(@Body() body: any) {
      return this.service.cancelOrderItem(body.input.details);
    }

    @Post("/close-bid")
    @ApiOkResponse({
      description: "Register client Admin From Hasura Action",
      type: User
    })
    closeBid(@Body() body: any) {
      return this.service.closeBid(body.input.details);
    }

    @Post("/create-payment-intent")
    @ApiOkResponse({
      description: "Payment Intents"
    })
    async createPaymentIntent(@Body() body: any,@Res() res: Response): Promise<any> {
  
      const amount = body.input.details.amount;
      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: "aud",
          payment_method_types: ["card"],
        });
        console.log('paymentIntent');
        console.log(JSON.stringify(paymentIntent, null, 4));
        return res.status(200).json({paymentIntent});
      } catch (err) {
        return res.status(500).json({error: err.message});
      }
      
    }
    
    @Post("/create-refund")
    @ApiOkResponse({
      description: "Refunds"
    })
    async createRefunds(@Body() body: any,@Res() res: Response): Promise<any> {
  
      const response = await this.service.createRefund(body.input.refund);
     
      return res.status(200).json(response);
     
    }
    
    @Post("/user-subscriptions")
    @ApiOkResponse({
      description: "creates a payment intent on user subscribtion"
    })
    userSubscriptions(@Body() body: any) {
      
      return this.service.userSubscriptions(body.input.details);
    }

}

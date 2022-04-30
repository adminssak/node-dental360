import { appConfig } from 'core/config/app-config';
export const invoice  = `

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>ORDER-INVOICE</title>
    <style type="text/css">
        p {
            line-height: 24px !important;
        }

        .mobile_responsive_table {
            display: none;
        }

        @media screen and (min-width: 320px) and (max-width: 600px) {
            .main_box {
                width: 85% !important;
            }

            .order_flex_box {
                display: block !important;
            }
            .vendor_flex_box{
                display: block !important;
                margin: 0px 5px 0 5px !important;
            }
            .vendor_box{
                margin-bottom: 10px;
            }

        }

        @media screen and (min-width: 320px) and (max-width: 767px) {
            .order_flex_box {
                padding: 0px 0px !important;
            }

            .main_box {
                padding: 20px 15px 0px 15px !important;
            }

            .pr_0 {
                padding-right: 0 !important;
            }

            .pl_15 {
                padding-left: 15px !important;
            }

            .pl_25 {
                padding-left: 25px !important;
            }

            .title {
                font-size: 20px !important;
            }

            .w_50 {
                width: 53% !important;
                padding-left: 5px !important;
                text-transform: capitalize !important;
                color: #333333 !important;
            }

            .total_value {
                width: 40% !important;
                padding-right: 5px !important;
                color: #888 !important;
            }

            .mobile_table {
                overflow-x: scroll;
            }

            .table_head {
                height: 40px !important;
                line-height: 40px !important;
                font: 20px/ 40px 'Roboto' !important;
            }

            .table_head h2 {
                font: 20px/ 40px 'Roboto' !important;
            }

            table thead {
                display: none;
            }

            table tbody td {
                flex-direction: column !important;
                display: inline-block !important;
                border-bottom: 1px solid #eee !important;
                border-right: 0px !important;
                text-align: right !important;
                width: 100% !important;
                min-width: 100% !important;
                max-width: 100% !important;
                padding: 8px 0 8px 0px !important;
                font-weight: 500 !important;
                font-size: 13px !important;
            }

            .order_table {
                display: none;
            }

            .mobile_responsive_table {
                display: block;
                margin-top: 10px !important;
            }

            .footer_bottom_logo img {
                width: 50% !important;
            }

            .mobile_responsive_table label {
                width: auto !important;
            }
        }

        @media screen and (min-width: 768px) and (max-width: 991px) {
            .order_table {
                display: none;
            }
            .order_flex_box {
                padding: 0px 0px !important;
            }
            .mobile_responsive_table {
                display: block;
            }

            .main_box {
                width: 75% !important;
            }

            h4.w_50 {
                /* width: 70% !important;   */
                padding-left: 5px !important;
            }
            .total_value {
    color: #888888 !important;
}
        }

        @media screen and (min-width: 991px) and (max-width: 1365px) {
            .mobile_table {
                overflow-x: auto !important;
            }

            .total_value {
                width: 20% !important;
                padding-right: 5px !important;
            }
        }
    </style>
</head>

<body style="margin: 0; padding: 0; background-color: #eee; 
    font-family: 'Roboto';">
    <div style="
    position: relative;
    display: block;
    overflow: visible;
    height: 100%;
    width: 100%;">
        <div style="
        width: 100%;
    z-index: 9;
    overflow: visible;
    font-family: 'Roboto' !important;
    background-image: url(${appConfig.DOMAIN}/public/top-bg-img.png);
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    height: 100%;
    padding-top: 60px;
    ">
            <div class="main_box" style=" display: block; background-color: #fff; width: 80%; z-index: 9999;
    margin: 0 auto 0 auto;
border-radius: 4px;
padding: 20px 25px 0px 25px;
transform: translateY(0%);">
                <!-- Top_Logo_Box -->
                <div style="text-align: center;">
                    <div style="padding: 0 0 0 0;">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="logo">
                    </div>
                    <div style="border-top: 1px solid #CBCBCB;
                    margin: 15px auto;
                    border-bottom: 1px solid #CBCBCB;
                    padding: 15px 0;">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 500; 
                font-family: 'Roboto' !important;">Thank you for your order!</h2>
                        <p style="    color: #434343;
                        margin: 0;
                        padding: 0;
                        font-size: 16px;
                        font-weight: 400;">Order Id : #<%= order_id %></p>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="   margin-top: 20px;">
                    <!-- Oder_Details_Customer_Info -->
                    <div class="order_flex_box" class="pl_25" style="    display: flex;
                align-items: flex-start;
                justify-content: space-between; 
                margin: 0;
                padding: 15px 30px;">
                        <div style="height: 100%;">
                            <div style="margin: 5px 0 10px 0;">
                                <label for="" style="     font-size: 15px;
                            font-weight: 400;
            letter-spacing: 0;
            margin-bottom: 5px;    display: block;
            color: #333333;">Ordered date :</label>
                                <p style="    color: #888888;
                            font-weight: 400;
                            letter-spacing: 0;
                            font-size: 15px;
                            margin: 0;
                            font-family: 'Roboto' !important;">
                                    <%= order_date %>
                                </p>
                            </div>
                            <div style="margin: 5px 0 10px 0;">
                                <label for="" style="        font-size: 15px;
                            font-weight: 400;
                            letter-spacing: 0;
                            margin-bottom: 5px;    display: block;
    font-family: 'Roboto' !important;
                            color: #333333;">Name :</label>
                                <p style="    color: #888888;
                            font-weight: 400;
                            font-family: 'Roboto' !important;
    margin: 0;
                            letter-spacing: 0;
                            font-size: 15px;"><%= customer_name %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;">
                                <label for="" style="       
                                font-size: 15px;
                                font-family: 'Roboto' !important;
    margin: 15px 0 0 0;
                            font-weight: 400;
                            letter-spacing: 0;
                            margin-bottom: 8px;    display: block;
                            font-family: 'Roboto' !important;
                            color: #333333;">Shipping address :</label>
                                <p style="    color: #888888;
                            font-weight: 400;
                            letter-spacing: 0;
                            margin: 0;
                            letter-spacing: 0;
                            font-size: 15px;" style="    color: #888888;
                            font-weight: 400;
                            letter-spacing: 0;
                            font-size: 15px;    line-height: 22px;"><%= address.line_1 %></p>
                                <p style="    
                                color: #888888;
                                font-family: 'Roboto' !important;
    margin: 0;
                            font-weight: 400;
                            letter-spacing: 0;
                            font-size: 15px;    line-height: 22px;"><%= address.line_2 %></p>
                                <p style="    color: #888888;
                                font-family: 'Roboto' !important;
    margin: 0;
                            font-weight: 400;
                            letter-spacing: 0;
                            font-size: 15px;    line-height: 22px;"><%= address.landmark %>
                                </p>
                                <p style="    color: #888888;
                            font-weight: 400;
                            font-family: 'Roboto' !important;
    margin: 0;
                            letter-spacing: 0;
                            font-size: 15px;    line-height: 22px;"><%= address.state %>, <%= address.country %>,
                                    <%= address.postal_code %></p>
                            </div>
                        </div>
                        <div style="height: 100%;">
                            <h4 style="font-size: 14px;
                        font-weight: 400;
                        font-family: 'Roboto' !important;
                        letter-spacing: 0;                    
                        margin-bottom: 5px;
                        display: block;
                        color: #333333;    margin-top: 0;">Customer Info :</h4>
                            <p style="    color: #888888;
                        font-weight: 400;
                        font-family: 'Roboto' !important;
                        margin: 0;
                        letter-spacing: 0;
                        font-size: 15px;
                        line-height: 22px;"><%= customer_name %></p>
                            <p style="    color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-family: 'Roboto' !important;
                        margin: 0;
                        font-size: 15px;
                        line-height: 22px;"><%= customer_email %></p>
                            <p style="    color: #888888;
                        font-weight: 400;
                        font-family: 'Roboto' !important;
                        margin: 0;
                        letter-spacing: 0;
                        font-size: 15px;
                        line-height: 22px;"><%= customer_phone %></p>
                        </div>
                    </div>
                    <!-- Order Details -->
                    <div class="table_head" style="    background: #F9F9F9;
                height: 60px;
                line-height: 60px; 
                padding: 0 15px;    margin: 0 0 10px 0;">
                        <h2 style="
                        font-size: 20px;
        color: #333333;
        margin: 0;
        font-weight: 500;
        font-family: 'Roboto' !important;">Order summary</h2>
                    </div>

                    <!-- INVOICE-TABLE -->
                    <div class="mobile_table">
                        <!-- WEB-TABLE -->
                        <table class="order_table" style="border-radius: 0;
                        margin-top: 20px;
                        margin-bottom: 0;
                        overflow: hidden;
                        width: 100%;
                        border-spacing: 0;    border: 1px solid #dee2e6;">
                            <!-- THEAD -->
                            <thead>
                                <tr>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: center;
                                    font-weight: 500;font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">S.no</th>
                                    <!-- <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: left;
                                    font-weight: 500; font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">User Name</th> -->
                                    <th style="border-bottom: 1px solid #dee2e6;
                                      border-right: 1px solid #dee2e6;
                                      color: #333333;
                                      text-align: left;
                                      font-weight: 500; font-family: 'Roboto' !important;
                                      padding: 10px 10px 10px 10px;
                                      font-size: 14px;">Item Name</th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: center;
                                    font-weight: 500;font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">Quantity</th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: center;
                                    font-weight: 500; font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">Unit Price</th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                     color: #333333;
                                     text-align: center;
                                     font-weight: 500; font-family: 'Roboto' !important;
                                     padding: 10px 10px 10px 10px;
                                     font-size: 14px;">Item Total</th>
                                </tr>
                            </thead>
                            <!-- TBODY -->
                            <tbody>
                                <% supplies_order_items.forEach((item,index)=>{%>
                                <tr>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;    text-align: center;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="S No"><%= index+1 %></td>
                                    <!-- <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;
                       text-align: left;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="User Name"><%=name%></td> -->
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;max-width: 225px;min-width: 225px;    text-align: left;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="Item Name"><%= item.supply.name %></td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;    text-align: center;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="Quantity"><%= item.quantity %></td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;    text-align: center;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="Unit Price">AUD <%= item.supply_variant.selling_price %></td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;    text-align: center;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;" data-label="Total items"><%= item.item_total %></td>
                                </tr>
                                
                            </tbody>
                        </table>
                        <!-- MOBILE-LIST -->
                        <div class="mobile_responsive_table" style="
                        border: 1px solid #eee;
                        margin-top: 20px;
                        border-radius: 4px;    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;">
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     
                                font-size: 15px;
                     font-weight: 400;
                     letter-spacing: 0;
                     width: 125px;
                     color: #333333;    
                     display: inline-block;
                     padding-left: 5px;">S.No</label>
                                <p style=" color: #888888;
                     font-weight: 400;
                     letter-spacing: 0;
                     font-size: 15px;
                     margin: 0;
                     display: inline-block;
                     float: right;
                     padding-right: 5px;"><%= item.quantity%></p>
                            </div>
                            <!-- <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">User Name</label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;">{{name}}</p>
                            </div> -->
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Item Name </label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;"><%= item.supply.name %></p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Quantity</label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;"><%= item.quantity%></p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Unit Price</label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;">AUD <%= item.supply_variant.selling_price %></p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Total Items </label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;">item.item_total</p>
                            </div>
                        </div>

                        <%});%>
                        <!-- ALL-CHARGES-TOTAL -->
                        <div style="border: 1px solid #dee2e6;
                    border-top: 0; display: block;">
                            <div
                                style=" width: 100%;   display: inline-block;
                        align-items: center;
                        justify-content: space-between; padding: 10px 0px 10px 0px;    border-bottom: 1px solid #dee2e6;">
                                <h4 class="w_50" style="display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 15px;
                            color: #888888;font-family: 'Roboto' !important;
                            font-weight: 400;    margin: 0;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">Subtotal</h4>
                                <p class="total_value" style="      display: inline-block;  color: #333333;    margin: 0;
                            font-size: 15px; font-family: 'Roboto' !important;
                            font-weight: 400;    width: 20%;
            text-align: right;">AUD <%= sub_total %></p>
                            </div>
                            <div
                                style=" width: 100%;   display: inline-block;
                        align-items: center;
                        justify-content: space-between; padding: 10px 0px 10px 0px;    border-bottom: 1px solid #dee2e6;">
                                <h4 class="w_50" style="display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 15px;
                            color: #888888; font-family: 'Roboto' !important;
                            font-weight: 400;    margin: 0;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">Discount</h4>
                                <p class="total_value" style="   display: inline-block; color: #333333;    margin: 0;
                            font-size: 15px; font-family: 'Roboto' !important;
                            font-weight: 400;    width: 20%;
            text-align: right;">AUD <%= coupon_discount %></p>
                            </div>
                            <div
                                style=" width: 100%;   display: inline-block;
                        align-items: center;    margin: 0;
                        justify-content: space-between; padding: 10px 0px 10px 0px;    border-bottom: 1px solid #dee2e6;">
                                <h4 class="w_50" style="display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 14px;
                            color: #888888;    margin: 0;
                            font-weight: 400; font-family: 'Roboto' !important;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">Freight Charges</h4>
                                <p class="total_value" style=" display: inline-block;   color: #333333;
                            font-size: 15px; font-family: 'Roboto' !important;
                            font-weight: 400;    width: 20%;    margin: 0;
            text-align: right;">AUD <%= delivery_charge %></p>
                            </div>
                            <div
                                style=" width: 100%;   display: inline-block;
                        align-items: center; 
                        justify-content: space-between; padding: 10px 0px 10px 0px;    border-bottom: 1px solid #dee2e6;">
                                <h4 class="w_50" style="display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 14px;
                            color: #888888;    margin: 0;
                            font-weight: 400; font-family: 'Roboto' !important;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">GST</h4>
                                <p class="total_value" style="  display: inline-block;  color: #333333;
                            font-size: 15px; font-family: 'Roboto' !important;    margin: 0;
                            font-weight: 400;    width: 20%;
            text-align: right;">AUD <%= tax_amount %></p>
                            </div>
                            <div style=" width: 100%; display: inline-block;
                         padding: 10px 0px 10px 0px">
                                <h4 class="w_50" style=" display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 16px;
                            color: #000;    margin: 0;
                            font-weight: 400; font-family: 'Roboto' !important;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">Total</h4>
                                <p class="total_value" style="display: inline-block;
                            color: #F87128 !important;    margin: 0;
                            font-size: 16px; font-family: 'Roboto' !important;
                            font-weight: 400;    width: 20%;
            text-align: right;
                        ">AUD <%= total_amount %></p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                  <!-- Vendor Details Payment-tye -->
                  <div class="vendor_flex_box" style="display: flex;
                  align-items: flex-start;
                  justify-content: space-between;
                  margin:15px 15px 0 15px;
                  padding: 15px 0px;">
                           <div class="vendor_box">
                               <h4 style="
                                   margin: 0 0 10px 0;
           font-weight: 400;
           font-size: 16px;
           font-family: 'Roboto' !important;
                           ">Vendor Details</h4>
                               <p style="  
                               color: #888888;
           font-weight: 400;
           letter-spacing: 0;
           font-size: 15px;
           line-height: 22px;font-family: 'Roboto' !important;
           margin: 0 0 3px 0;"><%= supplier.business_name %></p>
                               <p style="
                               color: #888888;
           font-weight: 400;
           letter-spacing: 0;
           font-size: 15px;
           line-height: 22px;font-family: 'Roboto' !important;
           margin: 0 0 3px 0;"><%= supplier.phone %></p>
                               <p style=" color: #888888;
                               font-weight: 400;
                               letter-spacing: 0;
                               font-size: 15px;font-family: 'Roboto' !important;
                               line-height: 22px;
                               margin: 0 0 3px 0;"><%= supplier.email %></p>
                               <p style="  color: #888888;
                               font-weight: 400;
                               letter-spacing: 0;
                               font-size: 15px;
                               line-height: 22px;font-family: 'Roboto' !important;
                               margin: 0 0 3px 0;"><%= supplier.address.country %></p>
                           </div>
                           <div>
                               <h4 style="margin: 0 0 10px 0;
                               font-weight: 400;
                               font-size: 16px;
                               font-family: 'Roboto' !important;;
                           ">Payment Type:</h4>
                               <h5 style="   color: #888888;
                               font-weight: 500;
                               letter-spacing: 0;
                               font-size: 15px;
                               line-height: 22px;font-family: 'Roboto' !important;
                               margin: 0 0 3px 0;"><%= payment_mode %></h5>
                           </div>
                       </div>
                <!-- Thank you! -->
                <div style="    text-align: center;
              padding: 10px 0 10px 0;">
                    <h2 style="margin: 0px 0 0px 0;
                  padding: 0;
                  font-size: 30px;
                  color: #F87128;font-weight: 400;
      ">Thank you!</h2>
                </div>
                <footer>
                    <div style=" padding: 15px 0 15px 0;
                border-top: 1px solid #ccc;
                text-align: center;">
                        <p style="margin: 0 0 10px 0;
                    padding: 0;
                    font-size: 18px;
                    letter-spacing: 0;
                    color: #232323;font-family: 'Roboto' !important;
                    font-weight: 500;">Download Dental Interface 360 App</p>
                        <div style="display: flex;
                    align-items: center;
                    justify-content: center;display: block;
    text-align: center;">
                            <img src="${appConfig.DOMAIN}/public/ios.png" alt="img" style="
                        height: 100%;    margin-right: 10px;cursor: pointer;">
                            <img src="${appConfig.DOMAIN}/public/play.png" alt="img" style="
                        height: 100%;     margin-right: 10px;cursor: pointer;">
                        </div>
                    </div>
                    <div class="footer_bottom_logo" style="cursor: pointer;
                margin-top: 10px;
                padding-bottom: 20px;    text-align: center;
            ">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="" style="width: 25%">
                    </div>
                </footer>
            </div>
            <!-- Queries -->
            <div style="text-align: center;
               padding: 0px 0 20px 0;">
                <p style="    color: #888888;
                   font-weight: 500;
                   letter-spacing: 0;
                   font-size: 20px;
                   line-height: 22px;font-family: 'Roboto' !important;
                   margin-bottom: 10px;">If you have queries feel free to contact us</p>
                <a href="" style="    color: #EF6A30;
                   font-size: 18px;
                   font-weight: 500;font-family: 'Roboto' !important;
                   text-decoration: none;">support@dentalinterface360.com</a>
            </div>
        </div>
    </div>
</body>

</html>
`;

export const subInvoice = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>SUBSCRIPTION-INVOICE</title>
    <style type="text/css">
        p {
            line-height: 24px !important;
        }

        .mobile_responsive_table {
            display: none;
        }

        @media screen and (min-width: 320px) and (max-width: 600px) {
            .main_box {
                width: 85% !important;
            }

            .order_flex_box {
                display: block !important;
            }

            .vendor_flex_box {
                display: block !important;
                margin: 0px 5px 0 5px !important;
            }

            .vendor_box {
                margin-bottom: 10px;
            }
        }

        @media screen and (min-width: 320px) and (max-width: 767px) {
            .order_flex_box {
                padding: 0px 0px !important;
            }

            .main_box {
                padding: 20px 15px 0px 15px !important;
            }

            .pr_0 {
                padding-right: 0 !important;
            }

            .pl_15 {
                padding-left: 15px !important;
            }

            .pl_25 {
                padding-left: 25px !important;
            }

            .title {
                font-size: 20px !important;
            }

            .w_50 {
                width: 53% !important;
                padding-left: 5px !important;
                text-transform: capitalize !important;
                color: #333333 !important;
            }

            .total_value {
                width: 40% !important;
                padding-right: 5px !important;
                color: #888 !important;
            }

            .mobile_table {
                overflow-x: scroll;
            }

            .table_head {
                height: 40px !important;
                line-height: 40px !important;
                font: 20px/ 40px 'Roboto' !important;
            }

            .table_head h2 {
                font: 20px/ 40px 'Roboto' !important;
            }

            table thead {
                display: none;
            }

            table tbody td {
                flex-direction: column !important;
                display: inline-block !important;
                border-bottom: 1px solid #eee !important;
                border-right: 0px !important;
                text-align: right !important;
                width: 100% !important;
                min-width: 100% !important;
                max-width: 100% !important;
                padding: 8px 0 8px 0px !important;
                font-weight: 500 !important;
                font-size: 13px !important;
            }

            .order_table {
                display: none;
            }

            .mobile_responsive_table {
                display: block;
                margin-top: 10px !important;
            }

            .footer_bottom_logo img {
                width: 50% !important;
            }

            .mobile_responsive_table label {
                width: auto !important;
            }
        }

        @media screen and (min-width: 768px) and (max-width: 991px) {
            .order_table {
                display: none;
            }

            .order_flex_box {
                padding: 0px 0px !important;
            }

            .mobile_responsive_table {
                display: block;
            }

            .main_box {
                width: 75% !important;
            }

            h4.w_50 {
                /* width: 70% !important; */
                padding-left: 5px !important;
            }

            .total_value {
                color: #888888 !important;
            }
        }

        @media screen and (min-width: 991px) and (max-width: 1365px) {
            .mobile_table {
                overflow-x: auto !important;
            }

            .total_value {
                width: 20% !important;
                padding-right: 5px !important;
            }
        }
    </style>
</head>

<body style="margin: 0; padding: 0; background-color: #eee; 
    font-family: 'Roboto';">
    <div style="
    position: relative;
    display: block;
    overflow: visible;
    height: 100%;
    width: 100%;">
        <div style="
        width: 100%;
    z-index: 9;
    overflow: visible;
    font-family: 'Roboto' !important;
    background-image: url(${appConfig.DOMAIN}/public/top-bg-img.png);
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    height: 100%;
    padding-top: 60px;
    ">
            <div class="main_box" style=" display: block; background-color: #fff; width: 80%; z-index: 9999;
    margin: 0 auto 0 auto;
border-radius: 4px;
padding: 20px 25px 0px 25px;
transform: translateY(0%);">
                <!-- Top_Logo_Box -->
                <div style="text-align: center;">
                    <div style="padding: 0 0 0 0;">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="logo">
                    </div>
                    <div style="border-top: 1px solid #CBCBCB;
                    margin: 15px auto;
                    border-bottom: 1px solid #CBCBCB;
                    padding: 15px 0;">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 500; 
                font-family: 'Roboto' !important;">Thank you for your Subscription</h2>
                        <p style="    color: #434343;
                        margin: 0;
                        padding: 0;
                        font-size: 16px;
                        font-weight: 400;">Transaction Id : #<%= id %></p>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="   margin-top: 20px;">
                    <!-- Oder_Details_Customer_Info -->
                    <div class="order_flex_box" class="pl_25" style="    display: flex;
                align-items: flex-start;
                justify-content: space-between; 
                margin: 0;
                padding: 15px 30px;">
                        <!-- plan-Details -->
                        <div style="height: 100%;">
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="     font-size: 15px;
                            font-weight: 400;
            letter-spacing: 0;
            text-transform: capitalize;
            margin-bottom: 5px;    display: block;font-family: 'Roboto' !important;
            color: #333333;min-width: 160px;">To <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888;
                            font-weight: 400; margin: 0;
                            letter-spacing: 0;font-family: 'Roboto' !important;
                            font-size: 15px;"><%= name %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="        font-size: 15px;
                            font-weight: 400;
                            letter-spacing: 0;
                            text-transform: capitalize;font-family: 'Roboto' !important;
                            margin-bottom: 5px;    display: block;
                            color: #333333;    min-width: 160px;">Invoice Id <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888;
                            font-weight: 400; margin: 0;
                            letter-spacing: 0;font-family: 'Roboto' !important;
                            font-size: 15px;">#<%= id %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="       font-size: 15px;
                            font-weight: 400;
                            letter-spacing: 0;
                            text-transform: capitalize; font-family: 'Roboto' !important;
                            margin-bottom: 5px;    display: block;
                            color: #333333;    min-width: 160px;">ABN <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888;
                            font-weight: 400;
                            letter-spacing: 0; margin: 0;
                            font-size: 15px;" style="    color: #888888;
                            font-weight: 400;
                            letter-spacing: 0; font-family: 'Roboto' !important;
                            font-size: 15px;    line-height: 22px;"><%= abn %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="     font-size: 15px;
                            font-weight: 400;
            letter-spacing: 0;
            text-transform: capitalize;
            margin-bottom: 5px;    display: block; font-family: 'Roboto' !important;
            color: #333333;    min-width: 160px;">Issued <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888; 
                            font-weight: 400; margin: 0;
                            letter-spacing: 0;font-family: 'Roboto' !important;
                            font-size: 15px;"><%= startDate %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="     font-size: 15px;
                            font-weight: 400;
            letter-spacing: 0;
            text-transform: capitalize;
            margin-bottom: 5px;    display: block;
            color: #333333;    min-width: 160px;">Due <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888;
                            font-weight: 400;margin: 0;
                            letter-spacing: 0; font-family: 'Roboto' !important;
                            font-size: 15px;"><%= endDate %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="     font-size: 15px;
                            font-weight: 400;
            letter-spacing: 0;
            text-transform: capitalize;
            margin-bottom: 5px;    display: block; font-family: 'Roboto' !important;
            color: #333333;    min-width: 160px;">Payment Type <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888;
                            font-weight: 400; font-family: 'Roboto' !important;
                            letter-spacing: 0;margin: 0;
                            font-size: 15px;"> Online </p>
                            </div>
                        </div>
                        <!-- Form -->
                        <div style="height: 100%;">
                            <div style="margin: 5px 0 10px 0;display: flex; flex-start: center;">
                                <label for="" style="     font-size: 15px;
                            font-weight: 400;
            letter-spacing: 0;
            text-transform: capitalize;
            margin-bottom: 5px;    display: block;font-family: 'Roboto' !important;
            color: #333333;    min-width: 50px;">From <span style="float: right;padding-right: 5px;    font-weight: 700;
            color: #000;">:</span></label>
                                <div>
                                    <p style="    color: #888888;
                                               font-weight: 400;
                                               letter-spacing: 0;
                                               font-size: 15px; margin: 0;font-family: 'Roboto' !important;
                                               line-height: 18px !important;margin-bottom: 5px;">Dental Interface 360
                                        Pty Ltd</p>
                                    <p style="    color: #888888;
                                               font-weight: 400;
                                               letter-spacing: 0; margin: 0;font-family: 'Roboto' !important;
                                               font-size: 15px;
                                               line-height: 22px;margin-bottom: 5px;">138 Marsh St, Armidale NSW 2350,
                                    </p>
                                    <p style="    color: #888888;
                                               font-weight: 400; margin: 0;
                                               letter-spacing: 0;font-family: 'Roboto' !important;
                                               font-size: 15px;
                                               line-height: 22px;margin-bottom: 5px;"> Australia, 2350</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Order Details -->
                    <div class="table_head" style="    background: #F9F9F9;
                height: 60px;
                line-height: 60px; 
                padding: 0 15px;    margin: 0 0 10px 0;">
                        <h2 style="
                        font-size: 20px;
        color: #333333;
        margin: 0;
        font-weight: 500;
        font-family: 'Roboto' !important;">Subscription Details
                        </h2>
                    </div>
                    <!-- INVOICE-TABLE -->
                    <div class="mobile_table">
                        <!-- WEB-TABLE -->
                        <table class="order_table" style="border-radius: 0;
                        margin-top: 0px;
                        margin-bottom: 0;
                        overflow: hidden;
                        width: 100%;
                        border-spacing: 0;    border: 1px solid #dee2e6;">
                            <!-- THEAD -->
                            <thead>
                                <tr>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: center;
                                    font-weight: 500;font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">S.no</th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: left;
                                    font-weight: 500; font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">Plan Name</th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                      border-right: 1px solid #dee2e6;
                                      color: #333333;
                                      text-align: left;
                                      font-weight: 500; font-family: 'Roboto' !important;
                                      padding: 10px 10px 10px 10px;
                                      font-size: 14px;">Quantity</th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: center;
                                    font-weight: 500;font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">Unit Price </th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: center;
                                    font-weight: 500; font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">Item Total</th>
                                </tr>
                            </thead>
                            <!-- TBODY -->
                            <tbody>
                                <tr>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;    text-align: center;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="S No">1</td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;
                       text-align: left;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="User Name"><%= planName  %></td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;max-width: 225px;min-width: 225px;    text-align: left;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="Item Name">1</td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;    text-align: center;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="Quantity"><%= price %></td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;    text-align: center;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="Unit Price">AUD <%= price  %></td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- MOBILE-LIST -->
                        <div class="mobile_responsive_table" style="
                        border: 1px solid #eee;
                        margin-top: 20px;
                        border-radius: 4px;    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;">
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     
                                font-size: 15px;
                     font-weight: 400;
                     letter-spacing: 0;
                     width: 125px;
                     color: #333333;    
                     display: inline-block;
                     padding-left: 5px;">S.No</label>
                                <p style=" color: #888888;
                     font-weight: 400;
                     letter-spacing: 0;
                     font-size: 15px;
                     margin: 0;
                     display: inline-block;
                     float: right;
                     padding-right: 5px;">1</p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Plan Name</label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;"><%= planName  %></p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Quantity</label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;">1</p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Unit Price</label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;"><%= price  %></p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Total Items </label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;"><%= price  %></p>
                            </div>
                        </div>
                        <!-- ALL-CHARGES-TOTAL -->
                        <div style="border: 1px solid #dee2e6;
                    border-top: 0; display: block;">
                            <div
                                style=" width: 100%;   display: inline-block;
                        align-items: center;
                        justify-content: space-between; padding: 10px 0px 10px 0px;    border-bottom: 1px solid #dee2e6;">
                                <h4 class="w_50" style="display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 15px;
                            color: #888888;font-family: 'Roboto' !important;
                            font-weight: 400;    margin: 0;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">Subtotal</h4>
                                <p class="total_value" style="      display: inline-block;  color: #333333;    margin: 0;
                            font-size: 15px; font-family: 'Roboto' !important;
                            font-weight: 400;    width: 20%;
            text-align: right;"><%= price %></p>
                            </div>
                            <div
                                style=" width: 100%;   display: inline-block;
                        align-items: center;
                        justify-content: space-between; padding: 10px 0px 10px 0px;    border-bottom: 1px solid #dee2e6;">
                                <h4 class="w_50" style="display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 15px;
                            color: #888888; font-family: 'Roboto' !important;
                            font-weight: 400;    margin: 0;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">Less Amount Paid</h4>
                                <p class="total_value" style="   display: inline-block; color: #333333;    margin: 0;
                            font-size: 15px; font-family: 'Roboto' !important;
                            font-weight: 400;    width: 20%;
            text-align: right;"><%= price  %></p>
                            </div>
                            <div
                                style=" width: 100%;   display: inline-block;
                        align-items: center;    margin: 0;
                        justify-content: space-between; padding: 10px 0px 10px 0px;    border-bottom: 1px solid #dee2e6;">
                                <h4 class="w_50" style="display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 14px;
                            color: #888888;    margin: 0;
                            font-weight: 400; font-family: 'Roboto' !important;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">Amount Due</h4>
                                <p class="total_value" style=" display: inline-block;   color: #333333;
                            font-size: 15px; font-family: 'Roboto' !important;
                            font-weight: 400;    width: 20%;    margin: 0;
            text-align: right;">0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <!-- Plan Expires on : -->
                <div style="
                    margin: 0px 0 0px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;">
                    <label for="" style="     font-size: 16px;
            font-weight: 400;
letter-spacing: 0;
text-transform: capitalize;font-family: 'Roboto' !important;
    display: block;
color: #EF6A30;min-width: 160px;">Plan Expires on <span style="float: right;padding-right: 25px;    font-weight: 700;
color: #000;">:</span></label>
                    <p class="value" style="color: #888888;
                    font-weight: 400;
                    font-family: 'Roboto' !important;
                    letter-spacing: 0;
                    font-size: 16px;
                    margin-top: 5px;
                    margin-bottom: 0;
                    padding: 10px 0;line-height: 18px !important;"><%= endDate %></p>
                </div>
                <!-- Thank you! -->
                <div style="    text-align: center;
              padding: 10px 0 10px 0;">
                    <h2 style="margin: 0px 0 0px 0;
                  padding: 0;
                  font-size: 30px;
                  color: #F87128;font-weight: 400;
      ">Thank you!</h2>
                </div>
                <footer>
                    <div style=" padding: 15px 0 15px 0;
                border-top: 1px solid #ccc;
                text-align: center;">
                        <p style="margin: 0 0 10px 0;
                    padding: 0;
                    font-size: 18px;
                    letter-spacing: 0;
                    color: #232323;font-family: 'Roboto' !important;
                    font-weight: 500;">Download Dental Interface 360 App</p>
                        <div style="display: flex;
                    align-items: center;
                    justify-content: center;display: block;
    text-align: center;">
                            <img src="${appConfig.DOMAIN}/public/ios.png" alt="img" style="
                        height: 100%;    margin-right: 10px;cursor: pointer;">
                            <img src="${appConfig.DOMAIN}/public/play.png" alt="img" style="
                        height: 100%;     margin-right: 10px;cursor: pointer;">
                        </div>
                    </div>
                    <div class="footer_bottom_logo" style="cursor: pointer;
                margin-top: 10px;
                padding-bottom: 20px;    text-align: center;
            ">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="" style="width: 25%">
                    </div>
                </footer>
            </div>
            <!-- Queries -->
            <div style="text-align: center;
               padding: 0px 0 20px 0;">
                <p style="    color: #888888;
                   font-weight: 500;
                   letter-spacing: 0;
                   font-size: 20px;
                   line-height: 22px;font-family: 'Roboto' !important;
                   margin-bottom: 10px;">If you have queries feel free to contact us</p>
                <a href="" style="    color: #EF6A30;
                   font-size: 18px;
                   font-weight: 500;font-family: 'Roboto' !important;
                   text-decoration: none;">support@dentalinterface360.com</a>
            </div>
        </div>
    </div>
</body>

</html>
`
export const subInvoiceAdmin = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>SUBSCRIPTION-INVOICE-ADMIN</title>
    <style type="text/css">
        p {
            line-height: 24px !important;
        }

        .mobile_responsive_table {
            display: none;
        }

        @media screen and (min-width: 320px) and (max-width: 600px) {
            .main_box {
                width: 85% !important;
            }

            .order_flex_box {
                display: block !important;
            }

            .vendor_flex_box {
                display: block !important;
                margin: 0px 5px 0 5px !important;
            }

            .vendor_box {
                margin-bottom: 10px;
            }
        }

        @media screen and (min-width: 320px) and (max-width: 767px) {
            .order_flex_box {
                padding: 0px 0px !important;
            }

            .main_box {
                padding: 20px 15px 0px 15px !important;
            }

            .pr_0 {
                padding-right: 0 !important;
            }

            .pl_15 {
                padding-left: 15px !important;
            }

            .pl_25 {
                padding-left: 25px !important;
            }

            .title {
                font-size: 20px !important;
            }

            .w_50 {
                width: 53% !important;
                padding-left: 5px !important;
                text-transform: capitalize !important;
                color: #333333 !important;
            }

            .total_value {
                width: 40% !important;
                padding-right: 5px !important;
                color: #888 !important;
            }

            .mobile_table {
                overflow-x: scroll;
            }

            .table_head {
                height: 40px !important;
                line-height: 40px !important;
                font: 20px/ 40px 'Roboto' !important;
            }

            .table_head h2 {
                font: 20px/ 40px 'Roboto' !important;
            }

            table thead {
                display: none;
            }

            table tbody td {
                flex-direction: column !important;
                display: inline-block !important;
                border-bottom: 1px solid #eee !important;
                border-right: 0px !important;
                text-align: right !important;
                width: 100% !important;
                min-width: 100% !important;
                max-width: 100% !important;
                padding: 8px 0 8px 0px !important;
                font-weight: 500 !important;
                font-size: 13px !important;
            }

            .order_table {
                display: none;
            }

            .mobile_responsive_table {
                display: block;
                margin-top: 10px !important;
            }

            .footer_bottom_logo img {
                width: 50% !important;
            }

            .mobile_responsive_table label {
                width: auto !important;
            }
        }

        @media screen and (min-width: 768px) and (max-width: 991px) {
            .order_table {
                display: none;
            }

            .order_flex_box {
                padding: 0px 0px !important;
            }

            .mobile_responsive_table {
                display: block;
            }

            .main_box {
                width: 75% !important;
            }

            h4.w_50 {
                /* width: 70% !important; */
                padding-left: 5px !important;
            }

            .total_value {
                color: #888888 !important;
            }
        }

        @media screen and (min-width: 991px) and (max-width: 1365px) {
            .mobile_table {
                overflow-x: auto !important;
            }

            .total_value {
                width: 20% !important;
                padding-right: 5px !important;
            }
        }
    </style>
</head>

<body style="margin: 0; padding: 0; background-color: #eee; 
    font-family: 'Roboto';">
    <div style="
    position: relative;
    display: block;
    overflow: visible;
    height: 100%;
    width: 100%;">
        <div style="
        width: 100%;
    z-index: 9;
    overflow: visible;
    font-family: 'Roboto' !important;
    background-image: url(${appConfig.DOMAIN}/public/top-bg-img.png);
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    height: 100%;
    padding-top: 60px;
    ">
            <div class="main_box" style=" display: block; background-color: #fff; width: 80%; z-index: 9999;
    margin: 0 auto 0 auto;
border-radius: 4px;
padding: 20px 25px 0px 25px;
transform: translateY(0%);">
                <!-- Top_Logo_Box -->
                <div style="text-align: center;">
                    <div style="padding: 0 0 0 0;">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="logo">
                    </div>
                    <div style="border-top: 1px solid #CBCBCB;
                    margin: 15px auto;
                    border-bottom: 1px solid #CBCBCB;
                    padding: 15px 0;">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 500; 
                font-family: 'Roboto' !important;">New Subscription</h2>
                        <p style="    color: #434343;
                        margin: 0;
                        padding: 0;
                        font-size: 16px;
                        font-weight: 400;">Transaction Id : #<%= id %></p>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="   margin-top: 20px;">
                    <div style="   margin-top: 20px;">
                        <div style="width: 100%">
                            <p style="    padding: 0;
                    margin: 0 0 6px 0;
                    font-size: 17px;
                    letter-spacing: 0;
                    font-weight: 400;
                    padding-left: 0;
            color: #232323; font-family: 'Roboto' !important;
        ">Hi&nbsp;Admin</p>
                            <p class="pr_0" style="    padding: 0 50px 0 0;
         margin: 10px 0 15px 0;
         font-size: 17px;
         letter-spacing: 0;
         font-weight: 400;   font-family: 'Roboto' !important;         
    color: #232323;">DI 360 got a new subscriber. Here are the details</p>
                        </div>
                    </div>
                    <!-- Oder_Details_Customer_Info -->
                    <div class="order_flex_box" class="pl_25" style="    display: flex;
                align-items: flex-start;
                justify-content: space-between; 
                margin: 0;
                padding: 15px 30px;">
                        <!-- plan-Details -->
                        <div style="height: 100%;">
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="     font-size: 15px;
                            font-weight: 400;
            letter-spacing: 0;
            text-transform: capitalize;
            margin-bottom: 5px;    display: block;font-family: 'Roboto' !important;
            color: #333333;min-width: 160px;">To <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888;
                            font-weight: 400; margin: 0;
                            letter-spacing: 0;font-family: 'Roboto' !important;
                            font-size: 15px;"><%= name %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="        font-size: 15px;
                            font-weight: 400;
                            letter-spacing: 0;
                            text-transform: capitalize;font-family: 'Roboto' !important;
                            margin-bottom: 5px;    display: block;
                            color: #333333;    min-width: 160px;">Invoice Id <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888;
                            font-weight: 400; margin: 0;
                            letter-spacing: 0;font-family: 'Roboto' !important;
                            font-size: 15px;">#<%= id %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="       font-size: 15px;
                            font-weight: 400;
                            letter-spacing: 0;
                            text-transform: capitalize; font-family: 'Roboto' !important;
                            margin-bottom: 5px;    display: block;
                            color: #333333;    min-width: 160px;">ABN <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888;
                            font-weight: 400;
                            letter-spacing: 0; margin: 0;
                            font-size: 15px;" style="    color: #888888;
                            font-weight: 400;
                            letter-spacing: 0; font-family: 'Roboto' !important;
                            font-size: 15px;    line-height: 22px;"><%= abn %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="     font-size: 15px;
                            font-weight: 400;
            letter-spacing: 0;
            text-transform: capitalize;
            margin-bottom: 5px;    display: block; font-family: 'Roboto' !important;
            color: #333333;    min-width: 160px;">Issued <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888; 
                            font-weight: 400; margin: 0;
                            letter-spacing: 0;font-family: 'Roboto' !important;
                            font-size: 15px;"><%= startDate %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="     font-size: 15px;
                            font-weight: 400;
            letter-spacing: 0;
            text-transform: capitalize;
            margin-bottom: 5px;    display: block;
            color: #333333;    min-width: 160px;">Due <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888;
                            font-weight: 400;margin: 0;
                            letter-spacing: 0; font-family: 'Roboto' !important;
                            font-size: 15px;"><%= endDate %></p>
                            </div>
                            <div style="margin: 5px 0 10px 0;display: flex; align-items: center;">
                                <label for="" style="     font-size: 15px;
                            font-weight: 400;
            letter-spacing: 0;
            text-transform: capitalize;
            margin-bottom: 5px;    display: block; font-family: 'Roboto' !important;
            color: #333333;    min-width: 160px;">Payment Type <span style="float: right;padding-right: 50px;    font-weight: 700;
            color: #000;">:</span></label>
                                <p style="    color: #888888;
                            font-weight: 400; font-family: 'Roboto' !important;
                            letter-spacing: 0;margin: 0;
                            font-size: 15px;"> Online </p>
                            </div>
                        </div>
                    </div>
                    <!-- Order Details -->
                    <div class="table_head" style="    background: #F9F9F9;
                height: 60px;
                line-height: 60px; 
                padding: 0 15px;    margin: 0 0 10px 0;">
                        <h2 style="
                        font-size: 20px;
        color: #333333;
        margin: 0;
        font-weight: 500;
        font-family: 'Roboto' !important;">Subscription Details
                        </h2>
                    </div>
                    <!-- INVOICE-TABLE -->
                    <div class="mobile_table">
                        <!-- WEB-TABLE -->
                        <table class="order_table" style="border-radius: 0;
                        margin-top: 0px;
                        margin-bottom: 0;
                        overflow: hidden;
                        width: 100%;
                        border-spacing: 0;    border: 1px solid #dee2e6;">
                            <!-- THEAD -->
                            <thead>
                                <tr>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: center;
                                    font-weight: 500;font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">S.no</th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: left;
                                    font-weight: 500; font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">Plan Name</th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                      border-right: 1px solid #dee2e6;
                                      color: #333333;
                                      text-align: left;
                                      font-weight: 500; font-family: 'Roboto' !important;
                                      padding: 10px 10px 10px 10px;
                                      font-size: 14px;">Quantity</th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: center;
                                    font-weight: 500;font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">Unit Price </th>
                                    <th style="border-bottom: 1px solid #dee2e6;
                                    border-right: 1px solid #dee2e6;
                                    color: #333333;
                                    text-align: center;
                                    font-weight: 500; font-family: 'Roboto' !important;
                                    padding: 10px 10px 10px 10px;
                                    font-size: 14px;">Item Total</th>
                                </tr>
                            </thead>
                            <!-- TBODY -->
                            <tbody>
                                <tr>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;    text-align: center;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="S No">1</td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;
                       text-align: left;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="User Name"><%= planName  %></td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;max-width: 225px;min-width: 225px;    text-align: left;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="Item Name">1</td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;    text-align: center;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="Quantity"><%= price %></td>
                                    <td style="  border-left: 0;
                    border-bottom: 0;
                    border-top: 0;
                    padding: 10px 10px 10px 10px;    text-align: center;
            font-size: 14px;
            font-weight: 400;font-family: 'Roboto' !important;
            color: #888888;
            border-right: 1px solid #dee2e6;" data-label="Unit Price">AUD <%= price  %></td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- MOBILE-LIST -->
                        <div class="mobile_responsive_table" style="
                        border: 1px solid #eee;
                        margin-top: 20px;
                        border-radius: 4px;    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;">
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     
                                font-size: 15px;
                     font-weight: 400;
                     letter-spacing: 0;
                     width: 125px;
                     color: #333333;    
                     display: inline-block;
                     padding-left: 5px;">S.No</label>
                                <p style=" color: #888888;
                     font-weight: 400;
                     letter-spacing: 0;
                     font-size: 15px;
                     margin: 0;
                     display: inline-block;
                     float: right;
                     padding-right: 5px;">1</p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Plan Name</label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;"><%= planName  %></p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Quantity</label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;">1</p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            border-bottom: 1px solid #eee;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Unit Price</label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;"><%= price  %></p>
                            </div>
                            <div style="    margin: 0;
                            padding: 5px 0px;
                            display: inline-block;
                            width: 100%;">
                                <label for="" style="     font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0;
                        width: 170px;
                        color: #333333;display: inline-block;
                     padding-left: 5px;">Total Items </label>
                                <p style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;display: inline-block;
                     float: right;
                     padding-right: 5px;"><%= price  %></p>
                            </div>
                        </div>
                        <!-- ALL-CHARGES-TOTAL -->
                        <div style="border: 1px solid #dee2e6;
                    border-top: 0; display: block;">
                            <div
                                style=" width: 100%;   display: inline-block;
                        align-items: center;
                        justify-content: space-between; padding: 10px 0px 10px 0px;    border-bottom: 1px solid #dee2e6;">
                                <h4 class="w_50" style="display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 15px;
                            color: #888888;font-family: 'Roboto' !important;
                            font-weight: 400;    margin: 0;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">Subtotal</h4>
                                <p class="total_value" style="      display: inline-block;  color: #333333;    margin: 0;
                            font-size: 15px; font-family: 'Roboto' !important;
                            font-weight: 400;    width: 20%;
            text-align: right;"><%= price %></p>
                            </div>
                            <div
                                style=" width: 100%;   display: inline-block;
                        align-items: center;
                        justify-content: space-between; padding: 10px 0px 10px 0px;    border-bottom: 1px solid #dee2e6;">
                                <h4 class="w_50" style="display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 15px;
                            color: #888888; font-family: 'Roboto' !important;
                            font-weight: 400;    margin: 0;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">Less Amount Paid</h4>
                                <p class="total_value" style="   display: inline-block; color: #333333;    margin: 0;
                            font-size: 15px; font-family: 'Roboto' !important;
                            font-weight: 400;    width: 20%;
            text-align: right;"><%= price  %></p>
                            </div>
                            <div
                                style=" width: 100%;   display: inline-block;
                        align-items: center;    margin: 0;
                        justify-content: space-between; padding: 10px 0px 10px 0px;    border-bottom: 1px solid #dee2e6;">
                                <h4 class="w_50" style="display: inline-block;  width: 75%; padding-left: 25px;
                            font-size: 14px;
                            color: #888888;    margin: 0;
                            font-weight: 400; font-family: 'Roboto' !important;
                            letter-spacing: 0.2px;text-transform: uppercase;
                        ">Amount Due</h4>
                                <p class="total_value" style=" display: inline-block;   color: #333333;
                            font-size: 15px; font-family: 'Roboto' !important;
                            font-weight: 400;    width: 20%;    margin: 0;
            text-align: right;">0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <!-- Plan Expires on : -->
                <div style="
                    margin: 0px 0 0px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;">
                    <label for="" style="     font-size: 16px;
            font-weight: 400;
letter-spacing: 0;
text-transform: capitalize;font-family: 'Roboto' !important;
    display: block;
color: #EF6A30;min-width: 160px;">Plan Expires on <span style="float: right;padding-right: 25px;    font-weight: 700;
color: #000;">:</span></label>
                    <p class="value" style="color: #888888;
                    font-weight: 400;
                    font-family: 'Roboto' !important;
                    letter-spacing: 0;
                    font-size: 16px;
                    margin-top: 5px;
                    margin-bottom: 0;
                    padding: 10px 0;line-height: 18px !important;"><%= endDate %></p>
                </div>
                <!-- Thank you! -->
                <div style="    text-align: center;
              padding: 10px 0 10px 0;">
                    <h2 style="margin: 0px 0 0px 0;
                  padding: 0;
                  font-size: 30px;
                  color: #F87128;font-weight: 400;
      ">Thank you!</h2>
                </div>
                <footer>
                    <div style=" padding: 15px 0 15px 0;
                border-top: 1px solid #ccc;
                text-align: center;">
                        <p style="margin: 0 0 10px 0;
                    padding: 0;
                    font-size: 18px;
                    letter-spacing: 0;
                    color: #232323;font-family: 'Roboto' !important;
                    font-weight: 500;">Download Dental Interface 360 App</p>
                        <div style="display: flex;
                    align-items: center;
                    justify-content: center;display: block;
    text-align: center;">
                            <img src="${appConfig.DOMAIN}/public/ios.png" alt="img" style="
                        height: 100%;    margin-right: 10px;cursor: pointer;">
                            <img src="${appConfig.DOMAIN}/public/play.png" alt="img" style="
                        height: 100%;     margin-right: 10px;cursor: pointer;">
                        </div>
                    </div>
                    <div class="footer_bottom_logo" style="cursor: pointer;
                margin-top: 10px;
                padding-bottom: 20px;    text-align: center;
            ">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="" style="width: 25%">
                    </div>
                </footer>
            </div>
            <!-- Queries -->
            <div style="text-align: center;
               padding: 0px 0 20px 0;">
                <p style="    color: #888888;
                   font-weight: 500;
                   letter-spacing: 0;
                   font-size: 20px;
                   line-height: 22px;font-family: 'Roboto' !important;
                   margin-bottom: 10px;">If you have queries feel free to contact us</p>
                <a href="" style="    color: #EF6A30;
                   font-size: 18px;
                   font-weight: 500;font-family: 'Roboto' !important;
                   text-decoration: none;">support@dentalinterface360.com</a>
            </div>
        </div>
    </div>
</body>

</html>
`
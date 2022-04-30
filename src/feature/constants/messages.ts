import { appConfig } from './../../core/config/app-config';

export const verifyEmailSubject =  `Email verification`;
export const verifyEmailBody = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>WELCOME</title>
    <style type="text/css">
        @media  screen and (max-width: 991px) {
            .main_box {
                padding: 20px 0px 0px 0px !important;
                width: auto !important;
                margin: 0 15px 0 15px !important;
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
            <div class="main_box" style=" display: block; background-color: #fff; width: 70%; z-index: 9999;
    margin: 0 auto 0 auto;
border-radius: 4px;
padding: 20px 50px 0px 50px;
transform: translateY(0%);">
                <!-- Top_Logo_Box -->
                <div style="text-align: center;">
                    <div style="padding: 0 0 0 0;">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="logo">
                    </div>
                    <div style="
            margin: 15px auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 600; 
                font-family: 'Roboto' !important;
            ">Welcome to Dental Interface 360 </h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div>
                    <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 5%;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi,</p>
                    <p style="    padding: 0 50px 0 5%;
            margin: 10px 0 15px 0;
            font-size: 17px;
            letter-spacing: 0;
            font-weight: 400;   font-family: 'Roboto' !important;         
    color: #232323;">Thanks for signing up for Dental Interface 360. </p>
                    <p style="    padding: 0 50px 0 5%;
    margin: 0 0 6px 0;
    font-size: 17px;
    letter-spacing: 0;
    font-weight: 400; font-family: 'Roboto' !important;
color: #232323;">Click below to verify your newly created account</p>
                    <a href="{{url}}" target="_blank" type="button" style="    margin: 15px 0 0px 5%;
                background-color: #EF6A30;
                height: 38px;
                line-height: 38px;
                border: 1px solid #EF6A30;
                border-radius: 8px;
                color: #fff;
                padding-left: 30px;
                padding-right: 30px;
                cursor: pointer;
                font-size: 16px;
                font-family: 'Roboto' !important;text-decoration: none;
    display: inline-block;">Click here</a>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="    margin: 15px 0 30px 0;">
                    <h4 style="    padding: 0 0 0 5%;
                font-size: 18px;
                font-weight: 600;
                margin: 25px 0 5px 0;font-family: 'Roboto' !important;
                color: #121212;">Regards,</h4>
                    <h4 style="    padding: 0 0 0 5%;
        font-size: 18px;
        font-weight: 600;font-family: 'Roboto' !important;
        margin: 0px 0 0 0; color: #121212;">Team DI360</h4>
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
                    <div style="cursor: pointer;
                margin-top: 20px;
                padding-bottom: 30px;    text-align: center;
            ">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="" style="width: 30%">
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

export const orderPlacedUserSubject =  `Your Dental Interface 360.com {{orderNumber}}`;
export const orderPlacedUserBody = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>ORDER-PLACED-USER</title>
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
        }

        @media screen and (min-width: 320px) and (max-width: 767px) {
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
                    <div style="
            margin: 15px auto 0 auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 500; 
                font-family: 'Roboto' !important;
            ">Thank you for your order!</h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="   margin-top: 20px;">
                    <div style="width: 100%">
                        <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 0;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi&nbsp;<%= customer_name %></p>
                        <p class="pr_0" style="    padding: 0 50px 0 0;
     margin: 10px 0 15px 0;
     font-size: 17px;
     letter-spacing: 0;
     font-weight: 400;   font-family: 'Roboto' !important;         
color: #232323;">We received your order with order id - <%= order_id %>.
                        </p>
                        <p class="pr_0" style="    padding: 0 50px 0 0;
            margin: 10px 0 15px 0;
            font-size: 17px;
            letter-spacing: 0; 
    line-height: 28px !important;
            font-weight: 400;   font-family: 'Roboto' !important;         
    color: #232323;">Thanks for choosing DI 360 for your dental equipment needs. <br>We will keep you updated on your
                            product delivery status.
                        </p>
                        <p class="pr_0" style="    padding: 0 50px 0 0;
                        margin: 10px 0 15px 0;
                        font-size: 17px;
                        letter-spacing: 0;
                        font-weight: 400;   font-family: 'Roboto' !important;         
                color: #232323;">You can check on order status by clicking on
                            <a href="https://dentalinterface360.com" target="_blank"
                                style="  font: 16px/ 24px Roboto !important;  color: #F87128;">dentalinterface360.com
                            </a></p>
                    </div>
                    <!-- Order Details -->
                    <div class="table_head" style="    background: #F9F9F9;
                height: 60px;
                line-height: 60px; 
                padding: 0 15px;    margin: 0 0 20px 0;">
                        <h2 style="
                        font-size: 20px;
        color: #333333;
        margin: 0;
        font-weight: 500;
        font-family: 'Roboto' !important;">Order summary</h2>
                    </div>
                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered date : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_date %></span></label>
                        </div>
                    </div>
                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered ID : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_id %></span></label>
                        </div>
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
            border-right: 1px solid #dee2e6;" data-label="User Name">name</td> -->
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
                     padding-right: 5px;">1</p>
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

export const orderPlacedAdminSubject =  `New Order Received on Dental Interface 360.com {{orderNumber}}`;
export const orderPlacedAdminBody = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>ORDER-PLACED-ADMIN</title>
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
        }

        @media screen and (min-width: 320px) and (max-width: 767px) {
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
                    <div style="
            margin: 15px auto 0 auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 500; 
                font-family: 'Roboto' !important;
            ">New Order</h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="   margin-top: 20px;">
                    <div style="width: 100%">
                        <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 0;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi&nbsp;</p>
                        <p class="pr_0" style="    padding: 0 50px 0 0;
     margin: 10px 0 15px 0;
     font-size: 17px;
     letter-spacing: 0;
     font-weight: 400;   font-family: 'Roboto' !important;         
color: #232323;">You have received a new order..
                        </p>
                  
                        <p class="pr_0" style="    padding: 0 50px 0 0;
                        margin: 10px 0 15px 0;
                        font-size: 17px;
                        letter-spacing: 0;
                        font-weight: 400;   font-family: 'Roboto' !important;         
                color: #232323;">Click here to know more
                            <a href="https://dentalinterface360.com" target="_blank"
                                style="  font: 16px/ 24px Roboto !important;  color: #F87128;">dentalinterface360.com
                            </a></p>
                    </div>
                    <!-- Order Details -->
                    <div class="table_head" style="    background: #F9F9F9;
                height: 60px;
                line-height: 60px; 
                padding: 0 15px;    margin: 0 0 20px 0;">
                        <h2 style="
                        font-size: 20px;
        color: #333333;
        margin: 0;
        font-weight: 500;
        font-family: 'Roboto' !important;">Order summary</h2>
                    </div>

                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered date : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_date %></span></label>
                        </div>
                    </div>
                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered ID : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_id %></span></label>
                        </div>
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
            border-right: 1px solid #dee2e6;" data-label="User Name">name</td> -->
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
                     padding-right: 5px;">1</p>
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

export const orderCancelUserSubject =  `Your Dental Interface 360.com {{orderNumber}} - Order Cancelled`;
export const orderCancelUserBody = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>ORDER-CANCEL-USER</title>
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
        }

        @media screen and (min-width: 320px) and (max-width: 767px) {
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
                    <div style="
            margin: 15px auto 0 auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 500; 
                font-family: 'Roboto' !important;
            ">Order Cancelled</h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="   margin-top: 20px;">
                    <div style="width: 100%">
                        <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 0;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi&nbsp;<%= customer_name %></p>
                        <p class="pr_0" style="    padding: 0 50px 0 0;
     margin: 10px 0 15px 0;
     font-size: 17px;
     letter-spacing: 0;
     font-weight: 400;   font-family: 'Roboto' !important;         
color: #232323;">We are very sorry to inform you that your order Id - <%= order_id %> has been cancelled from the Vendor
                            side.
                        </p>

                        <p class="pr_0" style="    padding: 0 50px 0 0;
                        margin: 10px 0 15px 0;
                        font-size: 17px;
                        letter-spacing: 0;
                        font-weight: 400;   font-family: 'Roboto' !important;         
                color: #232323;">Click here to know more
                            <a href="https://dentalinterface360.com" target="_blank"
                                style="  font: 16px/ 24px Roboto !important;  color: #F87128;">dentalinterface360.com
                            </a></p>
                        <div class="pr_0" style="padding: 0 50px 0 0;
                            margin: 10px 0 15px 0;">
                            <label for="" style=" 
                                        min-width: 125px;
                                    font-size: 17px;
                                margin: 15px 0 0 0;
                                font-weight: 400;
                                letter-spacing: 0;
                                margin-bottom: 8px;
                                display: block;
                                font-family: 'Roboto' !important;
                                color: #333333;">Cancel reason :</label>
                            <p style="    padding: 0 0 0 0;
            margin: 0 0 6px 0;
            font-size: 14px;
            letter-spacing: 0; line-height: 24px;
            font-weight: 400; font-family: 'Roboto' !important;
        color: #232323;">{{reason}}</p>
                        </div>
                    </div>
                    <!-- Order Details -->
                    <div class="table_head" style="    background: #F9F9F9;
                height: 60px;
                line-height: 60px; 
                padding: 0 15px;    margin: 0 0 20px 0;">
                        <h2 style="
                        font-size: 20px;
        color: #333333;
        margin: 0;
        font-weight: 500;
        font-family: 'Roboto' !important;">Order summary</h2>
                    </div>
                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered date : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_date %></span></label>
                        </div>
                    </div>
                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered ID : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_id %></span></label>
                        </div>
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
            border-right: 1px solid #dee2e6;" data-label="User Name">name</td> -->
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
                     padding-right: 5px;">1</p>
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

export const secondHandOrderCancelUserSubject =  `Your Dental Interface 360.com {{orderNumber}} - Order Cancelled`;
export const secondHandOrderCancelUserBody = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>ORDER-CANCEL-USER</title>
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
        }

        @media screen and (min-width: 320px) and (max-width: 767px) {
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
                    <div style="
            margin: 15px auto 0 auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 500; 
                font-family: 'Roboto' !important;
            ">Order Cancelled</h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="   margin-top: 20px;">
                    <div style="width: 100%">
                        <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 0;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi&nbsp;<%= customer_name %></p>
                        <p class="pr_0" style="    padding: 0 50px 0 0;
     margin: 10px 0 15px 0;
     font-size: 17px;
     letter-spacing: 0;
     font-weight: 400;   font-family: 'Roboto' !important;         
color: #232323;">We are very sorry to inform you that your order Id - <%= order_id %> has been cancelled from the Vendor
                            side.
                        </p>

                        <p class="pr_0" style="    padding: 0 50px 0 0;
                        margin: 10px 0 15px 0;
                        font-size: 17px;
                        letter-spacing: 0;
                        font-weight: 400;   font-family: 'Roboto' !important;         
                color: #232323;">Click here to know more
                            <a href="https://dentalinterface360.com" target="_blank"
                                style="  font: 16px/ 24px Roboto !important;  color: #F87128;">dentalinterface360.com
                            </a></p>
                        <div class="pr_0" style="padding: 0 50px 0 0;
                            margin: 10px 0 15px 0;">
                            <label for="" style=" 
                                        min-width: 125px;
                                    font-size: 17px;
                                margin: 15px 0 0 0;
                                font-weight: 400;
                                letter-spacing: 0;
                                margin-bottom: 8px;
                                display: block;
                                font-family: 'Roboto' !important;
                                color: #333333;">Cancel reason :</label>
                            <p style="    padding: 0 0 0 0;
            margin: 0 0 6px 0;
            font-size: 14px;
            letter-spacing: 0; line-height: 24px;
            font-weight: 400; font-family: 'Roboto' !important;
        color: #232323;">{{reason}}</p>
                        </div>
                    </div>
                    <!-- Order Details -->
                    <div class="table_head" style="    background: #F9F9F9;
                height: 60px;
                line-height: 60px; 
                padding: 0 15px;    margin: 0 0 20px 0;">
                        <h2 style="
                        font-size: 20px;
        color: #333333;
        margin: 0;
        font-weight: 500;
        font-family: 'Roboto' !important;">Order summary</h2>
                    </div>
                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered date : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_date %></span></label>
                        </div>
                    </div>
                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered ID : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_id %></span></label>
                        </div>
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
            border-right: 1px solid #dee2e6;" data-label="User Name">name</td> -->
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
                     padding-right: 5px;">1</p>
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

export const secondHandOrderPlacedUserSubject =  `Your Dental Interface 360.com {{orderNumber}}`;
export const secondHandOrderPlacedUserBody = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>ORDER-PLACED-USER</title>
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
        }

        @media screen and (min-width: 320px) and (max-width: 767px) {
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
                    <div style="
            margin: 15px auto 0 auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 500; 
                font-family: 'Roboto' !important;
            ">Thank you for your order!</h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="   margin-top: 20px;">
                    <div style="width: 100%">
                        <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 0;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi&nbsp;<%= customer_name %></p>
                        <p class="pr_0" style="    padding: 0 50px 0 0;
     margin: 10px 0 15px 0;
     font-size: 17px;
     letter-spacing: 0;
     font-weight: 400;   font-family: 'Roboto' !important;         
color: #232323;">We received your order with order id - <%= order_id %>.
                        </p>
                        <p class="pr_0" style="    padding: 0 50px 0 0;
            margin: 10px 0 15px 0;
            font-size: 17px;
            letter-spacing: 0; 
    line-height: 28px !important;
            font-weight: 400;   font-family: 'Roboto' !important;         
    color: #232323;">Thanks for choosing DI 360 for your dental equipment needs. <br>We will keep you updated on your
                            product status.
                        </p>
                        <p class="pr_0" style="    padding: 0 50px 0 0;
                        margin: 10px 0 15px 0;
                        font-size: 17px;
                        letter-spacing: 0;
                        font-weight: 400;   font-family: 'Roboto' !important;         
                color: #232323;">You can check on order status by clicking on
                            <a href="https://dentalinterface360.com" target="_blank"
                                style="  font: 16px/ 24px Roboto !important;  color: #F87128;">dentalinterface360.com
                            </a></p>
                    </div>
                    <!-- Order Details -->
                    <div class="table_head" style="    background: #F9F9F9;
                height: 60px;
                line-height: 60px; 
                padding: 0 15px;    margin: 0 0 20px 0;">
                        <h2 style="
                        font-size: 20px;
        color: #333333;
        margin: 0;
        font-weight: 500;
        font-family: 'Roboto' !important;">Order summary</h2>
                    </div>
                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered date : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_date %></span></label>
                        </div>
                    </div>
                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered ID : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_id %></span></label>
                        </div>
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
            border-right: 1px solid #dee2e6;" data-label="User Name">name</td> -->
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
                     padding-right: 5px;">1</p>
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

export const secondHandOrderPlacedAdminSubject =  `New Order Received on Dental Interface 360.com {{orderNumber}}`;
export const secondHandOrderPlacedAdminBody = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>ORDER-PLACED-ADMIN</title>
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
        }

        @media screen and (min-width: 320px) and (max-width: 767px) {
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
                    <div style="
            margin: 15px auto 0 auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 500; 
                font-family: 'Roboto' !important;
            ">New Order</h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="   margin-top: 20px;">
                    <div style="width: 100%">
                        <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 0;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi&nbsp;</p>
                        <p class="pr_0" style="    padding: 0 50px 0 0;
     margin: 10px 0 15px 0;
     font-size: 17px;
     letter-spacing: 0;
     font-weight: 400;   font-family: 'Roboto' !important;         
color: #232323;">You have received a new order..
                        </p>
                  
                        <p class="pr_0" style="    padding: 0 50px 0 0;
                        margin: 10px 0 15px 0;
                        font-size: 17px;
                        letter-spacing: 0;
                        font-weight: 400;   font-family: 'Roboto' !important;         
                color: #232323;">Click here to know more
                            <a href="https://dentalinterface360.com" target="_blank"
                                style="  font: 16px/ 24px Roboto !important;  color: #F87128;">dentalinterface360.com
                            </a></p>
                    </div>
                    <!-- Order Details -->
                    <div class="table_head" style="    background: #F9F9F9;
                height: 60px;
                line-height: 60px; 
                padding: 0 15px;    margin: 0 0 20px 0;">
                        <h2 style="
                        font-size: 20px;
        color: #333333;
        margin: 0;
        font-weight: 500;
        font-family: 'Roboto' !important;">Order summary</h2>
                    </div>

                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered date : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_date %></span></label>
                        </div>
                    </div>
                    <div style="height: 100%;">
                        <div style="margin: 5px 0 10px 0;">
                            <label for="" style="     font-size: 15px;
                        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 5px;    display: block;
        color: #333333;">Ordered ID : <span style=" color: #888888;
                        font-weight: 400;
                        letter-spacing: 0;
                        font-size: 15px;
                        margin: 0;"><%= order_id %></span></label>
                        </div>
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
            border-right: 1px solid #dee2e6;" data-label="User Name">name</td> -->
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
                     padding-right: 5px;">1</p>
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

export const bidPaymentSubject =  `Di360- Bid Payment`;
export const bidPaymentBody = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap"
        rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap"
        rel="stylesheet">
    <title>Order Invoice</title>
    <style>
        @font-face {
            font-family: 'Nunito';
            src: url("${appConfig.DOMAIN}/public/Nunito-Regular.ttf") format("truetype");
            font-style: normal;
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
<div style=" display: block; background-color: #fff; width: 70%; z-index: 9999;
margin: 0 auto 0 auto;
border-radius: 4px;
padding: 20px 50px 0px 50px;
transform: translateY(0%);">
            <!-- Top_Logo_Box -->
            <div  style="text-align: center;">
                <div  style="padding: 0 0 0 0;">
                    <img src="${appConfig.DOMAIN}/public/footer_logo.png" alt="logo" >
                </div>
                <div style="border-top: 2px solid #CBCBCB;
            margin: 15px auto;
            border-bottom: 2px solid #CBCBCB;
            padding: 15px 0;">
                    <h2 style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 28px;
                color: #F87128;font-weight: 600;
            ">Thank you for your Bid!</h2>
                </div>
            </div>
            <!-- Oder_Details_Customer_Info -->
            <div style="    display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin: 0;
        padding: 15px 30px;">
                <div style="width: 100%;">
                    <div style="margin: 5px 0 10px 0;">
                        <label for="" style="     font-size: 14px;
                    font-weight: 500;
    letter-spacing: 0;
    text-transform: capitalize;
    margin-bottom: 5px;    display: block;
    color: #333333;">Bidding Date :</label>
                        <p style="    color: #888888;
                    font-weight: 500;
                    letter-spacing: 0;
                    font-size: 14px;">{{biddingDate}}</p>
                    </div>
                    <div style="margin: 5px 0 10px 0;">
                        <label for="" style="        font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0;
                    text-transform: capitalize;
                    margin-bottom: 5px;    display: block;
                    color: #333333;">Name :</label>
                        <p style="    color: #888888;
                    font-weight: 500;
                    letter-spacing: 0;
                    font-size: 14px;">{{customerName}}</p>
                    </div>
                </div>
                <div>
                    <h4 style="font-size: 14px;
                font-weight: 500;
                letter-spacing: 0;
                text-transform: capitalize;
                margin-bottom: 0px;
                display: block;
                color: #333333;">Customer Info :</h4>
                    <p style="    color: #888888;
                font-weight: 500;
                letter-spacing: 0;
                font-size: 14px;
                line-height: 22px;">{{customerName}}</p>
                    <p style="    color: #888888;
                font-weight: 500;
                letter-spacing: 0;
                font-size: 14px;
                line-height: 22px;">{{customerEmail}}</p>
                    <p style="    color: #888888;
                font-weight: 500;
                letter-spacing: 0;
                font-size: 14px;
                line-height: 22px;">{{customerPhone}}</p>
                </div>
            </div>
            <!-- Order Details -->
            <div style="    background: #F9F9F9;
        height: 60px;
        line-height: 60px;
        padding: 0 15px;    margin: 0 0 20px 0;">
                <h2 style="    font-size: 20px;
            color: #333333;">Bid Details</h2>
            </div>
            <!-- INVOICE-TABLE -->
            <div>
                <table style="    border-radius: 0;
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
                            font-weight: 600;
                            padding: 10px 10px 10px 10px;
                            font-size: 13px;">S.no</th>
                            <th style="border-bottom: 1px solid #dee2e6;
                              border-right: 1px solid #dee2e6;
                              color: #333333;
                              text-align: center;
                              font-weight: 600;
                              padding: 10px 10px 10px 10px;
                              font-size: 13px;">Image</th>
                            <th style="border-bottom: 1px solid #dee2e6;
                            border-right: 1px solid #dee2e6;
                            color: #333333;
                            text-align: left;
                            font-weight: 600;
                            padding: 10px 10px 10px 10px;
                            font-size: 13px;">Title</th>
                            <th style="border-bottom: 1px solid #dee2e6;
                            border-right: 1px solid #dee2e6;
                            color: #333333;
                            text-align: center;
                            font-weight: 600;
                            padding: 10px 10px 10px 10px;
                            font-size: 13px;">Quantity</th>
                            <th style="border-bottom: 1px solid #dee2e6;
                            border-right: 1px solid #dee2e6;
                            color: #333333;
                            text-align: center;
                            font-weight: 600;
                            padding: 10px 10px 10px 10px;
                            font-size: 13px;">Bid Price</th>
                            <th style="border-bottom: 1px solid #dee2e6;
                            color: #333333;
                            text-align: center;
                            font-weight: 600;
                            padding: 10px 10px 10px 10px;
                            font-size: 13px;">Total</th>
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
    font-weight: 500;
    color: #888888;
    border-right: 1px solid #dee2e6;">1</td>
                            <td style="  border-left: 0;
    border-bottom: 0;
    border-top: 0;
    padding: 10px 10px 10px 10px;text-align: center;
font-size: 14px;
font-weight: 500;
color: #888888;
border-right: 1px solid #dee2e6;">
                                <img src="{{productImage}}" alt="" style="    width: 50px;
 height: 50px;"> </td>
                            <td style="  border-left: 0;
            border-bottom: 0;
            border-top: 0;
            padding: 10px 10px 10px 10px;max-width: 225px;min-width: 225px;    text-align: left;
    font-size: 14px;
    font-weight: 500;
    color: #888888;
    border-right: 1px solid #dee2e6;">{{itemName}}</td>
                            <td style="  border-left: 0;
            border-bottom: 0;
            border-top: 0;
            padding: 10px 10px 10px 10px;    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #888888;
    border-right: 1px solid #dee2e6;">1</td>
                            <td style="  border-left: 0;
            border-bottom: 0;
            border-top: 0;
            padding: 10px 10px 10px 10px;    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #888888;
    border-right: 1px solid #dee2e6;">AUD {{price}}</td>
                            <td style="  border-left: 0;
            border-bottom: 0;
            border-top: 0;
            padding: 10px 10px 10px 10px;    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #888888;">AUD {{price}}</td>
                        </tr>
                    </tbody>
                </table>
                <div style="border: 1px solid #dee2e6;
            border-top: 0;">
                    <div style="    display: flex;
                align-items: center;
                justify-content: space-between; padding: 8px 25px 8px 85px">
                        <h4 style="
                    font-size: 16px;
                    color: #000;
                    font-weight: 700;
                    letter-spacing: 0.2px;text-transform: uppercase;
                ">Total AUD</h4>
                        <p style="
                    color: #F87128;
                    font-size: 16px;
                    font-weight: 700;    width: 150px;
    text-align: right;
                ">AUD {{price}}</p>
                    </div>
                </div>
            </div>
            <div style="text-align: center;padding: 15px;">
                <h4 style="margin: 0 0 5px 0;
            ">
                    <span style=" padding-right: 5px;">Payment :</span>
                    <span style="    color: #21262c;
            font-weight: 700;
            letter-spacing: 0;
            font-size: 16px;
            line-height: 22px;">Please click on the link below proceed to pay</span></h4>
                <div>
                    <a style="
                    color: #fff;
                    font-weight: 600;
                    text-transform: capitalize;
                    text-decoration: none;
                    border: 1px solid #F87128;
                    font-size: 18px;
                    padding: 5px 10px;
                    margin: 10px 0 0 0;
                    display: inline-block;
                    border-radius: 4px;
                    background-color: #F87128;
                " href="https://dental-360-front.web.app/checkout/second-hand-payment/{{productId}}" target="_blank">Proceed Payment</a>
                </div>
            </div>
            <!-- Vendor Details Payment-tye -->
            <div style="display: flex;
       align-items: flex-start;
       justify-content: space-between;padding-bottom: 15px;">
                <div>
                    <h4 style="margin: 0 0 5px 0;
                ">Vendor Details</h4>
                    <p style="    color: #888888;
                font-weight: 500;
                letter-spacing: 0;
                font-size: 15px;
                line-height: 22px;    margin-bottom: 4px;">{{businessName}}</p>
                    <p style="    color: #888888;
                font-weight: 500;
                letter-spacing: 0;
                font-size: 15px;
                line-height: 22px;    margin-bottom: 4px;">{{businessPhone}}</p>
                    <p style="    color: #888888;
                font-weight: 500;
                letter-spacing: 0;
                font-size: 15px;
                line-height: 22px;    margin-bottom: 4px;">{{businessEmail}}</p>
                </div>
            </div>
            <!-- Thank you! -->
            <div style="    text-align: center;
        border-top: 1px solid #ccc;
        padding: 15px 0 15px 0;">
                <h2 style="margin: 0px 0 0px 0;
            padding: 0;
            font-size: 30px;
            color: #F87128;font-weight: 600;
">Thank you!</h2>
            </div>
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
</body>
</html>
`;

export const forgotPasswordSubject =  `Reset Password`;
export const forgotPasswordBody = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>FORGOT PASSWORD</title>
 
    <style type="text/css">
		p{
		        line-height: 24px !important;
		    }
		        @media  screen and (max-width: 767px) {
                    .pr-0{
                   padding-right: 0 !important;
               }
		            .main_box {
		                padding: 20px 0px 0px 0px !important;
		                width: auto !important;
		                margin: 0 15px 0 15px !important;
		            }
		            .title{
		                font-size: 20px !important;
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
            <div class="main_box" style=" display: block; background-color: #fff; width: 70%; z-index: 9999;
    margin: 0 auto 0 auto;
border-radius: 4px;
padding: 20px 50px 0px 50px;
transform: translateY(0%);">
                <!-- Top_Logo_Box -->
                <div style="text-align: center;">
                    <div style="padding: 0 0 0 0;">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="logo">
                    </div>
                    <div style="
            margin: 15px auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 600; 
                font-family: 'Roboto' !important;
            ">Forgot Password</h2>
                    </div>
                </div>
                <div>
                    <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 5%;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi,</p>
                    <p class="pr-0" style="    padding: 0 50px 0 5%;
            margin: 10px 0 0px 0;
            font-size: 17px;
            letter-spacing: 0;
            font-weight: 400;   font-family: 'Roboto' !important;         
    color: #232323;">Click on this link to reset your password</p>
                    
                    <a href="${appConfig.DOMAIN}/api/v1/auth/reset-template/{{requestId}}/{{type}}"
                     target="_blank" type="button" style=" margin: 15px 0 0px 5%;
                background-color: #EF6A30;
                height: 38px;
                line-height: 38px;
                font: 16px/ 40px Roboto !important;
                border: 1px solid #EF6A30;
                border-radius: 8px;
                color: #fff;
                padding-left: 30px;
                padding-right: 30px;
                cursor: pointer;
                font-size: 16px;
                font-family: 'Roboto' !important;text-decoration: none;
    display: inline-block;">Reset password</a>
    <p style="    padding: 0 50px 0 5%;
    margin: 5px 0 6px 0;
    font-size: 11px;
    letter-spacing: 0;
    font-weight: 600;
    font-family: 'Roboto' !important;
    color: #232323;">(This link will expire in 30 minutes)</p>
                </div>
                <div style="    margin: 15px 0 30px 0;">
                    <h4 style="    padding: 0 0 0 5%;
                font-size: 18px;
                font-weight: 600;
                margin: 25px 0 5px 0;font-family: 'Roboto' !important;
                color: #121212;">Regards,</h4>
                    <h4 style="    padding: 0 0 0 5%;
        font-size: 18px;
        font-weight: 600;font-family: 'Roboto' !important;
        margin: 0px 0 0 0; color: #121212;">Team DI360</h4>
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
                    <div style="cursor: pointer;
                margin-top: 20px;
                padding-bottom: 30px;    text-align: center;
            ">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="" style="width: 30%">
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
export const verifyOTPSubject =  `OTP Verfication`;
export const verifyOTPBody = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>VERIFY-OTP</title>
    <style type="text/css">
        p {
            line-height: 24px !important;
        }

        @media screen and (max-width: 767px) {
            .pr_0 {
                padding-right: 0 !important;
            }
            .pl_25 {
                padding-left: 25px !important;
            }           

            .title {
                font-size: 20px !important;
            }
            .table_responsive {
                border: 1px solid #ddd !important;
            }
            .order_flex_box{
                padding: 0px 0px !important;
            }
            .vendor_box{
                margin: 15px 10px 0 10px;
                padding: 0px 0px;
            }
        }

        @media screen and (max-width: 991px) {
            .table_responsive {
                overflow-x: auto !important;
            }
            .main_box {
                padding: 20px 10px 0px 10px !important;
                width: auto !important;
                margin: 0 15px 0 15px !important;
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
            <div class="main_box" style=" display: block; background-color: #fff; width: 70%; z-index: 9999;
    margin: 0 auto 0 auto;
border-radius: 4px;
padding: 20px 50px 0px 50px;
transform: translateY(0%);">
                <!-- Top_Logo_Box -->
                <div style="text-align: center;">
                    <div style="padding: 0 0 0 0;">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="logo">
                    </div>
                    <div style="
            margin: 15px auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 600; 
                font-family: 'Roboto' !important;
            ">Title</h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div>
                    <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 5%;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi,</p>
                    <p class="pr_0" style="    padding: 0 50px 0 5%;
            margin: 10px 0 15px 0;
            font-size: 17px;
            letter-spacing: 0;
            font-weight: 400;   font-family: 'Roboto' !important;         
    color: #232323;">You are trying to edit your mobile number/bank details. </p>
                    <p class="pr_0" style="    padding: 0 50px 0 5%;
    margin: 0 0 6px 0;
    font-size: 17px;
    letter-spacing: 0;
    font-weight: 400; font-family: 'Roboto' !important;
color: #232323;">This your OTP - <span style="font-size: 20px;font-family: 'Roboto' !important;">{{OTP}}</span></p>
<p style="    padding: 0 50px 0 5%;
margin: 5px 0 6px 0;
font-size: 11px;
letter-spacing: 0;
font-weight: 600;
font-family: 'Roboto' !important;
color: #232323;">(This OTP will expire in 30 minutes)</p>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="    margin: 15px 0 30px 0;">
                    <h4 style="    padding: 0 0 0 5%;
                font-size: 18px;
                font-weight: 600;
                margin: 25px 0 5px 0;font-family: 'Roboto' !important;
                color: #121212;">Regards,</h4>
                    <h4 style="    padding: 0 0 0 5%;
        font-size: 18px;
        font-weight: 600;font-family: 'Roboto' !important;
        margin: 0px 0 0 0; color: #121212;">Team DI360</h4>
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
                    <div style="cursor: pointer;
                margin-top: 20px;
                padding-bottom: 30px;    text-align: center;
            ">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="" style="width: 30%">
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


export const appointmentAdminSubject =  `Di360- Bid Payment`;
export const appointmentAdminBody = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>Appointment Booking Team</title>
    <style type="text/css">
     p{
        line-height: 24px !important;
    }
        @media screen and (max-width: 991px) {
            .appointment_table {
                width: auto !important;
                margin-left: 15px !important;
                margin-right: 15px !important;
            }
        }
        @media screen and (max-width: 767px) {

            .main_box {
                padding: 20px 0px 0px 0px !important;
                width: auto !important;
                margin: 0 15px 0 15px !important;
            }
            .title {
                font-size: 20px !important;
            }

           
            .pr-0{
                padding-right: 0 !important;
            }
            .pl-5 {
                padding-left: 5px !important;
            }
            label {
                font-size: 15px !important;
                width: 140px !important;
            }
            .pl-5 p {
                font-size: 15px !important;
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
            <div class="main_box" style=" display: block; background-color: #fff; width: 70%; z-index: 9999;
    margin: 0 auto 0 auto;
border-radius: 4px;
padding: 20px 50px 0px 50px;
transform: translateY(0%);">
                <!-- Top_Logo_Box -->
                <div style="text-align: center;">
                    <div style="padding: 0 0 0 0;">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="logo">
                    </div>
                    <div style="
            margin: 15px auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 600; 
                font-family: 'Roboto' !important;
            ">New Appointment Booked</h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div>
                    <p  style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 5%;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi,</p>
                    <p  class="pr-0" style="    padding: 0 50px 0 5%;
            margin: 10px 0 15px 0;
            font-size: 17px;
            letter-spacing: 0;
            font-weight: 400;   font-family: 'Roboto' !important;         
    color: #232323;">You received a new request for an appointment.</p>
                    <p style="    padding: 0 50px 0 5%;
 margin: 0 0 6px 0;
 font-size: 17px;
 letter-spacing: 0;
 font-weight: 400; font-family: 'Roboto' !important;
color: #232323;">These are the details</p>
                    <div class="appointment_table" style="    width: 65%;
border: 1px solid #ccc;
margin-left: 5%;
margin-top: 20px;
border-radius: 4px;">
                        <div class="pl-5" style="margin: 10px 0 10px 0;
    padding: 5px 0px 5px 25px;
    border-bottom: 1px solid #ccc;display: flex;
    align-items: center;">
                            <label for="" style="     font-size: 17px;
font-weight: 400;
letter-spacing: 0;
width: 170px;
color: #333333;">Name <span class="dots" style="float: right;
    display: inline-block;
    padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
font-weight: 400;
letter-spacing: 0;
font-size: 17px;
margin: 0;">{{name}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
    padding: 5px 0px 5px 25px;
    border-bottom: 1px solid #ccc;display: flex;
    align-items: center;">
                            <label for="" style="     font-size: 17px;
font-weight: 400;
letter-spacing: 0;
width: 170px;
color: #333333;">Phone <span class="dots" style="float: right;
    display: inline-block;
    padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
font-weight: 400;
letter-spacing: 0;
font-size: 17px;
margin: 0;">{{phone}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
    padding: 5px 0px 5px 25px;
    border-bottom: 1px solid #ccc;display: flex;
    align-items: center;">
                            <label for="" style="     font-size: 17px;
font-weight: 400;
letter-spacing: 0;
width: 170px;
color: #333333;">Email <span class="dots" style="float: right;
    display: inline-block;
    padding-right: 15px;">:</span></label>
                            <p style=" color: #333333;
font-weight: 400;
letter-spacing: 0;
font-size: 17px;
margin: 0;">{{email}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
    padding: 5px 0px 5px 25px;
    border-bottom: 1px solid #ccc;display: flex;
    align-items: center;">
                            <label for="" style="     font-size: 17px;
font-weight: 400;
letter-spacing: 0;
width: 170px;
color: #333333;">Date <span class="dots" style="float: right;
    display: inline-block;
    padding-right: 15px;">:</span></label>
                            <p style=" color: #333333;
font-weight: 400;
letter-spacing: 0;
font-size: 17px;
margin: 0;">{{appointmentDate}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
    padding: 5px 0px 5px 25px;
    border-bottom: 1px solid #ccc;display: flex;
    align-items: center;">
                            <label for="" style="     font-size: 17px;
font-weight: 400;
letter-spacing: 0;
width: 170px;
color: #333333;">Service Required <span class="dots" style="float: right;
    display: inline-block;
    padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
font-weight: 400;
letter-spacing: 0;
font-size: 17px;
margin: 0;">{{service}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
    padding: 5px 0px 0px 25px;display: flex;
    align-items: center;">
                            <label for="" style="     font-size: 17px;
font-weight: 400;
letter-spacing: 0;
width: 170px;
color: #333333;">Slot <span class="dots" style="float: right;
    display: inline-block;
    padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
font-weight: 400;
letter-spacing: 0;
font-size: 17px;
margin: 0;">{{appointmentTime}}</p>
                        </div>
                    </div>
                    <p class="pr-0" style="    padding:20px 50px 0 5%;
                    margin: 10px 0 15px 0;
                    font-size: 17px;
                    letter-spacing: 0;
                    font-weight: 400;   font-family: 'Roboto' !important;         
            color: #232323;">Click here to know more
                        <a href="https://dentalinterface360.com" target="_blank"
                            style="color: #F87128;font: 16px/ 24px Roboto !important;">dentalinterface360.com </a></p>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="    margin: 15px 0 30px 0;">
                    <h4 style="    padding: 0 0 0 5%;
                font-size: 18px;
                font-weight: 600;
                margin: 25px 0 5px 0;font-family: 'Roboto' !important;
                color: #121212;">Regards,</h4>
                    <h4 style="    padding: 0 0 0 5%;
        font-size: 18px;
        font-weight: 600;font-family: 'Roboto' !important;
        margin: 0px 0 0 0; color: #121212;">Team DI360</h4>
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
                    <div style="cursor: pointer;
                margin-top: 20px;
                padding-bottom: 30px;    text-align: center;
            ">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="" style="width: 30%">
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

export const appointmentUserSubject =  `Reset Password`;
export const appointmentUserBody = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>Appointment Booking User</title>
    <style type="text/css">
        p {
            line-height: 24px !important;
        }

        @media screen and (max-width: 991px) {
            .appointment_table {
                width: auto !important;
                margin-left: 15px !important;
                margin-right: 15px !important;
            }
        }

        @media screen and (max-width: 767px) {
            .main_box {
                padding: 20px 0px 0px 0px !important;
                width: auto !important;
                margin: 0 15px 0 15px !important;
            }

            .title {
                font-size: 20px !important;
            }

            .pr-0 {
                padding-right: 0 !important;
            }

            .pl-5 {
                padding-left: 5px !important;
            }

            label {
                font-size: 15px !important;
                width: 140px !important;
            }

            .pl-5 p {
                font-size: 15px !important;
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
            <div class="main_box" style=" display: block; background-color: #fff; width: 70%; z-index: 9999;
    margin: 0 auto 0 auto;
border-radius: 4px;
padding: 20px 50px 0px 50px;
transform: translateY(0%);">
                <!-- Top_Logo_Box -->
                <div style="text-align: center;">
                    <div style="padding: 0 0 0 0;">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="logo">
                    </div>
                    <div style="
            margin: 15px auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 600; 
                font-family: 'Roboto' !important;
            ">Title</h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div>
                    <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 5%;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi,</p>
                    <p class="pr-0" style="    padding: 0 50px 0 5%;
                margin: 10px 0 15px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;   font-family: 'Roboto' !important;         
        color: #232323;">Thanks for using DI 360 Directories.</p>
                    <p class="pr-0" style="    padding: 0 50px 0 5%;
        margin: 10px 0 15px 0;
        font-size: 17px;
        letter-spacing: 0;
        font-weight: 400;   font-family: 'Roboto' !important; line-height: 24px;     
    color: #232323;">Your request for an appointment with {{businessName}} has been received and successfully sent to
                        {{businessName}}. </p>
                    <p class="pr-0" style="    padding: 0 50px 0 5%;
                  margin: 10px 0 15px 0;
                  font-size: 17px;
                  letter-spacing: 0;
                  font-weight: 400;   font-family: 'Roboto' !important;         
          color: #232323;">You will be notified of the status of your appointment.</p>
                    <p class="pr-0" style="    padding: 0 50px 0 5%;
          margin: 10px 0 15px 0;
          font-size: 17px;
          letter-spacing: 0;
          font-weight: 400;   font-family: 'Roboto' !important;         
  color: #232323;">You provided the following details :</p>
                    <p style="    padding: 0 50px 0 5%;
 margin: 0 0 6px 0;
 font-size: 17px;
 letter-spacing: 0;
 font-weight: 400; font-family: 'Roboto' !important;
color: #232323;">These are the details</p>

                    <div class="appointment_table" style="    width: 65%;
        border: 1px solid #ccc;
        margin-left: 5%;
        margin-top: 20px;
        border-radius: 4px;">
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 5px 25px;
            border-bottom: 1px solid #ccc;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Name <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{name}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 5px 25px;
            border-bottom: 1px solid #ccc;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Phone <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{phone}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 5px 25px;
            border-bottom: 1px solid #ccc;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Email <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span></label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{email}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 5px 25px;
            border-bottom: 1px solid #ccc;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Date <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span></label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{appointmentDate}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 5px 25px;
            border-bottom: 1px solid #ccc;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Service Required <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{service}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 0px 25px;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Slot <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{appointmentTime}}</p>
                        </div>
                    </div>
                    <p class="pr-0" style="    padding:20px 50px 0 5%;
                    margin: 10px 0 15px 0;
                    font-size: 17px;
                    letter-spacing: 0;
                    font-weight: 400;   font-family: 'Roboto' !important;         
            color: #232323;">If this request was not raised by you then, please contact us
                        <a href="https://dentalinterface360.com" target="_blank"
                            style="color: #F87128;font: 16px/ 24px Roboto !important;">support@dentalinterface360.com</a>
                    </p>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="    margin: 15px 0 30px 0;">
                    <h4 style="    padding: 0 0 0 5%;
                font-size: 18px;
                font-weight: 600;
                margin: 25px 0 5px 0;font-family: 'Roboto' !important;
                color: #121212;">Regards,</h4>
                    <h4 style="    padding: 0 0 0 5%;
        font-size: 18px;
        font-weight: 600;font-family: 'Roboto' !important;
        margin: 0px 0 0 0; color: #121212;">Team DI360</h4>
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
                    <div style="cursor: pointer;
                margin-top: 20px;
                padding-bottom: 30px;    text-align: center;
            ">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="" style="width: 30%">
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

export const appointmentConfirmSubject =  `OTP Verfication`;
export const appointmentConfirmBody =`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${appConfig.DOMAIN}/public/font.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <title>Appointment Booking User</title>
    <style type="text/css">
        p {
            line-height: 24px !important;
        }

        @media screen and (max-width: 991px) {
            .appointment_table {
                width: auto !important;
                margin-left: 15px !important;
                margin-right: 15px !important;
            }
        }

        @media screen and (max-width: 767px) {
            .main_box {
                padding: 20px 0px 0px 0px !important;
                width: auto !important;
                margin: 0 15px 0 15px !important;
            }

            .title {
                font-size: 20px !important;
            }

            .pr-0 {
                padding-right: 0 !important;
            }

            .pl-5 {
                padding-left: 5px !important;
            }

            label {
                font-size: 15px !important;
                width: 140px !important;
            }

            .pl-5 p {
                font-size: 15px !important;
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
            <div class="main_box" style=" display: block; background-color: #fff; width: 70%; z-index: 9999;
    margin: 0 auto 0 auto;
border-radius: 4px;
padding: 20px 50px 0px 50px;
transform: translateY(0%);">
                <!-- Top_Logo_Box -->
                <div style="text-align: center;">
                    <div style="padding: 0 0 0 0;">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="logo">
                    </div>
                    <div style="
            margin: 15px auto;
            border-top: 1px solid #CBCBCB;
            padding: 15px 0 0px 0; font-family: 'Roboto' !important;
">
                        <h2 class="title" style="
                margin: 0px 0 5px 0;
                padding: 0;
                font-size: 24px;
                color: #F87128;font-weight: 600; 
                font-family: 'Roboto' !important;
            ">Title</h2>
                    </div>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div>
                    <p style="    padding: 0;
                margin: 0 0 6px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;
                padding-left: 5%;
        color: #232323; font-family: 'Roboto' !important;
    ">Hi,</p>
                    <p class="pr-0" style="    padding: 0 50px 0 5%;
                margin: 10px 0 15px 0;
                font-size: 17px;
                letter-spacing: 0;
                font-weight: 400;   font-family: 'Roboto' !important;         
        color: #232323;">Thanks for using DI 360 Directories.</p>
                    <p class="pr-0" style="    padding: 0 50px 0 5%;
        margin: 10px 0 15px 0;
        font-size: 17px;
        letter-spacing: 0;
        font-weight: 400;   font-family: 'Roboto' !important; line-height: 24px;     
    color: #232323;">Your request for an appointment with {{businessName}} has been received and successfully sent to
                        {{businessName}}. </p>
                    <p class="pr-0" style="    padding: 0 50px 0 5%;
                  margin: 10px 0 15px 0;
                  font-size: 17px;
                  letter-spacing: 0;
                  font-weight: 400;   font-family: 'Roboto' !important;         
          color: #232323;">You will be notified of the status of your appointment.</p>
                    <p class="pr-0" style="    padding: 0 50px 0 5%;
          margin: 10px 0 15px 0;
          font-size: 17px;
          letter-spacing: 0;
          font-weight: 400;   font-family: 'Roboto' !important;         
  color: #232323;">You provided the following details :</p>
                    <p style="    padding: 0 50px 0 5%;
 margin: 0 0 6px 0;
 font-size: 17px;
 letter-spacing: 0;
 font-weight: 400; font-family: 'Roboto' !important;
color: #232323;">These are the details</p>

                    <div class="appointment_table" style="    width: 65%;
        border: 1px solid #ccc;
        margin-left: 5%;
        margin-top: 20px;
        border-radius: 4px;">
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 5px 25px;
            border-bottom: 1px solid #ccc;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Name <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{name}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 5px 25px;
            border-bottom: 1px solid #ccc;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Phone <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{phone}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 5px 25px;
            border-bottom: 1px solid #ccc;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Email <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span></label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{email}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 5px 25px;
            border-bottom: 1px solid #ccc;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Date <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span></label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{appointmentDate}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 5px 25px;
            border-bottom: 1px solid #ccc;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Service Required <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{service}}</p>
                        </div>
                        <div class="pl-5" style="margin: 10px 0 10px 0;
            padding: 5px 0px 0px 25px;display: flex;
            align-items: center;">
                            <label for="" style="     font-size: 17px;
        font-weight: 400;
        letter-spacing: 0;
        width: 170px;
        color: #333333;">Slot <span class="dots" style="float: right;
            display: inline-block;
            padding-right: 15px;">:</span> </label>
                            <p style=" color: #333333;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 17px;
        margin: 0;">{{appointmentTime}}</p>
                        </div>
                    </div>
                    <p class="pr-0" style="    padding:20px 50px 0 5%;
                    margin: 10px 0 15px 0;
                    font-size: 17px;
                    letter-spacing: 0;
                    font-weight: 400;   font-family: 'Roboto' !important;         
            color: #232323;">If this request was not raised by you then, please contact us
                        <a href="https://dentalinterface360.com" target="_blank"
                            style="color: #F87128;font: 16px/ 24px Roboto !important;">support@dentalinterface360.com</a>
                    </p>
                </div>
                <!-- MAIN-TEMPLATE-BODY -->
                <div style="    margin: 15px 0 30px 0;">
                    <h4 style="    padding: 0 0 0 5%;
                font-size: 18px;
                font-weight: 600;
                margin: 25px 0 5px 0;font-family: 'Roboto' !important;
                color: #121212;">Regards,</h4>
                    <h4 style="    padding: 0 0 0 5%;
        font-size: 18px;
        font-weight: 600;font-family: 'Roboto' !important;
        margin: 0px 0 0 0; color: #121212;">Team DI360</h4>
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
                    <div style="cursor: pointer;
                margin-top: 20px;
                padding-bottom: 30px;    text-align: center;
            ">
                        <img src="${appConfig.DOMAIN}/public/logo.png" alt="" style="width: 30%">
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
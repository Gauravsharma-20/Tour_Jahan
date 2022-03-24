import * as React from 'react';
import { Alert } from 'react-native';
import {Button} from 'react-native-elements';
import RazorpayCheckout from 'react-native-razorpay';

/**
 * @props amount: number
 * @props user_name: string
 * @props email: string
 * @props contact: string
 * pass amount, user_name, email, contact of buyer to this component as props
 * 
 */

const validateEnteries = (amount, user_name, email, contact) => {
    
   
    if(amount=='' || user_name=='' || email=='' || contact==''){
        return false;
    }
    console.log(1);
    if(isNaN(amount) || amount<0){
        return false;
    }
    console.log(2);
    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) === false){
        return false;
    }
    console.log(3);
    // if(/^\d{10}$/.test(contact) === false){
    //     return false;
    // }

    return true;

}

/**
 * @param 
 * @returns {success: boolean, payment_details:object, error: string}
 */
export const _onPaymentPress = async(amount, user_name, email, contact ) => {
    if(!validateEnteries(amount, user_name, email, contact)){
        return {success:false, payment_details:null, error: "Enter valid name, email, contact and amount"};
    }
    
    var options = {
        description:"Payment of entry ticket",
        image: "https://drive.google.com/file/d/1ssRCWEiBHhKKQz-Vadbq_icC7MJjYJ6W/view?usp=sharing",
        currency: "INR",
        key: "rzp_test_9Y83fIP7097Cjq",
        amount: amount,
        name: "Tour Jahan",
        prefill: {
            email: email,
            contact: contact,
            name: user_name
        },
        theme: {
            color: "#F37254"
        }
    }
    RazorpayCheckout.open(options).then((data) => {
        // handle success
        console.log(data);
        // Alert(`Success: ${data.razorpay_payment_id}`);
        const result = {
            success: true,
            payment_details:{
                payment_id: data.razorpay_payment_id,
                order_id: data.razorpay_order_id,
                signature: data.razorpay_signature
            },
            error: null
        }
        console.log(result);
        return result;
      }).catch((error) => {
        // handle failure
        console.log(error);
        // Alert(`Error: ${error.code} | ${error.description}`);
        const result = {
            success: false,
            payment_details: null,
            error: e.description
        }
        console.log(result);
        return result;
        
      });
}

export const verifySignature = (payment_details) => {
    const key_secret = "4UkFhWvpv4rbfTrwfLA7mGCL";
    const generated_signature = hmac_sha256(payment_details.order_id + "|" + payment_details.payment_id, key_secret);
    if(generated_signature === payment_details.signature){
        return true;
    }
    return false;

}


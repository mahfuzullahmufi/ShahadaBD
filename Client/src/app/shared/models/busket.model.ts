import {v4 as uuidv4} from 'uuid';

export interface IBusket {
    id: string;
    items: IBusketItem[];
    clientSecret?: string;
    paymentIntentId?: string;
    deliveryMethodId?: number;
    shippingPrice?: number;
}

export interface IBusketItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export class Busket implements IBusket {
    id = uuidv4();
    items: IBusketItem[] = [];
}

export interface IBusketTotals {
    shipping: number;
    subtotal: number;
    total: number;
}
import { IOrder } from "./IOrder";
import { IOrderResult } from "./IOrderResult";
import { IProduct } from "./IProduct";

export interface ICatalogAPI {
    getProducts(): Promise<IProduct[]>;
    getProductById(id: string): Promise<IProduct>;
    order(order: IOrder): Promise<IOrderResult>
} 
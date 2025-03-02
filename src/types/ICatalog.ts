import { ICatalogAPI } from "./ICatalogApi";
import { IProduct } from "./IProduct";

export interface ICatalog {
    api: ICatalogAPI,
    items: IProduct[],
    load(): void
}
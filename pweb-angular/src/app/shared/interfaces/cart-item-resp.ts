import { ProductResponse } from "./product-response";

export interface CartItemResp {
  product: ProductResponse;
  quantidade: number,
  valorTotal: number
}

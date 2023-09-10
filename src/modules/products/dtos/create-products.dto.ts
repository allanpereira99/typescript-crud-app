export interface CreateProductDto {
    name: string;
    description: string;
    price: string;
  }
  export interface Product extends CreateProductDto {
    id: number;
  }
  
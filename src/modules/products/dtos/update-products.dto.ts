export interface UpdateProductDto {
  name?: string;
  description?: string;
  price?: string;
}
export interface UpdateProduct extends UpdateProductDto {
  id: number;
}

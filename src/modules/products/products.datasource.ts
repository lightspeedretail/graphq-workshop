import { DataSource } from 'apollo-datasource';
import { v4 as uuid } from 'uuid';
import { HospitalityContext } from '../../types/graphql-utils.types';
import {
  products as initialProducts,
  productCategories as initialProductCategories,
  Product,
  ProductCategory,
} from './products.fixture';

export class ProductsDatasource extends DataSource<HospitalityContext> {
  private products = initialProducts;
  private productCategories = initialProductCategories;

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByName(name: string): Product[] {
    return this.products.filter(
      product => product.name.toLowerCase().indexOf(name.toLowerCase()) >= 0,
    );
  }

  findProduct(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  addProduct(product: Omit<Product, 'id'>): Product {
    const newProduct = { ...product, id: uuid() };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: string, product: Partial<Product>): Product {
    const oldProduct = this.findProduct(id);
    if (!oldProduct) {
      throw new Error(`No product found with id ${id}`);
    }
    const updatedProduct = { ...oldProduct, ...product };
    const index = this.products.findIndex(p => p.id === id);
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  deleteProduct(id: string) {
    const index = this.products.findIndex(p => p.id === id);
    if (index < 0) {
      throw new Error(`No product found with id ${id}`);
    }
    this.products.splice(index, 1);
  }

  getProductCategories(): ProductCategory[] {
    return this.productCategories;
  }

  getProductCategoriesByName(name: string): ProductCategory[] {
    return this.productCategories.filter(
      productCategory => productCategory.name.toLowerCase().indexOf(name.toLowerCase()) >= 0,
    );
  }

  findProductCategory(id: string): ProductCategory | undefined {
    return this.productCategories.find(productCategory => productCategory.id === id);
  }

  addProductCategory(productCategory: Omit<ProductCategory, 'id'>): ProductCategory {
    const newProductCategory = { ...productCategory, id: uuid() };
    this.productCategories.push(newProductCategory);
    return newProductCategory;
  }

  updateProductCategory(id: string, productCategory: Partial<Product>): ProductCategory {
    const oldProductCategory = this.findProductCategory(id);
    if (!oldProductCategory) {
      throw new Error(`No product category found with id ${id}`);
    }
    const updatedProductCategory = { ...oldProductCategory, ...productCategory };
    const index = this.productCategories.findIndex(p => p.id === id);
    this.productCategories[index] = updatedProductCategory;
    return updatedProductCategory;
  }

  deleteProductCategory(id: string) {
    const index = this.productCategories.findIndex(p => p.id === id);
    if (index < 0) {
      throw new Error(`No product category found with id ${id}`);
    }
    this.productCategories.splice(index, 1);
  }
}

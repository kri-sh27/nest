import { Injectable,NotFoundException } from '@nestjs/common';
import { ProductModule } from './product.module';
@Injectable()
export class ProductsService {
    products:ProductModule[]=[];
    insertProduct(title:string,description:string,price:number){
        const prodId=Math.random().toString();
        const newProduct = new ProductModule(prodId, title,description,price);
        this.products.push(newProduct);
        return prodId;

    }
getProducts(){
    return [...this.products];
}

getSingleProduct(prouctId:string){
    const product = this.findProduct(prouctId)[0];
    return {
     ...product
    };
}
updateProduct(productId:string,title:string,desc:string,price:number){
    const [product,index]=this.findProduct(productId);
    const updateProduct= {...product}
    if(title){
        updateProduct.title=title;
    }
    if(desc){
        updateProduct.description=desc;
    }
    if(price){
        updateProduct.price=price;
    }
    this.products[index]=updateProduct;
    
}

private findProduct(id:string):[ProductModule,number]{
    const productIndex = this.products.findIndex(prod=>prod.id==id);
    const product = this.products[productIndex];
    if(!product){
        throw new NotFoundException('counlnt find product');
    }
    return [product,productIndex];
}

deleteProduct(prodId:string){
    const index=this.findProduct(prodId)[1];
    this.products.splice(index,1);
}


}

import { Controller,Post,Body, Get ,Param,Patch,Delete} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productservice:ProductsService){

    }

    @Post()
    addProduct(
        @Body('title ') prodTitle:string, 
        @Body('description') prodDesc:string, 
        @Body('price') prodPrice:number):any{
      const generatedId = this.productservice.insertProduct(prodTitle,prodDesc,prodPrice);
            return {id:generatedId}
    }
    @Get()
    getAllProducts(){
       return this.productservice.getProducts();

    }
    @Get(':id')
    getProduct(@Param('id') prodId:string){
        return this.productservice.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId:string,@Body('title') prodTitle:string,@Body('description') prodDesc:string, @Body('price') prodPrice:number){
        this.productservice.updateProduct(prodId,prodTitle,prodDesc,prodPrice);
        return null;
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId:string){
        this.productservice.deleteProduct(prodId);
        return null;
    }

}

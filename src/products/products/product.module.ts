import { Module } from '@nestjs/common';
import { ProductsModule } from './products.module';

@Module({
  imports: [ProductsModule]
})
export class ProductModule {

    constructor(
        public id: string, 
        public title: string, 
        public description: string, 
        public price: number) {};
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getAllCategories() {
        return [
            'Electronics',
            'Books',
            'Clothing',
        ];
    }
}

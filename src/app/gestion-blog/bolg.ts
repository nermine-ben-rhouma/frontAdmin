export class Blog {
    id?: number;
    title: string;
    description: string;
    price: number;
    urlImage: any
  
    constructor() {
      this.title = '';
      this.description = '';
      this.price = 0;
      this.urlImage = '';
    }
  }
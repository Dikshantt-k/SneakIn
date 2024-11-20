export class User {

    constructor(
        public name:string,
        public userName:string,
        public email:string,
        public password:string,
        public cartItem:(any|any)[][],
        public item: { [productId: string]:{size: any }[]}={} ,
        public id?:any

    ){}
}

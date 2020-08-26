export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public state: string,
        public postalCode : string,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ) {}
}

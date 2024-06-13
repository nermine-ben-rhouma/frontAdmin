export class Client {
    id?: number;
    username?: string;
    password?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
    tokenValue?: string;
    reservations?: any[]; // Define the proper type if available
    commentaires?: any[]; 
}
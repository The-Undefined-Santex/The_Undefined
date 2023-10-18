export interface Admin {
    id: number;
    dni: number;
    firstName: string;
    lastName: string;
    birth_date: string;
    contactInformationId: number;
    userId: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    ContactInformation: {
        phone_number: string;
        country: string;
        state: string;
        address: string;
        email: string;
    };
    User: {
        UserName: string;
    };
}
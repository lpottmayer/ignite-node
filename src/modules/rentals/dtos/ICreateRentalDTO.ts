// import { Specification } from "../infra/typeorm/entities/Specification";

// interface ICreateCarDTO {
//     id?: string;
//     name: string;
//     description: string;
//     type: string;
//     daily_rate: number;
//     license_plate: string;
//     fine_amount: number;
//     brand: string;
//     category_id: string;
//     specifications?: Specification[];
// }

// export { ICreateCarDTO };

interface ICreateRentalDTO {
    id?: string;
    car_id: string;
    user_id: string;
    start_date?: Date;
    end_date?: Date;
    expected_return_date: Date;
    total?: string;
}

export { ICreateRentalDTO };
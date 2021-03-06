import { getRepository, Repository } from "typeorm";
import { ICreateRentalDTO } from "../../../dtos/ICreateRentalDTO";
import { IRentalsRepository } from "../../../repositories/IRentalsRepository";
import { Rental } from "../entities/Rental";


class RentalsRepository implements IRentalsRepository {

    private repository: Repository<Rental>;

    constructor() {
        this.repository = getRepository(Rental);
    }

    async create(data: ICreateRentalDTO): Promise<Rental> {
        throw new Error("Method not implemented.");
    }

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const rental = await this.repository.find({
            car_id,
            end_date: null
        });

        return rental;
    }

    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        throw new Error("Method not implemented.");
    }

}
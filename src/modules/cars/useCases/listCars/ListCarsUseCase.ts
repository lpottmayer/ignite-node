import { inject, injectable } from "tsyringe";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
    category_id?: string;
    brand?: string;
    name?: string;
}

@injectable()
class ListCarsUseCase {

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute({ category_id, brand, name }: IRequest): Promise<Car[]>{
        const cars = this.carsRepository.list(category_id, brand, name);
        return cars;
    }
}

export { ListCarsUseCase };
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";


interface IRequest{
    name: string;
    description: string;
    type: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}

@injectable()
class CreateCarUseCase {

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute({ name, 
                    description, 
                    type, 
                    daily_rate, 
                    license_plate, 
                    fine_amount, 
                    brand, 
                    category_id }: IRequest): Promise<void> {
        const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate);

        if (carAlreadyExists) {
            throw new AppError("Car already exists");
        }

        this.carsRepository.create({
            name, 
            description, 
            type, 
            daily_rate, 
            license_plate, 
            fine_amount, 
            brand, 
            category_id
        })
    }
}

export { CreateCarUseCase };
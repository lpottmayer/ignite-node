import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";

interface IRequest {
    car_id: string;
    user_id: string;
    expected_return_date: Date;
}

@injectable()
class CreateRentalUseCase {

    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalsRepository
    ) {}

    async execute({ car_id, user_id, expected_return_date }: IRequest): Promise<Rental> {
        const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

        if (carUnavailable){
            throw new AppError("Car is unavailable");
        }

        const rentalOpenTouser = await this.rentalsRepository.findOpenRentalByUser(user_id);

        if (rentalOpenTouser){
            throw new AppError("There's a rental in progress for user");
        }

        const rental = await this.rentalsRepository.create({
            user_id,
            car_id,
            expected_return_date
        });

        return rental;
    }
}

export { CreateRentalUseCase };
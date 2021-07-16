import { getRepository, Repository } from "typeorm";
import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {

    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }
    
    async create({
        id,
        name,
        description,
        type,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
        specifications
    }: ICreateCarDTO): Promise<void> {
        const car = this.repository.create({
            id,
            name,
            description,
            type,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
            specifications
        });

        await this.repository.save(car);
    }

    async list(category_id?: string, brand?:string, name?: string): Promise<Car[]> {
        const carsQuery = await this.repository
            .createQueryBuilder("c")
            .where("available = :available ", { available: true });

        if (brand){
            carsQuery.andWhere("c.brand = :brand", { brand });
        }

        if (name){
            carsQuery.andWhere("c.name = :name", { name });
        }

        if (category_id){
            carsQuery.andWhere("c.category_id = :category_id", { category_id });
        }

        const cars = await carsQuery.getMany();

        return cars;
    }

    async findById(id: string): Promise<Car> {
        const car = await this.repository.findOne(id);
        return car;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({
            license_plate
        });

        return car;
    }

}

export { CarsRepository };
import { SpecificationsRepository } from "../../repositories/implementatios/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationsRepository.getInstance();

const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationRepository);

const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

export { listSpecificationsController };
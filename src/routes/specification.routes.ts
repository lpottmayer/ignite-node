import { Router } from 'express';
import multer from 'multer';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationsController';

const specificationsRoutes = Router();

// const upload = multer({
//     dest: "./tmp"
// });

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

// POST
specificationsRoutes.post("/", createSpecificationController.handle);

// QUERY
specificationsRoutes.get("/", listSpecificationsController.handle);

// GET

// UPDATE

// DELETE

export { specificationsRoutes };
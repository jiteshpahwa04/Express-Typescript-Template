import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { createHotelDto } from "../dtos/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData : createHotelDto) {
    const hotel = await Hotel.create({
        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
        rating: hotelData.rating,
        ratingCount: hotelData.ratingCount
    });

    logger.info(`Hotel created: ${hotel.id}`);

    return hotel;
};

export async function getHotelById(id : number) {
    const hotel = await Hotel.findByPk(id);

    if(!hotel){
        logger.error(`Hotel not found: ${id}`);
        throw new NotFoundError(`Hotel with id ${id} not found`);
    }

    logger.info(`Hotel found: ${id}`);

    return hotel;
}
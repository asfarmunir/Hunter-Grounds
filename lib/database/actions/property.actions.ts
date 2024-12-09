'use server';

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "..";
import Property from "../property.model";
import User from "../user.modal";


export const getAllProperties = async (
  { limit, page, ownerName }: { limit: number; page: number; ownerName?: string }
) => {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;

    // Base query object
    let query: any = {};

    // Add ownerName filter if provided
    if (ownerName && ownerName.trim()) {
      // Find users with matching ownerName
      const matchingOwners = await User.find({
        $or: [
          { firstname: { $regex: new RegExp(ownerName, 'i') } }, // Case-insensitive search on firstname
          { lastname: { $regex: new RegExp(ownerName, 'i') } }, // Case-insensitive search on lastname
        ],
      }).select('_id'); // Retrieve only the ObjectId of matching owners

      // If matching owners are found, add them to the query
      if (matchingOwners.length > 0) {
        query.owner = { $in: matchingOwners.map((owner) => owner._id) };
      } else {
        // If no matching owners are found, return no properties
        return {
          properties: [],
          totalProperties: 0,
          totalPages: 0,
          status: 200,
        };
      }
    }

    // Fetch properties with pagination and filters
    const properties = await Property.find(query)
      .populate({
        path: 'owner',
        select: 'firstname lastname email', // Fields to retrieve from the User model
      })
      .skip(skipAmount)
      .limit(limit)
      .exec();

    // Count total properties for pagination
    const totalProperties = await Property.countDocuments(query).exec();
    const totalPages = Math.ceil(totalProperties / limit);

    return {
      properties,
      totalProperties,
      totalPages,
      status: 200,
    };
  } catch (error) {
    console.error('Error getting all properties:', error);
    return { status: 400, message: 'Error getting all properties' };
  }
};



export const deletePropertyById = async (id:string) => {

  try {
    await connectToDatabase();
    await Property.findByIdAndDelete(id);
    revalidatePath('/grounds')
    return {
      message: "Property Deleted Successfully",
      status: 200
    }
  } catch (error) {
    console.log(error);
    return {
      message:'error deleting property',
      status: 500
    }
  }
}
'use server'
import { startOfMonth, subMonths, endOfMonth } from "date-fns"; 
import { connectToDatabase } from "..";
import User from "../user.modal";
import { AnyKeys } from "mongoose";

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const getAllUsers = async (
  { limit, page, name }: { limit: number; page: number, name?: string }
) => {
  try {
    await connectToDatabase();
    
    // Pagination logic
    const skipAmount = (Number(page) - 1) * limit;
    const query = name
      ? {
          $or: [
            { firstname: { $regex: name, $options: "i" } },
            { lastname: { $regex: name, $options: "i" } },
          ],
        }
      : {};
    
    // Fetch users with pagination
    const users = await User.find(query).skip(skipAmount).limit(limit);
    const totalCount = await User.countDocuments(query);

    if (!users || users.length === 0) {
      throw new Error("No users found");
    }

    return {
      users,
      status: 200,
      totalUsers: totalCount,
      totalPages: Math.ceil(totalCount / limit),
    };
  } catch (error:any) {
    console.error("Error getting all users:", error.message || error);
    return {
      status: 400,
      message: error.message || "Error fetching users",
    };
  }
};

export const getUserDetails = async (id: string) => {
  try {
    await connectToDatabase();
    
    const user = await User.findById(id);
    
    if (!user) {
      throw new Error("User not found");
    }

    return JSON.parse(JSON.stringify({ user, status: 200 }));
  } catch (error:any) {
    console.error("Get user details error:", error.message || error);
    return { 
      status: 500, 
      message: error.message || "Internal Server Error" 
    };
  }
};

export const calculateBookingPaymentStats = async () => {
  try {
    // Ensure database connection
    await connectToDatabase();
    
    // Fetch all users
    const users = await User.find();

    if (!users || users.length === 0) {
      throw new Error("No users found in the database");
    }

    let totalBookingPayments = 0;
    let totalBookingPaymentsLastMonth = 0;
    let totalBookingPaymentsTwoMonths = 0;
    let totalWithdrawableProfit = 0;

    const today = new Date();
    
    // Date ranges for last month and two months ago
    const startOfLastMonth = startOfMonth(subMonths(today, 1));
    const endOfLastMonth = endOfMonth(subMonths(today, 1));

    const startOfTwoMonthsAgo = startOfMonth(subMonths(today, 2));
    const endOfTwoMonthsAgo = endOfMonth(subMonths(today, 2));

    // Loop through each user and calculate stats
    for (const user of users) {
      if (user.bookingPayments && user.bookingPayments.length > 0) {
        // Sum total booking payments for all time
        const allTimeBookingPayments = user.bookingPayments.reduce(
          (sum: number, payment: any) => sum + (payment.amount || 0),
          0
        );
        totalBookingPayments += allTimeBookingPayments;

        // Sum booking payments for the last month
        const lastMonthBookingPayments = user.bookingPayments.reduce(
          (sum: number, payment: any) => {
            const paymentDate = new Date(payment.date);
            if (paymentDate >= startOfLastMonth && paymentDate <= endOfLastMonth) {
              return sum + (payment.amount || 0);
            }
            return sum;
          },
          0
        );
        totalBookingPaymentsLastMonth += lastMonthBookingPayments;

        // Sum booking payments for two months ago
        const twoMonthsBookingPayments = user.bookingPayments.reduce(
          (sum: number, payment: any) => {
            const paymentDate = new Date(payment.date);
            if (paymentDate >= startOfTwoMonthsAgo && paymentDate <= endOfTwoMonthsAgo) {
              return sum + (payment.amount || 0);
            }
            return sum;
          },
          0
        );
        totalBookingPaymentsTwoMonths += twoMonthsBookingPayments;
      }

      // Sum the user's withdrawable profit
      totalWithdrawableProfit += user.withdrawableAmount || 0;
    }

    // Return the calculated values
    return {
      totalBookingPayments,
      totalBookingPaymentsLastMonth,
      totalBookingPaymentsTwoMonths,
      totalWithdrawableProfit,
      status: 200,
    };
  } catch (error:any) {
    console.error("Error calculating booking payment stats:", error.message || error);
    return { 
      status: 500, 
      message: error.message || "Internal Server Error" 
    };
  }
};

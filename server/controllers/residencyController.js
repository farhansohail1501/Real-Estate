import asyncHandler from 'express-async-handler';
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country, // Corrected field name
    city,
    facilities,
    image,
    owner: { connect: { email: userEmail } } // Access nested email directly
  } = req.body;

  console.log(req.body); // Ensure correct data is received

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country, // Corrected field name
        city,
        facilities,
        image,
        owner: {
          connect: {
            email: userEmail
          }
        }
      }
    });
    res.send({
      message: "Residency created successfully",
      residency: residency
    });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("Residency already exists");
    }
    throw new Error(err.message);
  }
});

export const getResidencies = asyncHandler(async (req, res) => {

  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: 'desc'
    },
  });
  res.send(residencies);
});

export const getResidency = asyncHandler(async (req, res) => {
 
  const { id } = req.params;
 try{
  const residency = await prisma.residency.findUnique({
  where: { id },

  });
  res.send(residency);
 }
 catch(err){
   throw new Error(err.message);
 }
});
import asyncHandler from 'express-async-handler';
import { prisma } from "../config/prismaConfig.js ";
import e from 'express';

export const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");

  let {email} = req.body;
  const userExists = await prisma.user.findUnique({
    where: {
      email: email
    }
  });
  if(!userExists){
    const user = await prisma.user.create({
      data: req.body
    });
    res.send({
        message: "User created successfully",
        user: user
    })
} 

else res.status(201).send({message: "User already exists"})
});


export const bookVisit = asyncHandler(async (req, res) => {
const {email, date} = req.body
const {id} = req.params
 try{

  const alreadyBooked = await prisma.user.findUnique({
    where: {email},
    select: {bookedVisits: true}

    
  });

  if(alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
    res.status(400).json({message: "You have already booked a visit for this date"})
  }

  else {
    await prisma.user.update({
      where: {email},
      data: {
        bookedVisits: {push: {id, date}}
      }
    })
    res.send({message: "Visit booked successfully"})

  }
 }
 catch(err){
  throw new Error("Cannot book visit at this time")  
 }


});


export const allBookings = asyncHandler(async (req, res) => {

  const {email} = req.body

  try{
    const booking = await prisma.user.findUnique({
      where: {email},
      select: {bookedVisits: true}
    })
    res.status(200).send(booking)
  }

  catch(err){
    throw new Error(err.message)
  }

});


export const cancelBooking = asyncHandler(async (req, res) => { 

  const {email} = req.body
  const {id} = req.params

  try{
    const user = await prisma.user.findUnique({
      where: {email},
      select: {bookedVisits: true}
    });

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);

    if(index === -1){
      res.status(404).json({message: "Visit not found"})
    }

    else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: {email},
        data: {
          bookedVisits: user.bookedVisits
        }
      })
      res.send({message: "Visit cancelled successfully"})
    }
  }

  catch(err){
    throw new Error(err.message)
  }

});



export const favoriteResidency = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;
  
try{
 const user = await prisma.user.findUnique({
  where: {email},

 })

 if (user.favResidenciesID.includes(rid)){
  const updateUser = await prisma.user.update({
    where: {email},
    data: {
      favResidenciesID: {set: user.favResidenciesID.filter((id) => id !== rid)}
    }

  })
  res.send({message: "Residency removed from favourites", user: updateUser})
 }

 else{
  const updateUser = await prisma.user.update({
    where: {email},
    data: {
      favResidenciesID: {push: rid}
    }
  })
  res.send({message: "Residency added to favourites", user: updateUser})
 }
}
catch(err){
  throw new Error(err.message)
}
});

export const getAllFavorites = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favResd = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesID: true },
    });
    res.status(200).send(favResd);
  } catch (err) {
    throw new Error(err.message);
  }
});
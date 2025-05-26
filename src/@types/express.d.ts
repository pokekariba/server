import "express";
import multer from "multer";

declare global {
  namespace Express {
    interface Request {
      files?: Express.Multer.File[];
    }
  }
}

import dotenv from "dotenv";
dotenv.config();
export const env = {
  port: Number(process.env.PORT) || 3000,
  jwtSecret: process.env.JWT_SECRET || "default-secret",
  allowedOrigins: process.env.ALLOWED_ORIGINS?.split(",") || [],
  email: {
    host: process.env.EMAIL_HOST!,
    port: Number(process.env.EMAIL_PORT) || 587,
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
};

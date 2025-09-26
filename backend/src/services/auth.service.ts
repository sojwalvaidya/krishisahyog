import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Get JWT secret from .env (or use fallback)
const JWT_SECRET = process.env.JWT_SECRET || 'krishisahyog_secret_fallback';

/**
 * Hash a plain-text password
 * @param password - user's plain password
 * @returns hashed password (string)
 */
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12; // Industry standard (higher = more secure but slower)
  return await bcrypt.hash(password, saltRounds);
};

/**
 * Compare plain password with hashed password
 * @param password - user's input
 * @param hash - stored hash from DB
 * @returns true if match
 */
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

/**
 * Generate a JWT token
 * @param userId - user's ID
 * @param role - user's role (FARMER/BUYER)
 * @returns signed JWT token
 */
export const generateToken = (userId: string, role: string): string => {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '7d' });
};
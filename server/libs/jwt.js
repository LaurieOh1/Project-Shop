import jwt from "jsonwebtoken";

export const createSendToken = (res, statusCode, user) => {
  const { JWT_SECRET, JWT_EXP, COOKIE_EXP, NODE_ENV } = process.env;

  // Create JWT token
  const token = jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: JWT_EXP, // e.g., "7d"
  });

  const isProduction = NODE_ENV === "production";

  // Configure cookie options
  const cookieOptions = {
    expires: new Date(Date.now() + COOKIE_EXP * 24 * 60 * 60 * 1000), // e.g., 3 days
    httpOnly: true,  // prevent access from client-side JS
    secure: isProduction, // HTTPS only in production
    sameSite: isProduction ? "None" : "Lax", // allow cross-site cookies in production
  };

  // Set the token in a cookie
  res.cookie("jwtToken", token, cookieOptions);


    // Remove sensitive data from user object   
  user.password = undefined;

 
  res.status(statusCode).json({
    success: true,
    statusCode,
    user,
  });
};

# Environment Variables Setup

Create a `.env` file in the `backend` directory with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce_forecast
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

## Notes:
- Replace `your_super_secret_jwt_key_change_this_in_production` with a strong, random secret key
- Update `MONGODB_URI` if using MongoDB Atlas or a different connection string
- The `.env` file should not be committed to version control (already in .gitignore)


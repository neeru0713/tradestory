module.exports = {
    API_URL:
      process.env.NODE_ENV === "production"
        ? "https://tradestory.onrender.com"
        : "http://localhost:8080",
  };
   
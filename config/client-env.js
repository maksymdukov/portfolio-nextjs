const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://pf-nextjs.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://pf-nextjs.herokuapp.com",
  "process.env.CLIENT_ID": "gvDq1h9VJKKl4FtpoBkUv9PEt2HuMbvS",
  "process.env.DOMAIN": "pf-nextjs.herokuapp.com",
};

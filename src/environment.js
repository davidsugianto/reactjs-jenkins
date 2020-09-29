const environment = {
  baseUrl: "http://localhost:3000"
};

if (process.env.REACT_APP_ENV === "staging") {
  environment.baseUrl = "http://staging.app.io";
}

if (process.env.REACT_APP_ENV === "production") {
  environment.baseUrl = "http://app.io";
}

export default environment;

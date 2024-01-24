let BASE_URL;
if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://testapi.esbis.net/";
} else {
  BASE_URL = "http://localhost:3000/";
}

export const api_base_url = BASE_URL;

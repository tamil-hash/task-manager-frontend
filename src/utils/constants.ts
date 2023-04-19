interface ObjectKeys {
    [key: string]: string;
  }

  interface apiUrlsTypes extends ObjectKeys {
    local_dev: string;
    development: string;
    production:string
  }

export const apiUrls:apiUrlsTypes = {
    local_dev: "http://localhost:3000/",
    development: "https://task-manager-81mf.onrender.com/",
    production: "https://task-manager-81mf.onrender.com/",
}

export const env:string = import.meta.env.MODE;
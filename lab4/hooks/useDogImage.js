import { useFetch } from "./useFetch";


export const useDogImage = () => {
    // simplemente usamos fetch
  const { data, loading, error } = useFetch("https://random.dog/woof.json?ref=public_apis&utm_medium=website");
  
  // regresamos el .url
  return { dogImage: data?.url, loading, error };
};

import { useFetch } from "./useFetch";


export const useFoxImage = () => {
    // simplemente usamos fetch
  const { data, loading, error } = useFetch("https://randomfox.ca/floof");

  // regresamos el .image
  return { image: data?.image, loading, error };
};

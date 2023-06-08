import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
      const { data: menu = [], refetch, isLoading: loading } = useQuery({
            queryKey: ['menu'],
            queryFn: async () => {
                  const res = await fetch('https://bistro-boss-server-six-chi.vercel.app/menu');
                  return res.json();
            }
      });
      return [menu, refetch, loading];
};

export default useMenu;
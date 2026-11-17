
import authaxiosInstance from '../api/authAxiosInstance'
import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store/useAuthSotre';

export default function useCart() {
     const token=useAuthStore((state)=>state.token);
 const getCart=async()=>{
    const response=await authaxiosInstance.get(`Carts`);
    return response.data;
 }
 return useQuery({
    queryKey:['cart'],
    queryFn:getCart,
    enabled:!!token,
    staleTime:1000*60*5
 })
}

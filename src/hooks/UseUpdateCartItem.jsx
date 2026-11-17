
import authaxiosInstance from '../api/authAxiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdateCartItem() {
     const queryClient = useQueryClient();
 const updateCartItem=async({productId,count})=>{
  

    const response=await authaxiosInstance.patch(`Carts/${productId}`,{count});
    return response.data;
 }
 return useMutation({
mutationFn:updateCartItem,
onSuccess:()=>{
queryClient.invalidateQueries({queryKey:['cart']});
}
 })
}

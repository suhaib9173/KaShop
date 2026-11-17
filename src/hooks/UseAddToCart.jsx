

import { useMutation, useQueryClient } from '@tanstack/react-query';
import authaxiosInstance from '../api/authAxiosInstance';


export default function useAddToCart() {
 const queryClient =  useQueryClient();
    const addToCart=async(productId)=>{
        const response=await authaxiosInstance.post(`Carts`,{
           ProductId:productId,Count:1  }
    );
    return response.data;
    }
    return useMutation({
        mutationFn:addToCart,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['cart']})
        }
    })
  
}

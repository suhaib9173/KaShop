import React from 'react'
import authaxiosInstance from '../api/authAxiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useRemoveItemCart() {
     const queryClient = useQueryClient();
 const removeItemCart=async(productId)=>{
    const response=await authaxiosInstance.delete(`Carts/${productId}`);
    return response.data;
 }
 return useMutation({
    mutationFn:removeItemCart,
    onSuccess:()=>{
queryClient.invalidateQueries({queryKey:['cart']});
    }
 })
}

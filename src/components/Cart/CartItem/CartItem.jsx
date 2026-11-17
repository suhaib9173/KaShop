import { Box, IconButton, Paper, Typography } from "@mui/material";

import useUpdateCartItem from "../../../hooks/UseUpdateCartItem";
import useRemoveItemCart from "../../../hooks/UseRemoveItemCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
export default function CartItem({ item }) {
  const { mutate: updateCartItem, isPending } = useUpdateCartItem();
  const { mutate: removeCartItem, isPending: removePending } =
    useRemoveItemCart();
  const handleRemoveItemCart = () => {
    removeCartItem(item.productId, {
      onSuccess: () => {
        toast.success("Deleted Successfully");
      },
      onError: () => {
        toast.error("Error Deleted");
      },
    });
  };

  const handleIncrease = () => {
    updateCartItem({ productId: item.productId, count: item.count + 1 });
  };
  const handleDecrease = () => {
    updateCartItem({ productId: item.productId, count: item.count - 1 });
  };

  return (
    <>
   <Paper
  sx={{
    p: 3,
    mb: 3,
    display: "grid",
    gridTemplateColumns: "35% 25% 25% 15%",
    alignItems: "center",
    border: 1,
    borderRadius: 1,
    borderColor: "grey.400",
  }}
>
  <Box>
    <Typography>{item.productName}</Typography>
    <Typography>${item.price} each</Typography>
  </Box>

  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      border: 1,
      borderColor: "grey.400",
      borderRadius: 1,
      p: 1,
      width: "fit-content",
    }}
  >
    <IconButton
      onClick={handleDecrease}
      disabled={isPending || item.count <= 1}
    >
      <RemoveIcon fontSize="small" />
    </IconButton>

    <Typography>{item.count}</Typography>

    <IconButton onClick={handleIncrease} disabled={isPending}>
      <AddIcon fontSize="small" />
    </IconButton>
  </Box>

  <Typography>Total: ${item.totalPrice}</Typography>

  <IconButton disabled={removePending} sx={{ justifySelf: "center" }}>
    <DeleteIcon onClick={handleRemoveItemCart} />
  </IconButton>
</Paper>
    </>
  );
}

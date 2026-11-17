import { Card, CardActionArea, CardContent } from '@mui/material'


export default function Categoriesitem({category}) {
  return (
    <>
    <Card>
      <CardActionArea>
        <CardContent sx={{py:5,textAlign:'center'}}>
          {category.name}
        </CardContent>
      </CardActionArea>
    </Card>
    
    </>
  )
}

import { Card, CardBody, CardHeader, Heading, SimpleGrid } from "@chakra-ui/react"
import { IEating } from "./eatingContract"

const DayEatings = (eatings: IEating[]) => {
  
  const EATING_TIMES = ["Завтрак","Обед","Ужин", "Перекус"];

  return (
    <SimpleGrid columns={5} spacing={10}>
      {EATING_TIMES.map(el => 
        <Card key={el}>
          <CardHeader>
            <Heading size='sm'>{el} </Heading>
          </CardHeader>
          <CardBody>
            
          </CardBody>
        </Card>
      )}
    </SimpleGrid>
  )
}

export default DayEatings
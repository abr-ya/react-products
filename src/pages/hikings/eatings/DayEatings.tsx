
import { Card, CardBody, CardHeader, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { IEating } from "./eatingContract"

interface IEatingProps {
  eatings: IEating[]
}

const DayEatings = ({eatings}: IEatingProps ) => {
  
  const EATING_TIMES = ["Завтрак","Обед","Ужин", "Перекус"];

  return (
    <SimpleGrid columns={5} spacing={10}>
      {EATING_TIMES.map(el => 
        <Card key={el}>
          <CardHeader>
            <Heading size='sm'>{el} </Heading>
          </CardHeader>
          <CardBody>
            {eatings.filter(eat => eat.eatingTime.name == el)
            .map(e => <Text>{e.recipe.name}</Text>)}
          </CardBody>
        </Card>
      )}
    </SimpleGrid>
  )
}

export default DayEatings

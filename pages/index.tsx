import { useState } from "react"
import { Htag, Button, Paragraph, Tag, Rating } from "../components"
import { withLayout } from "../layout/Layout"

function Home() {

  const [rating, setRating] = useState(0)
  return (
    <>
      <Htag tag="h1">hello</Htag>
      <Button appearance="primary" arrow="right">click me</Button>
      <Button appearance="ghost" arrow="down">click me</Button>
      <Paragraph size="large">as</Paragraph>
      <Tag color="green">fdd</Tag>
      <Rating rating={rating} setRating={setRating} isEditable={true}/>
    </>
  )
}

export default withLayout(Home)
import { useState } from "react"
import { GetStaticProps } from "next"
import { Htag, Button, Paragraph, Tag, Rating } from "../components"
import { withLayout } from "../layout/Layout"
import axios from "axios"
import { MenuItem } from "../interfaces/menu.interface"

function Home({ menu, firstCategory }: HomeProps): JSX.Element {

  const [rating, setRating] = useState(0)
  return (
    <>
      <Htag tag="h1">hello</Htag>
      <Button appearance="primary" arrow="right">click me</Button>
      <Button appearance="ghost" arrow="down">click me</Button>
      <Paragraph size="large">as</Paragraph>
      <Tag color="green">fdd</Tag>
      <Rating rating={rating} setRating={setRating} isEditable={true}/>
      {menu.map(m => console.log(m))}
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + "api/top-page/find", {
    firstCategory
  })

  return {
    props: {
       menu,
       firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[]
  firstCategory: number
}
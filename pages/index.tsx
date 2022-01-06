import { Htag, Button } from "../components"

export default function Home() {
  return (
    <>
      <Htag tag="h1">hello</Htag>
      <Button appearance="primary" arrow="right">click me</Button>
      <Button appearance="ghost" arrow="down">click me</Button>
    </>
  )
}

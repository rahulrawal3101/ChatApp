import Header from "@/components/Header";
import HomeMid from "@/components/HomeMid";
import { Container, Grid } from "@mui/material";

export default function Home() {
  return (
     <>
     <Header/>
      <Container maxWidth disableGutters sx={{bgcolor:"#eceafc",height:"85dvh"}}>
          <HomeMid/>
     </Container>
     </>
  )
}

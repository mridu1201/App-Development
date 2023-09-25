import { IconButton } from "@chakra-ui/button";
import "../../assets/css/Dashboard.css";
import { SimpleGrid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { FiPlus } from "react-icons/fi";
import BigCard from "../../assets/components/content/Bigcard";
import Security from "../../assets/components/content/Security";
import SmallCard from "../../assets/components/content/Smallcard";
import Transactions from "../../assets/components/content/Transactions";
import Header from "../../assets/components/Header";
import Sidebar from "../../assets/components/SideBaaar";
import Wallets from "../../assets/components/Wallets";
import Profile_Card from "../../assets/components/Profile-Card";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

function Dashboard() {
  return (
    <Box>
      <Header />
      <SimpleGrid columns={10} gap={3}>
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={5} gap={8}>
            <GridItem colSpan={3}>
              <br />
              <BigCard />
            </GridItem>
            <GridItem colSpan={2} className="small-card">
              <Text
                fontWeight="semibold"
                fontSize="sm"
                textColor="gray"
                my={2}
                ml={8}
              >
                USERS
              </Text>
              <Stack spacing={6}>
                <SmallCard value="70%" text="Admissions" />
                <SmallCard value="89%" text="Total Users" />
              </Stack>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={3}>
          <br />
          <Profile_Card />
        </GridItem>
      </SimpleGrid>

      <SimpleGrid className="problemGrid" columns={10} gap={0} mt={12}>
        <GridItem colSpan={1}>
          {/* <Center>
            <IconButton
              bg="#5C4E7A"
              textColor="white"
              position="fixed"
              bottom={12}
              size="lg"
              icon={<FiPlus />}
            />
          </Center> */}
        </GridItem>
        <GridItem colSpan={1}>
          <Wallets />
        </GridItem>
        <GridItem colSpan={1}>
          {/* <CircularProgress
            className="dashboard-percentagecircle"
            value={64}
            size={100}
            color="green.600"
            thickness="12px"
          /> */}
          <CircularProgress isIndeterminate color='green.300' className="dashboard-percentagecircle" value={64}
          thickness="12px"
          size={100}>
              <CircularProgressLabel>68.4%</CircularProgressLabel>
          </CircularProgress>
        </GridItem>
        {/* <GridItem colSpan={3}>
          <Security />
        </GridItem> */}
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;


// import React from 'react'

// function Dashboard() {
//   return (
// <>
//   {/* import bootstrap cdn*/}
//   <link
//     rel="stylesheet"
//     href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
//     integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
//     crossOrigin="anonymous"
//   />
//   {/* import jquery cdn */}
//   {/* import popper.js cdn */}
//   {/* import javascript cdn */}
//   {/* CSS stylesheet */}
//   <style
//     type="text/css"
//     dangerouslySetInnerHTML={{
//       __html:
//         "\n\t\thtml,\n\t\tbody {\n\t\t\theight: 100%;\n\t\t}\n\t\t#green {\n\t\t\theight: 100%;\n\t\t\tbackground: green;\n\t\t\ttext-align: center;\n\t\t\tcolor: black;\n\t\t}\n\t"
//     }}
//   />
//   {/* top navbar */}
//   <nav
//     className="navbar navbar-expand-lg
// 			navbar-light bg-primary"
//   >
//     <a className="navbar-brand" href="#">
//       Navbar
//     </a>
//     {/* hamburger button that toggles the navbar*/}
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarNavAltMarkup"
//       aria-controls="navbarNavAltMarkup"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     {/* navbar links */}
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
//         <a
//           className="nav-item nav-link
// 					active"
//           href="#"
//         >
//           Home
//         </a>
//         <a className="nav-item nav-link" href="#">
//           Features
//         </a>
//         <a className="nav-item nav-link" href="#">
//           Price
//         </a>
//         <a className="nav-item nav-link" href="#">
//           About
//         </a>
//       </div>
//     </div>
//   </nav>
//   {/* This container contains the sidebar
// 			and main content of the page */}
//   {/* h-100 takes the full height of the body*/}
//   <div className="container-fluid h-100">
//     <div className="row h-100">
//       <div className="col-2" id="green">
//         <h4>Sidebar</h4>
//         {/* Navigation links in sidebar*/}
//         <a href="#">Link 1</a>
//         <br />
//         <br />
//         <a href="#">Link 2</a>
//         <br />
//         <br />
//         <a href="#">Link 3</a>
//         <br />
//         <br />
//         <a href="#">Link 4</a>
//         <br />
//         <br />
//       </div>
//       {/*Contains the main content
// 					of the webpage*/}
//       <div className="col-10" style={{ textAlign: "justify" }}>
//         Bootstrap is a free and open-source tool collection for creating
//         responsive websites and web applications. It is the most popular HTML,
//         CSS, and JavaScript framework for developing responsive, mobile-first
//         web sites.
//       </div>
//     </div>
//   </div>
// </>

//   )
// }

// export default Dashboard

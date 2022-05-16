import Head from "next/head";
import Image from "next/image";
import Box from "../components/box";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Box color="#fff" bg="tomato">
        Tomato
      </Box>
      <Box color="black" bg="blue">
        Blue Box
      </Box>
    </div>
  );
}

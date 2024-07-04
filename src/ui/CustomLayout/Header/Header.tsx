"use client"
import styles from './Header.module.scss'
import {MdSchool} from "react-icons/md"
import {FC} from "react"
import {Box, Button, Container, useColorMode} from "@chakra-ui/react"
import Link from "next/link"
import HeaderList from "@/ui/CustomLayout/Header/HeaderList/HeaderList"
import {FaRegMoon} from "react-icons/fa"
import {LuSun} from "react-icons/lu"


interface Header {
}

const Header: FC<Header> = () => {
    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <Box as="header" className={styles.header} boxShadow="md" h="70px">
            <Container className="h-full" maxWidth="8xl">
                <Box className={styles.row}>
                    <Link href="/">
                        <MdSchool size={55}/>
                    </Link>


                    <Box className={styles.box}>
                        <Button onClick={toggleColorMode}>
                            {
                                colorMode === 'light' ? <FaRegMoon size={25}/> : <LuSun size={25}/>
                            }
                        </Button>

                        <HeaderList/>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header


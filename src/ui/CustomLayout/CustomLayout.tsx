import styles from "./CustomLayout.module.scss"
import {FC, PropsWithChildren} from "react"
import Header from "@/ui/CustomLayout/Header/Header"
import {Box} from "@chakra-ui/react"


const CustomLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <Box className={styles.layout}>
            <Header/>

            <Box as="main" className={styles.main}>
                {children}
            </Box>
        </Box>
    )
}

export default CustomLayout


import {FC} from "react"
import {List, ListItem} from "@chakra-ui/react"
import {links} from "@/ui/CustomLayout/Header/links"
import Link from "next/link"
import styles from "./HeaderList.module.scss"

interface HeaderList {
}

const HeaderList: FC<HeaderList> = () => {
    return (
        <List className={styles.list}>
            {
                links.map((el) => {
                    return (
                        <ListItem key={el.id}>
                            <Link className={styles.link} href={el.to}>
                                {el.label}
                            </Link>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default HeaderList


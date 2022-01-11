import { FooterProps } from "./Footer.props"
import styles from "./Footer.module.css"
import cn from "classnames"
import { format } from "date-fns"


export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer {...props} className={cn(className, styles.footer)}>
            <div>
                Yhuley @ 2021 - {format(new Date(), "yyyy")} all rights reserved
            </div>
            <a href="">GitHub</a>
            <a href="">Linkedin</a>
        </footer>
    )
}
import { ParagraphProps } from "./Paragraph.props"
import styles from "./Paragraph.module.css"
import cn from "classnames"

export const Paragraph = ({ size = "medium", children, className, ...props }: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(className, {
                [styles.paragraphSmall]: size === "small",
                [styles.paragraphMedium]: size === "medium",
                [styles.paragraphLarge]: size === "large"
            })}
            {...props}
        >
          {children}  
        </p>
    )
}
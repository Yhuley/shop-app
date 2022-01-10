import { RatingProps } from "./Rating.props"
import styles from "./Rating.module.css"
import cn from "classnames"
import { useState, useEffect, KeyboardEvent } from "react"
import Star from "./star.svg"

export const Rating = ({isEditable = false, rating = 0, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    const changeDisplay = (index: number) => {
        if(!isEditable) return

        makeRating(index)
    }

    const changeRating = (index: number) => {
        if(!setRating) return

        setRating(index)
    }

    const handleSpace = (index: number, event: KeyboardEvent<SVGAElement>) => {
        if(event.code !== "Space" || !setRating) return

        setRating(index)
    }

    const makeRating = (currentRating: number) => {
        const updatedRating = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => changeRating(i + 1)}
                >
                    <Star
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                    /> 
                </span>
            )
        })
        setRatingArray(updatedRating)
    }

    useEffect(() => {
        makeRating(rating)
    }, [rating])

    return (
        <div {...props}>
            {ratingArray.map((rating, i) => (<span key={i}>{rating}</span>))}
        </div>
    )
}
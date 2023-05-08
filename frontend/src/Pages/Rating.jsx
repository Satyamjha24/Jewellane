import React from "react";
import {
	Box,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";



export function Rating({ rating, numReviews }) {
	return (
		<Box
			display='flex'
			alignItems='center'
			mt={numReviews === 1 ? "0.3rem" : "3"}>
			{Array(5)
				.fill("")
				.map((_, i) => {
					const roundedRating = Math.round(rating * 2) / 2;
					if (roundedRating - i >= 1) {
						return (
							<BsStarFill
								key={i + Math.random()}
								style={{ marginLeft: "1" }}
								// color={i < rating ? 'green.500' :"green.300"}
							/>
						);
					}
					if (roundedRating - i === 0.2) {
						return (
							<BsStarHalf
								key={i + Math.random()}
								style={{ marginLeft: "1" }}
							/>
						);
					}
					return (
						<BsStar
							key={i + Math.random()}
							style={{ marginLeft: "1" }}
						/>
					);
				})}
			<Box
				as='span'
				ml='2'
				color='gray.600'
				fontSize='sm'
				display={numReviews === 1 ? "none" : "flex"}>
				({numReviews})
			</Box>
		</Box>
	);
}
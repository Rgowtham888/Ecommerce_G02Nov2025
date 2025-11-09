import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { BsArrowRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const Item = ({ product, rotate = false }) => {
	if (!product) return null;
	const { image, name, slug, price, manufacturer } = product;
	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				<div className="featured-product-card">
					<img
						src={image && image[0] ? urlFor(image[0]) : ''}
						width={250}
						height={250}
						className={
							rotate
								? "featured-product-image rotate"
								: "featured-product-image"
						}
						alt={name || ''}
					/>
					<p className="featured-product-name">{name}</p>
					<p className="featured-product-manufacturer">{manufacturer}</p>
					<p className="featured-product-price">${price}</p>
					<div className="featured-product-button-container">
						<BsArrowRightCircle className="featured-arrow-icon" />
						<div className="featured-product-button-text">View Details</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

const FeaturedItems = ({ featuredItems }) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 50 }}
			transition={{ duration: 0.4, delay: 0.4 }}
			whileInView={{ translateY: 0, opacity: 1 }}
			className="featured-items-container"
		>
			<div className="featured-top-text">Traditional Treasures:</div>
			<div className="featured-bg-text">FEATURED</div>
			{/* Saree gallery - three images side-by-side from /public */}
			<div className="featured-saree-banner">
				<img src="/saree1.png" alt="Saree 1" className="featured-saree-image" />
				<img src="/saree2.png" alt="Saree 2" className="featured-saree-image" />
				<img src="/saree3.png" alt="Saree 3" className="featured-saree-image" />
			</div>
			<Item product={featuredItems[0]} />
			<Item product={featuredItems[1]} rotate={true} />
			<Item product={featuredItems[2]} />
			<Item product={featuredItems[3]} rotate={true} />
		</motion.div>
	);
};

export default FeaturedItems;

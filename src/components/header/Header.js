import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

const styles = (theme) => ({
	root: {
		display: "flex",
		background: "#131921",
		position: "sticky",
		alignItems: "center",
		width: "100%",
		height: "4em",
	},
	rootLogo: {
		height: "100%",
		objectFit: "contain",
		padding: "1em",
		margin: "auto",
		"& img": {
			height: "100%",
			objectFit: "cover",
		},
	},
	rootSearch: {
		display: "flex",
		flex: 1,
		alignItems: "center",
		"& input": {
			height: "100%",
			padding: "0.75em",
			border: "none",
			width: "100%",
		},
		"& .SearchIcon": {
			border: "none",
			padding: "5px",
			fontSize: "2.1875em",
			height: "auto !important",
			backgroundColor: "#cd9042",
		},
	},
	rootNav: {
		display: "flex",
		justifyContent: "space-evenly",
		padding: "0 0.5em",
	},
	rootOption: {
		display: "flex",
		flexDirection: "column",
		margin: "0 auto",
		padding: "0 0.5em",
		color: "white",
		"& span": {
			"&:nth-child(1)": {
				fontSize: "0.75rem",
			},
			"&:nth-child(2)": {
				fontSize: "1rem",
				fontWeight: "900",
			},
		},
	},
	rootBasket: {
		display: "flex",
		alignItems: "center",
		gap: "0.5rem",
		color: "white",
		"& span": {
			margin: "0 auto",
			fontSize: "1rem",
			fontWeight: "900",
		},
	},
});

function Header(props) {
	const classes = props.classes;
	return (
		<div className={classes.root}>
			<div className={classes.rootLogo}>
				<img
					alt="logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				></img>
			</div>
			<div className={classes.rootSearch}>
				<input type="text" />
				<SearchIcon className="SearchIcon" />
			</div>
			<div className={classes.rootNav}>
				<div className={classes.rootOption}>
					<span>Hello Guest</span>
					<span>Sign In</span>
				</div>
				<div className={classes.rootOption}>
					<span>Returns</span>
					<span>& Orders</span>
				</div>
				<div className={classes.rootOption}>
					<span>Your</span>
					<span>Prime</span>
				</div>
				<div className={classes.rootOption}>
					<span></span>
					<span></span>
				</div>
				<div className={classes.rootBasket}>
					<ShoppingBasketIcon />
					<span>0</span>
				</div>
			</div>
		</div>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

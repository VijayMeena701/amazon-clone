import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import ToolTip from "@material-ui/core/Tooltip";
import CountDown from "react-countdown";
import ChevronleftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import data from "../pages/data";

const styles = (theme) => ({
	root: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		padding: "1em",
		backgroundColor: "#fff",
		color: "#000",
		position: "relative",
	},
	rootTitle: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		textAlign: "left",
		alignItems: "center",
		"& span": {
			fontSize: "1.375em",
			paddingRight: "1.5em",
		},
		"& a": {
			color: "#007185",
			textDecoration: "none",
			fontSize: "14px",
		},
	},
	rootItemsContainer: {
		width: "100%",
		overflowY: "hidden",
		height: "50vh",
		display: "flex",
		position: "relative",
		"& .items": {
			display: "flex",
			position: "relative",
			flexDirection: "row",
			alignItems: "center",
			"& .itemChilddiv": {
				display: "flex",
				height: "100%",
				maxWidth: "200px",
				padding: "0.5rem",
				flexDirection: "column",
				"& img": {
					height: "100%",
					objectFit: "contain",
				},
				"& div": {
					display: "flex",
					flexDirection: "column",
					width: "100%",
					padding: " 10px 0 20px",
					"& p": {
						display: "flex",
						alignItems: "center",
						padding: "0.125em 0.375em",
						fontSize: "14px",
						lineSpacing: "19px",
						fontWeight: "400",
						"&:nth-last-child(1)": {
							color: "#565959",
							fontWeight: "400",
							fontSize: "12px",
							letterSpacing: "0.5px",
						},
					},
				},
			},
		},
		"&::-webkit-scrollbar": {
			height: "0.375em",
			transition: "0.5s linear",
		},
		"&::-webkit-scrollbar-thumb": {
			// background:
			// 	"linear-gradient(13deg, rgba(249,21,255,0) 14%, rgba(199,206,255,0) 64%)",
			background: "#eee",
			opacity: 1,
			borderRadius: "10px",
		},
		"&::-webkit-scrollbar-thumb:hover": {
			// background:
			// 	"linear-gradient(13deg, rgba(199,206,255,1) 14%, rgba(249,21,255,1) 64%)",
			background: "#aaa",
		},
		"&::-webkit-scrollbar-track": {
			background: "#ffffff",
			borderRadius: "10px",
			boxShadow: "inset 7px 10px 12px #f0f0f0",
		},
	},
	btn: {
		display: "flex",
		position: "absolute",
		background: "rgba(255,255,255,0.4)",
		top: "50%",
		zIndex: 2,
		"&:hover": {
			background: "rgba(255,255,255,1)",
		},
		"& .icon": {
			fontSize: "40px",
		},
	},
});

function ItemGroupBar(props) {
	const classes = props.classes;
	const { mainTitle, mainPageLink, child } = props.data;

	let childrens = child.map((datum, index) => {
		const { img, priceStart, priceEnd, endsAt, discount } = datum;
		return (
			<div key={index} className="itemChilddiv">
				<img src={img} alt="product" />
				<div>
					<p>
						<span>&#x20B9;{priceStart}</span>
						{priceEnd && (
							<span>
								&nbsp;-&nbsp;&#x20B9;
								{priceEnd}
							</span>
						)}
					</p>
					{discount && <p>&#x20B9;{discount}</p>}
					<p>
						Ends in <CountDown date={endsAt} />
					</p>
				</div>
			</div>
		);
	});

	return (
		<div className={classes.root}>
			<div className={classes.rootTitle}>
				<span>{mainTitle}</span>
				<a href={mainPageLink}>See all deals</a>
			</div>
			<div className={classes.rootItemsContainer}>
				<div className="items">{childrens}</div>
			</div>
			<div className={classes.btn} style={{ float: "left", left: 5 }}>
				<ToolTip title="Previous" enterDelay={300} arrow>
					<Button>
						<ChevronleftIcon fontSize="large" classsName="icon" />
					</Button>
				</ToolTip>
			</div>
			<div className={classes.btn} style={{ float: "right", right: 5 }}>
				<ToolTip title="Next" enterDelay={300} arrow>
					<Button>
						<ChevronRightIcon fontSize="large" classsName="icon" />
					</Button>
				</ToolTip>
			</div>
		</div>
	);
}

ItemGroupBar.propTypes = {
	classes: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemGroupBar);

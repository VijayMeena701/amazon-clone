import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#fff",
		padding: "1em",
		zIndex: "1",
		"& .title": {
			width: "100%",
			margin: "10px 0",
			"& span": {
				color: "#000",
				padding: "0 0.75em",
				fontWeight: "900",
			},
		},
		"& a": {
			fontSize: "14px",
			padding: "1em",
			color: "#007185",
			textDecoration: "none",
		},
	},
	rootChildContainer: {
		width: "100%",
		maxWidth: "400px",
		gap: "15px",
		"& .imgContainer": {
			width: "45%",
			display: "flex",
			flexDirection: "column",
			"& a": {
				width: "100%",
				padding: "0",
				textDecoration: "none",
				"& img": {
					width: "100%",
					objectFit: "fill",
					height: "auto",
				},
				"& p": {
					color: "#000",
					fontSize: "12px",
					fontWeight: "400",
					letterSpacing: "0.5px",
					padding: "0.5rem 0 0 0",
				},
			},
		},
	},
});

function ItemGroup(props) {
	const classes = props.classes;
	const { title, link } = props.data;

	let childrenComponents = props.data.childrendata.map((child, index) => {
		const { img, linktogroup, grouptitle } = child;
		return (
			<Grid item key={index} className="imgContainer">
				<a href={linktogroup}>
					<img src={img} alt="groupItem" />
				</a>
				<a href={linktogroup}>
					<p>{grouptitle}</p>
				</a>
			</Grid>
		);
	});
	return (
		<div className={classes.root}>
			<div className="title">
				<span>{title}</span>
			</div>
			<Grid container className={classes.rootChildContainer}>
				{childrenComponents}
			</Grid>
			<a href={link}>See more</a>
		</div>
	);
}

ItemGroup.propTypes = {
	classes: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemGroup);

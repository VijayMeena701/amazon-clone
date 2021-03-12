import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = (theme) => ({
	root: {
		background: "#232F3E",
		height: "100vh",
	},
	rootContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		margin: "auto",
		"& .backtoTop": {
			display: "flex",
			justifyContent: "center",
			width: "100%",
			margin: "0 auto",
			padding: "1em",
			background: "#37475A",
			transition: "all 0.3s",
			cursor: "pointer",
			"&:hover": {
				background: "#485769",
			},
			"& p": {
				color: "white",
				textDecoration: "none",
				width: "100%",
				textAlign: "center",
			},
		},
	},
	footerMainContainer: {
		color: "white",
		width: "100%",
		"& ul": {
			disply: "flex",
			flexDirection: "column",
			justifyContent: "left",
			textAlign: "left",
			listStyle: "none",
			"& li": {
				padding: "0.3em 0",
				fontSize: "0.85em",
				fontWeight: "400",
				lineHeight: "1.5em",
				"& a": {
					cursor: "pointer",
				},
			},
		},
	},
});

function Footer(props) {
	const classes = props.classes;
	const ref = useRef(null);

	const backtoTopClickHandler = (e) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className={classes.root}>
			<div className={classes.rootContainer}>
				<div className="backtoTop" onClick={backtoTopClickHandler}>
					<p>Back to top</p>
				</div>
				<Grid
					container
					justify="center"
					className={classes.footerMainContainer}
					spacing={2}
				>
					<Grid
						container
						item
						justify="center"
						sm={12}
						md={6}
						lg={12}
						spacing={4}
					>
						<Grid item={true} justify="left">
							<Typography
								variant="body1"
								style={{ fontWeight: "700" }}
							>
								Get to Know Us
							</Typography>
							<ul>
								<li>
									<p>
										<a>About us</a>
									</p>
								</li>
								<li>
									<p>
										<a>careers</a>
									</p>
								</li>
								<li>
									<p>
										<a>press Releases</a>
									</p>
								</li>
								<li>
									<p>
										<a>Amazon Careers</a>
									</p>
								</li>
								<li>
									<p>
										<a>Send a Gift</a>
									</p>
								</li>
							</ul>
						</Grid>
						<Grid item={true} justify="left">
							<Typography
								variant="body1"
								style={{ fontWeight: "700" }}
							>
								Get to Know Us
							</Typography>
							<ul>
								<li>
									<p>
										<a>About us</a>
									</p>
								</li>
								<li>
									<p>
										<a>careers</a>
									</p>
								</li>
								<li>
									<p>
										<a>press Releases</a>
									</p>
								</li>
								<li>
									<p>
										<a>Amazon Careers</a>
									</p>
								</li>
								<li>
									<p>
										<a>Send a Gift</a>
									</p>
								</li>
							</ul>
						</Grid>
						<Grid item={true} justify="left">
							<Typography
								variant="body1"
								style={{ fontWeight: "700" }}
							>
								Get to Know Us
							</Typography>
							<ul>
								<li>
									<p>
										<a>About us</a>
									</p>
								</li>
								<li>
									<p>
										<a>careers</a>
									</p>
								</li>
								<li>
									<p>
										<a>press Releases</a>
									</p>
								</li>
								<li>
									<p>
										<a>Amazon Careers</a>
									</p>
								</li>
								<li>
									<p>
										<a>Send a Gift</a>
									</p>
								</li>
							</ul>
						</Grid>
						<Grid item={true} justify="left">
							<Typography
								variant="body1"
								style={{ fontWeight: "700" }}
							>
								Get to Know Us
							</Typography>
							<ul>
								<li>
									<p>
										<a>About us</a>
									</p>
								</li>
								<li>
									<p>
										<a>careers</a>
									</p>
								</li>
								<li>
									<p>
										<a>press Releases</a>
									</p>
								</li>
								<li>
									<p>
										<a>Amazon Careers</a>
									</p>
								</li>
								<li>
									<p>
										<a>Send a Gift</a>
									</p>
								</li>
							</ul>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

import React, { useRef } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FooterModal from "./footerModals/FooterModal";

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
		width: "75%",
		margin: "3em auto 0",
		"& .footerItem": {
			alignItems: "left",
			justifyContent: "left",
		},
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
					color: "white",
					textDecoration: "none",
				},
			},
		},
	},
	dividerLine: {
		borderTop: "1px solid #3a4553",
		marginTop: "40px",
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
				<div
					ref={ref}
					className="backtoTop"
					onClick={backtoTopClickHandler}
				>
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
						xs={12}
						md={3}
						className="footerItem"
					>
						<Grid item={true}>
							<Typography
								variant="body1"
								style={{ fontWeight: "700" }}
							>
								Get to Know Us
							</Typography>
							<ul>
								<li>
									<p>
										<a href="# ">About us</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">careers</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">press Releases</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Amazon Careers</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Send a Gift</a>
									</p>
								</li>
							</ul>
						</Grid>
					</Grid>
					<Grid
						container
						item
						justify="center"
						xs={12}
						md={3}
						className="footerItem"
					>
						<Grid item={true}>
							<Typography
								variant="body1"
								style={{ fontWeight: "700" }}
							>
								Contact with Us
							</Typography>
							<ul>
								<li>
									<p>
										<a href="# ">Facebook</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Twitter</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Instagram</a>
									</p>
								</li>
							</ul>
						</Grid>
					</Grid>
					<Grid
						container
						item
						justify="center"
						xs={12}
						md={3}
						className="footerItem"
					>
						<Grid item={true}>
							<Typography
								variant="body1"
								style={{ fontWeight: "700" }}
							>
								Make Money with Us
							</Typography>
							<ul>
								<li>
									<p>
										<a href="# ">Sell on Amazon</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">
											Sell under Amazon Accelerator
										</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Amazon Global Selling</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Become an Affiliate</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Fulfilment by Amazon</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Advertise your Products</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Amazon Pay on Merchants</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">
											See more Make Money with Us
										</a>
									</p>
								</li>
							</ul>
						</Grid>
					</Grid>
					<Grid
						container
						item
						justify="center"
						xs={12}
						md={3}
						className="footerItem"
					>
						<Grid item={true}>
							<Typography
								variant="body1"
								style={{ fontWeight: "700" }}
							>
								Let Us Help You
							</Typography>
							<ul>
								<li>
									<p>
										<a href="# ">Covid-19 and Amazon</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Your Account</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Returns Center</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">
											100% Purchase Protection
										</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Amazon App Download</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">
											Amazon Assistant Download
										</a>
									</p>
								</li>
								<li>
									<p>
										<a href="# ">Help</a>
									</p>
								</li>
							</ul>
						</Grid>
					</Grid>
				</Grid>
				<div className={classes.dividerLine}></div>
				<FooterModal />
			</div>
		</div>
	);
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

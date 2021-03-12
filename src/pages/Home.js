import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ItemGroup from "../components/ItemGroup";
import ItemGroupsBar from "../components/ItemGroupBar";
import data from "./data.js";
import datanew from "./data1.js";

const styles = (theme) => ({
	root: {
		width: "100%",
		maxWidth: "1920px",
	},
	rootimgContainer: {
		width: "100%",
		height: "100vh",
		zIndex: "-1",
		"& img": {
			width: "100%",
			maskImage:
				"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
			zIndex: "-1",
		},
	},
	itemsMainContainer: {
		margin: "-50vh auto 20px",
		width: "97%",
		zIndex: "0",
	},
	itemsContainer: {
		margin: "15px auto 0",
		display: "flex",
		width: "100%",
		justifyContent: "space-around",
		gap: "20px",
	},
});

function Home(props) {
	const classes = props.classes;
	return (
		<div className={classes.root}>
			<div className={classes.rootimgContainer}>
				<img
					src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
					alt="body img"
				></img>
			</div>
			<div className={classes.itemsMainContainer}>
				<div className={classes.itemsContainer}>
					{data.map((datum) => {
						return <ItemGroup data={datum} key={datum.id} />;
					})}
				</div>

				{datanew.map((datum) => {
					return (
						<div className={classes.itemsContainer} key={datum.id}>
							<ItemGroupsBar data={datum} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

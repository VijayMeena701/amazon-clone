import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Grid from "@material-ui/core/Grid";
import LanguageIcon from "@material-ui/icons/Language";
import UnfoldMoreRoundedIcon from "@material-ui/icons/UnfoldMoreRounded";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { Typography } from "@material-ui/core";

const styles = (theme) => ({
	root: {
		width: "100%",
		textAlign: "center",
		maxWidth: "1000px",
		margin: "10px auto",
		lineHeight: "18px",
		whiteSpace: "nowrap",
		color: "#DDD",
		display: "flex",
		justifyContent: "center",
		gap: "60px",
		"& span.item1": {
			listStyle: "none",
			display: "inlisne-block",
			margin: "0",
			"& div": {
				display: "flex",
				textAlign: "center",
				alignItems: "center",
				lineHeight: "0",
				marginBottom: "-5px",
				"& a": {
					color: "#004B91",
					textDecoration: "none",
					whiteSpace: "normal",
					padding: "0.6em",
					textAlign: "center",
					alignItems: "center",
					"& div.nav-logo": {
						backgroundImage: `url(${"https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936311_.png"})`,
						backgroundPosition: "-10px -90px",
						width: "76px",
						height: "23px",
						backgroundRepeat: "repeat-x",
						boxSizing: "border-box",
						display: "block",
					},
				},
			},
		},
		"& div.item2": {
			display: "flex",
		},
	},
	button: {
		margin: theme.spacing(1),
	},
});

function FooterModal(props) {
	const classes = props.classes;
	const [anchorEl, setAnchorEl] = useState(null);
	const [checkedValue, setCheckedValue] = useState("english");
	const [anchorMd, setAnchorMd] = useState(null);
	const buttonRef = useRef(null);
	const modalref = useRef(null);
	const handleClick = (event) => {
		setAnchorEl(null);
		setAnchorMd(true);
	};
	const handleClose = () => {
		setAnchorEl(null);
		setAnchorMd(null);
	};
	const handleChange = (event) => {
		setCheckedValue(event.target.value);
		setAnchorEl(null);
		//set the page language here
	};

	useEffect(() => {
		buttonRef.current.addEventListener("mouseenter", (e) => {
			setAnchorEl(e.currentTarget);
		});
		return buttonRef.current.removeEventListener("mouseenter", (e) => {
			setAnchorEl(e.currentTarget);
		});
	});
	useEffect(() => {
		if (modalref.current) {
			modalref.current.addEventListener("mouseleave", handleClose);
		}
		return modalref.current
			? modalref.current.removeEventListener("mouseleave", handleClose)
			: null;
	});
	return (
		<div className={classes.root}>
			<span className="item1">
				<div>
					<a href="# ">
						<div className="nav-logo"></div>
					</a>
				</div>
			</span>
			<div className="item2">
				<Button
					aria-controls="customized-menu"
					aria-haspopup="true"
					// onMouseEnter={handleClick}
					variant="outlined"
					startIcon={<LanguageIcon />}
					endIcon={<UnfoldMoreRoundedIcon />}
					size="small"
					className={classes.button}
					color="primary"
					onClick={handleClick}
					ref={buttonRef}
				>
					English
				</Button>
				<Menu
					id="customized-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
					ref={modalref}
					getContentAnchorEl={null}
					anchorOriginVertical="top"
					transformOriginVertical="bottom"
					transformOriginHorizontal="left"
					anchorOriginHorizontal="left"
				>
					<FormControl component="fieldset" anchorPosition="bottom">
						<RadioGroup
							aria-label="language"
							name="language"
							value={checkedValue}
							onChange={handleChange}
						>
							<MenuItem>
								<FormControlLabel
									value="english"
									control={<Radio />}
									label="English"
								/>
							</MenuItem>
							<MenuItem>
								<FormControlLabel
									value="hindi"
									control={<Radio />}
									label="Hindi"
								/>
							</MenuItem>
							<MenuItem>
								<FormControlLabel
									value="Tamil"
									control={<Radio />}
									label="Tamil"
								/>
							</MenuItem>
							<MenuItem>
								<FormControlLabel
									value="kannada"
									control={<Radio />}
									label="Kannada"
								/>
							</MenuItem>
							<MenuItem>
								<FormControlLabel
									value="malyalam"
									control={<Radio />}
									label="Malyalam"
								/>
							</MenuItem>
							<div>You are Shopping on ... </div>
						</RadioGroup>
					</FormControl>
				</Menu>
				<Dialog
					open={anchorMd}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">
						<Button fullWidth startIcon={<LanguageIcon />}>
							Language Settings
						</Button>
					</DialogTitle>
					<DialogContent>
						<Grid container spacing={2}>
							<Grid item sm={6} xm={12}>
								<DialogContentText>
									Select your preferred language:
								</DialogContentText>
								<FormControl
									component="fieldset"
									anchorPosition="bottom"
								>
									<RadioGroup
										aria-label="language"
										name="language"
										value={checkedValue}
										onChange={handleChange}
									>
										<MenuItem>
											<FormControlLabel
												value="english"
												control={<Radio />}
												label="English"
											/>
										</MenuItem>
										<MenuItem>
											<FormControlLabel
												value="hindi"
												control={<Radio />}
												label="Hindi"
											/>
										</MenuItem>
										<MenuItem>
											<FormControlLabel
												value="Tamil"
												control={<Radio />}
												label="Tamil"
											/>
										</MenuItem>
										<MenuItem>
											<FormControlLabel
												value="kannada"
												control={<Radio />}
												label="Kannada"
											/>
										</MenuItem>
										<MenuItem>
											<FormControlLabel
												value="malyalam"
												control={<Radio />}
												label="Malyalam"
											/>
										</MenuItem>
									</RadioGroup>
								</FormControl>
							</Grid>
							<Grid item sm={6} xm={12}>
								<DialogContentText>
									Translation
								</DialogContentText>
								<Typography variant="body2">
									We’ll translate information to help you
									browse, shop, and communicate. We are
									continuously improving the regional language
									experience on Amazon.in If you have feedback
									on these translations, please contact
									Customer Support. Please note that
									translations are provided for convenience
									only and the English version of Amazon.in,
									including our Conditions of Use, is the
									definitive version.
								</Typography>
								<DialogContentText>
									Additional Languages
								</DialogContentText>
								<Typography variant="body2">
									More languages are available from other
									Amazon websites.
								</Typography>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={handleClose} color="primary">
							Save
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
}

FooterModal.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterModal);
